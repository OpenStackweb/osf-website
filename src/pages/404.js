import React from 'react'
import { Router, Redirect } from "@reach/router"
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavbarV2 from '../components/NavbarV2'
import TopBar from '../components/TopBar'

const NotFoundPage = ({ location }) => {
  return (
    <Layout>
      <Router>
        <Redirect
          from="/election"
          to="/election/2022-individual-director-election"
          noThrow
        />
        <Redirect
          from="/election/candidates"
          to="/election/2022-individual-director-election/candidates"
          noThrow
        />
        <Redirect
          from="/election/candidates/gold"
          to="/election/2022-individual-director-election/candidates/gold"
          noThrow
        />
      </Router>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={false} />
        <Header title="NOT FOUND" subTitle="You just hit a route that doesn&#39;t exist... the sadness." />
      </div>
      <div style={{ height: '45vw' }}>
      </div>
    </Layout>
  )
}

export default NotFoundPage
