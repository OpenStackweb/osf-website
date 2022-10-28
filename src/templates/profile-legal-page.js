import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Header from "../components/Header";
import SEO from "../components/SEO";
import 'openstack-uicore-foundation/lib/css/components/index.css';

import ProfileSubNav from "../components/ProfileSubNav";
import ProfileLegals from "../components/ProfileLegals";

import { MEMBERSHIP_TYPE_NONE } from "../actions/user-actions";

export const ProfileLegalPageTemplate = ({
    isLoggedUser,
    legalAgreements,
    location,
}) => {

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <NavbarV2 isLoggedUser={isLoggedUser} />
                <ProfileSubNav activePage='profile-legal' pageName='Legal Agreements' />
                <Header title="Profile" subTitle="Legal Agreements" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column" style={{ border: '1px solid #d3d3d3', padding: 15 }}>
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
    initialMembershipType,
    location,
    user,
}) => {

    useEffect(() => {
        if (initialMembershipType === MEMBERSHIP_TYPE_NONE) {
            return navigate('/a/profile?membership_type=foundation')
        }
    }, [])

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
    initialMembershipType: state.userState.currentMembershipType,
    user: state.userState.userProfile,
}),
    {
    })(ProfileLegalPage)
