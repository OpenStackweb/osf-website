import React from "react";

export const checkUrlHorizontal = () => {
    let getUrl = window.location.href;
    var elementExists = document.getElementById("horizontal-contact-form");
    let querystring = "?form-submitted";
    let refUrl = document.getElementById('referrerUrl');
    let hide = document.getElementById('form-fields');
    let show = document.getElementById('confirmation-message');
    if (elementExists) {
        refUrl.value = getUrl;
        checkLevel();
        if (window.location.toString().indexOf(querystring) !== -1) {
          hide.style.display = "none";
          show.style.display = "flex";
        }
      }
}

export const checkLevel = () => {
    
}

class ContactFormHorizontal extends React.Component {
    constructor(props) {
        super(props);

        this.addQuerystring = this.addQuerystring.bind(this);
    }
    
    addQuerystring() {
        let getUrl = window.location.href;
        let querystring = "?form-submitted";
        let refUrl = document.getElementById('referrerUrl');
        let newUrl = getUrl + querystring;
        let returnUrl = document.getElementById('retURL');
        refUrl.value = newUrl;
        returnUrl.value = newUrl;
    }

    render() {

    return(
        <form id="horizontal-contact-form" className="contact-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
            <div id="form-fields" style={this.props.style}>
            <div className="form-wrapper is-horizontal">
                <input type="hidden" name="oid" value="00DG0000000lhAF" />
                <input id="retURL" type="hidden" name="retURL" value="" />
                <input type="hidden" id="referrerUrl" name="referrerUrl" value="" />
                {/*
                <!--  ----------------------------------------------------------------------  -->
                <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
                <!--  these lines if you wish to test in debug mode.                          -->
                <!--  <input type="hidden" name="debug" value=1>                              -->
                <!--  <input type="hidden" name="debugEmail" value="jimmy@openstack.org">     -->
                <!--  ----------------------------------------------------------------------  -->
                */}
                <div className="field-column is-full-width-lt">
                    <div className="field-row ">
                        <label htmlFor="first_name"></label><input id="first_name" className="contact-field lt-field" maxLength="40" name="first_name" type="text" placeholder="First Name" required/>
                        <label htmlFor="last_name"></label><input id="last_name" className="contact-field rt-field" maxLength="80" name="last_name"  type="text" placeholder="Last Name" required/>
                        </div>
                    <div className="field-row ">
                        <label htmlFor="company"></label><input id="company" className="contact-field lt-field" maxLength="40" name="company" type="text" placeholder="Company" required/>
                        
                        <label htmlFor="title"></label><input id="title" className="contact-field rt-field" maxLength="40" name="title" type="text" placeholder="Title" required/>
                    </div>
                    <div className="field-row ">
                        <label htmlFor="email"></label><input id="email" className="contact-field ct-field" maxLength="80" name="email" type="text" placeholder="Email" required/>
                    </div>
                </div>
                <div className="field-column is-full-width-rt">
                    <textarea id="00N6f00000FmlhK" className="message-field" name="00N6f00000FmlhK" type="text" placeholder="How can we help?" wrap="soft" required></textarea>
                    <button className="contact-submit" type="submit" name="submit" onClick={this.addQuerystring} >Submit</button>
                </div>
                </div>
            </div>
            <div id="confirmation-message">
                <div className="confirmation-text">Thank you for contacting the OpenInfra Foundation. Someone from the Foundation will follow up with you as soon as possible. If you’d like to set up a meeting directly with our business development team, go ahead and <a className="form-links" href="https://calendly.com/jimmy-mcarthur" target="_blank">grab some time on our calendar</a>.</div>
            </div>
        </form>
    )
    }
}

export default ContactFormHorizontal;