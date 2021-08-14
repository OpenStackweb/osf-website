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
    header,
    weAreOpenInfra,
    communities,
    contact,
    involved,
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
                {header && header.display &&
                    <div className="join-header">
                        <div className="header-right">
                            <span className="upper-title">
                                {header.upperTitle}
                            </span>
                            <span className="title">
                                {header.title}
                            </span>
                            <span className="description">
                                {header.description}
                            </span>
                            <span className="join">
                                Join as:
                            </span>
                            <div className="buttons">
                                {header.buttons.map((button, index) => {
                                    return (
                                        <a key={`header-button-${index}`} href={button.link}>{button.text} <img src={leftArrow} alt="" /> </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="header-left">
                            <div className="picture">
                                <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                            </div>
                        </div>
                    </div>
                }
                {weAreOpenInfra && weAreOpenInfra.display &&
                    <div className="waoi">
                        <div className="waoi-left">
                            {weAreOpenInfra.numbers.map((i, index) => {
                                return (
                                    <div key={`waoi-numbers-${index}`}>
                                        <span className="waoi-left-number">{i.number}</span>
                                        <span className="waoi-left-text">{i.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="waoi-right">
                            <span className="waoi-right-title">{weAreOpenInfra.title}</span>
                            <br />
                            <span className="waoi-right-text">
                                {weAreOpenInfra.description}
                            </span>
                        </div>
                    </div>
                }
                {communities && communities.display &&
                    <div className="communities">
                        <span className="communities-title">
                            {communities.title}
                        </span>
                        <div className="communities-text">
                            {communities.description.map((d, index) => {
                                return (
                                    <div key={`communities-description-${index}`}>
                                        {d.text}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="communities-icons">
                            <div class="section-bg-green-logos-container">
                                {communities.logos.map((logo, index) => {
                                    return (
                                        <div class="section-bg-green-logo" key={`logo-${index}`}>
                                            <img src={
                                                (logo.img.extension === 'svg' || logo.img.extension === 'gif') && !logo.img.childImageSharp ?
                                                    logo.img.publicURL
                                                    :
                                                    !!logo.img.childImageSharp ? logo.img.childImageSharp.fluid.src : logo.image
                                            } alt={logo.alt} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
                {contact && contact.display &&
                    <div className="contact">
                        <img src="/img/apple-touch-icon.png" alt="" />
                        <span>{contact.text}</span>
                        <a href={contact.button.link}>{contact.button.text}</a>
                    </div>
                }
                {involved && involved.display &&
                    <div className="involved">
                        <span className="involved-title">
                            {involved.title}
                        </span>
                        <div className="involved-slide">
                            <div className="gradient" />
                            {involved.slide.map((pic, index) => {
                                return (
                                    <img key={`involved-slide-${index}`} src={!!pic.picture.childImageSharp ? pic.picture.childImageSharp.fluid.src : pic.picture} />
                                )
                            })}
                        </div>
                        <div className="involved-buttons">
                            <span>Join as:</span>
                            <div className="buttons-container">
                                {involved.buttons.map((button, index) => {
                                    return (
                                        <a href={button.link} key={`ìnvolved-button-${index}`}>{button.text} <img src={leftArrow} alt="" /> </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>

            <main className="main">
                <div className="content">
                    {footer &&
                        <Hero content={footer} />
                    }
                </div>
            </main>
        </div >
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
                header={post.frontmatter.header}
                weAreOpenInfra={post.frontmatter.weAreOpenInfra}
                communities={post.frontmatter.communities}
                contact={post.frontmatter.contact}
                involved={post.frontmatter.involved}
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
        header {
          display
          title
          upperTitle
          description
          buttons {
            text
            link
          }       
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
        weAreOpenInfra {
          display
          title
          description
          numbers {
            number
            text
          }
        }
        communities {
          display
          title
          description {
            text
          }            
          logos {
            img {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
            alt
          }
        }
        contact {
          display
          text
          button {
            text
            link
          }
        }
        involved {
          display
          title
          slide {
            picture {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
          }
          buttons {
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
`
