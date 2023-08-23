import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import CommunityEventsSubNav from '../components/CommunityEventsSubNav'

import { connect } from "react-redux";

export const CommunityEventsPageTemplate = ({
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
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <CommunityEventsSubNav />
        <Header title={title} subTitle={subTitle} />
      </div>

      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column community-events-wrapper">
                  <PageContent content={content} />
                  <section className="summit-form ptg">
                  <div className="summit-form-container ptg">
                    <div className="form-columns">
                        <div className="form-left">
                            <div className="picture">
                                <img alt="form image" src="/static/bce6b8aa2b64717a88febc9f2b3af2ba/23495/EWP-_WP_5140e%201.png" />
                            </div>
                        </div>
                        <div class="form-right">
                            <p className="description">Subscribe to our newsletter to be kept up to date with the latest about the Summit.</p>
                            <div>
                                <a href="/newsletter" class="form-cta" target="_blank" rel="noopener noreferrer">Sign Up <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNSAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNzA4LjcxNiAzNDkuMDU0bC00LjgwNS00LjgwNmEuODI4LjgyOCAwIDAgMC0xLjE4MyAwIC44MjguODI4IDAgMCAwIDAgMS4xODJsMy4zODggMy4zODdoLTExLjI4MWEuODQuODQgMCAwIDAtLjgzNS44MzYuODQuODQgMCAwIDAgLjgzNS44MzVoMTEuMjY2bC0zLjM3MyAzLjM4N2EuODI4LjgyOCAwIDAgMCAwIDEuMTgyLjg2My44NjMgMCAwIDAgLjYuMjUyYy4yMiAwIC40MjUtLjA3OS41OTktLjI1Mmw0LjgyLTQuODIyYS44NTguODU4IDAgMCAwIC4yNTItLjU5OCAxLjA2OSAxLjA2OSAwIDAgMC0uMjgzLS41ODMiIGlkPSJhLWFycm93LWxlZnQiIC8+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjk0IC0zNDQpIj4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhLWFycm93LWxlZnQiIGZpbGw9IiNmZmYiIC8+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          {footer &&
            <Hero content={footer} />
          }
        </div>
      </main>
    </div>
  )
}

CommunityEventsPageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const CommunityEventsPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <CommunityEventsPageTemplate
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

CommunityEventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(CommunityEventsPage)

export const communityEventsPageQuery = graphql`
  query CommunityEventsPage($id: String!) {
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