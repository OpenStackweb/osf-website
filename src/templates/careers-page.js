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
                        <img src={!!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image} id={index < 1 ? 'about-s1-id-pic4' : 'about-s1-id-pic5'} alt="" key={index} />
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
                      <a href="/careers/developer-advocate" className="career-title">Developer Advocate</a>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                      </p>
                      <p>
                        <LinkComponent style={{marginTop: "20px"}} className="button-cta" href="/careers/developer-advocate">Learn More<img src={leftArrow} alt="Left Arrow" /></LinkComponent> 
                      </p>
                  </div>
                    <div className="career-single">
                      <a href="/careers/accounting-operations-intern" className="career-title">Accounting & Operations Intern</a>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
