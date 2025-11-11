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
import hero from '../../static/img/openinfra-days/OI-Days-1920x325.11.svg';
import UpcomingSummits from "../components/UpcomingSummits";

export const OpenInfraDaysPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  content,
  contentComponent,
  upcomingDaysEvents,
  upcomingMeetups,
  pastMeetups,
  communityEvents,
  upcomingSummits
}) => {
  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <main className="main">
          <div className="content">
            <ImageOnlyHeader backgroundImage={hero} />
            <SubHeaderDays button={{ text: "Check out upcoming events", link: "#upcoming-events" }} />
            <OpeninfraDaysAgenda
              title={upcomingDaysEvents.title}
              items={upcomingDaysEvents.events}
            />
            <OpenInfraDays title={upcomingMeetups.title} events={upcomingMeetups.meetups} />
            <MeetupBanner />
            <OpenInfraDays title={pastMeetups.title} events={pastMeetups.meetups} />
            <MoreEventsSection title={communityEvents.title} events={communityEvents.events}/>
            <UpcomingSummits summits={upcomingSummits.summits} />
            <BottomBanner
              title={'Interested in becoming<br/>a Community Organizer?<br/>Contact us at <a href="mailto:events@openinfra.dev">events@openinfra.dev</a>'}
              button={{ link: 'mailto:events@openinfra.dev', text: 'Events Contact' }}
              background="/img/summit-landing/subscribe/subscribe-banner-bg.png"
            />
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
        upcomingDaysEvents={post.frontmatter.upcomingDaysEvents}
        upcomingMeetups={post.frontmatter.upcomingMeetups}
        pastMeetups={post.frontmatter.pastMeetups}
        communityEvents={post.frontmatter.communityEvents}
        upcomingSummits={post.frontmatter.upcomingSummits}
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
        upcomingDaysEvents {
          title
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
        upcomingSummits {
          title
          summits {
            key
            background {
              publicURL
            }
            date
            location
            notification {
              text
              button {
                link
                text
              }
            }                
          }
        }    
      }
    }
  }
`