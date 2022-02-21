import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import SEO from '../components/SEO'

import { connect } from "react-redux";

export const SchedulePageTemplate = ({
  isLoggedUser,
  footer,
}) => {

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
      </div>

      <main className="main">
        <div className="content">
          <section className="section no-top-padding">
            <div className="container">
              FULL SCHEDULE
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

SchedulePageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const SchedulePage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <SchedulePageTemplate
        isLoggedUser={isLoggedUser}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        footer={post.frontmatter.footer}
      />
    </Layout>
  )
}

SchedulePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SchedulePage)

export const schedulePageQuery = graphql`
  query SchedulePage($id: String!) {
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
        }
        title
        subTitle
        footer {
          title
          subTitle
          button
          buttonText
          display
        }
      }
    }
  }
`
