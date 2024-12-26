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
import SponsoringBanner from "../components/SponsoringBanner";
import SponsorshipSubNav from "../components/SponsorshipSubNav";

const SPONSORSHIPS = [
  
];

const SPONSORSHIPS_DAYS = [
  {
    title: ["OPENINFRA DAY NORTH AMERICA at SCALE - MARCH 2025", "Pasadena, California"],
    subtitle: (
      <>
        <a href="mailto:events@openinfra.dev">Contact us</a> to sponsor
        OpenInfra Day NA or <a href="https://www.socallinuxexpo.org/scale/22x/events/open-infra-days">learn more</a>.
      </>
    ),
    showname: ["OIDNA"],
    name: "OID NA",
    plans: [
      {
        title: "Headline Sponsor",
        price: "SOLD OUT",
        color: "#F4A93A",
        items: [
          { title: "10 Minute Keynote", value: true },
          { title: "20 Minute Presentation", value: true },
          { title: "Booth Size", value: "Two 6' table tops & chairs in the OpenInfra sponsors hall. Sponsors must bring their own banner." },
          { title: "Logo Display" , value: "Sponsor logo on website and printed materials." },
          { title: "Lead Scanners" , value: "Lead scanners can be purchased for an additional $300 USD." },
          { title: "4 Complimentary Registrations", value: true },
          { title: "Number Available", value: "2" },
        ],
      },
      {
        title: "Spotlight Sponsor",
        price: "$2,500 USD",
        color: "#39AE4A",
        items: [
          { title: "10 Minute Presentation", value: true },
          { title: "Booth Size", value: "One 6' table tops & chairs in the OpenInfra sponsors hall. Sponsors must bring their own banner." },
          { title: "Logo Display" , value: "Sponsor logo on website and printed materials." },
          { title: "Lead Scanners" , value: "Lead scanners can be purchased for an additional $300 USD." },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Number Available", value: "5" },
        ],
      },
      {
        title: "Coffee Sponsor",
        price: "$2,500 USD",
        color: "#28A4DB",
        items: [
          { title: "10 Minute Presentation", value: true },
          { title: "Booth Size", value: "One 6' table tops & chairs in the OpenInfra sponsors hall. Sponsors must bring their own banner." },
          { title: "Logo Display" , value: "Sponsor logo on website, at coffee station, and printed materials." },
          { title: "Lead Scanners" , value: "Lead scanners can be purchased for an additional $300 USD." },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Number Available", value: "2" },
        ],
      },
      {
        title: "Diversity Sponsor",
        price: "SOLD OUT",
        color: "#E61E24",
        items: [
          { title: "No presentation", value: false },
          { title: "No Booth", value: false },
          { title: "Logo Display" , value: "Sponsor logo on website and printed materials" },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Number Available", value: "1" },
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
    showname: ["OpenStackBirthday"],
    name: "OpenStack Birthday",
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
