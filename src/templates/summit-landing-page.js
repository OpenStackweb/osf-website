import React from "react";
import { graphql } from "gatsby";
import { connect } from "react-redux";
import { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import SEO from "../components/SEO";
import HeaderImage from "../components/HeaderImage";
import SponsorBanner from "../components/SponsorBanner";
import SubHeader from "../components/SubHeader";
import PreviousSummits from "../components/PreviousSummits";
import PastSummits from "../components/PastSummits";
import UpcomingSummits from "../components/UpcomingSummits";
import MeetupBanner from "../components/MeetupBanner";
import BottomBanner from "../components/BottomBanner";
import MiddleBanner from "../components/MiddleBanner";
import hero from "../../static/img/summit-landing/summit-landing-hero.png";
import logo from "../../static/img/summit-landing/openinfra-logo.png";

export const SummitLandingPageTemplate = ({
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
        <HeaderImage
          backgroundImage={hero}
          overview={
            <>
              Rediscover <br /> THE SUMMIT EXPERIENCE
            </>
          }
          caption="By the Community. For the Community."
          logo={{ src: logo, alt: "Openinfra logo" }}
        />
        <SubHeader />
        <UpcomingSummits title={"Upcoming OpenInfra Summit"} />
        <PastSummits title={"Past OpenInfra Summits"} />
        <MiddleBanner
          title={"inclusive. diverse. open"}
          text={
            `We are a diverse community of professionals, and the OpenInfra Summit organizers are dedicated to providing an 
            inclusive and safe Summit experience for everyone. View the 
            <a href="/legal/code-of-conduct">OpenInfra Summit Code of Conduct</a> for more information.<br/><br/>
            The OpenInfra Foundation’s Travel Support Program facilitates the participation of key contributors to 
            OpenInfra events by covering the costs for their travel and accommodation. If you are a key contributor to 
            a project supported by the OpenInfra Foundation and your company does not cover the costs of your travel 
            and accommodation to the event, you can apply for the 
            <a href="https://openinfrafoundation.formstack.com/forms/openinfra_tsp">Travel Support Program</a>.<br/><br/>
            Want to support the OpenInfra Travel Support Program? 
            <a href="https://donate.stripe.com/8wMbLU6Qh8v8fVC9AE">Donations</a> made are directly used to fund active 
            contributors to OpenInfra events around the world.`
          }
          image={"/img/summit-landing/middle-banner/middle-banner-1.png"}
          imageFirst={false}
        />
        <MiddleBanner
          title={"have questions?"}
          text={`Contact the Openinfra Foundation and OpenInfra Summit organizers.`}
          button={{ text: "Contact us", link: "mailto:summit@openinfra.dev" }}
          image={"/img/summit-landing/middle-banner/middle-banner-2.png"}
          imageFirst={true}
        />
        <SponsorBanner />
        <MeetupBanner />
        <PreviousSummits />
        <BottomBanner
          title={`
          Subscribe to the OpenInfra newsletter<br/>
          & keep up to date with the latest<br/>
          OpenInfra Summit news.`}
          button={{
            link: "https://openinfra.dev/newsletter/",
            text: "Sign Me Up",
          }}
        />
      </div>

      <main className="main">
        <div className="content"></div>
      </main>
    </div>
  );
};

const SummitLandingPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <SummitLandingPageTemplate
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
)(SummitLandingPage);

export const SummitLandingPageQuery = graphql`
  query SummitLandingPageQuery($id: String!) {
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
