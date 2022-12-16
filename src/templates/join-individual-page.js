import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import LinkComponent from '../components/LinkComponent';
import SEO from '../components/SEO';
import {doRegistration} from '../utils/security'
import { connect } from "react-redux";

import leftArrow from '../img/svg/arrow-left.svg'

export const JoinIndividualPageTemplate = ({
    isLoggedUser,
    title,
    subTitle,
    header,
    individualMember,
    additional,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <NavbarV2 isLoggedUser={isLoggedUser} />
                {header && header.display &&
                    <div className="individual-header">
                        <div className="header-left">
                            <span className="upper-title">
                                {header.upperTitle}
                            </span>
                            <span className="title">
                                {header.title}
                            </span>
                            <span className="description" dangerouslySetInnerHTML={{ __html: header.description }}>
                            </span>
                        </div>
                        <div className="header-right">
                            <div className="picture">
                                <img alt="img" src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                            </div>
                        </div>
                    </div>
                }
                {individualMember && individualMember.display &&
                    <div className="individual-member">
                        <div className="member-row">
                            <div className="member-left">
                                <div className="picture">
                                    <img alt="img" src={!!individualMember.image.childImageSharp ? individualMember.image.childImageSharp.fluid.src : individualMember.image} />
                                </div>
                            </div>
                            <div className="member-right">
                                <span className="upper-title">
                                    {individualMember.upperTitle}
                                </span>
                                <span className="title">
                                    {individualMember.title}
                                </span>
                                <span className="sub-title" dangerouslySetInnerHTML={{ __html: individualMember.subTitle }}>
                                </span>
                                <br />
                                <span className="member-right-list">
                                    <ul>
                                        {individualMember.list.map((i, index) => {
                                            return (
                                                <li key={`member-${index}`}>
                                                    {i.text}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </span>
                                <div className="button">
                                    <LinkComponent
                                        className='button-individual membership_action'
                                        href={individualMember.button.link}>
                                        {individualMember.button.text} <img src={leftArrow} alt="left arrow" />
                                    </LinkComponent>
                                </div>
                            </div>
                        </div>
                        <div className="member-note">
                            {individualMember.note}
                        </div>
                    </div>
                }
                {additional && additional.display &&
                    <>
                        <hr />
                        <div className="individual-additional">
                            <span className="title">
                                {additional.title}
                            </span>
                            <span className="description">
                                {additional.text}
                            </span>
                            <div>
                                <LinkComponent
                                    className='membership_action'
                                    href={additional.button.link}>
                                    {additional.button.text} <img src={leftArrow} alt="left arrow" />
                                </LinkComponent>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div >
    )
}

JoinIndividualPageTemplate.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    header: PropTypes.object,
}

const JoinIndividualPage = ({ isLoggedUser, data }) => {
    const { markdownRemark: post } = data

    const handleOnClick = useCallback(event => {
        event.preventDefault();
        let origin = window.location.origin;
        let type = event.target.className.includes('button-individual') ? 'foundation' : 'community';        
        doRegistration(origin, type);
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
            <JoinIndividualPageTemplate
                isLoggedUser={isLoggedUser}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                subTitle={post.frontmatter.subTitle}
                header={post.frontmatter.header}
                individualMember={post.frontmatter.individualMember}
                additional={post.frontmatter.additional}
                content={post.html}
            />
        </Layout>
    )
}

JoinIndividualPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(JoinIndividualPage)


export const joinIndividualPageQuery = graphql`
  query JoinIndividualPage($id: String!) {
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
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
        individualMember {
          display
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          upperTitle
          title
          subTitle
          list {
            text
          }
          button {
            text
            link
          }
          note
        }
        additional {
          display
          title
          text
          button {
            text
            link
          }
        }
      }
    }
  }
`
