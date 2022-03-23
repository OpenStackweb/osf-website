import React from "react"
import {connect} from 'react-redux'
import {navigate} from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import {updateMembershipType, MEMBERSHIP_TYPE_FOUNDATION} from "../actions/user-actions"
import legalDoc from '../content/legal-document.json';

export const MembershipFoundationPageTemplate = ({
                                                    updateMembershipType,
                                                    isLoggedUser,
                                                    location
                                                }) => {


    const cancel = () => {
        navigate('/a/profile')
    }

    const resign = () => {
        updateMembershipType(MEMBERSHIP_TYPE_FOUNDATION).then(() => navigate('/a/profile'))
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar/>
                <Navbar isLoggedUser={isLoggedUser}/>
                <Header title="Upgrade To Foundation Member"/>
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <h2>Read Over the terms off becoming an Open Infrastructure Foundation Individual Member</h2>
                                    <div className="legal_doc_content" dangerouslySetInnerHTML={{ __html: legalDoc.content }}>
                                    </div>
                                    <button role="button" onClick={() => resign()}>Yes, I agree</button>
                                    &nbsp;
                                    <button role="button" onClick={() => cancel()}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const MembershipFoundationPage = ({updateMembershipType, isLoggedUser, location}) => {
    return (
        <Layout>
            <SEO />
            <MembershipFoundationPageTemplate
                updateMembershipType={updateMembershipType}
                location={location}
                isLoggedUser={isLoggedUser}
            />
        </Layout>
    )
}

export default connect(state => ({
        isLoggedUser: state.loggedUserState.isLoggedUser,
    }), {
        updateMembershipType
    }
)(MembershipFoundationPage)