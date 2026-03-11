import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import NavbarV2 from '../components/NavbarV2'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import LinkComponent from '../components/LinkComponent'
import { connect } from 'react-redux'

import '../style/modules/_digital-sovereignty.scss'

const normalizeLogoUrl = (url) => {
  if (!url) return null
  // If Gatsby/fmImagesToRelative rewrote the path into ../../../static/..., recover the /img/... segment
  const imgIndex = url.indexOf('/img/')
  if (imgIndex !== -1) {
    return url.slice(imgIndex)
  }
  return url
}

export const DigitalSovereigntyPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  footer,
  stanceHtml,
  quotes,
  relatedResources,
  joinHtml,
  members,
}) => {
  return (
    <div className="digital-sovereignty-page">
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <Header title={title} subTitle={subTitle} />
      </div>

      <main className="main">
        <div className="content">
          {/* Stance section - white background */}
          <section className="ds-section ds-section-stance">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div
                    className="ds-stance-body"
                    dangerouslySetInnerHTML={{ __html: stanceHtml }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Quotes section - dark background, quote styling */}
          {quotes && quotes.length > 0 && (
            <section className="ds-section ds-section-quotes">
              <div className="container">
                <h2 className="ds-section-title ds-section-title-light">OpenInfra in Practice</h2>
                <div className="ds-quotes-container">
                  {quotes.map((q, i) => (
                    <div key={i} className="ds-quote-card">
                      <p className="ds-quote-text">{q.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Related resources - light background, card grid 3 per row desktop */}
          {relatedResources && relatedResources.length > 0 && (
            <section className="ds-section ds-section-resources">
              <div className="container">
                <h2 className="ds-section-title">Related Resources</h2>
                <div className="ds-resources-grid">
                  {relatedResources.map((r, i) => {
                    const iconKey = r.icon || (i === 2 ? 'video' : 'article')
                    const iconPath = iconKey === 'video' ? '/img/video.svg' : '/img/article.svg'
                    const iconAlt = iconKey === 'video' ? 'Video resource' : 'Article resource'
                    return (
                    <LinkComponent
                      key={i}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-resource-card"
                    >
                      <span className="ds-resource-card-icon">
                        <img
                          src={iconPath}
                          alt={iconAlt}
                        />
                      </span>
                      <span className="ds-resource-card-text">{r.title}</span>
                    </LinkComponent>
                  )})}
                </div>
              </div>
            </section>
          )}

          {/* Join Digital Sovereignty Working Group - dark background */}
          <section className="ds-section ds-section-join">
            <div className="container">
              <h2 className="ds-section-title ds-section-title-light">
                Join the OpenInfra Digital Sovereignty Working Group
              </h2>
              <div className="ds-join-body">
                <p>
                  The OpenInfra Digital Sovereignty Working Group meets regularly to collaborate on guiding resources in the space and how to leverage OpenInfra technologies, surface new regulations that are being leveled globally shaping the future of digital sovereignty, discuss case studies and share perspectives from different regions around the world.
                </p>
                <p>
                  If your organization is building a digital sovereignty strategy with OpenInfra technologies (or wants to!), get involved in the OpenInfra Digital Sovereignty Working Group by{' '}
                  <a href="https://etherpad.opendev.org/p/Digital-Sovereignty-WG" target="_blank" rel="noopener noreferrer">filling out this interest form</a>.
                </p>
              </div>
              <div className="ds-join-cta">
                <LinkComponent
                  href="https://etherpad.opendev.org/p/Digital-Sovereignty-WG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ds-join-button"
                >
                  Get Involved
                </LinkComponent>
              </div>
            </div>
          </section>

          {/* Members logos - light background, 6 then 5 per row desktop, 3 mobile */}
          {members && members.length > 0 && (
            <section className="ds-section ds-section-members">
              <div className="container">
                <h2 className="ds-section-title">Digital Sovereignty Working Group Members</h2>
                <div className="ds-members-grid">
                  {members.map((m, i) => {
                    const src = normalizeLogoUrl(m.logoUrl)
                    return (
                      <div key={i} className="ds-member-logo-wrapper">
                        {m.link ? (
                          <LinkComponent
                            href={m.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ds-member-logo-link"
                          >
                            {src ? (
                              <img src={src} alt={m.name} />
                            ) : (
                              <span className="ds-member-name">{m.name}</span>
                            )}
                          </LinkComponent>
                        ) : src ? (
                          <img src={src} alt={m.name} />
                        ) : (
                          <span className="ds-member-name">{m.name}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {footer?.display && (
            <Hero content={footer} />
          )}
        </div>
      </main>
    </div>
  )
}

DigitalSovereigntyPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
  stanceHtml: PropTypes.string,
  quotes: PropTypes.array,
  relatedResources: PropTypes.array,
  joinHtml: PropTypes.string,
  members: PropTypes.array,
}

const DigitalSovereigntyPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = post

  // Extract stance body: content after first </h2> until next <h2> or end of string
  const html = post.html || ''
  const firstSectionMatch = html.match(/<h2[^>]*>[\s\S]*?<\/h2>([\s\S]*?)(?=<h2|$)/i)
  const stanceHtml = firstSectionMatch ? firstSectionMatch[1].trim() : ''

  // Extract join section body: content after "Join the OpenInfra..." h2 until next <h2>
  const joinSectionMatch = html.match(/<h2[^>]*>Join the OpenInfra[\s\S]*?<\/h2>([\s\S]*?)(?=<h2|$)/i)
  const joinHtml = joinSectionMatch ? joinSectionMatch[1].trim() : ''

  const quotes = frontmatter.quotes || []
  const relatedResources = frontmatter.relatedResources || []
  const members = frontmatter.members || []

  return (
    <Layout>
      <SEO seo={frontmatter.seo ? frontmatter.seo : null} />
      <DigitalSovereigntyPageTemplate
        isLoggedUser={isLoggedUser}
        title={frontmatter.title}
        subTitle={frontmatter.subTitle}
        footer={frontmatter.footer}
        stanceHtml={stanceHtml}
        quotes={quotes}
        relatedResources={relatedResources}
        joinHtml={joinHtml}
        members={members}
      />
    </Layout>
  )
}

DigitalSovereigntyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(DigitalSovereigntyPage)

export const digitalSovereigntyPageQuery = graphql`
  query DigitalSovereigntyPage($id: String!) {
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
        quotes {
          text
        }
        relatedResources {
          title
          url
          icon
        }
        members {
          name
          logoUrl
          link
        }
      }
    }
  }
`
