import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import SubNav from '../components/SummitSubNav'
import leftArrow from '../img/svg/arrow-left.svg'

import { connect } from "react-redux";

export const SummitOnsitePageTemplate = ({
  isLoggedUser,
  upperTitle,
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
        <Navbar isLoggedUser={isLoggedUser} />
        <SubNav active="summit-onsite" pageName="Onsite Info" isLoggedUser={isLoggedUser}/>
        
        <main className="main">
        <section className="hero-main summit">
          <div className="hero-body">
            <div className="container">
              <div className="hero-project-content summit">
                <div className="upper-title">{upperTitle}</div>
                <h3 className="hero-project-title">{title}</h3> 
                <div className="hero-project-entry">
                This is where you’ll find almost anything you need while on site at the OpenInfra Summit, including the <a href="#maps">venue map</a>, <a href="#wifi">Wifi credentials</a>, the <a href="#schedule">schedule</a>, where to <a href="#help">get help</a>, <a href="#help">health & safety protocols</a>, and the <a href="#help">code of conduct</a>.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      </div>

      <main className="main">
        <div className="content">
          <div className='container'>
            <section className='summit-wifi' id="wifi">
              <div className='wifi-left'>
                <img src="/img/summit/berlin/summit-berlin-logo.svg" />
              </div>
              <div className='wifi-right'>
                <p>How to get online while in the Summit venue:</p>
                <p>SSID: <strong>OpenInfraSummit</strong></p>
                <p>PW: <strong>Weareopeninfra!</strong></p>
              </div>
            </section>
          </div>
          <section className='summit-map' id="maps">
            <div className='container'>
              <h3 className='fix-h3'>Venue Map</h3>
              <a href="/files/OpenInfraSummit-BCC-Map.pdf">
                <img className='venue-map' src="/img/summit/berlin/OpenInfraSummit-BCC-Map.jpg" />
              </a>
              <a href="/files/OpenInfraSummit-BCC-Map.pdf" class="map-link">Download the Full Map</a>
            </div>
          </section>
          <div className='container'>
            <section className='summit-schedule' id="schedule">
              <h3 className='fix-h3'>Summit Schedule</h3>
              <p>
              Here's a high-level look at what's happening during the Summit. You can find more details by viewing the <a href="/summit-schedule">full Summit schedule</a>.
              </p>
              <p>
                <strong>Monday 3:30pm - 5:30pm:</strong> Register before the Tuesday crowd and grab a beverage at <a href="https://openinfra.dev/summit-schedule#title=badges&view=calendar">Badges and Beverages</a> in the OpenInfra Plaza.
              </p>
              <div className='schedule-summary'>
                <div className='schedule-left'>
                  <div className='schedule-top'>
                    Tuesday
                  </div>
                  <div className='schedule-rows'>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        8:00am - 5:45pm
                      </div>
                      <div className='list-right'>
                      Registration
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        8:00am - 4:00pm
                      </div>
                      <div className='list-right'>
                      <a href="/summit-sponsor">Marketplace</a> <em>(closed during keynotes)</em>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      8:00am - 4:00pm
                      </div>
                      <div className='list-right'>
                      Mirantis Biergarten <em>(closed during keynotes)</em>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am - 11:00am
                      </div>
                      <div className='list-right'>
                        Keynotes
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        11:00am - 6:00pm
                      </div>
                      <div className='list-right'>
                        <a href="/summit-schedule">Breakouts / Forum / Workshops / Demos / Lightning Talks</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        12:30pm - 1:30pm
                      </div>
                      <div className='list-right'>
                        Lunch
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        3:20pm - 4:00pm
                      </div>
                      <div className='list-right'>
                        Midday Mixer
                      </div>
                    </div>
                  </div>
                </div>
                <div className='schedule-mid'>
                  <div className='schedule-top'>
                    Wednesday
                  </div>
                  <div className='schedule-rows'>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        8:30am - 5:45pm
                      </div>
                      <div className='list-right'>
                      Registration
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        8:00am - 4:00pm
                      </div>
                      <div className='list-right'>
                      <a href="/summit-sponsor">Marketplace</a> <em>(closed during keynotes)</em>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      8:00am - 4:00pm
                      </div>
                      <div className='list-right'>
                      Mirantis Biergarten <em>(closed during keynotes)</em>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am - 11:00am
                      </div>
                      <div className='list-right'>
                        Keynotes
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        11:00am - 6:00pm
                      </div>
                      <div className='list-right'>
                        <a href="/summit-schedule">Breakouts / Forum / Workshops / Demos / Lightning Talks</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        12:30pm - 1:30pm
                      </div>
                      <div className='list-right'>
                        Lunch <em>(Diversity & Inclusion Lunch sponsored by Red Hat in A02)</em>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        3:20pm - 4:00pm
                      </div>
                      <div className='list-right'>
                        Midday Mixer
                      </div>
                    </div>
                  </div>
                </div>
                <div className='schedule-right'>
                  <div className='schedule-top'>
                    Thursday
                  </div>
                  <div className='schedule-rows'>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        8:30am - 1:30pm
                      </div>
                      <div className='list-right'>
                      Registration
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        8:30am - 4:00pm
                      </div>
                      <div className='list-right'>
                        <a href="/summit-sponsor">Marketplace</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      8:30am - 4:00pm
                      </div>
                      <div className='list-right'>
                      Mirantis Biergarten
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am - 6:00pm
                      </div>
                      <div className='list-right'>
                      <a href="/summit-schedule">Breakouts / Forum / Workshops / Demos / Lightning Talks</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                        12:20pm - 1:20pm
                      </div>
                      <div className='list-right'>
                        Lunch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button">
                <a href="/summit-schedule">Full Schedule <img src={leftArrow} alt="left" /></a>
              </div>
            </section>
          </div>
          <section className='summit-help' id="help">
            <div className='container'>
              <div className='help-wrapper'>
                <div className='help-item'>
                  <img src="/img/summit/berlin/help.svg" />
                  <h3 className='fix-h3'>Where to Get Help</h3>
                  <p>Registration is located outside in the OpenInfra Plaza. This area will always be staffed and can provide updates on lost items, as well as answers to venue and Summit questions.</p>
                  <p>
                  Have questions? Email <a href="mailto:summit@openinfra.dev">summit@openinfra.dev</a>
                  </p>
                </div>
                <div className='help-item'>
                  <img src="/img/summit/berlin/mask.svg" />
                  <h3 className='fix-h3'>Health & Safety</h3>
                  <p>
                  Masks are required (over nose and mouth) for all attendees except while eating drinking or when delivering a conference talk. Please consult the <a href="/summit-covid">Summit Health & Safety protocol</a> for all onsite guidelines.
                  </p>
                </div>
                <div className='help-item'>
                  <img src="/img/summit/berlin/terminal.svg" />
                  <h3 className='fix-h3'>Contributors' Corner</h3>
                  <p>A place for OpenInfra project teams to collaborate together in-person, located on Level A near the OpenInfra Theater.</p>
                  <p>
                    <a href="https://ptg.opendev.org/ptg.html">Reserve your space using PTGbot</a>
                  </p>
                </div>
                <div className='help-item'>
                  <img src="/img/summit/berlin/heart.svg" />
                  <h3 className='fix-h3'>Code of Conduct</h3>
                  <p>We are a diverse community of professionals, and the OpenInfra Foundation is dedicated to providing an inclusive and safe Summit experience for everyone. View the <a href="/legal/code-of-conduct/events">Summit Code of Conduct</a> for more information.
                  </p>
                </div>
                <div className='help-item'>
                  <img src="/img/summit/berlin/social.svg" />
                  <h3 className='fix-h3'>Social Media</h3>
                  <p>Post your favorite OpenInfra Summit moments on social media and use our event hashtags!</p>
                  <p>
                    <strong>#OpenInfraSummit<br/>
                    #WeAreOpenInfra</strong>
                  </p>
                </div>
                <div className='help-item'>
                  <img src="/img/summit/berlin/star.svg" />
                  <h3 className='fix-h3'>Rate the Summit</h3>
                  <p>
                  Your feedback is important and helps us shape future OpenInfra events! Let us know how we're doing by sharing your feedback in the attendee survey (link available soon).
                  </p>
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

SummitOnsitePageTemplate.propTypes = {
  companies: PropTypes.object,
  upperTitle: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const SummitOnsitePage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <SummitOnsitePageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        upperTitle={post.frontmatter.upperTitle}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        footer={post.frontmatter.footer}
        content={post.html}
      />
    </Layout>
  )
}

SummitOnsitePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SummitOnsitePage)

export const summitOnsitePageQuery = graphql`
  query SummitOnsitePage($id: String!) {
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
        upperTitle
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
