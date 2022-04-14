import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { getSpeakerProfile } from "../actions/user-actions";
import 'openstack-uicore-foundation/lib/css/components.css';
import {
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    getUserProfile
} from "../actions/user-actions"
import { getMemberProfile, getElectionMemberProfile } from '../actions/member-actions';
import { getElectionStatus } from "../actions/election-actions";
import {
    updateUserInfo
} from "openstack-uicore-foundation/lib/methods";
import ProfileSubNav from "../components/ProfileSubNav";
import { ProfileSpeaker } from "../components/ProfileSpeaker";

export const ProfileSpeakerPageTemplate = ({
    isLoggedUser,
    location,
    speakerProfile,
    user,
    updateProfilePicture,
    updateIDPProfile,
    updateProfile,
    getIDPProfile,
    updatePassword,
    getUserProfile,
}) => {

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <ProfileSubNav activePage='profile-speaker' pageName='Speaker Details' />
                <Header title="Profile" subTitle="Speaker Details" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">

                                    <ProfileSpeaker
                                        user={user}
                                        speaker={speakerProfile}
                                        updateProfilePicture={updateProfilePicture}
                                        updateIDPProfile={updateIDPProfile}
                                        updateProfile={updateProfile}
                                        getIDPProfile={getIDPProfile}
                                        updatePassword={updatePassword}
                                        getUserProfile={getUserProfile} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ProfileSpeakerPage = ({
    currentMember,
    idpProfile,
    isLoggedUser,
    location,
    speakerProfile,
    user,
    updateProfilePicture,
    updateProfile,
    getUserProfile,
    getSpeakerProfile,
}) => {

    useEffect(() => {
        // getSpeakerProfile();
    }, [])

    return (
        <Layout>
            <SEO />
            <ProfileSpeakerPageTemplate
                currentMember={currentMember}
                idpProfile={idpProfile}
                location={location}
                isLoggedUser={isLoggedUser}
                user={user}
                speakerProfile={speakerProfile}
                updateProfilePicture={updateProfilePicture}
                updateProfile={updateProfile}
                getUserProfile={getUserProfile}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    currentMember: state.loggedUserState.member,
    idpProfile: state.userState.idpProfile,
    speakerProfile: state.userState.speakerProfile,
    user: state.userState,
}),
    {
        getMemberProfile,
        getElectionMemberProfile,
        getElectionStatus,
        getIDPProfile,
        getUserProfile,
        getSpeakerProfile,
        updateIDPProfile,
        updateProfile,
        updateProfilePicture,
    })(ProfileSpeakerPage)