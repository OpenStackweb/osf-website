import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

import CompaniesSection from '../components/CompaniesSection'
import PeopleSection from '../components/PeopleSection'
import ProjectSection from '../components/ProjectSection'
import WhyExpandSection from '../components/WhyExpandSection'
import MainPitchSection from '../components/MainPitchSection'

import { getEnvVariable, HOME_SUBPROJECT_ID } from "../utils/envVariables";

import { connect } from "react-redux";

export const IndexPageTemplate = ({
  isLoggedUser,
  header,
  mainpitch,
  whyExpand,
  projects,
  people,
}) => (
  <div>
    <div className="wrapper hero-background">
      <TopBar />
      <Navbar isLoggedUser={isLoggedUser} />
      <Header upperTitle={header.upperTitle} title={header.title} subTitle={header.subTitle} image={header.image} buttons={header.buttons} isHome={true} />
    </div>

    <main className="main">
      <div className="content">

        <MainPitchSection mainpitch={mainpitch} />

        <WhyExpandSection whyExpand={whyExpand} />

        <ProjectSection projects={projects} />

        <PeopleSection people={people} />

        <CompaniesSection subProjectId={parseInt(getEnvVariable(HOME_SUBPROJECT_ID))} />

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
      }
    }
  }
`
