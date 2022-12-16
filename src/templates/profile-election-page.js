import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Header from "../components/Header";
import SEO from "../components/SEO";
import CandidateProfile from "../components/CandidateProfile"
import 'openstack-uicore-foundation/lib/css/components.css';
import { getElectionMemberProfile } from '../actions/member-actions';
import { getElectionStatus } from "../actions/election-actions";
import {
    updateUserInfo
} from "openstack-uicore-foundation/lib/methods";
import ProfileSubNav from "../components/ProfileSubNav";
import { MEMBERSHIP_TYPE_NONE } from "../actions/user-actions";

export const ProfileElectionPageTemplate = ({
    currentMember,
    isLoggedUser,
    location,
    electionStatus,
}) => {

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <NavbarV2 isLoggedUser={isLoggedUser} />
                <ProfileSubNav activePage='profile-election' pageName='Elections' />
                <Header title="Profile" subTitle="Elections" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <CandidateProfile electionStatus={electionStatus} electionProfile={currentMember} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ProfileElectionPage = ({
    currentMember,
    isLoggedUser,
    location,
    initialMembershipType,
    getElectionMemberProfile,
    getElectionStatus,
    electionStatus,
    updateUserInfo,
}) => {

    useEffect(() => {
        if (initialMembershipType === MEMBERSHIP_TYPE_NONE) {
            return navigate('/a/profile?membership_type=foundation')
        }
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
            <ProfileElectionPageTemplate
                currentMember={currentMember}
                location={location}
                isLoggedUser={isLoggedUser}
                electionStatus={electionStatus}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    initialMembershipType: state.userState.currentMembershipType,
    currentMember: state.loggedUserState.member,
    electionStatus: state.electionState.election_status,
}),
    {
        getElectionMemberProfile,
        getElectionStatus,
        updateUserInfo
    })(ProfileElectionPage)