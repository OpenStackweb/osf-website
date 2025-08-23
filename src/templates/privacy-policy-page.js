import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Content, {HTMLContent} from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import "../style/privacy-policy-page.scss";

export const PrivacyPolicyPageTemplate = ({
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
        <TopBar/>
        <NavbarV2 isLoggedUser={isLoggedUser}/>
        <Header title={title} subTitle={subTitle}/>
      </div>

      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  <PageContent content={content}/>
                </div>
              </div>
            </div>
          </section>
          {footer &&
            <Hero content={footer}/>
          }
        </div>
      </main>
    </div>
  )
}

PrivacyPolicyPageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const PrivacyPolicyPage = ({isLoggedUser, data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null}/>
      <PrivacyPolicyPageTemplate
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

PrivacyPolicyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(PrivacyPolicyPage)

export const privacyPolicyPageQuery = graphql`
  query PrivacyPolicyPage($id: String!) {
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
