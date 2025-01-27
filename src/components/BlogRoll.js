import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { getPageSlugFromSEO } from '../utils/methods'

class BlogRoll extends React.Component {
  render() {
    const { data, customFilter } = this.props
    const { edges: posts } = data.allMarkdownRemark

    let hasPosts = false;

    return (
      posts && posts.filter(({ node: post }) => post.frontmatter.hidePost === false).length === 0 ?
        <div>There don't seem to be any posts that match.</div>
        :
        posts.map(({ node: post }, index) => {
          if (!post.frontmatter.hidePost) {
            if (customFilter) {
              if (post.frontmatter.author === customFilter || post.frontmatter.category.find(c => c.label === customFilter)) {
                hasPosts = true;
                const slug = getPageSlugFromSEO(post.frontmatter.seo, post.fields.slug);
                return (
                  <div className="article-excerpt" key={index}>
                    <h5 className="article-excerpt-title">
                      <Link to={slug} className="">{post.frontmatter.title}</Link>
                    </h5>
                    <div className="article-excerpt-entry">
                      <div>
                        <p>{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="article-excerpt-meta">
                      <p>By <Link to={`/blog/author/${kebabCase(post.frontmatter.author)}/`}>{post.frontmatter.author}</Link> on {post.frontmatter.date}</p>
                    </div>
                  </div>
                )
              } else if (posts.length === index + 1 && !hasPosts) {
                return (
                  <div className="article-excerpt" key={index}>
                    <h5 className="article-excerpt-title">
                      <div>
                        <p>There don't seem to be any posts that match.</p>
                      </div>
                    </h5>
                  </div>
                )
              }
            } else {
              const slug = getPageSlugFromSEO(post.frontmatter.seo, post.fields.slug);
              return (
                <div className="article-excerpt" key={index}>
                  <h5 className="article-excerpt-title">
                    <Link to={slug} className="">{post.frontmatter.title}</Link>
                  </h5>
                  <div className="article-excerpt-entry">
                    <div>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="article-excerpt-meta">
                    <p>By <Link to={`/blog/author/${kebabCase(post.frontmatter.author)}/`}>{post.frontmatter.author}</Link> on {post.frontmatter.date}</p>
                  </div>
                </div>
              )
            }
          }
          return null;
        })
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  customFilter: PropTypes.string,
}

export default ({ customFilter }) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                hidePost
                date (formatString: "DD/MM/YYYY", locale: "en_us")
                author
                category {
                  label
                }
                seo {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} customFilter={customFilter} />}
  />
)
