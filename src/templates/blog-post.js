import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import Content, { HTMLContent } from '../components/Content'

import metadata from '../content/site-metadata.json'
import blogConfig from '../content/blog-config.json'
import {connect} from "react-redux";

export const BlogPostTemplate = ({
  isLoggedUser,
  content,
  contentComponent,
  title,
  date,
  author,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      {helmet}
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser}/>
        <Header title={blogConfig.title} subTitle={blogConfig.subTitle} />
      </div>

      <main className="main">
        <div className="content">
          <section className="section blog-s1-main">
            <div className="container blog-s1-container">
              <div className="columns">
                <div className="column">
                  <div className="article-single">
                    <div className="article-single-head">
                      <h3 className="article-single-title">{title}</h3>
                      <div className="article-single-meta">
                        <p>By <Link to={`/blog/author/${kebabCase(author)}/`}>{author}</Link> on {date}</p>
                      </div>
                    </div>
                    <div className="article-single-entry">
                      <div className="content custom">
                        <PostContent content={content} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        isLoggedUser={isLoggedUser}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="e11e4375-71b9-426d-a76d-61eae3ddc08f" type="text/javascript" async></script>
            <title>{`${post.frontmatter.seo.title ? post.frontmatter.seo.title : post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.seo.description}`} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${post.frontmatter.seo.title ? post.frontmatter.seo.title : post.frontmatter.title}`} />
            <meta property="og:url" content={`${post.frontmatter.seo.url ? `${post.frontmatter.seo.url}/` : metadata.siteMetadata.url}`} />
            <meta property="og:description" content={`${post.frontmatter.seo.description ? post.frontmatter.seo.description : metadata.siteMetadata.description}`} />
            <meta property="article:published_time" content={`${post.frontmatter.date}`} />
            <meta property="article:author" content={`${post.frontmatter.author}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={post.frontmatter.seo.twitterUsername ? post.frontmatter.seo.twitterUsername : metadata.siteMetadata.twitterUsername} />
            <meta name="twitter:title" content={`${post.frontmatter.seo.title ? post.frontmatter.seo.title : post.frontmatter.title}`} />
            <meta name="twitter:description" content={`${post.frontmatter.seo.description ? post.frontmatter.seo.description : metadata.siteMetadata.description}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(BlogPost)

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date (formatString: "DD/MM/YYYY", locale: "en_us")
        title
        author
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
      }
    }
  }
`
