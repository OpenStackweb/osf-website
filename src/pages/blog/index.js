import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import { connect } from "react-redux";
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar';
import NavbarV2 from '../../components/NavbarV2'
import BlogRoll from '../../components/BlogRoll'

import blogConfig from '../../content/blog-config.json'

const BlogIndexPage = class extends React.Component {

  render() {
    const { filter, isLoggedUser } = this.props;
    return (
      <Layout>
        <div>
          <Helmet title={blogConfig.seo.title} titleTemplate={blogConfig.seo.titleTemplate}>
            <meta name="description" content={blogConfig.seo.description} />
            <meta name="image" content={`${blogConfig.seo.url}${blogConfig.seo.image.slice(1)}`} />
            <meta property="og:url" content={`${blogConfig.seo.url}/`} />
            <meta property="og:title" content={blogConfig.seo.title} />
            <meta property="og:description" content={blogConfig.seo.description} />
            <meta property="og:image" content={`${blogConfig.seo.url}${blogConfig.seo.image.slice(1)}`} />
            <meta name="theme-color" content={blogConfig.seo.themeColor} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={blogConfig.seo.twitterUsername} />
            <meta name="twitter:title" content={blogConfig.seo.title} />
            <meta name="twitter:description" content={blogConfig.seo.description} />
            <meta name="twitter:image" content={`${blogConfig.seo.url}${blogConfig.seo.image.slice(1)}`} />
          </Helmet>
          <div className="wrapper project-background">
            <TopBar />
            <NavbarV2 isLoggedUser={isLoggedUser} />
            <Header title={blogConfig.title} subTitle={blogConfig.subTitle} />
          </div>
          <main className="main">
            <div className="content">
              <section className="section blog-s1-main">
                <div className="container blog-s1-container">
                  <div className="columns">
                    <div className="column is-three-quarters">
                      <div className="content">
                        <div>
                          <BlogRoll customFilter={filter ? filter : null} />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <aside>
                        <ul className="widgets">
                          <li className="widget item-no-bullet">
                            <div className="widget-head">
                              <h4 className="widget-title">Categories</h4>
                            </div>
                            <div className="widget-body">
                              <ul className="widget-list">
                                {blogConfig.categories.map((category, index) => (
                                  <li key={index}>
                                    <Link to={`/blog/category/${kebabCase(category.text)}/`}>{category.text}</Link>
                                  </li>)
                                )}
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </aside>
                    </div>
                  </div>
                </div>
              </section>
              {/* {footer &&
                  <Hero content={footer} />
                } */}
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(BlogIndexPage)