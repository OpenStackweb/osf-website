import React, { useState, useEffect, useRef } from 'react';
import Swal from "sweetalert2";
import { WidgetInstance } from 'friendly-challenge';
import URI from 'urijs';

const NewsletterForm = () => {

    const friendlyCaptchaFieldName = 'frc-captcha-solution';
    const [inputs, setInputs] = useState({});
    const [success, setSuccess] = useState(false);
    const container = useRef();
    const widget = useRef();

    const doneCallback = (solution) => {
        setInputs(values => ({ ...values, [friendlyCaptchaFieldName]: solution }))
    }

    const errorCallback = (err) => {
        Swal.fire("Validation Error", `Captcha solution is invalid!. ${err}`, "warning");
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

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
        uri.addQuery("form-name", evt.target.getAttribute("name"));
        uri.addQuery(inputs);

        fetch('/',
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                method: "POST",
                body: uri.query(),
            }).then((response) => {
                if (response.ok) {
                    setSuccess(true);
                    return;
                }
                if (response.status === 412) {
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

    return (
        <form className="contact-form top-line"
            name="newsletter-contact"
            onSubmit={handleSubmit}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            {!success &&
        //     <div className="home-v2-newsletter-form">
        //     <input type="text" placeholder="Enter your email"></input>
        //     <button type="Submit">Subscribe</button>
        // </div>
                <div className="home-v2-newsletter-form">
                    <input id="email" className="contact-field ct-field"
                        maxLength="80" name="email" value={inputs.email || ""}
                        onChange={handleChange} type="email" placeholder="Enter your email"
                        required />
                    <button className="contact-submit" type="submit" name="submit">Subscribe</button>
                </div>
            }
            {success &&
                <div id="home-v2-newsletter-form">
                    <p>Success! You are subscribed!</p>
                </div>
            }

        </form>
    )
}

export default NewsletterForm;