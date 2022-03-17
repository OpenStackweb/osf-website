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
import { MEMBERSHIP_TYPE_NONE } from "../actions/user-actions";
import 'openstack-uicore-foundation/lib/css/components.css';
import {
    addAffiliation,
    saveAffiliation,
    deleteAffiliation,
    addOrganization,
    updateMembershipType,
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    updatePassword,
    getUserProfile
} from "../actions/user-actions"
import { getMemberProfile, getElectionMemberProfile } from '../actions/member-actions';
import { getElectionStatus } from "../actions/election-actions";
import {
    updateUserInfo
} from "openstack-uicore-foundation/lib/methods";
import { ProfileManagement } from "../components/ProfileManagementComponent";

export const ProfilePageTemplate = ({
    currentMember,
    initialMembershipType,
    currentAffiliations,
    idpProfile,
    isLoggedUser,
    location,
    updateMembershipType,
    electionStatus,
    user,
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    updatePassword,
    getUserProfile,
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
                                            <CandidateProfile electionStatus={electionStatus} electionProfile={currentMember} />
                                        </>
                                    }
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE &&
                                        <React.Fragment>
                                            <hr />                                            
                                            <ProfileManagement
                                                user={user}
                                                updateProfilePicture={updateProfilePicture}
                                                updateIDPProfile={updateIDPProfile}
                                                updateProfile={updateProfile}
                                                getIDPProfile={getIDPProfile}
                                                updatePassword={updatePassword}
                                                getUserProfile={getUserProfile} />
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
    getElectionMemberProfile,
    getElectionStatus,
    electionStatus,
    updateUserInfo,
    user,
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    updatePassword,
    getUserProfile,
}) => {

    useEffect(() => {
        getElectionStatus();
        if (currentMember?.id) {
            getElectionMemberProfile
                (
                    currentMember?.id,
                    'groups,all_affiliations,candidate_profile,election_applications,election_nominations,election_nominations.candidate',
                    'election_nominations.candidate.first_name,election_nominations.candidate.last_name',
                    'election_applications.nominator.none,election_nominations.candidate.none'
                ).then((profile) => {

                    const updatedProfile = {
                        ...currentMember,
                        election_applications: [...profile.election_applications],
                        election_nominations: [...profile.election_nominations],
                    };
                    updateUserInfo(updatedProfile);
                });
        }
    }, [])

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
                user={user}
                updateProfilePicture={updateProfilePicture}
                updateIDPProfile={updateIDPProfile}
                updateProfile={updateProfile}
                getIDPProfile={getIDPProfile}
                updatePassword={updatePassword}
                getUserProfile={getUserProfile}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    currentMember: state.loggedUserState.member,
    initialMembershipType: state.userState.currentMembershipType,
    currentAffiliations: state.userState.currentAffiliations,
    electionStatus: state.electionState.election_status,
    idpProfile: state.userState.idpProfile,
    user: state.userState,
}),
    {
        addAffiliation,
        saveAffiliation,
        deleteAffiliation,
        addOrganization,
        updateMembershipType,
        getMemberProfile,
        getElectionMemberProfile,
        getElectionStatus,
        updateUserInfo,
        getIDPProfile,
        getUserProfile,
        updateIDPProfile,
        updateProfile,
        updateProfilePicture,
        updatePassword
    })(ProfilePage)