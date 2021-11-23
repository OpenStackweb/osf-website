import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'

import { connect } from "react-redux";

export const ContributorsPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  content,
  contentComponent,
  companyDetails
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title={title} subTitle={subTitle} />
      </div>
      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  <PageContent content={content} />
                  {companyDetails &&
                    <table>
                      <tr>
                        <th>Company Name</th>
                        <th>Date CCLA</th>
                      </tr>
                      {companyDetails.companies.map((c, index) => {
                        return (
                      <tr key={`companyDetail-${index}`}>
                        <td >{c.name}</td>
                        <td >{c.date}</td> 
                      </tr>
                        )
                      })}
                    </table>
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

ContributorsPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  
}

const ContributorsPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <ContributorsPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        content={post.html}
        companyDetails={post.frontmatter.companyDetails}
      />
    </Layout>
  )
}

ContributorsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(ContributorsPage)

export const contributorsPageQuery = graphql`
  query ContributorsPage($id: String!) {
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
        companyDetails {
          companies {
            name
            date
          }
        }
      }
      
    }
  }
`
