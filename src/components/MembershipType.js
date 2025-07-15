import React from 'react'
import PropTypes from "prop-types";
import legalDoc from '../content/legal-document.json';
import {MEMBERSHIP_TYPE_COMMUNITY, MEMBERSHIP_TYPE_FOUNDATION, MEMBERSHIP_TYPE_INDIVIDUAL, MEMBERSHIP_TYPE_NONE} from "../actions/user-actions";
import LinkComponent from './LinkComponent';
const legalDocContent = "<div><p>This OIF Individual Member Program (the “Program”) is maintained by the Governing Board of the OpenInfra Foundation (the “Foundation”), a directed fund of The Linux Foundation. Capitalized terms not otherwise defined in this Program have the meanings ascribed to them in the Charter of the Foundation.  This Program sets forth the requirements for participation in the Foundation as an OIF Individual Member.  This Program may be amended from time to time by the Governing Board and such amendments are effective upon publication on the Foundation’s web site.</p>\n" +
  "<p>1. <strong>Application.</strong> Natural persons who are eligible and wish to become OIF Individual Members shall apply via Foundation’s online enrollment application for OIF Individual Members and provide the information requested on that form. At a minimum, the application will include the name of the person, employer, their corporate affiliations, statement of interest in the purposes of the Foundation and contact information. After review of the application and execution of an OIF Individual Member Agreement by the applicant, the Executive Director or its designee may admit the person as an OIF Individual Member and the person will be added to the OIF Individual Member Registry. The effective date of a person becoming an OIF Individual Member will be the date on which the person is added to the OIF Individual Member Registry.</p>\n" +
  "<p>2. <strong>Resignation by OIF Individual Members.</strong> OIF Individual Members may resign by giving written notice to the Foundation. The effective date of termination of the OIF Individual Member shall be the date of removal from the OIF Individual Member Registry.</p>\n" +
  "<p>3. <strong>Termination of OIF Individual Members.</strong> The Foundation may terminate a person’s status as an OIF Individual Member by giving written notice by electronic mail to such person based on any of the following: (i) for violation of the OIF Individual Member Agreement if the violation is not cured within the period provided in the OIF Individual Member Agreement, (ii) for violation of the Community Code of Conduct, or (iii) for failure to vote in at least 50% of the votes for which such OIF Individual Member was entitled to vote within the prior twenty-four months, in each case unless the person responds within thirty (30) days after such notice of such termination is given that the person wishes to continue to be an OIF Individual Member. The effective date of termination of a person’s status as an OIF Individual Member will be the date of removal from the OIF Individual Member Registry.</p>\n" +
  "<p>4. <strong>OIF Individual Member Registry.</strong> The Foundation will publish the list of the names of the OIF Individual Members on its website.</p></div>";

const MembershipType = class extends React.Component {


    constructor(props) {
        super(props);
        this.onSelectMembershipType = this.onSelectMembershipType.bind(this);
    }

    onSelectMembershipType(event){
        let currentType = event.target.dataset.membershipType;
        this.props.onSelectMembershipType(currentType);
    }

    render() {
        let{initialType, currentType} = this.props;
        if(initialType === MEMBERSHIP_TYPE_COMMUNITY){
            return(<div className="membership-type-container">
                <div>You are logged in as <b>{this.props.userName}</b></div>
                <div>Current Member Level: <b>{this.props.currentType}</b></div>
            </div>);
        }
        if(initialType === MEMBERSHIP_TYPE_INDIVIDUAL){
            return(<div className="membership-type-container">
                <div>You are logged in as <b>{this.props.userName}</b></div>
                <div>Current Member Level: <b>{`OIF ${this.props.currentType} Member`}</b></div>
            </div>);
        }
        if(initialType === MEMBERSHIP_TYPE_FOUNDATION){
            return(<div className="membership-type-container">
                <div>You are logged in as <b>{this.props.userName}</b></div>
                <div>Current Member Level: <b>{this.props.currentType}</b>&nbsp;
                    <LinkComponent href="/a/renew-membership">(Reestablish Your Membership)</LinkComponent>
                    </div>
            </div>);
        }
        if(initialType === MEMBERSHIP_TYPE_NONE){
            return (
           <div className="membership-type-container">
               {currentType === MEMBERSHIP_TYPE_NONE &&
                   <p>** Please select a Membership Type</p>
               }
               <button className={'btn btn-select-membership-type'+(currentType === 'individual'?" active":"")} id="individual"
                       data-membership-type="individual"
                       onClick={this.onSelectMembershipType}>Make Me a OIF Individual Member</button>&nbsp;
               <button id="community"
               className={'btn btn-select-membership-type'+(currentType === 'community'?" active":"")}
               data-membership-type="community"
               onClick={this.onSelectMembershipType}>Make me a Community Member</button>
               {currentType === 'individual' &&
               <h2>OIF Individual Member Program Terms</h2>
               }
               {currentType === 'individual' &&
                   <div className="legal_doc_content" dangerouslySetInnerHTML={{ __html: legalDocContent }}>
                   </div>
               }
               {currentType === 'community' &&
                   <h2>Complete the Community Member Application</h2>
               }
            </div>);
        }
        return null;
    }
}

MembershipType.propTypes = {
    currentType: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    handleResign:PropTypes.func.isRequired,
    handleConvertFoundationMember: PropTypes.func.isRequired,
    handleConvertCommunityMember: PropTypes.func.isRequired,
    onSelectMembershipType:PropTypes.func.isRequired,
}

export default MembershipType
