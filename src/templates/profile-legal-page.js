import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
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
import ProfileSubNav from "../components/ProfileSubNav";
import ProfileLegals from "../components/ProfileLegals";

export const ProfileLegalPageTemplate = ({
    isLoggedUser,
    location,
}) => {

    const [validationError, setValidationError] = useState(null);

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <ProfileSubNav activePage='profile-legal' pageName='Legal Agreements'/>
                <Header title="Profile" subTitle="Legal Agreements" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <ProfileLegals />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ProfileLegalPage = ({
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

    return (
        <Layout>
            <SEO />
            <ProfileLegalPageTemplate
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
    })(ProfileLegalPage)