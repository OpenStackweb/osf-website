import React from 'react'
import PropTypes from "prop-types";

const ProfileForm = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="profile_form">
                <p className="info"><strong>If you're an active developer on the OpenStack project, please list any
                    email addresses you use to commit code.</strong> (This will really help us avoid duplicates!) If you
                    contributed code ONLY using gerrit, all email addresses you used will be listed on the <a
                        href="https://review.openstack.org/#/settings/web-identities" target="_blank">web identities
                        page</a>. If you have contributed also <em>before</em> gerrit was put in place, please make an
                    effort to remember other email addresses you may have used. Interested in how to <a
                        href="http://wiki.openstack.org/HowToContribute" target="_blank">become a contributor</a>?</p>
                <div className="field">
                    <label className="label">Primary Email Address</label>
                    <div className="control">
                        {this.props.idpProfile.email}
                    </div>
                    <p className="info warning">This email address is also the account name you use to login.</p>
                </div>
                <div className="field">
                    <label className="label">Second Email Address</label>
                    <div className="control">
                        {this.props.idpProfile.second_email}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Third Email Address</label>
                    <div className="control">
                        {this.props.idpProfile.third_email}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Member ID</label>
                    <div className="control">
                        {this.props.memberProfile.id}
                    </div>
                </div>
                <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                        {this.props.idpProfile.given_name}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                        {this.props.idpProfile.family_name}
                    </div>
                </div>
                <p>** Edit this info at <a href={`${window.IDP_BASE_URL}/accounts/user/profile`} target="_top">
                    {`${window.IDP_BASE_URL}/accounts/user/profile`}</a>
                </p>
            </div>
        );
    }
}


ProfileForm.propTypes = {
    idpProfile: PropTypes.object.isRequired,
    memberProfile: PropTypes.object.isRequired,
}

export default ProfileForm