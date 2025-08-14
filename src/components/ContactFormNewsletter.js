import React, { useState, useEffect, useRef } from 'react';
import Swal from "sweetalert2";
import URI from 'urijs';
import { getServerFunctionUrl } from '../utils/functionsUtils';
import useTurnstileCaptcha, { getErrorCodeToDescription } from './TurnstileCaptcha';

const NewsletterForm = () => {

    const [inputs, setInputs] = useState({});
    const [success, setSuccess] = useState(false);
    const widget = useRef(null);
    const { token, turnstileCaptchaFieldName } = useTurnstileCaptcha({ widget });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    useEffect(() => {
        setInputs(values => ({ ...values, [turnstileCaptchaFieldName]: token }))
    }, [token]);

    const handleSubmit = (evt) => {
        try
        {
            evt.target.disabled = true;
            evt.preventDefault();

            const uri = new URI();
            uri.addQuery("form-name", evt.target.getAttribute("name"));
            uri.addQuery(inputs);
            if (!uri.hasQuery(turnstileCaptchaFieldName)) {
                Swal.fire("Validation Error", 'Captcha solution is invalid!.', "warning");
                evt.target.disabled = false;
                return false;
            }

            const URL = getServerFunctionUrl('TurnstileCaptchaValidation');
            console.log("Submitting form with data:", uri.query(), URL);
            fetch(
                URL,
                {
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    method: "POST",
                    body: uri.query(),
                }).then(async (response) => {
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
                        } catch(error) {
                            console.error("Error parsing response:", error);
                            const text = await response.text();
                            Swal.fire("Validation Error", text || 'Invalid form submission', "warning");
                        }
                    } else if (response.status === 500) {
                        try {
                            const data = await response.json();
                            Swal.fire("Server Error", data.message || 'Internal server error', "error");
                        } catch(error) {
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
            evt.target.disabled = false;
        }
    }

    return (
        <form className="contact-form top-line"
            name="newsletter-contact"
            onSubmit={handleSubmit}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            {!success &&
                <>
                    <div className="home-v2-newsletter-form">
                        <input id="email" className="contact-field ct-field"
                            maxLength="80" name="email" value={inputs.email || ""}
                            onChange={handleChange} type="email" placeholder="Enter your email"
                            required />
                        <button className="contact-submit" type="submit" name="submit">Subscribe</button>
                    </div>
                    <div className="cf-turnstile is-fullwidth">
                        <div ref={widget} data-sitekey={process.env.GATSBY_TURNSTILE_SITE_KEY}></div>
                    </div>
                </>
            }
            {success &&
                <div className="home-v2-newsletter-form home-v2-newsletter-form-success">
                    <p>Success! You have been subscribed to the newsletter!</p>
                </div>
            }

        </form>
    )
}

export default NewsletterForm;