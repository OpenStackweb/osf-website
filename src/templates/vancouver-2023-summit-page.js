import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'
import LogoBanner from '../components/LogoBanner'
import { connect } from "react-redux";
import SubNavYvr from '../components/SummitSubNavYvr'
import LinkComponent from '../components/LinkComponent';
import leftArrow from '../img/svg/arrow-left.svg'
import TravelSupportPic from '../../static/img/summit/Tokyo-travel-support-pic.jpg'
import CodeOfConductPic from '../../static/img/summit/inclusive 2.jpeg'
import SummitSponsorSlider from '../components/SummitSponsorSlider'
import FeaturedSpeakers from '../components/FeaturedSpeakers';

export const SummitPageTemplate = ({
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
        <SubNavYvr active="summit" pageName="Home" isLoggedUser={isLoggedUser}/>
      </div>

      <main className="main">
        <div className="content">
          {header && header.display &&
            <section className="summit-header summit-header-vancouver-2023">
              <div className="header-left summit-header-videos">
                <span className="upper-title">
                  {header.upperTitle}
                </span>
                <span className="title">
                  {header.title}
                </span>
                <span className="description" dangerouslySetInnerHTML={{ __html: header.description }}></span>
                <span className="description description-large"><a href="https://vancouver2023.openinfra.dev/">Early bird registration is available</a> until February 15, 2023.</span>
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
                  <LinkComponent className="button-cta" href="https://vancouver2023.openinfra.dev/">Register Now<img src={leftArrow} alt="" /></LinkComponent>
                  <LinkComponent className="button-cta button-white outline" href="/summit/vancouver-2023/summit-sponsor">Become a Sponsor 
                  <img src={leftArrow} alt="" />
                  </LinkComponent>
                </section>
                <p className="small-details">Learn more about the <a href="/ptg/">Project Teams Gathering (PTG) in Vancouver</a>.</p>
              </div>
              <div className="header-right">
                <div className="picture">
                  <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                </div>
                {/*}
                <div className="picture">
                  <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                </div>
                */}
              </div>
            </section>
          }

          {/* <div className="logo-banner vancouver-2023-cfp-banner">
            <img className="logo" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y3Yjc0OTt9LmNscy0ye2ZpbGw6I2VkMzYyZjt9LmNscy0ze2ZpbGw6IzQzYjg1Yzt9LmNscy00e2ZpbGw6IzJjYjRlMjt9PC9zdHlsZT48L2RlZnM+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjAgMzMuMzMgMCA1MCAxMTQuNjQgNTAgMCAxNjQuNjQgMTEuNzkgMTc2LjQzIDE1NC44OCAzMy4zMyAwIDMzLjMzIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjE3MS41NSAxNi42NyAxODguMjIgMCAwIDAgMCAxNi42NyAxNzEuNTUgMTYuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMTgzLjMzIDI4LjQ1IDE4My4zMyAyMDAgMjAwIDIwMCAyMDAgMTEuNzggMTgzLjMzIDI4LjQ1Ii8+PHBvbHlnb24gY2xhc3M9ImNscy00IiBwb2ludHM9IjE2Ni42NyAyMDAgMTY2LjY3IDQ1LjEyIDIzLjU3IDE4OC4yMSAzNS4zNSAyMDAgMTUwIDg1LjM2IDE1MCAyMDAgMTY2LjY3IDIwMCIvPjwvc3ZnPg==" />
            <span className="title">The Call for Presentations is now Open! Submit your open source demos and production use cases</span>
            <span class="desc">Deadline to submit: January 10, 2023</span>
            <a href="https://cfp.openinfra.dev/app/vancouver-2023/19" class="cta" target="_blank" rel="noopener noreferrer">Submit to CFP<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNSAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNzA4LjcxNiAzNDkuMDU0bC00LjgwNS00LjgwNmEuODI4LjgyOCAwIDAgMC0xLjE4MyAwIC44MjguODI4IDAgMCAwIDAgMS4xODJsMy4zODggMy4zODdoLTExLjI4MWEuODQuODQgMCAwIDAtLjgzNS44MzYuODQuODQgMCAwIDAgLjgzNS44MzVoMTEuMjY2bC0zLjM3MyAzLjM4N2EuODI4LjgyOCAwIDAgMCAwIDEuMTgyLjg2My44NjMgMCAwIDAgLjYuMjUyYy4yMiAwIC40MjUtLjA3OS41OTktLjI1Mmw0LjgyLTQuODIyYS44NTguODU4IDAgMCAwIC4yNTItLjU5OCAxLjA2OSAxLjA2OSAwIDAgMC0uMjgzLS41ODMiIGlkPSJhLWFycm93LWxlZnQiIC8+CiAgICA8L2RlZnM+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjk0IC0zNDQpIj4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhLWFycm93LWxlZnQiIGZpbGw9IiNmZmYiIC8+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" /></a>
          </div> */}


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
              <LinkComponent className="button-cta" style={{margin: "0 auto", marginTop: "30px"}} href="/summit/vancouver-2023/summit-tracks/">Learn More about Summit Tracks<img src={leftArrow} alt="" /></LinkComponent> 
            </section>
          }

          {/* <FeaturedSpeakers featured_speakers={featured_speakers} /> */}

          {/* <LogoBanner title="The Call for Presentations will open on November 15, 2022 and close on January 7, 2023" cta="Nope" href="https://cfp.openinfra.dev" /> */}

          {/* <section className="logo-slider-section">
            <span className="title">Sponsors</span>
            <span className="description">
              <p>The generous support of our sponsors makes it possible for our community to gather, learn and build the future of open infrastructure. A warm thank you to the sponsors of OpenInfra Summit Berlin 2022!</p>
            </span>
            <SummitSponsorSlider summit_sponsors={summit_sponsors} />
            <LinkComponent className="button-cta" href="/summit/berlin-2022/summit-sponsor">View all Sponsors<img src={leftArrow} alt="" /></LinkComponent>
          </section> */}

          {/* <LogoBanner title="Register before tickets sell out!" cta="Register Now" href="https://openinfrasummitberlin.eventbrite.com/" /> */}
          
          {/* <section id="sponsor" className="sponsorship-levels">
            <span className="title">Sponsors</span>
            <span className="description">
              <p>The generous support of our sponsors makes it possible for our community to gather, learn and build the future of open infrastructure. A warm thank you to the sponsors of OpenInfra Summit Berlin 2022!</p>
            </span>
            <div className="sponsor-logos">
              <h3 className="small-title-summit">Headline Sponsor</h3>
              <div className="logos">
                <img className="headline" />
              </div>
            </div>
            </section> */}
           

          <section style={{ backgroundColor: "white", marginTop: "unset" }} className="travel-support">
            <div className="text">
              <span className="title">Travel Support Program & Visa Letters</span>
              <span className="description">Need assistance getting to the Vancouver Summit? We can help! If you are a key contributor to open infrastructure and your company does not cover the costs of your travel and accommodation, you can apply for the Travel Support Program. We can also provide you with a visa invitation letter from the Foundation to meet travel requirements.</span>
              <div className="links-row">
                <LinkComponent className="summit-cta" href="https://openinfrafoundation.formstack.com/forms/openinfra_tsp" >Apply for Support<img src={leftArrow} alt="" /></LinkComponent>
                <LinkComponent className="summit-cta" href="https://openinfrafoundation.formstack.com/forms/visa_yvrsummit2023" >Get Visa Letter<img src={leftArrow} alt="" /></LinkComponent>
              </div>
              <p className="description travel-description">Students and non-profit / government workers can <a href="https://openinfrafoundation.formstack.com/forms/yvr2023summit_discountedreg_app">apply for discounted registration</a>.</p>
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
                View the <LinkComponent href="/legal/code-of-conduct/events" >Summit Code of Conduct</LinkComponent> for more information.</span>
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
                      <LinkComponent className="form-cta" href='https://www.openinfra.dev/newsletter'>{form.button.text} <img src={leftArrow} alt="" /></LinkComponent>
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
  summit_sponsors: PropTypes.array,
  featured_speakers: PropTypes.array
}

const SummitPage = ({ isLoggedUser, summit, data }) => {
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
        featured_speakers={summit?.featured_speakers || []}
        summit_sponsors={summit?.summit_sponsors || []}
      />
    </Layout>
  )
}

SummitPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  summit: state.summitState.summit
}), {})(SummitPage)

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
  }
`
