import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import SEO from "../components/SEO";
import SimpleHeader from "../components/SimpleHeader";
import GenericBanner from "../components/GenericBanner";
import BottomBanner from "../components/BottomBanner";
import SponsorshipSection from "../components/SponsorshipSection";

import "../style/sponsorship-page.scss";
import SponsorshipSubNav from "../components/SponsorshipSubNav";

const SPONSORSHIPS = [
  
];

const SPONSORSHIPS_DAYS = [
  {
    title: ["Openinfra summit europe, 17-19 october", "paris-saclay, france"],
    subtitle: (
      <>
        <a href="mailto:events@openinfra.dev">Contact us</a> to sponsor
        OpenInfra Summit Europe or <a href="https://summit2025.openinfra.org/sponsor">learn more</a>.
      </>
    ),
    plans: [
      {
        title: "Headline Sponsor",
        priceMember: "€ 50 000",
        priceNonMember: "€ 60 000",
        color: "#ED362F",
        items: [
          { title: "8-Minute Keynote", value: true },
          { title: "One 30-Minute Presentation", value: true },
          { title: "Booth Size", value: ["3m x 3m" , '27" monitor']},
          { title: "Meeting Room", value: true },
          { title: "Logo Display" , value: "Sponsor logo on website and printed materials." },
          { title: "12 Complimentary Registrations", value: true },
          { title: "Number Available", value: "2", colored: true },
        ],
      },
      {
        title: "Premier Sponsor",
        priceMember: "€ 30 000",
        priceNonMember: "€ 45 000",
        color: "#F4A93A",
        items: [
          { title: "Two 30-Minute Presentation", value: true },
          { title: "Booth Size", value: ["3m x 3m" , '27" monitor']},
          { title: "Meeting Room", value: ["Available for purchase"] },
          { title: "Logo Display" , value: "Sponsor logo on website and printed materials." },
          { title: "8 Complimentary Registrations", value: "" },
          { title: "Number Available", value: "3", colored: true },
        ],
      },
      {
        title: "Spotlight Sponsor",
        priceMember: "€ 15 000",
        priceNonMember: "€ 25 000",
        color: "#28A4DB",
        items: [
          { title: "One 30-Minute Presentation", value: true },
          { title: "Booth Size", value: ["1.5m x 3m" , '27" monitor']},
          { title: "Meeting Room", value: false },
          { title: "Logo Display" , value: "Sponsor logo on website, at coffee station, and printed materials." },
          { title: "4 Complimentary Registrations", value: "" },
          { title: "Number Available", value: "Limited Supply", colored: true },
        ],
      },
      {
        title: "Exhibitor Sponsor",
        priceMember: "€ 7 500",
        priceNonMember: "€ 15 000",
        color: "#39AE4A",
        items: [
          { title: "30-Minute Presentation", value: "Available for purchase" },
          { title: "Booth Size", value: ["1.5m x 3m" , "Monitor available for purchase"]},
          { title: "Meeting Room", value: false },
          { title: "Logo Display" , value: "Sponsor logo on website, at coffee station, and printed materials." },
          { title: "2 Complimentary Registrations", value: "" },
          { title: "Number Available", value: "Limited Supply", colored: true },
        ],
      },
      {
        dark: true,
        title: "Supporting Sponsor",
        priceMember: "€ 2 500",
        priceNonMember: "€ 5 000",
        color: "#E61E24",
        items: [
          { title: "30-Minute Presentation", value: "Available for purchase" },
          { title: "Booth Size", value: false},
          { title: "Meeting Room", value: false },
          { title: "Logo Display" , value: "Sponsor logo on website, at coffee station, and printed materials." },
          { title: "1 Complimentary Registrations", value: "" },
          { title: "Number Available", value: "Unlimited", colored: true },
        ],
      },
      {
        dark: true,
        overview: <span style={{color:"#F4A93A"}}>Add on:</span>,
        title: "30-MINUTE BREAKOUT SPEAKING SESSION",
        color: "#F4A93A",
        items: [
          { title: "Price", value: ["€ 10 000 Member", "€ 15 000 Non-Member"] },
          { title: "30-Minute Presentation", value: ["On October 18th or 19th"]},
          { title: "Recording", value: ["Available post-event"] },
          {
            title: "Number Available",
            value: <>10 <span style={{fontSize: "12px"}}>(limit one per person)</span></>,
            colored: true
          },
        ],
      },
      {
        dark: true,
        overview: <span style={{color:"#28A4DB"}}>Add on:</span>,
        title: <>Meeting<br/> Room</>,
        color: "#28A4DB",
        items: [
          { title: "Price", value: ["€ 5 000"] },
          { title: "Private meeting room", value: ["For October 18th or 19th", "Available to premier level only"]},
          { title: "Number Available", value: "3", colored: true },
        ],
      },
      {
        dark: true,
        overview: <span style={{color:"#39AE4A"}}>Add on:</span>,
        title: "T-Shirt Sponsor",
        color: "#39AE4A",
        items: [
          { title: "Price", value: ["€ 20 000"] },
          { title: "SPONSOR LOGO ON SLEEVE", value: "T-shirt design created by the OpenInfra Foundation"},
        ],
      },
      {
        dark: true,
        title: <>Booth<br/><span style={{color: "#888888"}}>Add-On</span></>,
        color: "#161616",
        items: [
          { title: "computer monitor (27\")", value: ["€ 250"] },
          { title: "tv screen (55\")", value: ["€ 400"]},
        ],
      },
      {
        overview: "Virtualization Migration Day:",
        title: <span style={{color: "white"}}>8-Minute keynote</span>,
        color: "#888888",
        items: [
          { title: "Price", value: ["€ 10 000 Member", "€ 15 000 Non-Member"] },
          { title: "Exclusive 8-Minute demo", value: ["During Virtualization Migration Day Kickoff on Saturday, 18th October"] },
          { title: "Number Available", value: "1", colored: true },
        ],
      },
      {
        overview: "Virtualization Migration Day:",
        title: <span style={{color: "white"}}>Lightning Demo</span>,
        color: "#888888",
        items: [
          { title: "Price", value: ["€ 5 000 Member", "€ 7 500 Non-Member"] },
          { title: "15-Minute demo", value: ["Demo in the Lightning Demo Showcase"] },
          { title: "Number Available", value: "5", colored: true },
        ],
      },
    ],
  },
  {
    title: ["OPENSTACK TURNS 15 JULY 2025! JOIN IN BY SPONSORING VARIOUS ACTIVITIES AROUND THE GLOBE"],
    subtitle: (
      <>
        <a href="mailto:events@openinfra.dev">Contact us</a> to sponsor an OpenStack Birthday celebration!
      </>
    ),
    plans: [
      {
        title: "BIRTHDAY SHIRT OPTION A",
        price: "$25,000 USD",
        color: "#F4A93A",
        items: [
          { title: "1,000 SHIRTS", value: "T-shirt design will be produced by OpenInfra Foundation. To be distributed at various community events." },
          { title: "Logo Display" , value: "T-shirt with official birthday design on front with sponsor's logo of choice on sleeve." },
          { title: "Number Available" , value: "Only one t-shirt sponsorship is available. Sponsors have the opportunity to choose option A or B." },
        ],
      },
      {
        title: "BIRTHDAY SHIRT OPTION B",
        price: "$15,000 USD",
        color: "#5c6b7e",
        items: [
          { title: "500 SHIRTS", value: "T-shirt design will be produced by OpenInfra Foundation. To be distributed at various community events." },
          { title: "Logo Display" , value: "T-shirt with official birthday design on front with sponsor's logo of choice on sleeve." },
          { title: "Number Available" , value: "Only one t-shirt sponsorship is available. Sponsors have the opportunity to choose option A or B." },
        ],
      },
      {
        title: "OPENSTACK PARTY AT OPENINFRA DAYS NORTH AMERICA",
        price: "$500 USD",
        color: "#e61e24",
        items: [
          { title: "MARCH 6 or 7, 2025 IN PASADENA, CA", value: true },
          { title: "BYOB", value: "Bring your own banner to display at the birthday party venue!" },
          { title: "Number Available", value: "Unlimited" },
        ],
      },
      {
        title: "IN-PERSON USER GROUP BIRTHDAY CELEBRATION",
        price: "$1,000 USD *price may vary",
        color: "#28a4db",
        items: [
          { title: "About", value: "For the OpenStack birthdays, User Groups around the world host in-person gatherings to celebrate. This sponsorship would be location-specific. Please contact us for a list of available locations." },
          { title: "Logo Display" , value: "Logo inclusion a slide in the deck the OpenInfraFoundation shares with the User Groups, an onsite thank you from the organizers. Organizers will be connected directly with the sponsor to discuss swag options." },
        ],
      },
      {
        title: "Virtual USER GROUP BIRTHDAY CELEBRATION",
        price: "$500 USD *price may vary",
        color: "#f4a93a",
        items: [
          { title: "About", value: "For the OpenStack birthdays, User Groups around the world host gatherings to celebrate. This sponsorship would be location-specific. Please contact us for a list of available locations" },
          { title: "Logo Display" , value: "Logo inclusion a slide in the deck the OpenInfraFoundation shares with the User Groups and a thank you from the organizers." },
        ],
      },
    ],
  },
];

