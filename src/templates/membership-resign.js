import React from "react"
import {connect} from 'react-redux'
import {navigate} from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import {resignMembershipType} from "../actions/user-actions"
import {initLogOut} from 'openstack-uicore-foundation/lib/methods'

export const MembershipResignPageTemplate = ({
                                                 resignMembershipType,
                                                 isLoggedUser,
                                                 location
                                             }) => {


    const cancel = () => {
        navigate('/a/profile')
    }

    const resign = () => {
        resignMembershipType().then(() => initLogOut())
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar/>
                <Navbar isLoggedUser={isLoggedUser}/>
                <Header title="Resign Your Membership"/>
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <p>
                                        Are you sure you want to resign your membership to the Open Infrastructure
                                        Foundation? This action will completely remove your account and cannot be
                                        undone.
                                    </p>
                                    <button role="button" onClick={() => resign()}>Yes, I want to resign</button>
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

const MembershipResignPage = ({resignMembershipType, isLoggedUser, location}) => {
    return (
        <Layout>
            <SEO />
            <MembershipResignPageTemplate
                resignMembershipType={resignMembershipType}
                location={location}
                isLoggedUser={isLoggedUser}
            />
        </Layout>
    )
}

export default connect(state => ({
        isLoggedUser: state.loggedUserState.isLoggedUser,
    }), {
    resignMembershipType
    }
)(MembershipResignPage)