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
    title: ["OPENINFRA DAY NORTH AMERICA at INDIANA UNIVERSITY - OCT 15-16, 2024", "INDIANAPOLIS, INDIANA"],
    subtitle: (
      <>
        <a href="https://docs.google.com/forms/d/1wAjuh5mg9YxTjnqJxIPhISUKuLQgWVC852DeB_CgPp0/viewform?edit_requested=true">Contact us</a> to sponsor
        OpenInfra Day NA.
      </>
    ),
    showname: ["OIDNA"],
    name: "OID NA",
    plans: [
      {
        title: "platinum",
        price: "$5,000 USD",
        color: "#757575",
        items: [
          { title: "10 Minute Keynote", value: true },
          { title: "20 Minute Presentation", value: true },
          { title: "Booth Size", value: "10'x10' w/ Table & 2 Chairs. Sponsors must bring their own banner." },
          { title: "4 Complimentary Registrations", value: true },
          { title: "Logo Display" , value: "Website & Printed signs" },
          { title: "Swag" , value: "One item included in swag bag" },
          { title: "Number Available", value: "2" },
        ],
      },
      {
        title: "gold",
        price: "$2,500 USD",
        color: "#DAA511",
        items: [
          { title: "20 Minute Presentation", value: true },
          { title: "Booth Size", value: "10'x10' w/ Table & 2 Chairs. Sponsors must bring their own banner." },
          { title: "3 Complimentary Registrations", value: true },
          { title: "Logo Display" , value: "Website & Printed signs" },
          { title: "Swag" , value: "One item included in swag bag" },
          { title: "Number Available", value: "3" },
        ],
      },
      {
        title: "silver",
        price: "$1,000 USD",
        color: "#A8A9AD",
        items: [
          { title: "Presentation", value: false },
          { title: "Booth Size", value: "10'x10' w/ Table & 2 Chairs. Sponsors must bring their own banner." },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Logo Display" , value: "Website" },
          { title: "Swag" , value: "One item included in swag bag" },
          { title: "Number Available", value: "10" },
        ],
      },
      {
        title: "Reception Sponsor",
        price: "$5,000-$10,000 USD",
        color: "#EAEAEA",
        items: [
          { title: "Presentation", value: "20-minute During Reception" },
          { title: "Booth Size", value: "10'x10' w/ Table & 2 Chairs. Sponsors must bring their own banner." },
          { title: "4 Complimentary Registrations", value: true },
          { title: "Logo Display" , value: "Welcome Sign & Table Placards" },
          { title: "Swag" , value: "One item included in swag bag" },
          { title: "Number Available", value: "1 slot at $10,000 or 1/2 slot at $5,000" },
        ],
      },
      {
        title: "Meal Sponsor",
        price: "$2,500 USD",
        color: "#EAEAEA",
        items: [
          { title: "Presentation", value: "10-minute During Meal" },
          { title: "Booth Size", value: "10'x10' w/ Table & 2 Chairs. Sponsors must bring their own banner." },
          { title: "3 Complimentary Registrations", value: true },
          { title: "Logo Display" , value: "Placards at Serving Stations" },
          { title: "Swag" , value: "One item included in swag bag" },
          { title: "Number Available", value: "2 Breakfast, 2 Lunch" },
        ],
      },
      {
        title: "Coffee Sponsor",
        price: "$1,000 USD",
        color: "#EAEAEA",
        items: [
          { title: "Presentation", value: false },
          { title: "Booth Size", value: "10'x10' w/ Table & 2 Chairs. Sponsors must bring their own banner." },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Logo Display" , value: "Placards at Coffee Stations" },
          { title: "Swag" , value: "One item included in swag bag" },
          { title: "Number Available", value: "2" },
        ],
      },
      {
        title: "Diversity Sponsor",
        price: "$1,000 USD",
        color: "#EAEAEA",
        items: [
          { title: "Presentation", value: false },
          { title: "Booth Size", value: "10'x10' w/ Table & 2 Chairs. Sponsors must bring their own banner." },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Logo Display" , value: "Placards at Coffee Stations" },
          { title: "Swag" , value: "One item included in swag bag" },
          { title: "Number Available", value: "1" },
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
            subtitle="Interested in sponsoring?</br>Reach out to be connected to the OpenInfra Foundation</br>and OpenInfra Summit community organizers!"
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
            title="OPENINFRA SUMMIT ASIA | OCP REGIONAL SUMMIT APAC"
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={SPONSORSHIPS}
          />
          <SponsoringBanner
            title="Interested in sponsoring?"
            subTitle="Reach out to be connected to the OpenInfra</br>Foundation and OpenInfra Summit Asia organizers!"
            button={{
              link:
                "https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates",
              text: "Contact Now",
            }}
          />
          <GenericBanner
            upperText="Not a member?"
            text="Learn how to join the OpenInfra Foundation"
            button={{ link: "/join/members/", text: "BECOME A MEMBER" }}
          />
          <SponsorshipSection
            title="OPENINFRA DAYS"
            overview="SPONSORSHIP OPPORTUNITIES"
            sponsorships={SPONSORSHIPS_DAYS}
          />
          <GenericBanner
            upperText=""
            text="Reach out to be connected</br>to the OpenInfra Foundation and</br>OpenInfra Summit Asia organizers!"
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
