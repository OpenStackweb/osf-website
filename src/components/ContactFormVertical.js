import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.addQuerystring = this.addQuerystring.bind(this);
        this.selectMemberLevel = this.selectMemberLevel.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
     }

    componentWillUnmount() { 
        window.removeEventListener('load', this.handleLoad)  
      }

    selectMemberLevel() {
        let getUrl = window.location.href;
        let level = "?level";
        let newUrl = getUrl + level;
        let refUrl = document.getElementById('referrerUrl');
        refUrl.value = newUrl;
        alert(document.getElementById('referrerUrl').value);
    }
    
    addQuerystring() {
        let getUrl = window.location.href;
        let querystring = "?form-submitted";
        let newUrl = getUrl + querystring;
        let returnUrl = document.getElementById('retURL');
        returnUrl.value = newUrl;
    }

    checkForm() {
        this.addQuerystring();
        let querystring = "?form-submitted";
        let hide = document.getElementById('form-fields');
        let show = document.getElementById('confirmation-message');
        if (window.location.toString().indexOf(querystring) !== -1) {
            hide.style.display = "none";
            show.style.display = "flex";
        }
    }

    handleLoad() {
        this.checkForm();
    }

    render() {

    return(
        <form className="contact-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
            <div id="form-fields">
            <div className="form-wrapper is-vertical">
                <input type="hidden" name="oid" value="00DG0000000lhAF" />
                <input onload={this.checkForm} id="retURL" type="hidden" name="retURL" value="" />
                <input type="hidden" id="referrerUrl" name="referrerUrl" value="" />
                {/*
                <!--  ----------------------------------------------------------------------  -->
                <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
                <!--  these lines if you wish to test in debug mode.                          -->
                <!--  <input type="hidden" name="debug" value=1>                              -->
                <!--  <input type="hidden" name="debugEmail" value="jimmy@openstack.org">     -->
                <!--  ----------------------------------------------------------------------  -->
                */}
                <div className="field-column is-full-width">
                    <div className="field-row ">
                        <label for="first_name"></label><input  id="first_name" className="contact-field lt-field" maxlength="40" name="first_name" type="text" placeholder="First Name" required/>
                        <label for="last_name"></label><input  id="last_name" className="contact-field rt-field" maxlength="80" name="last_name"  type="text" placeholder="Last Name" required/>
                        </div>
                    <div className="field-row ">
                        <label for="company"></label><input id="company" className="contact-field lt-field" maxlength="40" name="company" type="text" placeholder="Company" required/>
                        
                        <label for="title"></label><input  id="title" className="contact-field rt-field" maxlength="40" name="title" type="text" placeholder="Title" required/>
                    </div>
                    <div className="field-row ">
                        <label for="email"></label><input id="email" className="contact-field ct-field" maxlength="80" name="email" type="text"placeholder="Email" required/>
                    </div>
                </div>
                <div className="field-column is-full-width">
                    <textarea id="00N6f00000FmlhK" className="message-field" name="00N6f00000FmlhK" type="text" placeholder="How can we help?" wrap="soft" required></textarea>
                    <button className="contact-submit" type="submit" name="submit" onClick={this.checkForm} >SUBMIT</button>
                </div>
                </div>
            </div>
            <div id="confirmation-message">
                <div className="confirmation-text">Thank you for contacting the Open Infrastructure Foundation. Someone from the Foundation will follow up with you as soon as possible. If you’d like to set up a meeting directly with our business development team, go ahead and <a className="form-links" href="https://calendly.com/jimmy-mcarthur" target="_blank">grab some time on our calendar</a>.</div>
            </div>
        </form>
    )
    }
}

export default ContactForm;