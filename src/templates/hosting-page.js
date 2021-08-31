import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import HostingProject from '../components/HostingProject'

import LinkComponent from '../components/LinkComponent'
import { connect } from "react-redux";

export const HostingPageTemplate = ({
  header,
  row1,
  row2,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar />
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
                        <img
                          src={!!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image}
                          id={index < 1 ? `about-s1-id-pic1` : `about-s1-id-pic2`} alt=""
                          key={index} />
                      )
                    }
                  })}
                </div>
                <div className="column">
                  <h3 className="fix-h3">{row1.title}</h3>
                  <p className="fix-h5">
                    {row1.text1}
                  </p>
                  <ul className="fix-h5">
                    {row1.list.map((i, index) => {
                      return (
                        <li key={index}>{i.item}</li>
                      )
                    })}
                  </ul>
                  <p className="fix-h5">
                    {row1.text2}
                  </p>
                  <p className="fix-h5">
                    {row1.text3}
                    <LinkComponent href={row1.email.link}>&nbsp;{row1.email.text}</LinkComponent>.
                  </p>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h3 className="fix-h3">{row2.title}</h3>
                  <p className="fix-h5">
                    {row2.text1}
                  </p>
                  <p className="fix-h5">
                    {row2.text2}
                  </p>
                </div>
                <div className="column">
                  {row2.images.map((image, index) => {
                    if (image.image) {
                      return (
                        <img
                          src={!!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image}
                          id="about-s1-id-pic3" alt=""
                          key={index} />
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          </section>
          <PageContent content={content} />
          <HostingProject />
        </div>
      </main>
    </div>
  )
}

HostingPageTemplate.propTypes = {
  header: PropTypes.object,
  row1: PropTypes.object,
  row2: PropTypes.object,
}

const HostingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <HostingPageTemplate
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        row1={post.frontmatter.row1}
        row2={post.frontmatter.row2}
      />
    </Layout>
  )
}

HostingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(HostingPage)

export const hostingPageQuery = graphql`
  query HostingPage($id: String!) {
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
          title
          text1
          text2
          text3
          list {
            item
          }
          email {
            text
            link
          }
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
        row2 {
          title
          text1
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
