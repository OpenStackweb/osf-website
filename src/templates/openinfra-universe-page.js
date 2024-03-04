import React from "react";
import { graphql } from 'gatsby';
import { connect } from 'react-redux'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import SEO from "../components/SEO";
import UniverseListing from "../components/UniverseListing";
import UniverseJoinBanner from "../components/UniverseJoinBanner";

export const OpenInfraUniversePageTemplate = ({
                                          isLoggedUser,
                                          title,
                                          subTitle,
                                          content,
                                          contentComponent
                                        }) => {
  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <main className="main">
          <div className="content">
            <UniverseListing />
            <UniverseJoinBanner
              title={'Join the OpenInfra Universe'}
              subtitle={'Do you have an open source project that should be listed in the OpenInfra Universe? The Universe is always expanding, so reach out and let us know about it!'}
              button={{link: 'mailto:info@openinfra.dev', text: 'Email Us'}}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

const OpenInfraUniversePage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <OpenInfraUniversePageTemplate
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        contentComponent={HTMLContent}
        content={post.html}
        isLoggedUser={isLoggedUser}
      />
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(OpenInfraUniversePage)

export const OpenInfraUniversePageQuery = graphql`
  query OpenInfraUniversePageQuery($id: String!) {
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
        title
        subTitle
      }
    }
  }
`
