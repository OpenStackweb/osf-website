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
import { AjaxLoader } from "openstack-uicore-foundation/lib/components";
import { updateCandidateProfile } from "../actions/election-actions";


export const CandidatePageTemplate = ({
    isLoggedUser,
    loading,
    updateCandidateProfile,
    currentMember,
    electionStatus
}) => {

    const onCandidateApplicationSubmit = (application) => {
        updateCandidateProfile(application);
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <Header title="Accept Nomination" subTitle="To accept nominations and be listed as a candidate for the OpenStack election, please answer the questions below." />
            </div>
            <AjaxLoader show={loading} size={120} />
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
    loading,
    electionStatus,
    updateCandidateProfile,
    currentMember
}) => {
    return (
        <Layout>
            <SEO />
            <CandidatePageTemplate
                isLoggedUser={isLoggedUser}
                loading={loading}
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
    loading: state.electionState.loading,
    electionStatus: state.electionState.election_status,
}),
    {
        updateCandidateProfile
    })(CandidatePage)