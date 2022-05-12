import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";

const ContactForm = () => {
    const [inputs, setInputs] = useState({});
    const [success, setSuccess] = useState(false);

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

   const handleSubmit = (evt) => {

        let formBody = [];
        const query = inputs;
        for (const property in query) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(query[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody.push(`retURL=${encodeURIComponent(window.location.href)}`);
        formBody.push(`referrerUrl=${encodeURIComponent(window.location.href)}`);
        formBody = formBody.join("&");

        fetch('/.netlify/functions/sf-contact-form-post',
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                method: "POST",
                body: formBody,
            }).then((response) => {
                console.log(response);
                if(response.ok){
                    setSuccess(true);
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
        evt.preventDefault();
        return false
    }

    return(
        <form className="contact-form" onSubmit={handleSubmit}>
            {!success &&
                <div id="form-fields">
                    <div className="form-wrapper is-vertical">
                        <div className="field-column is-full-width">
                            <div className="field-row ">
                                <label for="first_name"></label><input id="first_name" className="contact-field lt-field"
                                                                       maxlength="40" value={inputs.first_name || ""}
                                                                       onChange={handleChange} name="first_name" type="text"
                                                                       placeholder="First Name" required/>
                                <label for="last_name"></label><input id="last_name" className="contact-field rt-field"
                                                                      maxlength="80" value={inputs.last_name || ""}
                                                                      onChange={handleChange} name="last_name" type="text"
                                                                      placeholder="Last Name" required/>
                            </div>
                            <div className="field-row ">
                                <label for="company"></label><input id="company" className="contact-field lt-field"
                                                                    maxlength="40" name="company"
                                                                    value={inputs.company || ""} onChange={handleChange}
                                                                    type="text" placeholder="Company" required/>

                                <label for="title"></label><input id="title" className="contact-field rt-field"
                                                                  maxlength="40" name="title" value={inputs.title || ""}
                                                                  onChange={handleChange} type="text" placeholder="Title"
                                                                  required/>
                            </div>
                            <div className="field-row ">
                                <label for="email"></label><input id="email" className="contact-field ct-field"
                                                                  maxlength="80" name="email" value={inputs.email || ""}
                                                                  onChange={handleChange} type="email" placeholder="Email"
                                                                  required/>
                            </div>
                        </div>
                        <div className="field-column is-full-width">
                            <textarea id="00N6f00000FmlhK" className="message-field" name="00N6f00000FmlhK" type="text"
                                      placeholder="How can we help?" wrap="soft" required
                                      value={inputs['00N6f00000FmlhK'] || ""} onChange={handleChange}></textarea>
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