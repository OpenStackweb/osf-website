import React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Header from "../components/Header";
import SEO from "../components/SEO";
import { updateMembershipType, MEMBERSHIP_TYPE_COMMUNITY } from "../actions/user-actions"
import Swal from "sweetalert2";

export const MembershipCommunityPageTemplate = ({
    updateMembershipType,
    isLoggedUser,
    location
}) => {


    const cancel = () => {
        navigate('/a/profile')
    }

    const resign = () => {
        const message = 'Membership Updated';
        updateMembershipType(MEMBERSHIP_TYPE_COMMUNITY).then(() => Swal.fire("Success", message, "success").then(() => navigate('/a/profile')))
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <NavbarV2 isLoggedUser={isLoggedUser} />
                <Header title="Downgrade To Community Member" />
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <p>
                                        If you select this option, you will be revoking your right to vote in elections and to commit code to OpenStack via Gerrit. Additionally, any administrative rights to the Marketplace Admin or Company Admin will be revoked.
                                    </p>
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

const MembershipCommunityPage = ({ updateMembershipType, isLoggedUser, location }) => {
    return (
        <Layout>
            <SEO />
            <MembershipCommunityPageTemplate
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
)(MembershipCommunityPage)