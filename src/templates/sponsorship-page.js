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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR0709Ad7lreUpvTcHqTHleSH1oLpJrzlSU2gwaAPqBmSrzg/viewform">Contact us</a> to sponsor
        OpenInfra Day NA or <a href="https://www.socallinuxexpo.org/scale/22x/events/open-infra-days">learn more</a>.
      </>
    ),
    showname: ["OIDNA"],
    name: "OID NA",
    plans: [
      {
        title: "Headline Sponsor",
        price: "$5,000 USD",
        color: "#F4A93A",
        items: [
          { title: "30 Minute Presentation", value: true },
          { title: "Booth Size", value: "Two 6' table tops & chairs in the OpenInfra sponsors hall. Sponsors must bring their own banner." },
          { title: "Logo Display" , value: "Sponsor logo on website and printed materials." },
          { title: "4 Complimentary Registrations", value: true },
          { title: "Number Available", value: "2" },
        ],
      },
      {
        title: "Spotlight Sponsor",
        price: "$2,500 USD",
        color: "#39AE4A",
        items: [
          { title: "10 Minute Presentation", value: false },
          { title: "Booth Size", value: "One 6' table tops & chairs in the OpenInfra sponsors hall. Sponsors must bring their own banner." },
          { title: "Logo Display" , value: "Sponsor logo on website and printed materials." },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Number Available", value: "5" },
        ],
      },
      {
        title: "Coffee Sponsor",
        price: "$2,500 USD",
        color: "#28A4DB",
        items: [
          { title: "10 Minute Presentation", value: false },
          { title: "Booth Size", value: "One 6' table tops & chairs in the OpenInfra sponsors hall. Sponsors must bring their own banner." },
          { title: "Logo Display" , value: "Sponsor logo on website, at coffee station, and printed materials." },
          { title: "2 Complimentary Registrations", value: true },
          { title: "Number Available", value: "2" },
        ],
      },
      {
        title: "Diversity Sponsor",
        price: "$1,000 USD",
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
            title="OPENINFRA DAYS"
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
