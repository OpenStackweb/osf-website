import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

import EventHero from "../components/EventHero";
import EventTracks from "../components/EventTracks";
import EventSchedule from "../components/EventSchedule";
import EventVenue from "../components/EventVenue";
import EventPasses from "../components/EventPasses";
import EventSponsors from "../components/EventSponsors";

import { connect } from "react-redux";

export const EventLandingPageTemplate = ({
  isLoggedUser,
  header,
  about,
  tracks,
  schedule,
  venue,
  registration,
  sponsors,
  footer,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
      </div>

      <main className="main event-landing">
        {header && header.display && (
          <EventHero
            banner={header.banner}
            bannerAlt={header.bannerAlt}
            title={header.title}
            dateLocation={header.dateLocation}
            note={header.note}
            buttons={header.buttons}
          />
        )}

        {about && about.display && (
          <section className="event-section event-about">
            <div className="container">
              {about.title && (
                <h2 className="event-section-title">{about.title}</h2>
              )}
              {about.body && (
                <div
                  className="event-about-body"
                  dangerouslySetInnerHTML={{ __html: about.body }}
                />
              )}
            </div>
          </section>
        )}

        {tracks && tracks.display && (
          <EventTracks title={tracks.title} items={tracks.items} />
        )}

        {schedule && schedule.display && (
          <EventSchedule title={schedule.title} embedUrl={schedule.embedUrl} />
        )}

        {venue && venue.display && (
          <EventVenue
            title={venue.title}
            name={venue.name}
            address={venue.address}
            description={venue.description}
          />
        )}

        {registration && registration.display && (
          <EventPasses
            title={registration.title}
            passes={registration.passes}
            button={registration.button}
          />
        )}

        {sponsors && sponsors.display && (
          <EventSponsors title={sponsors.title} tiers={sponsors.tiers} />
        )}

        {content && (
          <section className="event-section event-extra-content">
            <div className="container">
              <PageContent content={content} />
            </div>
          </section>
        )}

        {footer && <Hero content={footer} />}
      </main>
    </div>
  );
};

EventLandingPageTemplate.propTypes = {
  header: PropTypes.object,
  about: PropTypes.object,
  tracks: PropTypes.object,
  schedule: PropTypes.object,
  venue: PropTypes.object,
  registration: PropTypes.object,
  sponsors: PropTypes.object,
  footer: PropTypes.object,
};

const EventLandingPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <EventLandingPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        about={post.frontmatter.about}
        tracks={post.frontmatter.tracks}
        schedule={post.frontmatter.schedule}
        venue={post.frontmatter.venue}
        registration={post.frontmatter.registration}
        sponsors={post.frontmatter.sponsors}
        footer={post.frontmatter.footer}
        content={post.html}
      />
    </Layout>
  );
};

EventLandingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connect(
  (state) => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
  }),
  null
)(EventLandingPage);

export const eventLandingPageQuery = graphql`
  query EventLandingPage($id: String!) {
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
        header {
          display
          banner {
            publicURL
          }
          bannerAlt
          title
          dateLocation
          note
          buttons {
            text
            link
            display
          }
        }
        about {
          display
          title
          body
        }
        tracks {
          display
          title
          items {
            title
            description
          }
        }
        schedule {
          display
          title
          embedUrl
        }
        venue {
          display
          title
          name
          address
          description
        }
        registration {
          display
          title
          passes {
            label
            price
            note
          }
          button {
            text
            link
            display
          }
        }
        sponsors {
          display
          title
          tiers {
            name
            sponsors {
              name
              url
              logo {
                publicURL
              }
            }
          }
        }
        footer {
          title
          subTitle
          button
          buttonText
          display
        }
      }
    }
  }
`;
