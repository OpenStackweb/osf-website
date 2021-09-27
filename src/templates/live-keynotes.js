import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import SpeakerCard from "../components/SpeakerCard";
import ColorBar from '../img/color-bar.png'
import leftArrow from '../img/svg/arrow-left.svg'

import { connect } from "react-redux";

export const OpenInfraLiveKeynotesTemplate = ({
  isLoggedUser,
  contentComponent,
  content,
  hero,
  intro,
  statSection,
  headlineSponsor,
  supportingSponsors,
  featuredSpeakers,
  sponsorshipSection,
  interestedSection
}) => {
  const PageContent = contentComponent || Content

  const getImage = (imageObj) => {
    return !!imageObj?.childImageSharp ? imageObj?.childImageSharp.fluid.src: imageObj.publicURL;
  }

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
              <div className="intro-inner">
                <p className="fix-h5" dangerouslySetInnerHTML={{ __html: intro.text }} />
              </div>
            </div>
          </section>
          <section className="live-section">
            <div className="container">
              <section className="keynotes-bullets">
                <div className="stat-section">
                  <h3>{statSection.leftColumn.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: statSection.leftColumn.text }} />
                </div>
                <div className="stat-section">
                  <h3>{statSection.rightColumn.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: statSection.rightColumn.text }} />
                </div>
              </section>
              <section className="keynotes-stats">
                {statSection.stats.map(stat => (
                    <div className="single-stat">
                      <strong>{stat.number}</strong>
                      {stat.caption}
                    </div>
                ))}
              </section>
            </div>
          </section>
          <section className="keynotes-sponsors">
            <div className="container">
              <section className="sponsor-section headline">
                <h3>{headlineSponsor.title}</h3>
                <div className="logos">
                  <img src={getImage(headlineSponsor.logo)} />
                </div>
              </section>
              <section className="sponsor-section supporting-sponsors">
                <h3>{supportingSponsors.title}</h3>
                <div className="logos">
                  {supportingSponsors.sponsors.map(sponsor => (
                      <img src={getImage(sponsor.logo)} />
                  ))}
                </div>
              </section>
            </div>
          </section>
          <section className="featured-speakers">
            <div className="container">
              <h3>{featuredSpeakers.title}</h3>
              <div className="featured-speakers-wrapper">
                <div className="first-row">
                  {featuredSpeakers.speakers.slice(0,4).map(speaker => (
                      <SpeakerCard speaker={speaker} pic={getImage(speaker.pic)}/>
                  ))}
                </div>
                <div className="second-row">
                  {featuredSpeakers.speakers.slice(4).map(speaker => (
                      <SpeakerCard speaker={speaker} pic={getImage(speaker.pic)}/>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="live-section">
            <div className="container">
              <section className="sponsor-levels">
                <h3>{sponsorshipSection.title}</h3>
                <div className="level-listing">
                  <section className="level-single headline">
                    <div className="level-heading">
                      {sponsorshipSection.leftColumn.title}
                    </div>
                    <div className="level-bullets">
                      <p dangerouslySetInnerHTML={{ __html: sponsorshipSection.leftColumn.body }} />
                    </div>
                    <div className="level-price">
                      {sponsorshipSection.leftColumn.footer}
                    </div>
                  </section>
                  <section className="level-single supporting">
                    <div className="level-heading">
                      {sponsorshipSection.rightColumn.title}
                    </div>
                    <div className="level-bullets">
                      <p dangerouslySetInnerHTML={{ __html: sponsorshipSection.rightColumn.body }} />
                    </div>
                    <div className="level-price">
                      {sponsorshipSection.rightColumn.footer}
                    </div>
                  </section>
                </div>
              </section>
              <div className="sponsor-cta">
                <p className="fix-h5">
                  {interestedSection.preEmailText} <a href={`mailto:${interestedSection.email}`}>{interestedSection.email}</a>
                </p>
                <p className="sponsor-note">{interestedSection.preJoinText} <a href={interestedSection.joinUrl}>{interestedSection.joinText}</a></p>
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
        {...post.frontmatter}
        content={post.html}
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
        statSection {
          leftColumn {
            title
            text
          }
          rightColumn {
            title
            text
          }
          stats {
            number
            caption
          }
        }
        headlineSponsor {
          title
          logo {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
          }
        }
        supportingSponsors {
          title
          sponsors {
            logo {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
            }
          }
        }
        featuredSpeakers {
          title
          speakers {
            name
            company
            presentationTitle
            presentationLink
            pic {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
            }
          }
        }
        sponsorshipSection {
          title
          leftColumn {
            title
            body
            footer
          }
          rightColumn {
            title
            body
            footer
          }
        }
        interestedSection {
          preEmailText
          email
          preJoinText
          joinText
          joinUrl
        }
      }
    }
  }
`
