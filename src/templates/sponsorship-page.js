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
import SimpleHeader from "../components/SimpleHeader";
import GenericBanner from "../components/GenericBanner";
import BottomBanner from "../components/BottomBanner";

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
            text='Have any questions about sponsoring the events?'
            button={{ link: '', text: 'contact us'}}
            fullwidth={false}
          />
          <BottomBanner 
            title={'Subscribe to our newsletter <br/>& keep up to date with the latest<br/>News about the Summits.'}
            button={{ link: 'https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates', text: 'SIGN ME UP' }}
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
