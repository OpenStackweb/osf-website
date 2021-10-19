import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import MembershipType from "../components/MembershipType";
import ProfileForm from "../components/ProfileForm"
import Affiliations from "../components/Affiliations";
import CandidateProfile from "../components/CandidateProfile"
import URI from "urijs";
import { MEMBERSHIP_TYPE_NONE, MEMBERSHIP_TYPE_FOUNDATION } from "../actions/user-actions";
import 'openstack-uicore-foundation/lib/css/components.css';
import { addAffiliation, saveAffiliation, deleteAffiliation, addOrganization, updateMembershipType } from "../actions/user-actions"
import { getMemberProfile, getElectionMemberProfile } from '../actions/member-actions';
import { getElectionStatus, updateCandidateProfile } from "../actions/election-actions";

export const ProfilePageTemplate = ({
    currentMember,
    initialMembershipType,
    currentAffiliations,
    idpProfile,
    isLoggedUser,
    location,
    updateMembershipType,
    updateCandidateProfile,
    electionStatus,
    electionProfile
}) => {

    let query = URI.parseQuery(location.search);

    let initialCurrentMemberShipType = initialMembershipType;

    if (query.hasOwnProperty("membership_type") && initialMembershipType === MEMBERSHIP_TYPE_NONE) {
        initialCurrentMemberShipType = query["membership_type"];
    }

    const [currentMembershipType, setCurrentMembershipType] = useState(initialCurrentMemberShipType);
    const [validationError, setValidationError] = useState(null);

    const handleConvertCommunityMember = () => {
        navigate('/a/profile/membership/community')
    };

    const handleConvertFoundationMember = () => {
        navigate('/a/profile/membership/foundation')
    }

    const handleResign = () => {
        navigate('/a/profile/membership/resign')
    }

    const onSelectMembershipType = (type) => {
        console.log(`selected type ${type}`);
        setCurrentMembershipType(type);
    }

    const onSubmitApplication = () => {
        if (currentAffiliations.length === 0) {
            setValidationError('* You need at least one affiliation');
            return;
        }
        setValidationError(null);
        updateMembershipType(currentMembershipType);
    }

    const onCandidateApplicationSubmit = (application) => {
        console.log('application to save', application);
        updateCandidateProfile(application);
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <Header title="Profile" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <MembershipType currentType={currentMembershipType}
                                        userName={`${idpProfile.given_name} ${idpProfile.family_name}`}
                                        initialType={initialMembershipType}
                                        handleConvertCommunityMember={() => handleConvertCommunityMember()}
                                        handleConvertFoundationMember={() => handleConvertFoundationMember()}
                                        handleResign={() => handleResign()}
                                        onSelectMembershipType={(type) => onSelectMembershipType(type)}
                                    />
                                    {electionStatus?.status === "NominationsOpen" &&
                                        <>
                                            <hr />
                                            <CandidateProfile electionStatus={electionStatus} electionProfile={electionProfile} saveCandidateProfile={onCandidateApplicationSubmit} />
                                        </>
                                    }
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE &&
                                        <React.Fragment>
                                            <hr />
                                            <ProfileForm idpProfile={idpProfile} memberProfile={currentMember} />
                                        </React.Fragment>
                                    }
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE &&
                                        <React.Fragment>
                                            <hr />
                                            <Affiliations affiliations={currentAffiliations} ownerId={currentMember.id} />
                                        </React.Fragment>
                                    }
                                    {validationError &&
                                        <p className="validation_error">{validationError}</p>
                                    }
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE && initialMembershipType === MEMBERSHIP_TYPE_NONE &&
                                        <button role="button" className="btn" onClick={() => onSubmitApplication()}>Submit my Application</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ProfilePage = ({
    currentMember,
    initialMembershipType,
    currentAffiliations,
    idpProfile,
    isLoggedUser,
    location,
    updateMembershipType,
    electionStatus,
    electionProfile,
    updateCandidateProfile
}) => {

    const nomination_open = electionStatus?.status === 'NominationsOpen' ? true : false;

    useEffect(() => {
        getMemberProfile(currentMember.id);
        getElectionStatus();
    }, [])

    useEffect(() => {
        if (nomination_open) {
            getElectionMemberProfile(currentMember.id);
        }
    }, [electionStatus])

    return (
        <Layout>
            <SEO />
            <ProfilePageTemplate
                currentMember={currentMember}
                initialMembershipType={initialMembershipType}
                currentAffiliations={currentAffiliations}
                idpProfile={idpProfile}
                location={location}
                isLoggedUser={isLoggedUser}
                updateMembershipType={updateMembershipType}
                electionStatus={electionStatus}
                electionProfile={electionProfile}
                updateCandidateProfile={updateCandidateProfile}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    currentMember: state.loggedUserState.member,
    initialMembershipType: state.userState.currentMembershipType,
    currentAffiliations: state.userState.currentAffiliations,
    electionProfile: state.memberState.member_profile,
    electionStatus: state.electionState.election_status,
    idpProfile: state.userState.idpProfile,
}),
    {
        addAffiliation,
        saveAffiliation,
        deleteAffiliation,
        addOrganization,
        updateMembershipType,
        updateCandidateProfile,
        getMemberProfile,
        getElectionStatus
    })(ProfilePage)