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
import CalIcon from '../../static/img/calendar-alt1.svg'
import OILiveComp from '../../static/img/oi-live-comp.png'
import DiagonalBG from '../../static/img/diagonal.svg'
import { connect } from "react-redux";
import Airship from '../../static/img/live/Airship_Logo_Horizontal_2Color_RGB.svg'
import Kata from '../../static/img/live/KataContainers_Logo_Horiz_2Color_RGB.svg'
import OILabs from '../../static/img/live/OpenInfraLabs-Logo-RGB-Horiz.svg'
import OpenStack from '../../static/img/live/openstack-logo-horizontal.svg'
import StarlingX from '../../static/img/live/StarlingX_Logo_RGB_Horizontal_2color.svg'
import Zuul from '../../static/img/live/Zuul_Logo_Full_Horizontal_RGB_DarkBlue.svg'


export const OpenInfraLiveKeynotesTemplate = ({
  isLoggedUser,
  contentComponent,
  content,
  hero,
  intro,
  statSection,
  whatToExpect,
  featuredProjects,
  headlineSponsors,
  supportingSponsors,
  featuredSpeakers,
  sponsorshipSection,
  interestedSection
}) => {
  const PageContent = contentComponent || Content

  const getImage = (imageObj) => {
    return !!imageObj?.childImageSharp ? imageObj?.childImageSharp.fluid.src: imageObj?.publicURL;
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
                  <p className="promo-para" dangerouslySetInnerHTML={{ __html: hero.tagline }} />
                  <div className="dates-row">
                      <img className="cal-icon" src={CalIcon} alt="Calendar Icon" /> 
                      <p className="promo-dates" dangerouslySetInnerHTML={{ __html: hero.description }} />
                  </div>
                  <br />
                  <a href={hero.buttonURL} className="cta">
                    {hero.buttonText}
                    <img src={leftArrow} alt="" />
                  </a>
                  <a className="schedule-promo-link" href="#schedule">See the Schedule</a>
                </div>
                <figure className="logo">
                  <img src="/img/live/oi-live-keynotes-logo-web-dark.svg" alt="OpenInfra Live Keynotes Logo" />
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
          {whatToExpect &&
            <section className="what-to-expect">
            <div className="live-keynotes-promo-v2 no-top-margin">
              <h3 className="small-title">{whatToExpect.title}</h3>
              <div className="live-kp-container smaller-container">
                <div className="text-area lt-text">
                  <div className="text">
                    <p dangerouslySetInnerHTML={{__html: whatToExpect.text}}/>
                    <p dangerouslySetInnerHTML={{__html: whatToExpect.bullets}}/>
                  </div>
                </div>
                <div className="image-area">
                  <img src={OILiveComp}/>
                </div>
              </div>
              <div className="diagonal-bg-container">
                <img className="diagonal-bg" src={DiagonalBG}/>
              </div>
            </div>
          </section>
          }
          {featuredProjects &&
            <section className="featured-projects-section">
            <div className="project-logos-wrapper">

              <h3 className="small-title">{featuredProjects.title}</h3>

              <div className="project-logos">
                <div className="project-logo-row">
                  <a href="https://www.airshipit.org/" className="project-logo"><img className="project-logo-inner"
                                                                                     src={Airship} alt="Airship"/></a>
                  <a href="https://katacontainers.io/" className="project-logo"><img className="project-logo-inner"
                                                                                     src={Kata}
                                                                                     alt="KataContainers"/></a>
                  <a href="https://openinfralabs.org/" className="project-logo"><img className="project-logo-inner"
                                                                                     src={OILabs} alt="OpenInfra Labs"/></a>
                </div>

                <div className="project-logo-row">
                  <a href="https://www.openstack.org/" className="project-logo"><img className="project-logo-inner"
                                                                                     src={OpenStack}
                                                                                     alt="OpenStack"/></a>
                  <a href="https://www.starlingx.io/" className="project-logo"><img className="project-logo-inner"
                                                                                    src={StarlingX}
                                                                                    alt="StarlingX"/></a>
                  <a href="https://zuul-ci.org/" className="project-logo"><img className="project-logo-inner" src={Zuul}
                                                                               alt="Zuul"/></a>
                </div>
              </div>
              <p className="inner-text" dangerouslySetInnerHTML={{__html: featuredProjects.text}}/>
            </div>
          </section>
          }

{/*          <section className="live-section">
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
          </section>*/}
          {featuredSpeakers?.speakers?.length > 0 &&
            <section className="featured-speakers">
              <div className="container">
              <h3>{featuredSpeakers.title}</h3>
              <a className="schedule-promo-link centered" href="#schedule">See the Schedule Below</a>
                <div className="featured-speakers-wrapper">
                  <div className="first-row">
                    {featuredSpeakers.speakers.slice(0, 4).map(speaker => (
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
          }

          <section className="featured-projects-section" id="schedule">
            <div className="container">
              <h3 className="small-title">Keynotes Schedule</h3>
              <h5 className="small-subtitle">November 17, Day One</h5>
              <table className="keynotes-schedule">
                <thead>
                  <th>Time (CST)</th>
                  <th>Speaker(s)</th>
                  <th>Topic</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      9:00 AM
                    </td>
                    <td>
                      Jonathan Bryce<br />
                      Mark Collier
                    </td>
                    <td>One Year into a Decade Long OpenInfra Mission</td>
                  </tr>
                  <tr>
                    <td>
                      9:17 AM
                    </td>
                    <td>Balaji Srinivasan</td>
                    <td>The Role and Impact of Decentralization</td>
                  </tr>
                  <tr>
                    <td>
                      9:32 AM
                    </td>
                    <td>Aeva Black</td>
                    <td>Building a Successful Open Source Community with the Four Opens </td>
                  </tr>
                  <tr>
                    <td>
                      9:38 AM
                    </td>
                    <td>
                      Allison Randal<br />
                      Tom Callaway<br/>
                      Stefano Maffulli
                    </td>
                    <td>Benefits and Impacts of Open Source Licensing</td>
                  </tr>
                  <tr>
                    <td>
                      9:52 AM
                    </td>
                    <td>Sarah Novotny</td>
                    <td>Why Organizations should Contribute to Open Source</td>
                  </tr>
                  <tr>
                    <td>
                      10:00 AM
                    </td>
                    <td>Sean Cohen</td>
                    <td>The Hybrid Cloud Foundation</td>
                  </tr>
                  <tr>
                    <td>
                      10:09 AM
                    </td>
                    <td>
                      Hao Wang<br/>
                      Haoyang Li
                    </td>
                    <td>Introducing Taibai, the Newest Addition to OpenInfra Labs</td>
                  </tr>
                  <tr>
                    <td>
                      10:16 AM
                    </td>
                    <td>Kendall Nelson</td>
                    <td>OpenSnacks: How to Contribute to Open Source Projects</td>
                  </tr>
                  <tr>
                    <td>
                      10:17 AM
                    </td>
                    <td>Michael Daitzman</td>
                    <td>How to Contribute to OpenInfra Labs</td>
                  </tr>
                  <tr>
                    <td>
                      10:30 AM
                    </td>
                    <td>Jim Zemlin</td>
                    <td>Celebrating 30 Years of Linux: The Open Source Operating System Standard </td>
                  </tr>
                  <tr>
                    <td>
                      10:33 AM
                    </td>
                    <td>
                      Jimmy McArthur<br/>
                      Dr. Abhisak Chulya
                    </td>
                    <td>Understanding the OpenStack Momentum in Thailand</td>
                  </tr>
                  <tr>
                    <td>
                      10:40 AM
                    </td>
                    <td>
                      China Mobile<br/>
                      LINE<br/>
                      Walmart Labs<br/>
                      Workday<br/>
                      Yahoo
                    </td>
                    <td>Celebration of OpenStack Users at Scale</td>
                  </tr>
                  <tr>
                    <td>
                      10:47 AM
                    </td>
                    <td>
                      Allison Price<br/>
                      Imtiaz Chowdhury
                    </td>
                    <td>Explosive OpenStack Growth: Why Workday Doubled their Private Cloud Footprint in a Year</td>
                  </tr>
                  <tr>
                    <td>
                      10:57 AM
                    </td>
                    <td>Amy Marrich</td>
                    <td>How to Contribute to OpenStack</td>
                  </tr>
                  <tr>
                    <td>
                      11:01 AM
                    </td>
                    <td>Christoph Blecker</td>
                    <td>How to Contribute to Kubernetes</td>
                  </tr>
                  <tr>
                    <td>
                      11:03 AM
                    </td>
                    <td>
                      Jonathan Bryce<br />
                      Mark Collier
                    </td>
                    <td>Day One Wrap up</td>
                  </tr>
                </tbody>
              </table>
              <h5 className="small-subtitle">November 18, Day Two</h5>
              <table className="keynotes-schedule">
                <thead>
                  <th>Time (CST)</th>
                  <th>Speaker(s)</th>
                  <th>Topic</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      9:00 AM
                    </td>
                    <td>
                      Jonathan Bryce<br />
                      Mark Collier
                    </td>
                    <td>Day Two Kick Off</td>
                  </tr>
                  <tr>
                    <td>
                      9:03 AM
                    </td>
                    <td>
                      Thierry Carrez
                    </td>
                    <td>State of OpenInfra</td>
                  </tr>
                  <tr>
                    <td>
                      9:11 AM
                    </td>
                    <td>
                      Kyle Davis
                    </td>
                    <td>A Little about OpenSearch</td>
                  </tr>
                  <tr>
                    <td>
                      9:17 AM
                    </td>
                    <td>
                      Haoyang Li
                    </td>
                    <td>State of OpenInfra in China </td>
                  </tr>
                  <tr>
                    <td>
                      9:29 AM
                    </td>
                    <td>
                      Martin Casado<br/>
                      Jonathan Bryce<br/>
                      Mark Collier
                    </td>
                    <td>Diving into the Cost of Cloud, a Trillion Dollar Paradox</td>
                  </tr>
                  <tr>
                    <td>
                      9:44 AM
                    </td>
                    <td>
                      Jimmy McArthur<br/>
                      Johan Christenson<br/>
                      Victor Souza
                    </td>
                    <td>OpenStack Powered Public Cloud Momentum</td>
                  </tr>
                  <tr>
                    <td>
                      9:59 AM
                    </td>
                    <td>
                      Allison Price<br/>
                      Meltem Kocabaş
                    </td>
                    <td>Hybrid Cloud in Production: Trendyol </td>
                  </tr>
                  <tr>
                    <td>
                      10:07 AM
                    </td>
                    <td>
                      Jim Blair
                    </td>
                    <td>Zuul in Hybrid Environments </td>
                  </tr>
                  <tr>
                    <td>
                      10:13 AM
                    </td>
                    <td>
                      Sunny Cai<br/>
                      Tao Peng
                    </td>
                    <td>Kata Containers in Production: Ant Group</td>
                  </tr>
                  <tr>
                    <td>
                      10:30 AM
                    </td>
                    <td>
                      Ashlee Ferguson
                    </td>
                    <td>How to Contribute to Airship</td>
                  </tr>
                  <tr>
                    <td>
                      10:33 AM
                    </td>
                    <td>
                      Ildiko Vansca<br/>
                      Andy Dunkin<br/>
                      Muhammed Gil<br/>
                      John McCready
                    </td>
                    <td>Deploying vRAN and OpenRAN with StarlingX</td>
                  </tr>
                  <tr>
                    <td>
                      10:52 AM
                    </td>
                    <td>
                      Greg Waines
                    </td>
                    <td>How to Contribute to StarlingX</td>
                  </tr>
                  <tr>
                    <td>
                      10:56 AM
                    </td>
                    <td>
                      Reg Orton
                    </td>
                    <td>Connecting Africa to the Internet: How BRCK is running Magma in Production</td>
                  </tr>
                  <tr>
                    <td>
                      11:01 AM
                    </td>
                    <td>
                      Shubham Tatvamasi
                    </td>
                    <td>How to Contribute to Magma</td>
                  </tr>
                  <tr>
                    <td>
                      11:04 AM
                    </td>
                    <td>
                      Mr. Duan Xiaodong
                    </td>
                    <td>China Mobile’s Strategy on the Next Generation Network and Open Source</td>
                  </tr>
                  <tr>
                    <td>
                      11:13 AM
                    </td>
                    <td>
                      Sunny Cai
                    </td>
                    <td>Superuser Awards</td>
                  </tr>
                  <tr>
                    <td>
                      11:18 AM
                    </td>
                    <td>
                      Kendall Nelson<br/>
                      Alex Song
                    </td>
                    <td>Hardware Enablement Advancements in OpenStack Cyborg</td>
                  </tr>
                  <tr>
                    <td>
                      11:26 AM
                    </td>
                    <td>
                      Peter Pouliot<br/>
                      Laurent Bernou-Mazars<br/>
                      Zac Smith<br/>
                      John Miranda
                    </td>
                    <td>Tackling Sustainability with Eco-friendly, Green Hardware</td>
                  </tr>
                  <tr>
                    <td>
                      11:33 AM
                    </td>
                    <td>
                      Jonathan Bryce<br />
                      Mark Collier
                    </td>
                    <td>Day Two Wrap up</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="keynotes-sponsors">
            <div className="container">
              <section className="sponsor-section headline">
                <h3>{headlineSponsors.title}</h3>
                <div className="logos">
                  {/*<img src={getImage(headlineSponsor.logo)} />*/}
                  {headlineSponsors.sponsors.map(sponsor => (
                      <img src={getImage(sponsor.logo)} />
                  ))}
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
          {sponsorshipSection &&
            <section className="live-section">
            <div className="container">
              <section className="sponsor-levels">
                <h3>{sponsorshipSection.title}</h3>
                <section className="sponsorshipSection-intro">
                  <div className="intro-inner">
                    <p className="fix-h5" dangerouslySetInnerHTML={{__html: sponsorshipSection.text}}/>
                  </div>
                </section>
                <div className="level-listing">
                  <section className="level-single headline">
                    <div className="level-heading">
                      {sponsorshipSection.leftColumn.title}
                    </div>
                    <div className="level-bullets">
                      <p dangerouslySetInnerHTML={{__html: sponsorshipSection.leftColumn.body}}/>
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
                      <p dangerouslySetInnerHTML={{__html: sponsorshipSection.rightColumn.body}}/>
                    </div>
                    <div className="level-price">
                      {sponsorshipSection.rightColumn.footer}
                    </div>
                  </section>
                </div>
              </section>
              <div className="sponsor-cta">
                <p className="fix-h5">
                  {interestedSection.preEmailText} <a
                    href={`mailto:${interestedSection.email}`}>{interestedSection.email}</a>
                </p>
                <p className="sponsor-note">{interestedSection.preJoinText} <a
                    href={interestedSection.joinUrl}>{interestedSection.joinText}</a></p>
              </div>
            </div>
          </section>
          }
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
          tagline
          description
          buttonText
          buttonURL
        }
        intro {
          text
        }
        whatToExpect {
          title
          text
          bullets
        }
        featuredProjects {
          title
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
        headlineSponsors {
          title
          sponsors {
            logo {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
            }
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
            }
          }
        }
        sponsorshipSection {
          title
          text
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
