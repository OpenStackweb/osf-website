import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'
import SubNav from '../components/SummitSubNav'
import { connect } from "react-redux";
import LinkComponent from '../components/LinkComponent';
import leftArrow from '../img/svg/arrow-left.svg'
import SummitSponsors from '../components/SummitSponsors'

export const Berlin2022SummitSponsorPageTemplate = ({
  isLoggedUser,
  header,
  summit_sponsors
}) => {

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <SubNav active="summit-sponsor" pageName="Sponsors" isLoggedUser={isLoggedUser} />
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
                  <LinkComponent className="button-cta" href="/summit/berlin-2022/summit-sponsor/#sponsor">View all Sponsors<img src={leftArrow} alt="" /></LinkComponent>
                </section>
              </div>
              <div className="header-right" style={{ marginBottom: "0px" }}>
                <div className="picture">
                  <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                </div>
              </div>
            </section>
          }
          
          <section id="sponsor" className="sponsorship-levels">
          <hr className="dividing-line"/>
            <span className="title">Sponsors</span>
            <span className="description">
              <p> A warm thank you to the sponsors of OpenInfra Summit Berlin 2022!</p>
            </span>
            <SummitSponsors summit_sponsors={summit_sponsors} />
          </section>

        </div>
      </main>
    </div>
  )
}

Berlin2022SummitSponsorPageTemplate.propTypes = {
  header: PropTypes.object,
  form: PropTypes.object,
  topics: PropTypes.object,
  previousSummits: PropTypes.object,
  videoBanner: PropTypes.object,
  sponsorships: PropTypes.object,
}

const berlin2022SummitSponsorPage = ({ data, isLoggedUser }) => {
  const { markdownRemark: post, summitsJson: summit } = data
  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <Berlin2022SummitSponsorPageTemplate
        isLoggedUser={isLoggedUser}
        header={post.frontmatter.header}
        form={post.frontmatter.form}
        topics={post.frontmatter.topics}
        previousSummits={post.frontmatter.previousSummits}
        videoBanner={post.frontmatter.videoBanner}
        sponsorships={post.frontmatter.sponsorships}
        summit_sponsors={summit?.summit_sponsors || []}
      />
    </Layout>
  )
}

berlin2022SummitSponsorPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    summitsJson: PropTypes.object
  })
}

export default connect(({loggedUserState, summitState}) => ({
  isLoggedUser: loggedUserState.isLoggedUser
}))(berlin2022SummitSponsorPage)

export const berlin2022SummitSponsorPageQuery = graphql`
  query berlin2022SummitSponsorPage($id: String!) {
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
    summitsJson(jsonId: { eq: 32 }) {
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
