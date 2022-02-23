import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
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
        <Navbar isLoggedUser={isLoggedUser} />
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
                    <div className="career-single">
                      <a href="/careers/technical-community-manager" className="career-title">Technical Community Manager</a>
                      <p>
                      We are looking for an individual with a strong technical background who is passionate about infrastructure software challenges and solutions as well as open source to help us build and support a growing number of open source communities. This position plays a key role by ensuring that the OpenInfra communities are well balanced, sustainable and successful ecosystems in any lifecycle stage they might be in from creation to maturity. The role oversees the daily life of the supported communities to assist with their needs while performing crucial tasks and activities, such as creating content and demos and interacting with potential users and organizations wanting to commercialize, to increase visibility and adoption of the projects.
                      </p>
                      <p>
                        <LinkComponent style={{marginTop: "20px"}} className="button-cta" href="/careers/technical-community-manager">Learn More<img src={leftArrow} alt="Left Arrow" /></LinkComponent> 
                      </p>
                  </div>
                    <div className="career-single">
                      <a href="/careers/accounting-operations-intern" className="career-title">Accounting & Operations Intern</a>
                      <p>
                        OpenInfra Foundation is seeking someone who is business-minded and data-driven to fill the role of Accounting & Operations Intern. You should be detail-oriented, organized, punctual, and comfortable working in fast-paced environments. You will be interacting across various business units, handling a variety of tasks including accounting, AP/AR, operational efficiencies, event support and customer relations. You will be entrusted with highly sensitive information on a regular basis relating to core functions of the business and strategic partnerships. Being organized, responsive and flexible is crucial in this role.
                      </p>
                      <p>
                        <LinkComponent style={{marginTop: "20px"}} className="button-cta" href="/careers/accounting-operations-intern">Learn More<img src={leftArrow} alt="Left Arrow" /></LinkComponent> 
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
