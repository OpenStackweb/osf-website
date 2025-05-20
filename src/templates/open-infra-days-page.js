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
import hero from '../../static/img/openinfra-days/openinfra-days-header.png';
import UpcomingSummits from "../components/UpcomingSummits";

const upcomingItemsAsia = [
  { title: <a href="https://www.vietopeninfra.org/void2025" target="_blank">OpenInfra Days Vietnam</a>,
    date: "July 28, 2025",
    location: "Hanoi, VN",
    registration: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSc99Cuh4U7JXYmUqkv74jjz_Fq984Q_YP-HKAv8hiad62AWrA/viewform" target="_blank">The CFP closes June 15</a>',
    sponsor: '<a href="https://tinyurl.com/VOI2025" target="_blank">Sponsor this event</a>'
  },
  {
    title: "OpenInfra Days Indonesia",
    date: "July 19, 2025",
    location: "Yogyakarta, ID",
    coming_soon: "More info coming soon!"
  },
  { title: <a href="https://openinfradays.kr/" target="_blank">OpenInfra Days Korea</a>,
    date: "August 26th, 2025",
    location: "Seoul, KR",
    registration: '<a href="https://forms.gle/mCNKfsM4vUfPna3B6" target="_blank">The CFP closes June 15</a>',
    sponsor: '<a href="mailto:sponsor@openinfradays.kr" target="_blank">Sponsor this event</a>'
  },
  {
    title: "OpenInfra Days China",
    date: "November 15, 2025",
    location: "Hangzhou, CN",
    coming_soon: "More info coming soon!"
  },
  {
    title: <a href="https://cloudopsdays.com/" target="_blank">Cloud Operator Days Tokyo</a>,
    date: "July 2025 (Online Sessions Available), Sept 5, 2025 (Closing Ceremony)",
    location: "Tokyo, JP",
    registration: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSejRuQZvcWa0QDIcz01yP1DscVOrtPYPYHP2T0os0wUDx-LCg/viewform" target="_blank">The CFP closes April 30</a>',
    sponsor: '<a href="https://cloudopsdays.com/wp-content/uploads/2025/03/CODT2025_sponsorship_en.pdf" target="_blank">Sponsor this event</a>'
  },
];

const upcomingMeetups = [
  { background: '/img/openinfra-days/openinfra-days-cards/sweden-meetup.svg', date: 'May 22, 2025', location: 'Stockholm, Sweden', link: 'https://www.meetup.com/openinfra-user-group-sweden/events/306139678/'},
];

const pastMeetups = [
  { background: '/img/openinfra-days/openinfra-days-cards/oid-pasadena.png', name: 'North America', date: 'March 6 & 7, 2025', location: 'Pasadena, California', link: 'https://www.youtube.com/live/W9OmGdtJAAE?si=OO_WjYr7A6ktAv5A '},
]

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
        <main className="main">
          <div className="content">
            <ImageOnlyHeader backgroundImage={hero} />
            <SubHeaderDays button={{text: "Check out upcoming events", link: "#upcoming-events"}} />
            <OpeninfraDaysAgenda
              title={<><span className="red">Upcoming</span><br />Openinfra Days</>}
              items={upcomingItemsAsia}
            />
            <OpenInfraDays title="Upcoming meetups" events={upcomingMeetups} />
            <MeetupBanner />
            <OpenInfraDays title="Past Openinfra Days" events={pastMeetups} />
            <MoreEventsSection />
            <UpcomingSummits />
            <BottomBanner
              title={'Interested in becoming<br/>a Community Organizer?<br/>Contact us at <a href="mailto:events@openinfra.dev">events@openinfra.dev</a>'}
              button={{link: 'mailto:events@openinfra.dev', text: 'Events Contact'}}
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
