import React from "react";
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import SEO from "../components/SEO";
import SimpleHeader from "../components/SimpleHeader";
import GenericBanner from "../components/GenericBanner";
import BottomBanner from "../components/BottomBanner";
import SponsorshipSection from "../components/SponsorshipSection";

export const SponsorshipPageTemplate = ({
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
      </div>
      <main className="main">
        <div className="content">
          <SimpleHeader
            title="BECOME A SPONSOR"
            subtitle="SUPPORT THE NEXT DECADE OF OPEN INFRAESTRUCTURE"
            backgroundImage="/img/sponsorship/summit-marketplace.png"
          />
          <GenericBanner
            upperText='Not a member?'
            text='Learn how to join the OpenInfra Foundation'
            button={{ link: '/join/members/', text: 'BECOME A MEMBER'}}
          />
          <GenericBanner 
            upperText=''
            text='Have any questions about<br/>sponsoring the events?'
            button={{ link: 'mailto:summit@openinfra.dev', text: 'contact us'}}
            fullwidth={false}
          />
          <BottomBanner 
            title={'Subscribe to our newsletter <br/>& keep up to date with the latest<br/>News about the Summits.'}
            button={{ link: 'https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates', text: 'SIGN ME UP' }}
          />
          <SponsorshipSection
            title="OPENINFRA SUMMIT ASIA"
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={[
              {
                title: ["September 2 & 3, 2024", "Suwon Convention Center", "Suwon, South Korea"],
                plans: ["GOLD", "PLATINUM", "DIAMOND"]
              }
            ]}
          />
        </div>
      </main>
    </div>
  )
}

const SponsorshipPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <SponsorshipPageTemplate
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
}), null)(SponsorshipPage)

export const SponsorshipPageQuery = graphql`
  query SponsorshipPageQuery($id: String!) {
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
