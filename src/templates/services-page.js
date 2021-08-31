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

export const ServicesPageTemplate = ({
  isLoggedUser,
  header,
  row1,
  row2,
  row3,
  row4,
  row5,
  row6,
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
                  <p className="fix-h5">{row1.text1}</p>
                  <h3 className="fix-h3">{row1.title2}</h3>
                  <p className="fix-h5">{row1.text2}</p>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h3 className="fix-h3">{row2.title}</h3>
                  <p className="fix-h5">{row2.text}</p>
                </div>
                <div className="column">
                  <img src={!!row2.image.childImageSharp ? row2.image.childImageSharp.fluid.src : row2.image} id='about-s1-id-pic6' alt="" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <img src={!!row3.image.childImageSharp ? row3.image.childImageSharp.fluid.src : row3.image} id='about-s1-id-pic7' alt="" />
                </div>
                <div className="column">
                  <h3 className="fix-h3">{row3.title}</h3>
                  <p className="fix-h5">{row3.text}</p>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h3 className="fix-h3">{row4.title}</h3>
                  <p className="fix-h5">
                    {row4.text1}
                    <LinkComponent href={row4.link.url}>{row4.link.text}</LinkComponent>.&nbsp;
                    {row4.text2}
                  </p>
                </div>
                <div className="column">
                  <img src={!!row4.image.childImageSharp ? row4.image.childImageSharp.fluid.src : row4.image} id='about-s1-id-pic8' alt="" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  {row5.images.map((image, index) => {
                    if (image.image) {
                      return (
                        <img src={!!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image} id={index < 1 ? 'about-s1-id-pic1' : 'about-s1-id-pic2'} alt="" key={index} />
                      )
                    }
                  })}
                </div>
                <div className="column">
                  <h3 className="fix-h3">{row5.title}</h3>
                  <p className="fix-h5">
                    {row5.text1}
                    <LinkComponent href={row5.link1.url}> {row5.link1.text}</LinkComponent>&nbsp;
                    {row5.text2}
                    <LinkComponent href={row5.link2.url}> {row5.link2.text}</LinkComponent>&nbsp;
                    {row5.text3}
                  </p>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h3 className="fix-h3">{row6.title1}</h3>
                  <p className="fix-h5">{row6.text1}</p>
                  <h3 className="fix-h3">{row6.title2}</h3>
                  <p className="fix-h5">{row6.text2}</p>
                </div>
                <div className="column">
                  <img src={!!row6.image.childImageSharp ? row6.image.childImageSharp.fluid.src : row6.image} id='about-s1-id-pic3' alt="" />
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

ServicesPageTemplate.propTypes = {
  header: PropTypes.object,
  row1: PropTypes.object,
  row2: PropTypes.object,
  row3: PropTypes.object,
  row4: PropTypes.object,
  row5: PropTypes.object,
  row6: PropTypes.object,
}

const ServicesPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <ServicesPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        row1={post.frontmatter.row1}
        row2={post.frontmatter.row2}
        row3={post.frontmatter.row3}
        row4={post.frontmatter.row4}
        row5={post.frontmatter.row5}
        row6={post.frontmatter.row6}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(ServicesPage)

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
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
        row2 {
          title
          text                    
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }          
        }
        row3 {
          title
          text                    
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }          
        }
        row4 {
          title
          text1
          text2
          link {
            url
            text
          }
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }          
        }
        row5 {
          title
          text1
          link1 {
            text
            url
          }
          text2
          link2 {
            text
            url            
          }
          text3
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
        row6 {
          title1
          text1
          title2
          text2
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
`
