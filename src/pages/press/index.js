import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import { connect } from "react-redux";
import Layout from '../../components/Layout'
import TopBar from '../../components/TopBar';
import NavbarV2 from '../../components/NavbarV2';
import NewsRoll from '../../components/NewsRoll'

import pressContent from '../../content/press-media.json'
import FeaturedRoll from '../../components/FeaturedRoll'

const PressIndexPage = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: true,
      featured: false,
    }
  }

  render() {
    const { news, featured } = this.state;
    const { isLoggedUser } = this.props;
    return (
      <Layout>
        <div>
          <Helmet title={pressContent.seo.title} titleTemplate={pressContent.seo.titleTemplate}>
            <meta name="description" content={pressContent.seo.description} />
            <meta name="image" content={`${withPrefix('/')}${pressContent.seo.image}`} />
            <meta property="og:url" content={pressContent.seo.url} />
            <meta property="og:title" content={pressContent.seo.title} />
            <meta property="og:description" content={pressContent.seo.description} />
            <meta property="og:image" content={`${withPrefix('/')}${pressContent.seo.image}`} />
            <meta name="theme-color" content={pressContent.seo.themeColor} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={pressContent.seo.twitterUsername} />
            <meta name="twitter:title" content={pressContent.seo.title} />
            <meta name="twitter:description" content={pressContent.seo.description} />
            <meta name="twitter:image" content={`${withPrefix('/')}${pressContent.seo.image}`} />
          </Helmet>
          <div className="wrapper project-background">
            <TopBar />
            <NavbarV2 isLoggedUser={isLoggedUser} />
            <main className="main">
              <section className="hero-main is-primary hero">
                <div className="hero-body">
                  <div className="container">
                    <div className="hero-project-news">
                      <h3 className="hero-project-title">Press and Media</h3>
                      <div className="hero-project-entry">
                        <span className={news ? 'active' : ''} onClick={() => this.setState({ news: !news, featured: news })}>News</span>
                        <span className={featured ? 'active' : ''} onClick={() => this.setState({ featured: !featured, news: featured })}>Featured</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <main className="main">
            <div className="content">
              <section className="section news-s1-main">
                <div className="container news-s1-container">
                  <div className="columns">
                    <div className="column is-full">
                      <div className="content">
                        <div>
                          {news &&
                            <NewsRoll news={pressContent.articles} />
                          }
                          {featured &&
                            <FeaturedRoll news={pressContent.articles} />}
                        </div>
                      </div>
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
}), null)(PressIndexPage)