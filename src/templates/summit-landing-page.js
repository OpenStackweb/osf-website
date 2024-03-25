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
import CommunityEvents from "../components/CommunityEvents";
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
        <UpcomingSummits title={"Upcoming OpenInfra Summits"} />
        <MiddleBanner
          title={"inclusive. diverse. open"}
          text={`We are a diverse community of professionals, and the OpenInfra Summit organizers are dedicated to providing an 
          inclusive and safe Summit experience for everyone. View the <a href="/legal/code-of-conduct">OpenInfra Summit Code of Conduct</a> for more information.`}
          image={"/img/summit-landing/middle-banner/middle-banner-1.png"}
          imageFirst={false}
        />
        <MiddleBanner
          title={"have questions?"}
          text={`Contact the Openinfra Foundation and OpenInfra Summit Asia organizers.`}
          button={{ text: "Contact us", link: "mailto:summit@openinfra.dev" }}
          image={"/img/summit-landing/middle-banner/middle-banner-2.png"}
          imageFirst={true}
        />
        <SponsorBanner />
        <MeetupBanner />
        <CommunityEvents />
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
