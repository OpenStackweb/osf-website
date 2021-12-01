import React, { useState, useRef, useEffect } from 'react'
import { kebabCase, debounce } from 'lodash'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import SortButton from '../components/SortButton'
import GoTopButton from '../components/GoTopButton'

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

  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', debounce(scrollHandler, 150), { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (window.pageYOffset > 700 && window.pageYOffset < document.documentElement.scrollHeight - 1400) {
      setShowGoTop(true)
    } else {
      setShowGoTop(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
                    <table id="corpTable" className="corpTable">
                    <thead>
                      <tr>
                        <th className="with-icon leftCol">
                          {companyDetails.leftColHeading}

                          <SortButton id="left-button" />
                          
                        </th>
                        <th className="with-icon rightCol">
                          {companyDetails.rightColHeading}

                          <SortButton id="right-button" />
                          
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      {companyDetails.companies.map((c, index) => {
                        return (
                      <tr key={`companyDetail-${index}`}>
                        <td >{c.name}</td>
                        <td >{c.date}</td> 
                      </tr>
                        )
                      })}
                    </tbody>
                    </table>
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
        {showGoTop && <GoTopButton onClick={() => scrollTop()} />} 
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
          leftColHeading
          rightColHeading
          companies {
            name
            date
          }
        }
      }
      
    }
  }
`