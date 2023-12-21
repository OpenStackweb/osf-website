import React from "react";
import { graphql } from 'gatsby';
import { connect } from 'react-redux'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import SEO from "../components/SEO";
import MeetupBanner from "../components/MeetupBanner";
import BottomBanner from "../components/BottomBanner";
import SpecialEditionSection from "../components/SpecialEditionSection";
import UpcomingSummits from "../components/UpcomingSummits";
import HeaderImage from "../components/HeaderImage";
import SubHeaderDays from "../components/SubHeaderDays";
import MoreEventsSection from "../components/MoreEventsSection";
import OpenInfraDays from "../components/OpeninfraDays";

import hero from '../../static/img/openinfra-days/openinfra-days-header.png';

export const OpenInfraDaysPageTemplate = ({
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
        <SubHeaderDays button={{text: 'Check out upcoming events', link: ''}}/>
      </div>
      <main className="main">
        <div className="content">
          <p>{title}</p>
          <SpecialEditionSection />
          <MoreEventsSection />
        </div>
        <OpenInfraDays title={'Openinfra Days'} />
        <MeetupBanner />
        <UpcomingSummits />
        <BottomBanner title={'Interested in becoming<br/>a Community Organizer?<br/>Contact us at events@openinfra.dev'} 
          button={{link: '', text: 'Events Contact'}} />
      </main>
    </div>
  )
}

const OpenInfraDaysPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <OpenInfraDaysPageTemplate
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
}), null)(OpenInfraDaysPage)

export const OpenInfraDaysPageQuery = graphql`
  query OpenInfraDaysPageQuery($id: String!) {
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
