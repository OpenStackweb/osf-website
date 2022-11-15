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
import SubNavYvr from '../components/SummitSubNavYvr'

import { connect } from "react-redux";

export const Vancouver2023SummitOnsiteSafetyPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  footer,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <SubNavYvr active="summit-onsite-safety" pageName="Onsite Safety" isLoggedUser={isLoggedUser}/>
        <Header title={title} subTitle={subTitle} />
      </div>

      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
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

Vancouver2023SummitOnsiteSafetyPageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const vancouver2023SummitOnsiteSafetyPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <Vancouver2023SummitOnsiteSafetyPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        footer={post.frontmatter.footer}
        content={post.html}
      />
    </Layout>
  )
}

vancouver2023SummitOnsiteSafetyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(vancouver2023SummitOnsiteSafetyPage)

export const vancouver2023SummitOnsiteSafetyPageQuery = graphql`
  query vancouver2023SummitOnsiteSafetyPage($id: String!) {
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
