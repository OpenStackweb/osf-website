import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'
import ProjectsSubNav from '../components/ProjectsSubNav'
import ProjectsContactForm from '../components/ProjectsContactForm'

import { getSponsorshipTypes } from '../actions/sponsor-actions'
import { connect } from "react-redux";

export const ProjectsContactPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  privacyPolicyAgreement,
  successMessage,
  sponsors,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  const platinumMembers = sponsors.reduce((result, item) => {
    if (["PLATINUM MEMBERS"].includes(item.name)) {
      return [...result, ...item.supporting_companies.map(sc => sc.company)]
    }
    return result;
  }, []);

  return (
    <div>
      <div className="wrapper project-background" style={{ paddingBottom: 40 }}>
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <ProjectsSubNav active="" />
        <Header title={title} subTitle={subTitle} />
      </div>

      <main className="main">
        <ProjectsContactForm privacyPolicyAgreement={privacyPolicyAgreement} successMessage={successMessage} platinumMembers={platinumMembers} />
        <PageContent content={content} />
      </main>
    </div>
  )
}

ProjectsContactPageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

const ProjectsContactPage = ({ isLoggedUser, getSponsorshipTypes, sponsorships, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <ProjectsContactPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        privacyPolicyAgreement={post.frontmatter.privacyPolicyAgreement}
        successMessage={post.frontmatter.successMessage}
        sponsors={sponsorships}
        content={post.html}
      />
    </Layout>
  )
}

ProjectsContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  sponsorships: state.sponsorState.sponsorshipTypes,
}), {
  getSponsorshipTypes
})(ProjectsContactPage)

export const projectsContactPageQuery = graphql`
  query ProjectsContactPage($id: String!) {
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
        title
        subTitle
        privacyPolicyAgreement
        successMessage
      }
    }
  }
`
