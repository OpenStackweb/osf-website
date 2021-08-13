import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import SEO from '../components/SEO';
import envVariables from '../utils/envVariables'
import { connect } from "react-redux";

import leftArrow from '../img/svg/arrow-left.svg'

export const JoinPageTemplate = ({
    isLoggedUser,
    title,
    subTitle,
    footer,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser} />
                <div className="join-header">
                    <div className="header-right">
                        <span className="upper-title">
                            Join the openinfra foundation
                        </span>
                        <span className="title">
                            Join Us In Advancing Open InfrastructurE
                        </span>
                        <span className="description">
                            The success of OpenInfra project communities relies on the support of OpenInfra
                            Foundation members who take an active role in helping achieve the OpenInfra
                            Foundation mission: Build open source communities who write software that
                            runs in production.
                        </span>
                        <span className="join">
                            Join as:
                        </span>
                        <div className="buttons">
                            <a>A Business <img src={leftArrow} alt="" /> </a>
                            <a>An Individual <img src={leftArrow} alt="" /> </a>
                        </div>
                    </div>
                    <div className="header-left">
                        <div className="picture">
                            <img src="/img/join/Hero-Image.png" />
                        </div>
                    </div>
                </div>
                <div className="waoi">
                    <div className="waoi-left">
                        <div>
                            <span className="waoi-left-number">110,000+</span>
                            <span className="waoi-left-text">community members</span>
                        </div>
                        <div>
                            <span className="waoi-left-number">560+</span>
                            <span className="waoi-left-text">supporting organizations</span>
                        </div>
                        <div>
                            <span className="waoi-left-number">10,000+</span>
                            <span className="waoi-left-text">developers</span>
                        </div>
                        <div>
                            <span className="waoi-left-number">180+</span>
                            <span className="waoi-left-text">countries</span>
                        </div>
                    </div>
                    <div className="waoi-right">
                        <span className="waoi-right-title">#WeAreOpenInfra</span>
                        <br />
                        <span className="waoi-right-text">
                            OpenInfra is more than the open source software that powers the most mission critical
                            infrastructure in the world. OpenInfra is the community that consists of developers,
                            users, operators, administrators, and contributors from all parts of the globe, working
                            in an incredible range of industries from transportation to telco, gaming to retail,
                            research to education and everything in between.
                        </span>
                    </div>
                </div>
                <div className="communities">
                    <span className="communities-title">
                        We build communities who write software that runs in production
                    </span>
                    <div className="communities-text">
                        <div>
                            Projects that call OpenInfra Foundation their home each value open collaboration
                            and exemplify the Four Opens (open source, design, development, community).
                            All of our projects have a strategic focus, vision & scope that furthers the
                            OpenInfra Foundation mission of supporting the development and adoption of
                            production infrastructure with open source components.
                        </div>
                        <div>
                            We value project individuality and collaboration. The quality of each project is
                            our main focus, not the overall quantity of projects we host. Our model provides
                            the support system and collaborative environment where communities are able to focus
                            their attention on the important work of building and operating software that solves
                            real problems around the globe.
                        </div>
                    </div>
                    <div className="communities-icons">
                        <div class="section-bg-green-logos-container">
                            <div class="section-bg-green-logo">
                                <img src="/img/home/logo1.svg" alt="" />
                            </div>
                            <div class="section-bg-green-logo">
                                <img src="/img/home/logo2.svg" alt="" />
                            </div>
                            <div class="section-bg-green-logo">
                                <img src="/img/home/logo7.svg" alt="" />
                            </div>
                            <div class="section-bg-green-logo">
                                <img src="/img/home/logo3.svg" alt="" />
                            </div>
                            <div class="section-bg-green-logo">
                                <img src="/img/home/logo4.svg" alt="" />
                            </div>
                            <div class="section-bg-green-logo">
                                <img src="/img/home/logo5.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <img src="/img/apple-touch-icon.png" alt="" />
                    <span>Interested in hosting your open source project with the OpenInfra Foundation?</span>
                    <a>Contact Us </a>
                </div>
                <div className="involved">
                    <span className="involved-title">
                        Get Involved
                    </span>
                    <div className="involved-slide">
                        <div className="gradient" />
                        <img src="/img/join/ossvan_hallway_convo-7 1.png" />
                        <img src="/img/join/EWP-IMG_1870 1.png" />
                        <img src="/img/join/Tokyo WOO 1.png" />
                        <img src="/img/join/marketmixer_full-111 1.png" />
                        <img src="/img/join/Barcelona Attendees 1.png" />
                        <img src="/img/join/OSSBER_Keynote_web-32 1.png" />
                    </div>
                    <div className="involved-buttons">
                        <span>Join as:</span>
                        <div className="buttons-container">
                            <a>A Business <img src={leftArrow} alt="" /> </a>
                            <a>An Individual <img src={leftArrow} alt="" /> </a>
                        </div>
                    </div>
                </div>
            </div>

            <main className="main">
                <div className="content">
                    {footer &&
                        <Hero content={footer} />
                    }
                </div>
            </main>
        </div>
    )
}

JoinPageTemplate.propTypes = {
    companies: PropTypes.object,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    footer: PropTypes.object,
}

const JoinPage = ({ isLoggedUser, data }) => {
    const { markdownRemark: post } = data

    const handleOnClick = useCallback(event => {
        event.preventDefault();
        let origin = window.location.origin;
        let membershipType = event.currentTarget.dataset.membershipType;
        let url = `${envVariables.IDP_BASE_URL}/auth/register?client_id=${envVariables.OAUTH2_CLIENT_ID}&redirect_uri=${encodeURI(`${origin}/a/registration?membership_type=${membershipType}`)}`;
        window.location = url;
    }, []);

    useEffect(() => {

        let Anchors = document.getElementsByClassName("membership_action");

        for (var i = 0; i < Anchors.length; i++) {
            Anchors[i].addEventListener("click", handleOnClick);
        }

        return () => {
            let Anchors = document.getElementsByClassName("membership_action");

            for (var i = 0; i < Anchors.length; i++) {
                Anchors[i].removeEventListener("click", handleOnClick);
            }

        };
    }, [handleOnClick]);

    return (
        <Layout>
            <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
            <JoinPageTemplate
                isLoggedUser={isLoggedUser}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                subTitle={post.frontmatter.subTitle}
                footer={post.frontmatter.footer}
                content={post.html}
            />
        </Layout>
    )
}

JoinPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(JoinPage)


export const joinPageQuery = graphql`
  query JoinPage($id: String!) {
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
`
