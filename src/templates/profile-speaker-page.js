import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby";
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Header from "../components/Header";
import SEO from "../components/SEO";
import 'openstack-uicore-foundation/lib/css/components.css';
import {
    uploadFileProfile,
    uploadFileBigPhoto,
    getSpeakerProfile,
    saveSpeakerProfile,
    MEMBERSHIP_TYPE_NONE,
} from "../actions/user-actions"
import ProfileSubNav from "../components/ProfileSubNav";
import { ProfileSpeaker } from "../components/ProfileSpeaker";

export const ProfileSpeakerPageTemplate = ({
    isLoggedUser,
    location,
    loading,
    idpProfile,
    speakerProfile,
    uploadFileProfile,
    uploadFileBigPhoto,
    saveSpeakerProfile
}) => {

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <NavbarV2 isLoggedUser={isLoggedUser} />
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
                                        speaker={speakerProfile}
                                        idpProfile={idpProfile}
                                        loading={loading}
                                        saveSpeakerProfile={saveSpeakerProfile}
                                        uploadFileProfile={uploadFileProfile}
                                        uploadFileBigPhoto={uploadFileBigPhoto} />
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
    isLoggedUser,
    location,
    loading,
    idpProfile,
    initialMembershipType,
    speakerProfile,
    getSpeakerProfile,
    saveSpeakerProfile,
    uploadFileProfile,
    uploadFileBigPhoto,
}) => {

    useEffect(() => {
        if (initialMembershipType === MEMBERSHIP_TYPE_NONE) {
            return navigate('/a/profile?membership_type=foundation')
        }
        getSpeakerProfile();
    }, [])

    return (
        <Layout>
            <SEO />
            <ProfileSpeakerPageTemplate
                location={location}
                loading={loading}
                isLoggedUser={isLoggedUser}
                idpProfile={idpProfile}
                speakerProfile={speakerProfile}
                saveSpeakerProfile={saveSpeakerProfile}
                uploadFileProfile={uploadFileProfile}
                uploadFileBigPhoto={uploadFileBigPhoto}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    loading: state.userState.loadingSpeaker,
    idpProfile: state.userState.idpProfile,
    initialMembershipType: state.userState.currentMembershipType,
    speakerProfile: state.userState.speakerProfile,
    user: state.userState,
}),
    {
        getSpeakerProfile,
        saveSpeakerProfile,
        uploadFileProfile,
        uploadFileBigPhoto,
    })(ProfileSpeakerPage)