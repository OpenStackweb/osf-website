import React, { useState } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import CandidateForm from "../components/CandidateForm";
import 'openstack-uicore-foundation/lib/css/components.css';
import { updateCandidateProfile } from "../actions/election-actions";

export const CandidatePageTemplate = ({
    isLoggedUser,
    updateCandidateProfile,
    currentMember,
    electionStatus
}) => {

    const onCandidateApplicationSubmit = (application) => {
        console.log('application to save', application);
        updateCandidateProfile(application);
    }

    console.log('election status', electionStatus)

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <Header title="Accept Nomination" subTitle="To accept nominations and be listed as a candidate for the OpenStack election, please answer the questions below." />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    {electionStatus?.status === "NominationsOpen" &&
                                        <>
                                            <hr />
                                            <CandidateForm 
                                                electionStatus={electionStatus}
                                                currentMember={currentMember} 
                                                saveCandidateProfile={onCandidateApplicationSubmit} />
                                        </>
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

const CandidatePage = ({
    isLoggedUser,
    electionStatus,
    updateCandidateProfile,
    currentMember
}) => {
    return (
        <Layout>
            <SEO />
            <CandidatePageTemplate
                isLoggedUser={isLoggedUser}
                electionStatus={electionStatus}
                currentMember={currentMember}
                updateCandidateProfile={updateCandidateProfile}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    currentMember: state.loggedUserState.member,    
    electionStatus: state.electionState.election_status,
}),
    {
        updateCandidateProfile
    })(CandidatePage)