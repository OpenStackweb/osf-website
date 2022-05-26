import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import ProjectsContactForm from '../components/ProjectsContactForm'

import { getSponsorhipType } from '../actions/sponsor-actions'
import { connect } from "react-redux";

export const ProjectsContactPageTemplate = ({
    isLoggedUser,
    title,
    subTitle,
    privacyPolicyAgreement,
    platinumMembers,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content


    return (
        <div>
            <div className="wrapper project-background" style={{ paddingBottom: 40 }}>
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <Header title={title} subTitle={subTitle} />
            </div>

            <main className="main">
                <ProjectsContactForm privacyPolicyAgreement={privacyPolicyAgreement} platinumMembers={platinumMembers} />
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

const ProjectsContactPage = ({ isLoggedUser, getSponsorhipType, sponsorships, data }) => {
    const { markdownRemark: post } = data

    useEffect(() => {
        getSponsorhipType('PLATINUM MEMBERS');
    }, [])

    useEffect(() => {
    }, [sponsorships])


    return (
        <Layout>
            <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
            <ProjectsContactPageTemplate
                isLoggedUser={isLoggedUser}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                subTitle={post.frontmatter.subTitle}
                privacyPolicyAgreement={post.frontmatter.privacyPolicyAgreement}
                platinumMembers={sponsorships?.filter(t => t.name === 'PLATINUM MEMBERS')[0]?.supporting_companies}
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
    getSponsorhipType
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
      }
    }
  }
`
