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
import LinkComponent from "../components/LinkComponent";

const SPONSORSHIPS = [];

const SPONSORSHIPS_DAYS = [
  {
    title: ["Kubecon | CloudNativeCon | OpenInfra Summit Asia", "8-9 September, Shanghai, China"],
    subtitle: (
      <>
        <a href="mailto:summit@openinfra.dev">Contact us</a> to sponsor
        or <LinkComponent href="https://www.lfasiallc.com/kubecon-cloudnativecon-openinfra-summit-china/">learn more</LinkComponent>.
      </>
    ),
    plans: [
      {
        soldOut: false,
        title: "Diamond Sponsor",
        priceMember: "$ 125,000",
        priceNonMember: "$ 150,000",
        color: "#ED362F",
        items: [
          { title: `SPEAKING OPPORTUNITY<sup><a href="#note1">1</a></sup>`, value: "Choice of (1) 5-minute keynote or (1) 30-minute breakout session" },
          { title: `ACCESS TO OPT-IN ATTENDEE REGISTRATION LIST<sup><a href="#note2">2</a></sup>`, value: "Provided pre - and post - event" },
          { title: "RECOGNITION IN EVENT PROMOTIONAL EMAILS AND ATTENDEE COMMUNICATIONS", value: "logo and link" },
          { title: `DEMO SESSION<sup><a href="#note3">3</a></sup>`, value: "(1) 20 - minute session at demo theater(includes attendee contact information)" },
          { title: "LIST OF REGISTERED PRESS/ANALYSTS", value: "Provided 3 weeks prior to the event" },
          { title: "LOGO RECOGNITION ON KEYNOTE SCREEN", value: true },
          { title: "LOGO RECOGNITION IN POST-EVENT TRANSPARENCY REPORT", value: true },
          { title: "SOCIAL MEDIA POSTS ON X (FORMERLY TWITTER) FROM OFFICIAL @KUBECON_ AND OPENINFRA HANDLE", value: "(1) pre - event standalone post with social card" },
          { title: "POSTS IN CNCF AND OPENINFRA'S WECHAT GROUPS", value: "(1) standalone WeChat article and poster" },
          { title: "LOGO ON SPONSOR SIGNAGE, CONFERENCE WEBSITE, AND CONFERENCE SCHEDULE", value: true },
          { title: "OPPORTUNITY TO INCLUDE NEWS ANNOUNCEMENTS IN OFFICIAL EVENT NEWS PACKAGE", value: "Preferred placement " },
          { title: `COMPLIMENTARY CONFERENCE PASSES<sup><a href="#note4">4</a></sup>`, value: "20" },
          { title: "20% DISCOUNT ON ADDITIONAL CONFERENCE PASSES", value: "Unlimited usage while passes are available for sale" },
          { title: "EXHIBIT SPACE", value: "6m(w) x 3m(d) turnkey booth" },
          { title: "PHYSICAL LEAD RETRIEVAL DEVICES", value: "(2) device" },
        ],
      },
      {
        soldOut: false,
        title: "PLATINUM SPONSOR",
        priceMember: "$ 60,000",
        priceNonMember: "$ 72,000",
        color: "#F4A93A",
        items: [
          { title: `ACCESS TO OPT-IN ATTENDEE REGISTRATION LIST<sup><a href="#note2">2</a></sup>`, value: "Provided post-event" },
          { title: "RECOGNITION IN EVENT PROMOTIONAL EMAILS AND ATTENDEE COMMUNICATIONS", value: "company name and link only" },
          { title: `DEMO SESSION<sup><a href="#note3">3</a></sup>`, value: "(1) 20-minute session at demo theater (includes attendee contact information)" },
          { title: "LIST OF REGISTERED PRESS/ANALYSTS", value: "Provided 3 weeks prior to the event" },
          { title: "LOGO RECOGNITION ON KEYNOTE SCREEN", value: true },
          { title: "LOGO RECOGNITION IN POST-EVENT TRANSPARENCY REPORT", value: true },
          { title: "SOCIAL MEDIA POSTS ON X (FORMERLY TWITTER) FROM OFFICIAL @KUBECON_ AND OPENINFRA HANDLE", value: "(1) pre-event group post" },
          { title: "POSTS IN CNCF AND OPENINFRA'S WECHAT GROUPS", value: "(1) standalone WeChat article and poster" },
          { title: "LOGO ON SPONSOR SIGNAGE, CONFERENCE WEBSITE, AND CONFERENCE SCHEDULE", value: true },
          { title: "OPPORTUNITY TO INCLUDE NEWS ANNOUNCEMENTS IN OFFICIAL EVENT NEWS PACKAGE", value: "Preferred placement " },
          { title: `COMPLIMENTARY CONFERENCE PASSES<sup><a href="#note4">4</a></sup>`, value: "10" },
          { title: "20% DISCOUNT ON ADDITIONAL CONFERENCE PASSES", value: "Unlimited usage while passes are available for sale" },
          { title: "EXHIBIT SPACE", value: "4.5m (w) x 3m (d) turnkey booth" },
          { title: "PHYSICAL LEAD RETRIEVAL DEVICES", value: "(2) device" },
        ],
      },
      {
        soldOut: false,
        title: "Gold Sponsor",
        priceMember: "$ 35,000",
        priceNonMember: "$ 42,000",
        color: "#28A4DB",
        items: [
          { title: `DEMO SESSION<sup><a href="#note3">3</a></sup>`, value: "Promotion of (1) sponsor-hosted in-booth demo" },
          { title: "LIST OF REGISTERED PRESS/ANALYSTS", value: "Provided 3 weeks prior to the event" },
          { title: "LOGO RECOGNITION ON KEYNOTE SCREEN", value: true },
          { title: "LOGO RECOGNITION IN POST-EVENT TRANSPARENCY REPORT", value: true },
          { title: "SOCIAL MEDIA POSTS ON X (FORMERLY TWITTER) FROM OFFICIAL @KUBECON_ AND OPENINFRA HANDLE", value: "(1) pre-event group post" },
          { title: "POSTS IN CNCF AND OPENINFRA'S WECHAT GROUPS", value: "(1) shared group WeChat article and poster" },
          { title: "LOGO ON SPONSOR SIGNAGE, CONFERENCE WEBSITE, AND CONFERENCE SCHEDULE", value: true },
          { title: "OPPORTUNITY TO INCLUDE NEWS ANNOUNCEMENTS IN OFFICIAL EVENT NEWS PACKAGE", value: true },
          { title: `COMPLIMENTARY CONFERENCE PASSES<sup><a href="#note4">4</a></sup>`, value: "6" },
          { title: "20% DISCOUNT ON ADDITIONAL CONFERENCE PASSES", value: "Unlimited usage while passes are available for sale" },
          { title: "EXHIBIT SPACE", value: "3m (w) x 3m (d) turnkey booth" },
          { title: "PHYSICAL LEAD RETRIEVAL DEVICE(S)", value: "(1) device" },
        ],
      },
      {
        soldOut: false,
        title: "Silver Sponsor",
        priceMember: "$ 18,000",
        priceNonMember: "$ 21,600",
        color: "#39AE4A",
        items: [
          { title: "POSTS IN CNCF AND OPENINFRA'S WECHAT GROUPS", value: "(1) shared group WeChat article and poster" },
          { title: "LOGO ON SPONSOR SIGNAGE, CONFERENCE WEBSITE, AND CONFERENCE SCHEDULE", value: true },
          { title: "OPPORTUNITY TO INCLUDE NEWS ANNOUNCEMENTS IN OFFICIAL EVENT NEWS PACKAGE", value: true },
          { title: `COMPLIMENTARY CONFERENCE PASSES<sup><a href="#note4">4</a></sup>`, value: "4" },
          { title: "EXHIBIT SPACE", value: "2.5m(w) x 2.5m(d) exhibit space with branded cabinet" },
          { title: "PHYSICAL LEAD RETRIEVAL DEVICE(S)", value: "(1) device" }
        ],
      },
      {
        dark: true,
        soldOut: false,
        title: "STARTUP / END USER SPONSOR",
        priceMember: "$ 6,000",
        color: "#E61E24",
        items: [

          { title: "POSTS IN CNCF AND OPENINFRA'S WECHAT GROUPS", value: "(1) shared group WeChat article and poster" },
          { title: "LOGO ON SPONSOR SIGNAGE, CONFERENCE WEBSITE, AND CONFERENCE SCHEDULE", value: true },
          { title: "OPPORTUNITY TO INCLUDE NEWS ANNOUNCEMENTS IN OFFICIAL EVENT NEWS PACKAGE", value: true },
          { title: `COMPLIMENTARY CONFERENCE PASSES<sup><a href="#note4">4</a></sup>`, value: "2" },
          { title: "20% DISCOUNT ON ADDITIONAL CONFERENCE PASSES", value: "Unlimited usage while passes are available for sale" },
          { title: "EXHIBIT SPACE", value: "Tabletop exhibit only" },
          { title: "PHYSICAL LEAD RETRIEVAL DEVICE(S)", value: "(1) device" },
        ],
      },
      {
        dark: true,
        soldOut: false,
        title: "DAN KOHN DIVERSITY SCHOLARSHIP FUND",
        price: "$ 7,500 Minimun",
        color: "#F4A93A",
        items: [
          { title: "SPONSOR RECOGNITION ON EVENT WEBSITE", value: true },
          { title: "LOGO RECOGNITION ON ROTATING SLIDES BEFORE AND AFTER KEYNOTES", value: true },
          { title: "LOGO RECOGNITION ON ONSITE SIGNAGE", value: true },
          { title: "LOGO RECOGNITION IN POST-EVENT TRANSPARENCY REPORT", value: true },
          { title: "(1) PRE-EVENT GROUP POST", value: "From the official X handle @KubeCon_ (formerly Twitter)" },
          { title: "SPONSOR RECOGNITION IN SCHOLARSHIP ACCEPTANCE NOTIFICATIONS", value: true },
        ],
      },
      {
        dark: true,
        soldOut: false,
        overview: <span style={{ color: "#28A4DB" }}>Available To Confirmed Level Sponsors Only</span>,
        title: "CROSS-PROMOTION OF PRE-APPROVED COMMUNITY EVENTS",
        color: "#28A4DB",
        price: "$ 10,000 Each",
        items: [
          { title: "EVENT LISTED ON THE OFFICIAL CONFERENCE SCHEDULE", value: true },
          { title: "EVENT LISTED IN A SHARED PRE-EVENT PROMOTIONAL EMAIL", value: true },
          { title: "★ OPTIONAL: EVENT LISTED ON THE KUBECON + CLOUDNATIVECON REGISTRATION FORM FOR ATTENDEES TO ADD IT TO THEIR CONFERENCE REGISTRATION.", value: "A 2.58 % credit card processing fee per registrant will be charged if a registration fee is required." },
        ],
      },
      {
        soldOut: false,
        title: <span style={{color: "white"}}>Attendee T-Shirt</span>,
        color: "#888888",
        price: "$ 15,000 | 1 Available",
        items: [
          { title: "SPONSOR LOGO IS PRINTED ON THE OFFICIAL CONFERENCE SHIRT", value: "Logo must be single-color only (no gradient colors)." },
          { title: "★ Logo color, size, and placement will be determined by OpenInfra Foundation and CNCF based on the overall t-shirt design." }
        ],
      },
      {
        soldOut: false,
        title: <span style={{color: "white"}}>Lanyards</span>,
        color: "#888888",
        price: "$ 10,000 | 1 Available",
        items: [
          { title: "SPONSOR LOGO IS PRINTED ON THE OFFICIAL CONFERENCE LANYARDS.", value: "Logo must be single-color only (no gradient colors)." },
          { title: "★ Logo color, size, and placement will be determined by OpenInfra Foundation and CNCF based on the overall Lanyard design." }
        ],
      },
      {
        soldOut: false,
        title: <span style={{color: "white"}}>Session Recording</span>,
        color: "#888888",
        price: "$ 15,000 | 1 Available",
        items: [
          { title: "SPONSOR RECOGNITION SLIDE WITH LOGO AT THE BEGINNING OF EACH VIDEO RECORDING", value: true },
          { title: "Customizable slide designed by the sponsor at the beginning of each video recording", value: true }
        ],
      },
    ],
    notes: `
    <p>
      <sup id="note1">1</sup><b> SPEAKING OPPORTUNITY:</b> Content must meet CFP criteria and is subject to program committee approval. Includes attendee contact list (for breakout session only, not available for keynote session.) 
      <br/>Includes Video recording of sponsored keynote or breakout session. Raw file to be used under Creative Commons license with attribution to The Linux Foundation, Cloud Native Computing Foundation, and OpenInfra Foundation
    </p>      

    <p>
      <sup id="note2">2</sup><b> ACCESS TO OPT-IN ATTENDEE REGISTRATION LIST:</b> List may be used for marketing purposes, and will include attendee contact information (with email address) of opt-in attendees.
    </p>  

    <p>
      <sup id="note3">3</sup><b> DEMO SESSION:</b> Demo theater located in meeting room or exhibit hall (subject to availability)
    </p>

    <p>
      <sup id="note4">4</sup><b> COMPLIMENTARY CONFERENCE PASSES:</b> To be used for booth staff, attendees, and guests, Includes access to keynotes, sessions, and exhibits
    </p>

    <p>
      <b>EXHIBIT SPACE:</b> Booth sizes are subject to change based on venue <br/>
        <ul>
          <li>Turnkey booth includes backwall and counter with graphics, (2) stools, (1) wastebasket, and basic power.</li>
          <li>Tabletop exhibit includes (1) draped table, (2) chairs, (1) wastebasket, and basic power.</li>
        </ul>
    </p>

    <p>
      <b>PHYSICAL LEAD RETRIEVAL DEVICE(S):</b> To be used at booth only
    </p>
    `
  }
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
            background={"/img/summit-landing/subscribe/subscribe-banner-bg.png"}
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
