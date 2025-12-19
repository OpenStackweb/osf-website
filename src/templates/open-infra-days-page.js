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
import ImageOnlyHeader from "../components/ImageOnlyHeader";
import SubHeaderDays from "../components/SubHeaderDays";
import MoreEventsSection from "../components/MoreEventsSection";
import OpeninfraDaysAgenda from "../components/OpeninfraDaysAgenda";
import OpenInfraDays from "../components/OpeninfraDays";
import UpcomingSummits from "../components/UpcomingSummits";

import UpcomingSummitsData from "../content/upcoming-summits.json"
import MeetupBannerData from "../content/meetup-banner.json"

export const OpenInfraDaysPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  content,
  contentComponent,
  headerImageUrl,
  upcomingDaysEvents,
  upcomingMeetups,
  pastMeetups,
  communityEvents,
  bottomBanner
}) => {
  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <main className="main">
          <div className="content">
            <ImageOnlyHeader backgroundImage={headerImageUrl} />
            <SubHeaderDays button={{ text: "Check out upcoming events", link: "#upcoming-events" }} />
            {upcomingDaysEvents.isVisible &&
              <OpeninfraDaysAgenda
                title={upcomingDaysEvents.title}
                headerImage={upcomingDaysEvents.headerImage}
                items={upcomingDaysEvents.events}
              />
            }
            <OpenInfraDays title={upcomingMeetups.title} banner={upcomingMeetups.banner} events={upcomingMeetups.meetups} />
            <MeetupBanner background={MeetupBannerData.background} logo={MeetupBannerData.logo} button={MeetupBannerData.button} text={MeetupBannerData.text} />
            <OpenInfraDays title={pastMeetups.title} events={pastMeetups.meetups} />
            <MoreEventsSection title={communityEvents.title} events={communityEvents.events} />
            <UpcomingSummits summits={UpcomingSummitsData.summits} />
            <BottomBanner
              background={bottomBanner.background}
              title={bottomBanner.title}
              button={bottomBanner.button} />
          </div>
        </main>
      </div>
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
        headerImageUrl={post.frontmatter.headerImageUrl.publicURL}
        upcomingDaysEvents={post.frontmatter.upcomingDaysEvents}
        upcomingMeetups={post.frontmatter.upcomingMeetups}
        pastMeetups={post.frontmatter.pastMeetups}
        communityEvents={post.frontmatter.communityEvents}
        bottomBanner={post.frontmatter.bottomBanner}
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
        headerImageUrl {
          publicURL
        }
        upcomingDaysEvents {
          isVisible
          title
          headerImage {
            img {
              publicURL
            }
            alt
          }
          events {
            title
            date
            location
            registration
            sponsor
          }
        }
        upcomingMeetups {
          title
          banner {
            title
            content
            button {
              text
              url
            }
          }
          meetups {
            background {            
              publicURL
            }
            date
            location
            link
          }
        }
        pastMeetups {
          title
          meetups {
            background {
              publicURL
            }
            name
            date
            location
            link
          }
        }
        communityEvents {
          title
          events {
            name
            link
            date
            location
          }
        }
        bottomBanner {
          background {
            publicURL
          }
          title
          button {
            link
            text
          }
        }      
      }
    }    
  }
`