import React, { useState, useEffect, useRef } from 'react';
import Swal from "sweetalert2";
import URI from 'urijs';
import {getServerFunctionUrl} from '../utils/functionsUtils';
import useTurnstileCaptcha, { getErrorCodeToDescription } from './TurnstileCaptcha';

const ContactFormVertical = () => {

    const turnstileCaptchaFieldName = 'cf-turnstile-response';
    const [inputs, setInputs] = useState({});
    const [success, setSuccess] = useState(false);
    const widget = useRef(null);
    const { token } = useTurnstileCaptcha({ widget });

    const checkLevel = () => {
        let value = '';
        if (window.location.toString().indexOf("?silver") !== -1) {
            value = "Hello, I am interested in the Silver Membership level.";
        } else if (window.location.toString().indexOf("?gold") !== -1) {
            value = "Hello, I am interested in the Gold Membership level.";
        } else if (window.location.toString().indexOf("?platinum") !== -1) {
            value = "Hello, I am interested in the Platinum Membership level.";
        }
        setInputs(values => ({...values, membership_interest: value}))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    useEffect(() => {
        checkLevel()
    },[]);

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
        <form className="contact-form"
            name="contact"
            onSubmit={handleSubmit}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            {!success &&
                <div id="form-fields">
                    <div className="form-wrapper is-vertical">
                        <div className="field-column is-full-width">
                            <div className="field-row ">
                                <label htmlFor="first_name"></label><input id="first_name" className="contact-field lt-field"
                                                                       maxLength="40" value={inputs.first_name || ""}
                                                                       onChange={handleChange} name="first_name" type="text"
                                                                       placeholder="First Name" required/>
                                <label htmlFor="last_name"></label><input id="last_name" className="contact-field rt-field"
                                                                      maxLength="80" value={inputs.last_name || ""}
                                                                      onChange={handleChange} name="last_name" type="text"
                                                                      placeholder="Last Name" required/>
                            </div>
                            <div className="field-row ">
                                <label htmlFor="company"></label><input id="company" className="contact-field lt-field"
                                                                    maxLength="40" name="company"
                                                                    value={inputs.company || ""} onChange={handleChange}
                                                                    type="text" placeholder="Company" required/>

                                <label htmlFor="title"></label><input id="title" className="contact-field rt-field"
                                                                  maxLength="40" name="title" value={inputs.title || ""}
                                                                  onChange={handleChange} type="text" placeholder="Title"
                                                                  required/>
                            </div>
                            <div className="field-row ">
                                <label htmlFor="email"></label><input id="email" className="contact-field ct-field"
                                                                  maxLength="80" name="email" value={inputs.email || ""}
                                                                  onChange={handleChange} type="email" placeholder="Email"
                                                                  required/>
                            </div>

                        </div>
                        <div className="field-column is-full-width">
                            <textarea id="membership_interest" className="message-field" name="membership_interest" type="text"
                                      placeholder="How can we help?" wrap="soft" required
                                      value={inputs['membership_interest'] || ""} onChange={handleChange}></textarea>
                        </div>
                        <div className="field-column is-full-width mt-3">
                            <div ref={widget} data-sitekey={process.env.GATSBY_TURNSTILE_SITE_KEY}></div>
                        </div>
                        <div className="field-column is-full-width">|
                            <button className="contact-submit" type="submit" name="submit">SUBMIT</button>
                        </div>

                    </div>
                </div>
            }
            {success &&
                <div id="confirmation-message">
                    <div className="confirmation-text">Thank you for contacting the Open Infrastructure Foundation. Someone
                        from the Foundation will follow up with you as soon as possible. If you’d like to set up a meeting
                        directly with our business development team, go ahead and <a className="form-links"
                                                                                     href="https://calendly.com/jimmy-mcarthur"
                                                                                     target="_blank">grab some time on our
                            calendar</a>.
                    </div>
                </div>
            }

        </form>
    )
}

export default ContactFormVertical;