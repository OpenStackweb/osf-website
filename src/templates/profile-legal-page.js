import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import 'openstack-uicore-foundation/lib/css/components.css';

import ProfileSubNav from "../components/ProfileSubNav";
import ProfileLegals from "../components/ProfileLegals";

export const ProfileLegalPageTemplate = ({
    isLoggedUser,
    legalAgreements,
    location,
}) => {

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <ProfileSubNav activePage='profile-legal' pageName='Legal Agreements' />
                <Header title="Profile" subTitle="Legal Agreements" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column" style={{border: '1px solid #d3d3d3', padding: 15}}>
                                    <ProfileLegals legalAgreements={legalAgreements} />
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
    isLoggedUser,
    location,
    user,
}) => {

    return (
        <Layout>
            <SEO />
            <ProfileLegalPageTemplate
                location={location}
                isLoggedUser={isLoggedUser}
                legalAgreements={user.legal_agreements}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    user: state.userState.userProfile,
}),
    {
    })(ProfileLegalPage)