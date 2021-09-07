import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ColorBar from '../img/color-bar.png'
import leftArrow from '../img/svg/arrow-left.svg'

import { connect } from "react-redux";

export const OpenInfraLiveKeynotesTemplate = ({
  isLoggedUser,
  contentComponent,
  content,
  hero,
  intro,
  footer,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
      </div>

      <main className="main">
        <div className="content">
          <div className="dark-hero">
            <div className="container">
              <section className="live-hero">
                <div className="text">
                  <span>{hero.subtitle}</span>
                  <h1>{hero.title}</h1>
                  <p className="dates" dangerouslySetInnerHTML={{ __html: hero.description }} />
                  <a href={hero.buttonURL} className="cta">
                    {hero.buttonText}
                    <img src={leftArrow} alt="" />
                  </a>
                </div>
                <figure className="logo">
                  <img src="/img/live/live-logo-white-b.svg" alt="OpenInfra Live" />
                </figure>
              </section>
            </div>
            <img src={ColorBar} className="multi-color-border" alt="Color Bar" />
          </div>
          <section className="keynotes-intro">
            <div className="container">
              <p className="fix-h5">
                {intro.text}
              </p>
            </div>
          </section>
          <section className="live-section">
            <div className="container">
              <section className="keynotes-bullets">
                <div className="stat-section">
                  <h3>
                  What can you expect?
                  </h3>
                  <ul>
                    <li>
                      Exclusive announcements from the OpenInfra Foundation
                    </li>
                    <li>
                      Users deploying hybrid cloud scenarios in production and
                      how open source projects like OpenStack and Kubernetes
                      make them scale
                    </li>
                    <li>
                      OpenInfra production deployments growing by up to 200%
                    </li>
                  </ul>
                </div>
                <div className="stat-section">
                  <h3>
                  Virtual OpenInfra Summit 2020 Demographics
                  </h3>
                  <ul>
                    <li>
                      Over 10k attendees from 125+ countries representing
                      3,200 companies
                    </li>
                    <li>
                      An additional 10k viewed translated China livestream
                    </li>
                    <li>
                      65% attending an OpenInfra event for the first time
                    </li>
                  </ul>
                </div>
              </section>
              <section className="keynotes-stats">
                <div className="single-stat">
                  <strong>31%</strong>
                  Europe
                </div>
                <div className="single-stat">
                  <strong>28%</strong>
                  APAC
                </div>
                <div className="single-stat">
                  <strong>28%</strong>
                  North America
                </div>
                <div className="single-stat">
                  <strong>7%</strong>
                  Middle East/Africa
                </div>
                <div className="single-stat">
                  <strong>6%</strong>
                  South/Latin America
                </div>
              </section>
            </div>
          </section>
          <section className="keynotes-sponsors">
            <div className="container">
              <section className="sponsor-section headline">
                <h3>Headline Sponsor</h3>
                <div className="logos">
                  <img src="/img/live/redhat-logo.svg" />
                </div>
              </section>
            </div>
          </section>
          <section className="live-section">
            <div className="container">
              <section className="sponsor-levels">
                <h3>Sponsorship Levels*</h3>
                <div className="level-listing">
                  <section className="level-single headline">
                    <div className="level-heading">
                      Headline
                    </div>
                    <div className="level-bullets">
                      <ul>
                        <li>
                          Minimum of 8 minutes of Keynote speaking time
                          (content subject to Foundation approval)
                        </li>
                        <li>
                          Verbal and logo recognition during event
                        </li>
                        <li>
                          Pre and post event emails to the attendee list
                        </li>
                        <li>
                          Website logo placement
                        </li>
                        <li>
                          Pre/post event mentions in the OpenInfra community
                          newsletter/social media posts
                        </li>
                        <li>
                          Brand mention in the abstracts of the videos on social media
                        </li>
                        <li>
                          Mention in Superuser recap post
                        </li>
                        <li>
                          Recognition during OpenInfra Live episodes leading
                          up to the event
                        </li>
                        <li>
                          Inclusion in any relevant paid promotion
                        </li>
                        <li>
                          Demographic report of registered attendees
                        </li>
                      </ul>
                    </div>
                    <div className="level-price">
                      $30,000
                    </div>
                  </section>
                <section className="level-single supporting">
                  <div className="level-heading">
                    Supporting
                  </div>
                  <div className="level-bullets">
                    <ul>
                      <li>
                        Logo recognition during event
                      </li>
                      <li>
                        Website logo placement
                      </li>
                      <li>
                        Pre/post event mentions in the community newsletter/social media posts
                      </li>
                      <li>
                        Brand mention in the abstracts of the videos on social media
                      </li>
                      <li>
                        Mention in Superuser recap post
                      </li>
                      <li>
                        Recognition during OpenInfra Live episodes leading
                        up to the event
                      </li>
                      <li>
                        Demographic report of registered attendees
                      </li>
                    </ul>
                  </div>
                  <div className="level-price">
                    $2,500
                  </div>
                </section>
                </div>
              </section>
              <div className="sponsor-cta">
                <p className="fix-h5">
                  Interested in sponsoring? Email us at <a href="mailto:events@openstack.org">events@openstack.org</a>
                </p>
                <p className="sponsor-note">*Sponsorships detailed above are exclusively for OpenInfra Foundation members.</p>
              </div>
            </div>
          </section>
          <PageContent content={content} />
        </div>
      </main>
    </div>
  )
}

const OpenInfraLiveKeynotesPage = ({ OpenInfraLiveKeynotesPage, data, isLoggedUser }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <OpenInfraLiveKeynotesTemplate
        OpenInfraLiveKeynotesPage={OpenInfraLiveKeynotesPage}
        contentComponent={HTMLContent}
        hero={post.frontmatter.hero}
        intro={post.frontmatter.intro}
        episodes={post.frontmatter.episodes}
        content={post.html}
        footer={post.frontmatter.footer}
        isLoggedUser={isLoggedUser}
      />
    </Layout>
  )
}

OpenInfraLiveKeynotesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(OpenInfraLiveKeynotesPage)


export const OpenInfraLiveKeynotesPageQuery = graphql`
  query OpenInfraLiveKeynotesPage($id: String!) {
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
        hero {
          subtitle
          title
          description
          buttonText
          buttonURL
        }
        intro {
          text
        }
        episodes {
          date
          episodeTitle
          episodeDescription
          episodeSpeakers
          youtubeEmbed
          youtubeLink
          facebookLink
          linkedinLink
          calendarInvite
          superuserRecap
          hidden
        }
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
