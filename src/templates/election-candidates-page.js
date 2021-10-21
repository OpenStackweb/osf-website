import React, { useState } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";

import { getCandidates } from "../actions/election-actions";

export const ElectionCandidatesPageTemplate = ({
    candidates,
    isLoggedUser,
}) => {

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <Header title="2021 Board Elections" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ElectionCandidatesPage = ({ isLoggedUser, candidates, location, getCandidates }) => {

    useState(() => {
        getCandidates()
    }, [])

    return (
        <Layout>
            <SEO />
            <ElectionCandidatesPageTemplate
                location={location}
                isLoggedUser={isLoggedUser}
                candidates={candidates}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    electionStatus: state.electionState.election_status,
    candidates: state.electionState.candidates
}), {
    getCandidates
}
)(ElectionCandidatesPage)