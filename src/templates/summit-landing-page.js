import React from "react";
import { graphql } from 'gatsby';
import { connect } from 'react-redux'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import SEO from "../components/SEO";
import HeaderImage from "../components/HeaderImage";
import hero from '../../static/img/summit-landing/summit-landing-hero.png';
import SponsorBanner from "../components/SponsorBanner";
import SubHeader from "../components/SubHeader";
import PreviousSummits from "../components/PreviousSummits";
import SummitCard from "../components/SummitCard";

import summitCardAsia from '../../static/img/summit-landing/cards/summit-asia.png';
import summitCardEurope from '../../static/img/summit-landing/cards/summit-europe25.png';
import CommunityEvents from "../components/CommunityEvents";

export const SummitLandingPageTemplate = ({
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
        <HeaderImage backgroundImage={hero} />
        <SubHeader />
        <SummitCard background={summitCardAsia} date={'September 2 & 3, 2024'} location={'Suwon Convention Center, Suwon, South Korea'} notification={true}/>
        <SummitCard background={summitCardEurope} date={'2025'} location={'Berlin, Germany'}/>
        <SponsorBanner />
        <CommunityEvents />
        <PreviousSummits />
      </div>

      <main className="main">
        <div className="content">
        </div>
      </main>
    </div>
  )
}

const SummitLandingPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <SummitLandingPageTemplate
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
}), null)(SummitLandingPage)

export const SummitLandingPageQuery = graphql`
  query SummitLandingPageQuery($id: String!) {
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
