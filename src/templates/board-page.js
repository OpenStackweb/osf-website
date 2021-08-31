import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import ContactInformation from '../components/ContactInformation'

import LinkComponent from '../components/LinkComponent'
import { connect } from "react-redux";

export const BoardPageTemplate = ({
  isLoggedUser,
  header,
  members,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title={header.title} subTitle={header.subTitle} link={header.link} />
      </div>

      <main className="main">
        <div className="content">
          <div className="container">
            <section className="aboutstaff-s2-main container">
              <div className="aboutstaff-s2-container">
                {members.map((member, index) => {
                  return (
                    <div className="aboutstaff-s2-container-border" key={index}>
                      <div className="card-social-container-icons">
                        {member.openStack &&
                          <LinkComponent href={member.openStack}>
                            <img src="/img/symbols/icon-1.svg" alt="icon" className="card-social-icons" />
                          </LinkComponent>
                        }
                        {member.twitter &&
                          <LinkComponent href={member.twitter}>
                            <img src="/img/symbols/icon-3.svg" alt="icon" className="card-social-icons" />
                          </LinkComponent>
                        }
                        {member.linkedin &&
                          <LinkComponent href={member.linkedin}>
                            <img src="/img/symbols/icon-4.svg" alt="icon" className="card-social-icons" />
                          </LinkComponent>
                        }
                      </div>
                      <div className="card">
                        <div className="card-content">
                          <div className="media">
                            <div className="media-left">
                              <figure className="image is-128x128">
                                {member.picture ?
                                  <img src={!!member.picture.childImageSharp ? member.picture.childImageSharp.fluid.src : member.picture} alt="" />
                                  :
                                  null
                                }
                              </figure>
                            </div>
                            <div className="media-content">
                              <p className="title is-4 card-text-color">{member.name}</p>
                              <p className="is-6">{member.title}<br />{member.company}</p>
                              <p className="is-6" dangerouslySetInnerHTML={{ __html: member.description }}>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
        <ContactInformation />
      </main>
    </div>
  )
}

BoardPageTemplate.propTypes = {
  header: PropTypes.object,
  members: PropTypes.array,
}

const BoardPage = ({ BoardPage, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <BoardPageTemplate
        BoardPage={BoardPage}
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        members={post.frontmatter.members}
        content={post.html}
      />
    </Layout>
  )
}

BoardPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(BoardPage)


export const boardPageQuery = graphql`
  query BoardPage($id: String!) {
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
          link {
            url
            text
          }
        }        
        members {
          name
          picture {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          title
          company
          description
          openStack
          twitter
          linkedin
        }
      }
    }
  }
`