export const SponsorshipPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  content,
  contentComponent,
}) => {
  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
      </div>
      <main className="main">
        <div className="content sponsorship-page-content">
          <SimpleHeader
            title="BECOME A SPONSOR"
            subtitle="Interested in sponsoring?</br>Reach out to be connected to the OpenInfra Foundation</br>and OpenInfra event organizers!"
            backgroundImage="/img/sponsorship/summit-marketplace.png"
            button={{
              link: "mailto:events@openinfra.dev",
              text: "Contact Now",
            }}
          />
          <SponsorshipSubNav
            sponsorships={[...SPONSORSHIPS, ...SPONSORSHIPS_DAYS]}
          />
          <SponsorshipSection
            title=""
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={SPONSORSHIPS_DAYS}
          />
          <GenericBanner
            upperText="Not a member?"
            text="Learn how to join the OpenInfra Foundation"
            button={{ link: "/join/members/", text: "BECOME A MEMBER" }}
          />
          <GenericBanner
            upperText=""
            text="Reach out to be connected</br>to the OpenInfra Foundation and</br>OpenInfra event organizers!"
            button={{
              link:
                "https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates",
              text: "Contact Now",
            }}
            fullwidth={false}
          />
          <BottomBanner
            title={
              "Subscribe to our newsletter <br/>& keep up to date with the latest<br/>News about the Summits."
            }
            button={{
              link:
                "https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates",
              text: "SIGN ME UP",
            }}
          />
        </div>
      </main>
    </div>
  );
};

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
  );
};

export default connect(
  (state) => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
  }),
  null
)(SponsorshipPage);

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
`;
