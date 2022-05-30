import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'openstack-uicore-foundation/lib/components'
import Swal from "sweetalert2";
import { WidgetInstance } from 'friendly-challenge';
import { getEnvVariable, FRIENDLY_CAPTCHA_SITE_KEY } from '../utils/envVariables'
import URI from 'urijs';

const ProjectsContactForm = ({ privacyPolicyAgreement, successMessage, platinumMembers }) => {

    const friendlyCaptchaFieldName = 'frc-captcha-solution';
    const [inputs, setInputs] = useState({});
    const [success, setSuccess] = useState(false);
    const container = useRef();
    const widget = useRef();

    const [platinumDropdown, setPlatinumDropdown] = useState([])

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

    useEffect(() => {
        const formattedMembers = platinumMembers?.map(p => {
            return { label: p.name, value: p.name }
        });
        const customOptions = [
            {label: 'We are interested in becoming a Platinum member', value: 'We are interested in becoming a Platinum member'},
            {label: 'There are not yet any Platinum members involved ', value: 'There are not yet any Platinum members involved '},
        ]
        if (formattedMembers) setPlatinumDropdown([...formattedMembers, ...customOptions]);
    }, [platinumMembers])

    const handleDropdownChange = (ev) => {
        setInputs({ ...inputs, project_platinum_member: ev.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const uri = new URI();
        uri.addQuery("form-name", evt.target.getAttribute("name"));
        uri.addQuery(inputs);
        if (!uri.hasQuery(friendlyCaptchaFieldName)) {
            Swal.fire("Validation Error", 'Captcha solution is invalid!.', "warning");
            return false;
        }

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
            name="projects-contact"
            onSubmit={handleSubmit}
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            {!success &&
                <div id="form-fields">
                    <div className="form-wrapper is-vertical" style={{ paddingTop: 0 }}>
                        <div className="field-column is-full-width">
                            <span className="form-title">Contact Info</span>
                        </div>
                        <div className="field-column is-full-width">
                            <p hidden>
                                <input type="hidden" name="form-name" value="projects-contact" />
                                <label className="field-label">Name</label>
                                <input className="contact-field lt-field"
                                    maxLength="40" value={inputs.bot_field || ""}
                                    onChange={handleChange} name="bot-field" type="text"
                                    placeholder="First Name" />
                            </p>
                            <div className="field-row">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="name">Name</label>
                                    <div className="field-row">
                                        <label htmlFor="first_name"></label><input id="first_name" className="contact-field lt-field"
                                            maxLength="40" value={inputs.first_name || ""}
                                            onChange={handleChange} name="first_name" type="text"
                                            placeholder="First Name" required />
                                        <label htmlFor="last_name"></label><input id="last_name" className="contact-field rt-field"
                                            maxLength="80" value={inputs.last_name || ""}
                                            onChange={handleChange} name="last_name" type="text"
                                            placeholder="Last Name" required />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="email">Email</label>
                                    <div className="field-row">
                                        <label htmlFor="email"></label><input id="email" className="contact-field ct-field"
                                            maxLength="80" name="email" value={inputs.email || ""}
                                            onChange={handleChange} type="email" placeholder="Email"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="company">Company</label>
                                    <div className="field-row">
                                        <label htmlFor="company"></label><input id="company" className="contact-field ct-field"
                                            maxLength="40" name="company"
                                            value={inputs.company || ""} onChange={handleChange}
                                            type="text" placeholder="Company" required />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="title">Title</label>
                                    <div className="field-row">
                                        <label htmlFor="title"></label><input id="title" className="contact-field ct-field"
                                            maxLength="40" name="title" value={inputs.title || ""}
                                            onChange={handleChange} type="text" placeholder="Title"
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="phone">Phone</label>
                                    <div className="field-row">
                                        <label htmlFor="phone"></label><input id="phone" className="contact-field ct-field"
                                            maxLength="40" name="phone" value={inputs.phone || ""}
                                            onChange={handleChange} type="text" placeholder="Phone Number"
                                            required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field-column is-full-width">
                            <span className="form-title">Project Info</span>
                        </div>
                        <div className="field-column is-full-width">
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="project_name">Project Name</label>
                                    <div className="field-row">
                                        <label htmlFor="project_name"></label><input id="project_name" className="contact-field ct-field"
                                            maxLength="80" name="project_name" value={inputs.project_name || ""}
                                            onChange={handleChange} type="text" placeholder="Project Name (if applicable)"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="project_location">
                                        Is the project currently hosted in a public repository? If so, where is the repo located?
                                    </label>
                                    <div className="field-row">
                                        <label htmlFor="project_location"></label><input id="project_location" className="contact-field ct-field"
                                            maxLength="80" name="project_location" value={inputs.project_location || ""}
                                            onChange={handleChange} type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="project_license">
                                        What is the open source license of the project?
                                    </label>
                                    <div className="field-row">
                                        <label htmlFor="project_license"></label><input id="project_license" className="contact-field ct-field"
                                            maxLength="80" name="project_license" value={inputs.project_license || ""}
                                            onChange={handleChange} type="text" placeholder=""
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="project_contributors">
                                        How many contributors are currently involved in the project?
                                    </label>
                                    <div className="field-row">
                                        <label htmlFor="project_contributors"></label><input id="project_contributors" className="contact-field ct-field"
                                            maxLength="80" name="project_contributors" value={inputs.project_contributors || ""}
                                            onChange={handleChange} type="text" placeholder=""
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="project_organizations">
                                        List the organizations that are currently/potentially involved in this project
                                    </label>
                                    <div className="field-row">
                                        <label htmlFor="project_organizations"></label><input id="project_organizations" className="contact-field ct-field"
                                            maxLength="80" name="project_organizations" value={inputs.project_organizations || ""}
                                            onChange={handleChange} type="text" placeholder=""
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="project_platinum_member">
                                        Which OpenInfra Foundation Platinum member is involved in this project?
                                    </label>
                                    <div className="field-row-dropdown">
                                        {platinumDropdown.length > 0 &&
                                            <Dropdown
                                                className="contact-field-dropdown"
                                                name="project_platinum_member"
                                                isMulti
                                                value={inputs.project_platinum_member || []}
                                                options={platinumDropdown}
                                                onChange={handleDropdownChange} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="field-row ">
                                <div className="field-column is-full-width">
                                    <label className="field-label" htmlFor="project_commentary">
                                        Anything else we should know about the project, community, or participating organizations?
                                    </label>
                                    <div className="field-row">
                                        <label htmlFor="project_commentary"></label><textarea id="project_commentary" className="contact-field ct-field message-field"
                                            maxLength="400" name="project_commentary" value={inputs.project_commentary || ""}
                                            onChange={handleChange} type="text" placeholder="" wrap="soft" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field-column is-full-width">
                            <div className="field-column is-full-width">
                                <div ref={container} className="frc-captcha" data-sitekey={getEnvVariable(FRIENDLY_CAPTCHA_SITE_KEY)} />
                            </div>
                            <span className='form-agree' dangerouslySetInnerHTML={{ __html: privacyPolicyAgreement }} />
                            <button className="contact-submit" type="submit" name="submit">SUBMIT</button>
                        </div>

                    </div>
                </div>
            }
            {success &&
                <div id="confirmation-message">
                    <div className="confirmation-text" dangerouslySetInnerHTML={{ __html: successMessage }} />
                </div>
            }

        </form>
    )
}

export default ProjectsContactForm;