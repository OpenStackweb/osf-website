import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactFormHorizontal from '../components/ContactFormHorizontal'
import { summitSponsorLevel } from '../components/SummitSponsorLevel'

import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'

import { connect } from "react-redux";

import LinkComponent from '../components/LinkComponent';

import leftArrow from '../img/svg/arrow-left.svg'
import TravelSupportPic from '../../static/img/summit/Tokyo-travel-support-pic.jpg'
import Cannonical from '../../static/img/summit/ubuntu-cannonical.svg' 

export const SummitPageTemplate = ({
  isLoggedUser,
  header,
  form,
  topics,
  previousSummits,
  videoBanner,
  sponsorships,
}) => {

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
      </div>

      <main className="main">
        <div className="content">
          {header && header.display &&
            <section className="summit-header">
              <div className="header-left">
                <span className="upper-title">
                  {header.upperTitle}
                </span>
                <span className="title">
                  {header.title}
                </span>
                <span className="description" dangerouslySetInnerHTML={{ __html: header.description }}>
                </span>
                <span className="date">
                  <img src={(header.date.icon.extension === 'svg' || header.date.icon.extension === 'gif') && !header.date.icon.childImageSharp ?
                    header.date.icon.publicURL
                    :
                    !!header.date.icon.childImageSharp ? header.date.icon.childImageSharp.fluid.src : header.date.icon} /> {header.date.text}
                </span>
                <span className="location">
                  <img src={(header.location.icon.extension === 'svg' || header.location.icon.extension === 'gif') && !header.location.icon.childImageSharp ?
                    header.location.icon.publicURL
                    :
                    !!header.location.icon.childImageSharp ? header.location.icon.childImageSharp.fluid.src : header.location.icon} /> {header.location.text}
                </span>
                <section className="cta-wrapper">
                  <LinkComponent className="button-cta" href="https://openinfrasummitberlin.eventbrite.com">Register Now<img src={leftArrow} alt="" /></LinkComponent>
                  <LinkComponent className="button-cta outline" href="#sponsor">Become a Sponsor</LinkComponent>
                </section>
              </div>
              <div className="header-right">
              <div className="hero-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gitMjvPnUG0" frameborder="0" allowfullscreen></iframe>
                </div>
              {/*}
                <div className="picture">
                  <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                </div>
                */}
              </div>
            </section>
          }
          {topics && topics.display &&
            <section className="summit-topics">
              <span className="title">{topics.title}</span>
              <div className="icons">
                {topics.topicList.map((t, index) => {
                  return (
                    <div className="summit-icon" key={index}>
                      <img src={!!t.image.childImageSharp ? t.image.childImageSharp.fluid.src : t.image} />
                      <span>{t.text}</span>
                    </div>
                  )
                })}
              </div>
            </section>
          }

          <section id="sponsor" className="sponsorship-levels">
            <span className="title">Sponsors</span>
            <span className="description">
              <p>The generous support of our sponsors makes it possible for our community to gather, learn and build the future of open infrastructure. A warm thank you to the sponsors of OpenInfra Summit Berlin 2022!</p>
            </span>
            <div className="sponsor-logos">
              <h3 className="small-title-summit">Headline Sponsor</h3>
              <div className="logos">
                <img className="headline" src={Cannonical} />
              </div>
            </div>
            </section>
            <section id="howToSponsor" className="sponsor-steps">
            <p>Having a presence at the Summit is a great way to get your company in front of the OpenInfra community. You can read about the various options in the Sponsorship Prospectus.</p>
              <p>Whichever level you choose to participate, you'll want to act quickly — we've already seen a lot of interest from potential sponsors.</p>
              <div className="step-single">
                <h5>Step 1: Prospectus</h5>
                <p><a href="/files/OpenInfra-Summit-Berlin2022-Prospectus.pdf">Review the Prospectus</a> and decide which sponsorship levels and add-ons you are interested in.</p>
                <a href="/files/OpenInfra-Summit-Berlin2022-Prospectus.pdf" className="button-cta outline">Review the Prospectus</a>
              </div>
              <div className="step-single">
                <h5>Step 2: Master Sponsor Agreement (New Sponsors Only)</h5>
                <p>If you have never previously sponsored an OpenInfra Summit, you will need to sign the <a href="https://openstack.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDh53oVYqMPudorYaywDlwyEnhPEo57rDjieE_XpCDXXuwgD-3MeQC5JKrTDu4cl7I*">Master Sponsorship Agreement</a> prior to signing the Berlin Sponsorship Contract.</p>
                <a href="https://openstack.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDh53oVYqMPudorYaywDlwyEnhPEo57rDjieE_XpCDXXuwgD-3MeQC5JKrTDu4cl7I*" className="button-cta outline">Master Sponsor Agreement</a>
              </div>
              <div className="step-single">
                <h5>Step 3: Berlin Sponsor Contract</h5>
                <p>
                  If you have sponsored an OpenInfra Summit before, then you will need to know the date when you signed the Master Sponsorship Agreement previously, as this information will be required in the first field of the Berlin Summit sponsor contract. If you do not know the date when you previously signed the Master Sponsorship Agreement please check <a href="https://docs.google.com/spreadsheets/d/1rxn2AXqG0uwwdbmNMd6R0QhAzoM_5vJXzTj6UIzMZ6I/edit?usp=sharing">this document</a> or email <a href="mailto:summit@openinfra.dev">summit@openinfra.dev</a>.
                </p>
                <p>After signing the <a href="https://openstack.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAtBzgBWHsfPkCNzzeV-fOf_bB3wZyW7cfhhLkniWjXR578ygqHOD2ZO87uXGi3-Yc*">Berlin Sponsor Agreement</a>, please check your email to make sure you confirm submission via Echosign.</p>
                <a href="https://openstack.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAtBzgBWHsfPkCNzzeV-fOf_bB3wZyW7cfhhLkniWjXR578ygqHOD2ZO87uXGi3-Yc*" className="button-cta">Berlin Sponsor Contract <img src={leftArrow} alt="Berlin Sponsor Agreement" /></a>
              </div>
              <p>
                Have any questions about sponsoring the Summit? <a href="#sponsorship-contact">Contact us</a>
              </p>
              <table className="sponsor-table">
                <tr className="top-row">
                  <th>Sponsorship Levels</th>
                  <th>Member</th>
                  <th>Non-Member</th>
                </tr>
                <tr>
                  <th>Headline</th>
                  <td>$110,000</td>
                  <td>$125,000</td>
                </tr>
                <tr>
                  <th>Premier</th>
                  <td>$75,000</td>
                  <td>$90,000</td>
                </tr>
                <tr>
                  <th>Spotlight</th>
                  <td>$25,000</td>
                  <td>$35,000</td>
                </tr>
                <tr>
                  <th>Exhibitor</th>
                  <td>$10,000</td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <th>Exhibitor (Startup*)</th>
                  <td>$7,500</td>
                  <td>$10,000</td>
                </tr>
                <tr>
                  <th>Supporting</th>
                  <td>$2,500</td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td colSpan="3" className="join-row">Not a member? Learn how to 
                    <a onClick={() => summitSponsorLevel(5)} href="/join"> join the foundation</a>.
                  </td>
                </tr>
              </table>
            <h5 className="sponsorship-contact">Have Questions About Sponsoring?</h5>
            <span className="contact-description">Contact us with any questions about sponsoring the Berlin Summit.</span>
              <ContactFormHorizontal style={{backgroundColor: "#f3f3f3"}}/>
            </section>

          {previousSummits && previousSummits.display &&
            <section className="summit-previous">
              <span className="title">
                {previousSummits.title}
              </span>
              <div className="summits">
                {previousSummits.summitList.map((summit, index) => {
                  return (
                    <div className="summit-wrapper" key={`summit-${index}`}>
                      <img src={!!summit.image.childImageSharp ? summit.image.childImageSharp.fluid.src : summit.image} />
                      <span className="location">{summit.location}</span>
                      <span className="date">{summit.date}</span>
                      <LinkComponent className="summit-cta" href={summit.button.link} >{summit.button.text} <img src={leftArrow} alt="" /></LinkComponent>
                    </div>
                  )
                })}
              </div>
            </section>
          }
          {videoBanner && videoBanner.display &&
            <section className="summit-video">
              <span className="title">{videoBanner.title}</span>
              <LinkComponent className="video-cta" href={videoBanner.button.link}>{videoBanner.button.text} <img src={leftArrow} alt="" /></LinkComponent>
            </section>
          }
          <section className="travel-support">
            <div className="text">
              <span className="title">Travel Support Program & Visa Letters</span>
              <span className="description">Need assistance getting to the Berlin Summit? We can help! If you are a key contributor to open infrastructure and your company does not cover the costs of your travel and accommodation, you can apply for the Travel Support Program. We can also provide you with a visa invitation letter from the Foundation to meet travel requirements.</span>
              <div className="links-row">
                <LinkComponent className="summit-cta" href="https://openinfrafoundation.formstack.com/forms/TSP_Berlin2022" >Apply For Support<img src={leftArrow} alt="" /></LinkComponent>
                <LinkComponent className="summit-cta" href="https://openinfrafoundation.formstack.com/forms/visa_berlin2022" >Get Visa Letter<img src={leftArrow} alt="" /></LinkComponent>
              </div>
            </div>
            <div className="picture">
              <img src={TravelSupportPic} />
            </div>

          </section>
          {form && form.display &&
            <section className="summit-form">
              <div className="summit-form-container">
                <div className="form-columns">
                  <div className="form-left">
                    <div className="picture">
                      <img src={!!form.image.childImageSharp ? form.image.childImageSharp.fluid.src : form.image} />
                    </div>
                    <span className="title-mobile">
                      {form.title}
                    </span>
                  </div>
                  <div className="form-right">
                    <span className="title-desktop">
                      {form.title}
                    </span>
                    <div>
                      <LinkComponent className="form-cta" href={form.button.link}>{form.button.text} <img src={leftArrow} alt="" /></LinkComponent>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        </div>
      </main>
    </div>
  )
}

