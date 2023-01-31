import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import React, { useEffect } from "react"
import URI from "urijs"

import { doLogin } from 'openstack-uicore-foundation/lib/security/methods'

export const RegistrationPageTemplate = ({ loggedUserState, location }) => {

    if (loggedUserState.isLoggedUser) {
        navigate('/a/profile');
        return null
    }

    return null;
}

const RegistrationPage = ({ loggedUserState, location }) => {

    useEffect(() => {
        let query = URI.parseQuery(location.search);
        let membershipType = null;
        if (query.hasOwnProperty("membership_type")) {
            membershipType = query["membership_type"];
        }

        doLogin(`/a/profile?membership_type=${membershipType}`)
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
