import React, { useState, useEffect, useRef } from 'react';
import Swal from "sweetalert2";
import { WidgetInstance } from 'friendly-challenge';
import {getServerFunctionUrl} from '../utils/functionsUtils';
import {getEnvVariable, FRIENDLY_CAPTCHA_SITE_KEY} from '../utils/envVariables'
import URI from 'urijs';

const ContactForm = () => {

    const friendlyCaptchaFieldName = 'frc-captcha-solution';
    const [inputs, setInputs] = useState({});
    const [success, setSuccess] = useState(false);
    const container = useRef();
    const widget = useRef();

    const doneCallback = (solution) => {
        setInputs( values => ({...values, [friendlyCaptchaFieldName] : solution}))
    }

    const errorCallback = (err) => {
        Swal.fire("Validation Error", `Captcha solution is invalid!. ${err}`, "warning");
    }

    const checkLevel = () => {
        let value = '';
        if (window.location.toString().indexOf("?silver") !== -1) {
            value = "Hello, I am interested in the Silver Membership level.";
        } else if (window.location.toString().indexOf("?gold") !== -1) {
            value = "Hello, I am interested in the Gold Membership level.";
        } else if (window.location.toString().indexOf("?platinum") !== -1) {
            value = "Hello, I am interested in the Platinum Membership level.";
        }
        setInputs(values => ({...values, ['00N6f00000FmlhK']: value}))
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
        if (!widget.current && container.current) {
            widget.current = new WidgetInstance(container.current, {
                startMode: "auto",
                doneCallback: doneCallback,
                errorCallback: errorCallback
            });
        }

        return () => {
            if (widget.current !== undefined) widget.current.destroy();
        }
    }, [container]);

   const handleSubmit = (evt) => {
        evt.preventDefault();
        const uri = new URI();
        uri.addQuery(inputs);
        if(!uri.hasQuery(friendlyCaptchaFieldName)){
           Swal.fire("Validation Error", 'Captcha solution is invalid!.', "warning");
           return false;
        }
        uri.addQuery('retURL', window.location.href);
        uri.addQuery('referrerUrl', window.location.href);

        fetch(getServerFunctionUrl('sf-contact-form-post'),
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                method: "POST",
                body: uri.query(),
            }).then((response) => {
                console.log(response);
                if(response.ok){
                    setSuccess(true);
                    return;
                }
                if(response.status === 412){
                    response.text().then(function (text) {
                        Swal.fire("Validation Error", text, "warning");
                    });
                }
                setSuccess(false);
            }).catch(e => {
                setSuccess(false);
                console.log(e);
                Swal.fire("Error", 'Oops! Something went wrong.', "warning");
            });

        return false
    }

    return(
        <form className="contact-form" onSubmit={handleSubmit}>
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
                            <textarea id="00N6f00000FmlhK" className="message-field" name="00N6f00000FmlhK" type="text"
                                      placeholder="How can we help?" wrap="soft" required
                                      value={inputs['00N6f00000FmlhK'] || ""} onChange={handleChange}></textarea>
                            <div className="field-column is-full-width">
                                <div ref={container} className="frc-captcha" data-sitekey={getEnvVariable(FRIENDLY_CAPTCHA_SITE_KEY)} />
                            </div>
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

export default ContactForm;