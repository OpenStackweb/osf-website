import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'
import leftArrow from '../img/svg/arrow-left.svg'

import { connect } from "react-redux";

import LinkComponent from '../components/LinkComponent'

export const NewsletterPageTemplate = ({
  isLoggedUser,
  contentComponent,
  header,
  signup,
  footer,
}) => {

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
      </div>

      <main className="main">
        <div className="content">
          {header && header.display &&
            <section className="newsletter-header">
              <div className="header-left">
                <span className="upper-title">
                  {header.upperTitle}
                </span>
                <span className="title">
                  {header.title}
                </span>
                <span className="description" dangerouslySetInnerHTML={{ __html: header.description }}></span>
              </div>
              <div className="header-right">
                <div className="picture">
                  <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                </div>
              </div>
            </section>
          }

          <section className="newsletter-signup">
            <span className="title">
              {signup.title}
            </span>
            <span className="description" dangerouslySetInnerHTML={{ __html: signup.description }}></span>
            <iframe src="https://app.e2ma.net/app2/audience/signup/1958430/1771360/" scrolling='no' width={'100%'} height={'100%'} frameborder="0"></iframe>
          </section>

          <div className='newsletter-line'>
            <div /><div /><div /><div />
          </div>
          <section className="newsletter-footer">
            <span>{footer.title}</span>
            <LinkComponent className="button-cta" href={footer.button}>{footer.buttonText}<img src={leftArrow} alt="" /></LinkComponent>
          </section>
        </div>
      </main>
    </div>
  )
}

const NewsletterPage = ({ data, isLoggedUser }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <NewsletterPageTemplate
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        signup={post.frontmatter.signup}
        footer={post.frontmatter.footer}
        isLoggedUser={isLoggedUser}
      />
    </Layout>
  )
}

NewsletterPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(NewsletterPage)


export const NewsletterPageQuery = graphql`
  query NewsletterPage($id: String!) {
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
        header {
          display
          title
          upperTitle
          description
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
        signup {
          title
          description
        }
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
