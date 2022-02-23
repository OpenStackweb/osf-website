import React from 'react'
import PropTypes from "prop-types";
import legalDoc from '../content/legal-document.json';
import {MEMBERSHIP_TYPE_COMMUNITY, MEMBERSHIP_TYPE_FOUNDATION, MEMBERSHIP_TYPE_NONE} from "../actions/user-actions";

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
        let{initialType, currentType, handleResign, handleConvertFoundationMember, handleConvertCommunityMember} = this.props;
        if(initialType === MEMBERSHIP_TYPE_COMMUNITY){
            return(<div className="membership-type-container">
                <div>You are logged in as <b>{this.props.userName}</b></div>
                <div>Current Member Level: <b>{this.props.currentType}</b></div>
                <button id="resign" onClick={handleResign}>Resign Membership</button>&nbsp;<button id="foundation" onClick={handleConvertFoundationMember}>Make Me a Foundation Member</button>
            </div>);
        }
        if(initialType === MEMBERSHIP_TYPE_FOUNDATION){
            return(<div className="membership-type-container">
                <div>You are logged in as <b>{this.props.userName}</b></div>
                <div>Current Member Level: <b>{this.props.currentType}</b></div>
                <button id="resign" onClick={handleResign}>Resign Membership</button>&nbsp;<button id="community" onClick={handleConvertCommunityMember}>Change to Community Member</button>
            </div>);
        }
        if(initialType === MEMBERSHIP_TYPE_NONE){
            return (
           <div className="membership-type-container">
               {currentType === MEMBERSHIP_TYPE_NONE &&
                   <p>** Please select a Membership Type</p>
               }
               <button className={'btn btn-select-membership-type'+(currentType === 'foundation'?" active":"")} id="foundation"
                       data-membership-type="foundation"
                       onClick={this.onSelectMembershipType}>Make Me a Foundation Member</button>&nbsp;
               <button id="community"
               className={'btn btn-select-membership-type'+(currentType === 'community'?" active":"")}
               data-membership-type="community"
               onClick={this.onSelectMembershipType}>Make Me a Community Member</button>
               {currentType === 'foundation' &&
               <h2>Read Over the terms off becoming an Open Infrastructure Foundation Individual Member</h2>
               }
               {currentType === 'foundation' &&
                   <div className="legal_doc_content" dangerouslySetInnerHTML={{ __html: legalDoc.content }}>
                   </div>
               }
               {currentType === 'community' &&
                   <h2>Complete the Individual Member Application</h2>
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