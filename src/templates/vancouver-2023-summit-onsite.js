import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import SubNavYvr from '../components/SummitSubNavYvr'
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
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <SubNavYvr active="summit" pageName="Onsite Info" isLoggedUser={isLoggedUser}/>
        
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
                <img src="/img/summit/vancouver-2023/oi-vancouver-logo.svg" />
              </div>
              <div className='wifi-right'>
                {/* <p>Wireless internet password coming soon</p> */}
                <p>How to get online while in the Summit venue:</p>
                <p>SSID: <strong>OpenInfraSummit</strong></p>
                <p>PW: <strong>Weareopeninfra!</strong></p>
              </div>
            </section>
          </div>
          <section className='summit-map' id="maps">
            <div className='container'>
              <h3 className='fix-h3'>Venue Map</h3>
              <a href="/img/summit/vancouver-2023/full-map.png">
                <img className='venue-map' src="/img/summit/vancouver-2023/map-thumb.png" />
              </a>
              {/* <p>Venue map coming soon</p> */}
              <a href="/img/summit/vancouver-2023/full-map.png" class="map-link">Download the Full Map</a>
            </div>
          </section>
          <div className='container'>
            <section className='summit-schedule' id="schedule">
              <h3 className='fix-h3'>Summit Schedule</h3>
              <p>
              Here's a high-level look at what's happening during the Summit. You can find more details by viewing the <a href="https://vancouver2023.openinfra.dev/a/schedule">full Summit schedule</a>.
              </p>
              <p>
              Summit schedule overview coming soon
              </p>
              <div className='schedule-summary'>
                <div className='schedule-left'>
                  <div className='schedule-top'>
                    Tuesday
                  </div>
                  <div className='schedule-rows'>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      7:30am
                      </div>
                      <div className='list-right'>
                      Registration Opens
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      8:30am – 3:15pm
                      </div>
                      <div className='list-right'>
                      <a href="/summit-sponsor">OpenInfra Marketplace Open</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:30am – 2:50pm
                      </div>
                      <div className='list-right'>
                        <a href="https://vancouver2023.openinfra.dev/a/schedule">Breakout and Forum Session</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      12:30pm – 1:45pm
                      </div>
                      <div className='list-right'>
                      Off Campus Lunch
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      3:15pm – 5:45pm
                      </div>
                      <div className='list-right'>
                      <a href="https://vancouver2023.openinfra.dev/a/schedule#track=427&view=calendar">Keynotes</a>
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
                        8:30am
                      </div>
                      <div className='list-right'>
                      Registration Opens
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am – 6:00pm
                      </div>
                      <div className='list-right'>
                      <a href="/summit-sponsor">OpenInfra Marketplace Open</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am – 6:00pm
                      </div>
                      <div className='list-right'>
                      <a href="/ptg">PTG</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am – 4:20pm
                      </div>
                      <div className='list-right'>
                        <a href="https://vancouver2023.openinfra.dev/a/schedule">Breakout and Forum Session</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      12:50pm – 2:30pm
                      </div>
                      <div className='list-right'>
                      Off Campus Lunch
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      12:50pm - 2:30pm
                      </div>
                      <div className='list-right'>
                      <a href="https://vancouver2023.openinfra.dev/a/schedule#title=Diversity%20%26%20Inclusion%20Lunch%20Sponsored%20by%20Bloomberg&view=calendar">Diversity and Inclusion Lunch sponsored by Bloomberg</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      4:30pm – 6:00pm
                      </div>
                      <div className='list-right'>
                      <a href="https://www.openinfra.dev/summit-sponsor">Marketplace Mixer</a>
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
                        8:30am
                      </div>
                      <div className='list-right'>
                      Registration Opens
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am – 2:00pm
                      </div>
                      <div className='list-right'>
                      <a href="/summit-sponsor">OpenInfra Marketplace Open</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am – 6:00pm
                      </div>
                      <div className='list-right'>
                      <a href="/ptg">PTG</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am – 6:00pm
                      </div>
                      <div className='list-right'>
                      <a href="https://vancouver2023.openinfra.dev/a/schedule#date=2023-06-15&venues=559&view=calendar">Ceph Days Vancouver</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      9:00am – 5:50pm
                      </div>
                      <div className='list-right'>
                        <a href="https://vancouver2023.openinfra.dev/a/schedule">Sessions</a>
                      </div>
                    </div>
                    <div className='schedule-row'>
                      <div className='list-left'>
                      12:50pm – 2:00pm
                      </div>
                      <div className='list-right'>
                      Off Campus Lunch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button">
                <a href="https://vancouver2023.openinfra.dev/a/schedule">Full Schedule <img src={leftArrow} alt="left" /></a>
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
                  Masks are required (over nose and mouth) for all attendees except while eating drinking or when delivering a conference talk. Please consult the <a href="/summit/vancouver-2023/summit-onsite-safety">Summit Health & Safety protocol</a> for all onsite guidelines.
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
                  <p>We are a diverse community of professionals, and the OpenInfra Foundation is dedicated to providing an inclusive and safe Summit experience for everyone. View the <a href="/legal/code-of-conduct">Summit Code of Conduct</a> for more information.
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
                  Your feedback is important and helps us shape future OpenInfra events! Let us know how we're doing by sharing your feedback in the attendee survey.
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
