
import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import URI from 'urijs';
import { getServerFunctionUrl } from '../utils/functionsUtils';

/*
 * Turnstile Captcha Hook
 * A custom React hook to integrate Cloudflare Turnstile Captcha
 */
const siteKey = `${process.env.GATSBY_TURNSTILE_SITE_KEY}`;
const useTurnstileCaptcha = () => {
  const widget = useRef(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSending, setSending] = useState(false);

  const turnstileCaptchaFieldName = 'cf-turnstile-response';

  useEffect(() => {
    if (window?.turnstile && widget?.current && !loading) {
      setLoading(true);
      window.turnstile.render(widget.current, {
        sitekey: siteKey,
        callback: setToken,
      });
    }
  }, [window?.turnstile, widget?.current]);


  useEffect(() => {
    setInputs(values => ({ ...values, [turnstileCaptchaFieldName]: token }))
  }, [token]);

  const handleSubmit = (evt) => {
    try {
      evt.preventDefault();

      const uri = new URI();
      uri.addQuery("form-name", evt.target.getAttribute("name"));
      uri.addQuery(inputs);
      if (!uri.hasQuery(turnstileCaptchaFieldName)) {
        Swal.fire("Validation Error", 'Captcha solution is invalid!.', "warning");
        return false;
      }

      const URL = getServerFunctionUrl('TurnstileCaptchaValidation');
      console.log("Submitting form with data:", uri.query(), URL);
      setSending(true);
      fetch(
        URL,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "POST",
          body: uri.query(),
        }).then(async (response) => {
          setSending(false);
          if (response.ok) {
            Swal.fire("Form submitted successfully", '', "success");
            setSuccess(true);
            return;
          }

          // Handle different error types
          if (response.status === 412) {
            const data = await response.json();
            Swal.fire("Validation Error", getErrorCodeToDescription(data['error-codes'][0] ?? null), "warning");
          } else if (response.status === 400) {
            try {
              const data = await response.json();
              Swal.fire("Validation Error", (data['error-codes'][0] ?? false) ? getErrorCodeToDescription(data['error-codes'][0]) : 'Invalid form submission', "warning");
            } catch (error) {
              console.error("Error parsing response:", error);
              const text = await response.text();
              Swal.fire("Validation Error", text || 'Invalid form submission', "warning");
            }
          } else if (response.status === 500) {
            try {
              const data = await response.json();
              Swal.fire("Server Error", data.message || 'Internal server error', "error");
            } catch (error) {
              console.error("Error parsing response:", error);
              Swal.fire("Server Error", 'Internal server error', "error");
            }
          } else {
            const text = await response.text();
            console.error("Unexpected response code:", response.status);
            Swal.fire("Error", text || 'Something went wrong', "warning");
          }
          setSuccess(false);
        }).catch(e => {
          setSuccess(false);
          console.error("Error submitting form:", e);
          Swal.fire("Error", 'Oops! Something went wrong.', "warning");
        });

      return false
    }
    catch (e) {
      setSuccess(false);
      console.error("Error submitting form", e);
      Swal.fire("Error", "Oops! Something went wrong.", "warning");
      return false;
    }
    finally {
      setSending(false)
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = ["checkbox", "radio"].includes(event.target.type) ? event.target.checked : event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  return { token, siteKey, turnstileCaptchaFieldName, widget, success, setSuccess, inputs, setInputs, isSending, handleSubmit, handleChange };
};

export { useTurnstileCaptcha, useTurnstileCaptcha as default };

/**
 *
 * Table:
 *      Error code	            Description		       	       	            Action required
 *      missing-input-secret	  Secret parameter not provided		          Ensure secret key is included
 *      invalid-input-secret	  Secret key is invalid or expired	        Check your secret key in the Cloudflare dashboard
 *      missing-input-response	Response parameter was not provided       Ensure token is included
 *      invalid-input-response	Token is invalid, malformed, or expired	  User should retry the challenge
 *      bad-request	            Request is malformed	                    Check request format and parameters
 *      timeout-or-duplicate	  Token has already been validated	        Each token can only be used once
 *      internal-error	        Internal error occurred	Retry the request
 *
 * @param {string} errorCode
 * @returns string The code description.
 *
 **/
export const getErrorCodeToDescription = (errorCode) => {

  switch (errorCode) {
    case 'missing-input-secret': return 'Secret parameter not provided';
    case 'invalid-input-secret': return 'Secret key is invalid or expired';
    case 'missing-input-response': return 'Response parameter was not provided';
    case 'invalid-input-response': return 'Token is invalid, malformed, or expired';
    case 'bad-request': return 'Request is malformed';
    case 'timeout-or-duplicate': return 'Token has already been validated';
    case 'internal-error': return 'Cloudflare Internal error occurred';
  }
  return 'Unspecified error occurred';
};
