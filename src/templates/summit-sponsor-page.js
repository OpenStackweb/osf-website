import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactFormHorizontal from '../components/ContactFormHorizontal'
import { summitSponsorLevel } from '../components/SummitSponsorLevel'

import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import SubNav from '../components/SummitSubNav'
import { connect } from "react-redux";

import LinkComponent from '../components/LinkComponent';

import leftArrow from '../img/svg/arrow-left.svg'
import TravelSupportPic from '../../static/img/summit/Tokyo-travel-support-pic.jpg'
import Cannonical from '../../static/img/summit/ubuntu-cannonical.svg'
import SponsorBooths from '../../static/img/summit/marketamfull-105s.jpg'

export const SummitSponsorPageTemplate = ({
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
        <SubNav active="summit-sponsor" pageName="Sponsors"/>
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
                <section className="cta-wrapper">
                  <LinkComponent className="button-cta" href="/summit-sponsor/#howToSponsor">Steps to Sponsor<img src={leftArrow} alt="" /></LinkComponent>
                </section>
              </div>
              <div className="header-right" style={{marginBottom: "0px"}}>
                <div className="picture">
                  <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                </div>
              </div>
            </section>
          }

            <section id="howToSponsor" className="sponsor-steps" style={{marginTop: "0px"}}>

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
                  <th>Member Price</th>
                  <th>Non-Member Price</th>
                </tr>
                <tr>
                  <td><strong>Headline</strong></td>
                  <td>$110,000</td>
                  <td>$125,000</td>
                </tr>
                <tr>
                  <td><strong>Premier</strong></td>
                  <td>$75,000</td>
                  <td>$90,000</td>
                </tr>
                <tr>
                  <td><strong>Spotlight</strong></td>
                  <td>$25,000</td>
                  <td>$35,000</td>
                </tr>
                <tr>
                  <td><strong>Exhibitor</strong></td>
                  <td>$10,000</td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <td><strong>Exhibitor (Startup*)</strong></td>
                  <td>$7,500</td>
                  <td>$10,000</td>
                </tr>
                <tr>
                  <td><strong>Supporting</strong></td>
                  <td>$2,500</td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td colSpan="3" className="join-row">Not a member? Learn how to 
                    <a onClick={() => summitSponsorLevel(5)} href="/join"> join the foundation</a>.
                  </td>
                </tr>
              </table>
            </section>
            {/*
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
            */}
            <section id="sponsorship-contact" className="sponsor-contact">
              <h5 className="sponsorship-contact">Have Questions About Sponsoring?</h5>
              <span className="contact-description">Contact us with any questions about sponsoring the Berlin Summit.</span>
                <ContactFormHorizontal style={{backgroundColor: "white"}}/>
            </section>

        </div>
      </main>
    </div>
  )
}

SummitSponsorPageTemplate.propTypes = {
  header: PropTypes.object,
  form: PropTypes.object,
  topics: PropTypes.object,
  previousSummits: PropTypes.object,
  videoBanner: PropTypes.object,
  sponsorships: PropTypes.object,
}

const SummitSponsorPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <SummitSponsorPageTemplate
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

SummitSponsorPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SummitSponsorPage)

export const summitSponsorPageQuery = graphql`
  query SummitSponsorPage($id: String!) {
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
