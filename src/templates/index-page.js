import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import NavbarV2 from '../components/NavbarV2'
import SEO from '../components/SEO'

import { connect } from "react-redux";

import SFASection from '../components/HomeV2/SFASection'
import ProjectsSection from '../components/HomeV2/ProjectsSection'
import QuotesSection from '../components/HomeV2/QuotesSection'
import PlatinumMembersSection2 from '../components/HomeV2/PlatinumMembersSection2'
import CommunitiesSection from '../components/HomeV2/CommunitiesSection'
import NewsSection from '../components/HomeV2/NewsSection'
import OpenInfraEventsSection from '../components/HomeV2/OpenInfraEventsSection'

export const IndexPageTemplate = ({
  isLoggedUser,
  header,
  openInfraEvents
}) => (
  <div>
    <div className="wrapper hero-background home-v2-hero-wrapper">
      <TopBar />
      <NavbarV2 isLoggedUser={isLoggedUser} />
      <Header upperTitle={header.upperTitle} title={header.title} subTitle={header.subTitle} image={header.image} buttons={header.buttons} isHome={true} />
    </div>

    <main className="main home-v2-body-wrapper">
      <div className="content">

        <SFASection />

        <div className="home-v2-communities-section home-v2-communities-section-1">
          <ProjectsSection />
          <QuotesSection />
        </div>
        <div className="home-v2-communities-section home-v2-communities-section-2">
            <PlatinumMembersSection2 />
            <CommunitiesSection />
        </div>

        <div className="home-v2-outer-container-dark">          
          <OpenInfraEventsSection events={openInfraEvents}/>
          <NewsSection />
        </div>


      </div>
    </main>
  </div>
)

IndexPageTemplate.propTypes = {
  header: PropTypes.object,
  mainpitch: PropTypes.object,
  whyExpand: PropTypes.object,
  projects: PropTypes.object,
  people: PropTypes.object,
  sponsor: PropTypes.object,
}

const IndexPage = ({ isLoggedUser, data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO seo={frontmatter.seo ? frontmatter.seo : null} />
      <IndexPageTemplate
        isLoggedUser={isLoggedUser}        
        header={frontmatter.header}
        mainpitch={frontmatter.mainpitch}
        whyExpand={frontmatter.whyExpand}
        projects={frontmatter.projects}
        people={frontmatter.people}
        sponsor={frontmatter.sponsor}
        openInfraEvents={frontmatter.openInfraEvents}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(IndexPage)


export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
          upperTitle
          title
          subTitle          
          buttons {
            text
            link
          }
        }
        mainpitch {
          row1 {
            title
            text
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
              width
              height
            }
          }
          row2 {
            title
            text
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
            }
          }          
        }
        whyExpand {
          title
          text
          icons {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
            text
          }          
        }
        projects {
          title
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          text
          button {
            link
            text
          }
        }
        people {
          title
          review {
            name
            user
            picture
            text
          }
        }
        sponsor {
          title
          platinum {
            title
            companyList {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
              }
              alt
            }
          }
          gold {
            title
            companyList {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
              }
              alt
            }
          }
        }
        openInfraEvents {
          openInfraEventsData {          
            link
            logo {
              publicURL
            }
            text
            color        
          }
          upcomingEvents {
            image {
              publicURL
            }
            date
            location
            button {
              link
              text
            }
          }
        }
      }
    }
  }
`
