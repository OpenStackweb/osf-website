import React from "react"
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SEO from '../components/SEO'

export const ErrorPageTemplate = ({ loggedUserState, location }) => {

    return (
        <>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={false} />
                <Header title="NOT FOUND" subTitle="You just hit a route that doesn&#39;t exist... the sadness." />
            </div>
            <div style={{ height: '45vw' }}>
            </div>
        </>
    );
}

const ErrorPage = ({ loggedUserState, location }) => {


    return (
        <Layout>
            <SEO />
            <ErrorPageTemplate
                loggedUserState={loggedUserState}
                location={location}
            />
        </Layout>
    )
}

export default connect(state => ({
    loggedUserState: state.loggedUserState
}), null)(ErrorPage)