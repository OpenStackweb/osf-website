import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import LinkComponent from "../components/LinkComponent";
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import ColorBar from "../img/color-bar.png";

import { connect } from "react-redux";

import leftArrow from "../img/svg/arrow-left.svg";
import downArrow from "../img/svg/arrow-down.svg";
import HowItWorks from "../components/Upp/HowItWorks";
import ContactUsBanner from "../components/ContactUsBanner";
import Benefits from "../components/Upp/Benefits";
import FindOutMore from "../components/Upp/FindOutMore";
import Quotes from "../components/Upp/Quotes";

export const PTGPageTemplate = ({
  isLoggedUser,
  header,
  form,
  footer,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div id="upp-page">
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
      </div>
      {header && header.display && (
        <div className="join-header ptg-header">
          <div className="header-right">
            <span className="upper-title">
              {header.title}
            </span>
            <span className="description">
              {header.description}
              <br />
            </span>
            <span className="ptg-header-bottom-text">
              {header.bottomText}
            </span>
            <div className="buttons">
              {header.buttons.map((button, index) => {
                const arrow = index === 0 ? <img src={leftArrow} alt="left" /> : <img src={downArrow} alt="down" />
                return (
                    <a key={`header-button-${index}`} href={button.link}>
                      {button.text} {arrow}
                    </a>
                );
              })}
            </div>
          </div>
          <div className="header-left">
            <div className="picture">
              <img alt="img" src={header.image.publicURL} />
            </div>
          </div>
        </div>
      )}

      <main className="main">
        <div className="content">
          <HowItWorks />
          <ContactUsBanner
            text="Interested in the University Partnership Program?"
            contactLink=""
          />
          <Benefits />
          <FindOutMore />
          <Quotes />
          {footer && <Hero content={footer} />}
        </div>
      </main>
    </div>
  );
};

PTGPageTemplate.propTypes = {
  companies: PropTypes.object,
  header: PropTypes.object,
  form: PropTypes.object,
  footer: PropTypes.object,
};

const PTGPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <PTGPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        form={post.frontmatter.form}
        footer={post.frontmatter.footer}
        content={post.html}
      />
    </Layout>
  );
};

PTGPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connect(
  (state) => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
  }),
  null
)(PTGPage);

export const PTGPageQuery = graphql`
  query PTGPage($id: String!) {
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
        header {
          display
          title
          bottomText
          description
          buttons {
            text
            link
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
        form {
          display
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          button {
            text
            link
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