SummitPageTemplate.propTypes = {
  header: PropTypes.object,
  form: PropTypes.object,
  topics: PropTypes.object,
  previousSummits: PropTypes.object,
  videoBanner: PropTypes.object,
  sponsorships: PropTypes.object,
}

const SummitPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <SummitPageTemplate
        isLoggedUser={isLoggedUser}
        header={post.frontmatter.header}
        form={post.frontmatter.form}
        topics={post.frontmatter.topics}
        previousSummits={post.frontmatter.previousSummits}
        videoBanner={post.frontmatter.videoBanner}
        sponsorships={post.frontmatter.sponsorships}
      />
    </Layout>
  )
}

SummitPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SummitPage)

export const summitPageQuery = graphql`
  query SummitPage($id: String!) {
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
        header {
          display
          title
          upperTitle
          description
          date {
            text
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          location {
            text
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
        form {
          display
          title
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          button {
            text
            link
          }
        }
        topics {
          display
          title
          topicList {
            text
            image {
            childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
            publicURL
            }
          }
        }
        previousSummits {
          display
          title
          summitList {
            location
            date
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            button {
              text
              link
            }
          }
        }
        videoBanner {
          display
          title
          button {
            text
            link
          }
        }
        sponsorships {
          display
          title
          text
          button {
            text
            link
          }
          previous {
            text
            link
          }
          sponsorList {
            alt
            image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
          }
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
