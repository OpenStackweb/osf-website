import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'
import LinkComponent from '../components/LinkComponent';
import leftArrow from '../img/svg/arrow-left.svg'

import { connect } from "react-redux";

export const CareersPageTemplate = ({
  isLoggedUser,
  header,
  row1,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <Header title={header.title} subTitle={header.subTitle} />
      </div>

      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  {row1.images.map((image, index) => {
                    if (image.image) {
                      return (
                        <img src={!!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image} id={index < 1 ? 'about-s1-id-pic4' : 'about-s1-id-pic5'} alt="img" key={index} />
                      )
                    }
                  })}
                </div>
                <div className="column">
                  <h3 className="fix-h3">{row1.title1}</h3>
                  <p>{row1.text1}</p>
                  <p>
                    <LinkComponent style={{marginTop: "20px"}} className="button-cta" href="#openings">See Current Openings<img src={leftArrow} alt="Left Arrow" /></LinkComponent> 
                  </p>
                </div>
              </div>
              <columns>
                <column>
                  <hr id="openings"/>
                  <h3>Current Openings</h3>
                  {/* <div className="career-single">
                      <a href="/careers/web-manager" className="career-title">Marketing Coordinator</a>
                      <p>
                      The Marketing Coordinator will help develop and then lead the distribution of key messages from the OpenInfra Foundation. A key contributor to a small (but powerful!) team, this candidate will work closely with fellow marketing staff as well as community, business development and product teams. This role is designed to bring storytelling to life, ensuring that key messages are distributed through key channels in a consistent narrative. The OpenInfra Foundation staff is globally distributed, so this candidate will be expected to work remotely, with 5-10% travel (pending global safety guidelines).
                      </p>
                      <p>
                        <LinkComponent style={{marginTop: "20px"}} className="button-cta" href="/careers/marketing-coordinator">Learn More<img src={leftArrow} alt="Left Arrow" /></LinkComponent> 
                      </p>
                  </div>
                    <hr /> */}
                    <div className="career-single">
                      <a href="mailto:info@openinfra.dev" className="career-title">Your Dream Job</a>
                      <p>
                      Don't see a position that you're a fit for? No worries! If you are a hard working, friendly, lover of open source, please say "hi" and send us your resume. We are always looking for potential fits for future positions.
                      </p>
                      <p>
                        <LinkComponent style={{marginTop: "20px"}} className="button-cta" href="mailto:info@openinfra.dev">Email Resume<img src={leftArrow} alt="Left Arrow" /></LinkComponent> 
                      </p>
                  </div>
                    <hr />
                </column>
              </columns>
            </div>
          </section>
          <PageContent content={content} />
        </div>
      </main>
    </div>
  )
}

CareersPageTemplate.propTypes = {
  header: PropTypes.object,
  row1: PropTypes.object,
}

const CareersPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <CareersPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        row1={post.frontmatter.row1}
      />
    </Layout>
  )
}

CareersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(CareersPage)

export const CareersPageQuery = graphql`
  query CareersPage($id: String!) {
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
          title
          subTitle
        }
        row1 {
          title1
          text1
          title2
          text2
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
