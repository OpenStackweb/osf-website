import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'
import LogoBanner from '../components/LogoBanner'
import SubNav from '../components/SummitSubNav'
import LinkComponent from '../components/LinkComponent';
import leftArrow from '../img/svg/arrow-left.svg'
import TravelSupportPic from '../../static/img/summit/Tokyo-travel-support-pic.jpg'
import CodeOfConductPic from '../../static/img/summit/inclusive 2.jpeg'
import SummitSponsorSlider from '../components/SummitSponsorSlider'
import FeaturedSpeakers from '../components/FeaturedSpeakers';

export const Berlin2022SummitPageTemplate = ({
  isLoggedUser,
  header,
  form,
  topics,
  previousSummits,
  videoBanner,
  featured_speakers,
  summit_sponsors
}) => {

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <SubNav active="summit" pageName="Home" isLoggedUser={isLoggedUser} />
      </div>

      <main className="main">
        <div className="content">
          {header && header.display &&
            <section className="summit-header">
              <div className="header-left summit-header-videos">
                <span className="upper-title">
                  {header.upperTitle}
                </span>
                <span className="title">
                  {header.title}
                </span>
                <span className="description" dangerouslySetInnerHTML={{ __html: header.description }}></span><span className="description">Learn about our <a href="/summit/berlin-2022/summit-covid">COVID safety measures</a>.</span>
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
                <div className="cta-wrapper">
                    {header.buttons.map((button, index) => {
                        return (
                            <a
                                key={`header-button-${index}`}
                                href={button.link} className="button-cta">
                                {button.text} <img src={leftArrow} alt="left" />
                            </a>
                        )
                    })}
                </div>
              </div>
              <div className="header-right">
                <div className="hero-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/gitMjvPnUG0" frameBorder={"0"} allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
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

          <FeaturedSpeakers featured_speakers={featured_speakers} />

          <section className="logo-slider-section">
            <span className="title">Sponsors</span>
            <span className="description">
              <p>The generous support of our sponsors makes it possible for our community to gather, learn and build the future of open infrastructure. A warm thank you to the sponsors of OpenInfra Summit Berlin 2022!</p>
            </span>
            <SummitSponsorSlider summit_sponsors={summit_sponsors} />
            <LinkComponent className="button-cta" href="/summit/berlin-2022/summit-sponsor">View all Sponsors<img src={leftArrow} alt="" /></LinkComponent>
          </section>

          {/* <LogoBanner title="Register before tickets sell out!" cta="Register Now" href="https://openinfrasummitberlin.eventbrite.com/" /> */}
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

          <section style={{ backgroundColor: "white", marginTop: "unset" }} className="travel-support">
            <div className="text">
              <span className="title">Travel Support Program & Visa Letters</span>
              <span className="description">Need assistance getting to the Berlin Summit? We can help! If you are a key contributor to open infrastructure and your company does not cover the costs of your travel and accommodation, you can apply for the Travel Support Program. We can also provide you with a visa invitation letter from the Foundation to meet travel requirements.</span>
              <div className="links-row">
                <LinkComponent className="summit-cta" href="https://www.eventbrite.com/e/openinfra-summit-berlin-2022-tickets-211374997307?_ga=2.68872401.1325681225.1649877611-315797085.1648481307" >Donate Now</LinkComponent>
                <LinkComponent className="summit-cta" href="https://openinfrafoundation.formstack.com/forms/visa_berlin2022" >Get Visa Letter<img src={leftArrow} alt="" /></LinkComponent>
              </div>
            </div>
            <div className="picture">
              <img alt="travel pic support" src={TravelSupportPic} />
            </div>
          </section>
          <section style={{ marginTop: "unset" }} className="code-of-conduct">
            <div className="text">
              <span className="title">Inclusive. Diverse. Open.</span>
              <span className="description">
                We are a diverse community of professionals, and the OpenInfra Foundation is
                dedicated to providing an inclusive and safe Summit experience for everyone.
                View the <LinkComponent href="/legal/code-of-conduct" >Summit Code of Conduct</LinkComponent> for more information.</span>
            </div>
            <div className="picture">
              <img alt="travel pic support" src={CodeOfConductPic} />
            </div>
          </section>
          <hr className="dividing-line" />
          {previousSummits && previousSummits.display &&
            <section className="summit-previous" style={{ marginTop: "60px" }}>
              <span className="title">
                {previousSummits.title}
              </span>
              <div className="summits">
                {previousSummits.summitList.map((summit, index) => {
                  return (
                    <div className="summit-wrapper" key={`summit-${index}`}>
                      <img alt="summit image" src={!!summit.image.childImageSharp ? summit.image.childImageSharp.fluid.src : summit.image} />
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

          {form && form.display &&
            <section className="summit-form">
              <div className="summit-form-container">
                <div className="form-columns">
                  <div className="form-left">
                    <div className="picture">
                      <img alt="form image" src={!!form.image.childImageSharp ? form.image.childImageSharp.fluid.src : form.image} />
                    </div>
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

Berlin2022SummitPageTemplate.propTypes = {
  header: PropTypes.object,
  form: PropTypes.object,
  topics: PropTypes.object,
  previousSummits: PropTypes.object,
  videoBanner: PropTypes.object,
  sponsorships: PropTypes.object,
  summit_sponsors: PropTypes.array,
  featured_speakers: PropTypes.array
}

const berlin2022SummitPage = ({ data, isLoggedUser }) => {
  const { markdownRemark: post, summitsJson: summit } = data;
  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <Berlin2022SummitPageTemplate
        isLoggedUser={isLoggedUser}
        header={post.frontmatter.header}
        form={post.frontmatter.form}
        topics={post.frontmatter.topics}
        previousSummits={post.frontmatter.previousSummits}
        videoBanner={post.frontmatter.videoBanner}
        sponsorships={post.frontmatter.sponsorships}
        featured_speakers={summit?.featured_speakers || []}
        summit_sponsors={summit?.summit_sponsors || []}
      />
    </Layout>
  )
}

berlin2022SummitPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    summitsJson: PropTypes.object
  })
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), {})(berlin2022SummitPage)

export const berlin2022SummitPageQuery = graphql`
  query berlin2022SummitPage($id: String!) {
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
          buttons {
            text
            link
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
    summitsJson(jsonId: { eq: 32 }) {
      featured_speakers {
        first_name
        last_name
        company
        pic
      }
      summit_sponsors {
        sponsorship {
          id
          order
        }
        company {
          name
          url
          logo
          big_logo
        }
      }
    }
  }
`
