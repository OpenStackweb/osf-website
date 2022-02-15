import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import CareerSidebar from '../components/CareerSidebar'

import { connect } from "react-redux";

export const SingleCareerPageTemplate = ({
  isLoggedUser,
  title,
  footer,
  location,
  roleType,
  department,
  applyLink,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title={title}/>
      </div>

      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <CareerSidebar location={location} roleType={roleType} department={department} applyLink={applyLink} />
                <div className="column">
                  <PageContent content={content} />
                </div>
              </div>
            </div>
          </section>
          {footer &&
            <Hero content={footer} />
          }
        </div>
      </main>
    </div>
  )
}

SingleCareerPageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  location: PropTypes.string,
  roleType: PropTypes.string,
  department: PropTypes.string,
  applyLink: PropTypes.string,
  footer: PropTypes.object,
}

const SingleCareerPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <SingleCareerPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        location={post.frontmatter.location}
        roleType={post.frontmatter.roleType}
        department={post.frontmatter.department}
        applyLink={post.frontmatter.applyLink}
        footer={post.frontmatter.footer}
        content={post.html}
      />
    </Layout>
  )
}

SingleCareerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SingleCareerPage)

export const SingleCareerPageQuery = graphql`
  query SingleCareerPage($id: String!) {
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
        location
        roleType
        department
        applyLink
        footer {
          title
          button
          buttonText
          display
        }
      }
    }
  }
`
