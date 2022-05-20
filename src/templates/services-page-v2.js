import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import { connect } from "react-redux";
import ProjectsSubNav from "../components/ProjectsSubNav";
import heroFront from "../img/services-front-img.png";
import HeaderV2 from "../components/HeaderV2";
import HostingProjectV2 from "../components/HostingProjectV2";
import QuoteSection from "../components/Services/QuoteSection";
import ApproachSection from "../components/Services/ApproachSection";

import '../style/modules/_services.scss';


export const ServicesPageTemplate = ({isLoggedUser}) => {
  return (
    <div className="services-page">
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <ProjectsSubNav active="services" />
        <HeaderV2
          frontImage={heroFront}
          title="Services AVAILABLE to OpenInfra Projects"
          subtitle="How we serve project communities, services needed to build a broad community and drive the effectiveness of open source software."
          sublabel="Interested in Hosting your project with the OpenInfra Foundation? "
          contactLink="/projects/contact"
          moreLink="/projects/hosting"
        />
      </div>

      <main className="main">
        <div className="content">
          <QuoteSection />
          <ApproachSection />
          <HostingProjectV2/>
        </div>
      </main>
    </div>
  )
}

ServicesPageTemplate.propTypes = {
  header: PropTypes.object,
  row1: PropTypes.object,
  row2: PropTypes.object,
  row3: PropTypes.object,
  row4: PropTypes.object,
  row5: PropTypes.object,
  row6: PropTypes.object,
}

const ServicesPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <ServicesPageTemplate
        isLoggedUser={isLoggedUser}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(ServicesPage)

export const servicesPageQuery = graphql`
  query ServicesPageV2($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }
      }
    }
  }
`
