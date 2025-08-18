import React from "react";
import useTurnstileCaptcha from './TurnstileCaptcha';

const NewsletterForm = () => {

    const { widget, success, inputs, handleSubmit, handleChange, isSending } = useTurnstileCaptcha();

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
                        <button className="contact-submit" type="submit" name="submit" disabled={isSending}>Subscribe</button>
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