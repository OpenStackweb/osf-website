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

export const SummitLandingPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  content,
  contentComponent,
  headerImage,
  subHeader,
  upcomingSummits,
  pastSummits,
  middleBanner,
  sponsorBanner,
  meetupBanner,
  previousSummits,
  bottomBanner
}) => {
  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <HeaderImage
          backgroundImage={headerImage.backgroundImage.publicURL}
          overview={headerImage.overview}
          caption={headerImage.caption}
          logo={{ src: headerImage.logo.src.publicURL, alt: headerImage.logo.alt }}
        />
        <SubHeader
          overview={subHeader.overview}
          title={subHeader.title}
          text={subHeader.text}
          badge={subHeader.badge}
          footer={subHeader.footer}
        />
        <UpcomingSummits
          title={upcomingSummits.title}
          summits={upcomingSummits.summits}
        />
        <PastSummits
          title={pastSummits.title}
          summits={pastSummits.summits}
        />
        {middleBanner.map((banner) => <MiddleBanner
          title={banner.title}
          text={banner.text}
          image={banner.image.publicURL}
          button={{ text: banner.button?.text, link: banner.button?.link }}
          imageFirst={banner.imageFirst}
        />)}
        <SponsorBanner
          background={sponsorBanner.background.publicURL}
          upperTitle={sponsorBanner.upperTitle}
          title={sponsorBanner.title}
          button={sponsorBanner.button}
        />
        <MeetupBanner
          background={meetupBanner.background.publicURL}
          logo={meetupBanner.logo.publicURL}
          button={meetupBanner.button}
          text={meetupBanner.text}
        />
        <PreviousSummits 
          title={previousSummits.title}
          summits={previousSummits.summits}
        />
        <BottomBanner
          background={bottomBanner.background.publicURL}
          title={bottomBanner.title}
          button={bottomBanner.button}
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
        headerImage={post.frontmatter.headerImage}
        subHeader={post.frontmatter.subHeader}
        upcomingSummits={post.frontmatter.upcomingSummits}
        pastSummits={post.frontmatter.pastSummits}
        middleBanner={post.frontmatter.middleBanner}
        sponsorBanner={post.frontmatter.sponsorBanner}
        meetupBanner={post.frontmatter.meetupBanner}
        previousSummits={post.frontmatter.previousSummits}
        bottomBanner={post.frontmatter.bottomBanner}
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
        headerImage {
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          overview
          caption
          logo {
            src {
              childImageSharp {
                fluid(maxWidth: 500, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            alt
          }
        }
        subHeader {
          overview
          title
          text
          badge {
            src {
              childImageSharp {
                fluid(maxWidth: 400, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            alt
          }
          footer {
            src {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            alt
          }
        }
        upcomingSummits {
          title
          summits {
            key
            background {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
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
        pastSummits {
          title
          summits {
            key
            background {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
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
        middleBanner {
          title
          text
          button {
            text
            link
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          imageFirst
        }
        sponsorBanner {
          background {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          upperTitle
          title
          button {
            link
            text
          }
        }
        meetupBanner {
          background {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          logo {
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          button {
            link
            text
          }
          text
        }
        previousSummits {
          title
          summits {
            name
            date
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            link
          }
        }
        bottomBanner {
          background {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          title
          button {
            link
            text
          }
        }
      }
    }
  }
`;
