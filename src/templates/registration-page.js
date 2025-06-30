import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import React, { useEffect } from "react"
import URI from "urijs"

export const RegistrationPageTemplate = ({ loggedUserState, location }) => {
    return null;
}

const RegistrationPage = ({ loggedUserState, location }) => {

    useEffect(() => {
        let query = URI.parseQuery(location.search);
        let membershipType = 'foundation';
        if (query.hasOwnProperty("membership_type")) {
          membershipType = query["membership_type"];
        }
        let backUrl = `/a/profile?membership_type=${membershipType}`
        if(loggedUserState.isLoggedUser)
        {
          console.log("RegistrationPageTemplate::Render user is already logged redirecting to /a/profile")
          navigate(backUrl);
        }
    }, [loggedUserState, location]);

    return (
        <Layout>
            <SEO />
            <RegistrationPageTemplate
                loggedUserState={loggedUserState}
                location={location}
            />
        </Layout>
    )
}

export default connect(state => ({
    loggedUserState: state.loggedUserState
}), null)(RegistrationPage)
