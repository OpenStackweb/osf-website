import React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import legalDoc from '../content/legal-document.json';

export const ElectionPageTemplate = ({
    electionStatus,
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
                                <div className="column is-one-third">
                                    <div className="election-item">
                                        <a href="">
                                            ELECTION DETAILS
                                            <i className="fa fa-chevron-right" />
                                        </a>
                                    </div>
                                    <div className="election-item">
                                        <a href="">
                                            SEE THE CANDIDATES
                                            <i className="fa fa-chevron-right" />
                                        </a>
                                    </div>
                                    <div className="election-item">
                                        <a href="">
                                            NOMINATE A MEMBER
                                            <i className="fa fa-chevron-right" />
                                        </a>
                                    </div>
                                    <div className="election-item">
                                        <a href="">
                                            BE A CANDIDATE
                                            <i className="fa fa-chevron-right" />
                                        </a>
                                    </div>
                                    <div className="election-item">
                                        <a href="">
                                            GOLD MEMBER ELECTION CANDIDATES
                                            <i className="fa fa-chevron-right" />
                                        </a>
                                    </div>
                                    <div className="election-item">
                                        <a href="">
                                            CODE OF CONDUCT
                                            <i className="fa fa-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="column is-two-thirds">
                                    <div className="legal_doc_content" dangerouslySetInnerHTML={{ __html: legalDoc.content }} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const ElectionPage = ({ electionStatus, isLoggedUser, location }) => {
    return (
        <Layout>
            <SEO />
            <ElectionPageTemplate
                location={location}
                isLoggedUser={isLoggedUser}
                electionStatus={electionStatus}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    electionStatus: state.electionState.election_status,
}), {

}
)(ElectionPage)