import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import Hero from '../components/Hero'
import SEO from '../components/SEO';
import LinkComponent from '../components/LinkComponent';
import {doRegistration} from '../utils/security'
import { connect } from "react-redux";

import sponsoredProjects from "../content/sponsored-projects.json";
import { getSubProjectById } from '../utils/sponsoredProjects';
import { getEnvVariable, MEMBERS_SUBPROJECT_ID } from '../utils/envVariables';

import leftArrow from '../img/svg/arrow-left.svg'

export const MembersPageTemplate = ({
    isLoggedUser,
    title,
    subTitle,
    header,
    whyJoin,
    memberBenefits,
    quote,
    help,
    footer,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content;

    const subProject = getSubProjectById(sponsoredProjects, parseInt(getEnvVariable(MEMBERS_SUBPROJECT_ID)));

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <NavbarV2 isLoggedUser={isLoggedUser} />
                {header && header.display &&
                    <div className="members-header">
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
                            <div className="buttons">
                                <LinkComponent href={header.button.link}>{header.button.text} <img src={leftArrow} alt="" /> </LinkComponent>
                            </div>
                            <span dangerouslySetInnerHTML={{ __html: header.membership }}>
                            </span>
                        </div>
                        <div className="header-left">
                            <div className="picture">
                                <img src={!!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image} />
                            </div>
                        </div>
                    </div>
                }
                {whyJoin && whyJoin.display &&
                    <div className="why-join">
                        <div className="why-join-title">
                            <span>
                                {whyJoin.title}
                            </span>
                        </div>
                        <div className="why-join-items">
                            {whyJoin.items.map((item, index) => {
                                return (
                                    <div className="why-join-container" key={`why-join-${index}`}>
                                        <img src={
                                            (item.image?.extension === 'svg' || item.image?.extension === 'gif') && !item.image?.childImageSharp ?
                                                item.image?.publicURL
                                                :
                                                !!item.image?.childImageSharp ? item.image?.childImageSharp.fluid.src : item.image
                                        } />
                                        <div className="why-join-text">
                                            <span className="why-join-container-title">{item.title}</span>
                                            <span className="why-join-container-description">
                                                {item.description}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {memberBenefits && memberBenefits.display &&
                    <div className="member-benefits" id="benefits">
                        <span className="member-benefits-title">
                            {memberBenefits.title}
                        </span>
                        <div className="member-benefits-table">
                            <div className="member-benefits-table-upper-row">
                                <div className="row-text">
                                    &nbsp;
                                </div>
                                <div className="row-silver">
                                    Silver
                                </div>
                                <div className="row-gold">
                                    Gold
                                </div>
                                <div className="row-platinum">
                                    Platinum
                                </div>
                            </div>
                            {memberBenefits.table.map((row, index) => {
                                return (
                                    <div className="member-benefits-table-row" key={`member-benefits-${index}`}>
                                        <div className="row-text" dangerouslySetInnerHTML={{ __html: row.text }} />
                                        <div className="row-silver" dangerouslySetInnerHTML={row.silver ? { __html: '&#10003' } : { __html: '&nbsp;' }} />
                                        <div className="row-gold" dangerouslySetInnerHTML={row.gold ? { __html: '&#10003' } : { __html: '&nbsp;' }} />
                                        <div className="row-platinum"><span dangerouslySetInnerHTML={row.platinum ? { __html: '&#10003' } : { __html: '&nbsp;' }} /></div>
                                    </div>
                                )
                            })}
                            <div className="member-benefits-table-row" style={{ borderBottom: "none" }}>
                                <div className="row-text"></div>
                                <div className="row-silver"></div>
                                <div className="row-gold"></div>
                                <div className="row-platinum">&nbsp;</div>
                            </div>
                            <div className="member-benefits-table-lower-row" style={{ borderBottom: "none" }}>
                                <div className="row-text">
                                    <b>Annual Membership Fee</b>
                                </div>
                                <div className="row-silver">{memberBenefits.fees.silver.price}</div>
                                <div className="row-gold">{memberBenefits.fees.gold.price}</div>
                                <div className="row-platinum">{memberBenefits.fees.platinum.price}</div>
                            </div>
                            <div className="member-benefits-table-button-row">
                                <div className="row-text">
                                </div>
                                <div className="row-silver">
                                    <LinkComponent href={memberBenefits.fees.silver.button.link} >{memberBenefits.fees.silver.button.text}</LinkComponent>
                                </div>
                                <div className="row-gold">
                                    <LinkComponent href={memberBenefits.fees.gold.button.link} >{memberBenefits.fees.gold.button.text}</LinkComponent>
                                </div>
                                <div className="row-platinum">
                                    <LinkComponent href={memberBenefits.fees.platinum.button.link} >{memberBenefits.fees.platinum.button.text}</LinkComponent>
                                </div>
                            </div>
                        </div>
                        <div className="member-benefits-questions" dangerouslySetInnerHTML={{ __html: memberBenefits.scheduleCall }} />
                        <div className="member-benefits-mobile">
                            <div className="mobile-silver">
                                <div className="mobile-silver-title">
                                    Silver
                                </div>
                                <div className="mobile-silver-benefits">
                                    {memberBenefits.table.map((benefit, index) => {
                                        if (benefit.silver && benefit.gold && benefit.platinum) {
                                            return (
                                                <div key={`benefits-silver-${index}`}>
                                                    <span>&#10003;</span>
                                                    <span dangerouslySetInnerHTML={{ __html: benefit.text }}></span>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                                <hr />
                                <div className="mobile-price">
                                    <span className="price">{memberBenefits.fees.silver.price}</span>
                                    <span className="fee">Annual Membership Fee</span>
                                    <LinkComponent href={memberBenefits.fees.silver.button.link} >{memberBenefits.fees.silver.button.text}</LinkComponent>
                                </div>
                            </div>
                            <div className="mobile-gold">
                                <div className="mobile-gold-title">
                                    Gold
                                </div>
                                <div className="mobile-gold-benefits">
                                    <div><span>&#10003;</span><span><b>Everything</b> from the Silver Membership level</span></div>
                                    {memberBenefits.table.map((benefit, index) => {
                                        if (!benefit.silver && benefit.gold) {
                                            return (
                                                <div key={`benefits-gold-${index}`}>
                                                    <span>&#10003;</span>
                                                    <span dangerouslySetInnerHTML={{ __html: benefit.text }}></span>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                                <hr />
                                <div className="mobile-price">
                                    <span className="price">{memberBenefits.fees.gold.price}</span>
                                    <span className="fee">Annual Membership Fee</span>
                                    <LinkComponent href={memberBenefits.fees.gold.button.link} >{memberBenefits.fees.gold.button.text}</LinkComponent>
                                </div>
                            </div>
                            <div className="mobile-platinum">
                                <div className="mobile-platinum-title">
                                    Platinum
                                </div>
                                <div className="mobile-platinum-benefits">
                                    <div><span>&#10003;</span><span><b>Everything</b> from the Gold Membership level</span></div>
                                    {memberBenefits.table.map((benefit, index) => {
                                        if (!benefit.silver && !benefit.gold && benefit.platinum) {
                                            return (
                                                <div key={`benefits-platinum-${index}`}>
                                                    <span>&#10003;</span>
                                                    <span dangerouslySetInnerHTML={{ __html: benefit.text }}></span>
                                                </div>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                                <div className="mobile-price">
                                    <span className="price">{memberBenefits.fees.platinum.price}</span>
                                    <span className="fee">Annual Membership Fee</span>
                                    <LinkComponent href={memberBenefits.fees.platinum.button.link} >{memberBenefits.fees.platinum.button.text}</LinkComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {quote && quote.display &&
                    <div className="quote">
                        <span className="quote-text">
                            <img src="/img/members-page/Quotes.png" />
                            {quote.text}
                        </span>
                        <div>
                            <div className="quote-person">
                                <img className="quote-picture" src={!!quote.people.picture.childImageSharp ? quote.people.picture.childImageSharp.fluid.src : quote.people.picture} />
                                <div>
                                    <span className="quote-name">{quote.people.name},</span>
                                    <span className="quote-title" dangerouslySetInnerHTML={{__html: quote.people.position}} />
                                </div>
                            </div>
                            <img className="quote-logo" src={!!quote.people.company.childImageSharp ? quote.people.company.childImageSharp.fluid.src : quote.people.company} />
                        </div>
                    </div>
                }
              {subProject &&
                <div className="company">
                    <div className="company-title">
                        {subProject.name}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: subProject.description }} />
                    <hr />

                    {subProject.sponsorship_types.sort((a, b) => a.order - b.order).map((t, tierIndex) => {
                        return (
                            <div className="company-tier" key={`company-tier-${tierIndex}`}>
                                <span className="company-tier-title">{"OpenInfra Foundation " + t.name}</span>
                                {tierIndex !== 2 && <span className="company-tier-title-mobile">{"OpenInfra Foundation " + t.name}</span>}
                                <div className={`company-tier-logos ${t.name.replace(/ .*/, '').toLowerCase()}`}>
                                    {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                        return (
                                            <img key={`company-tier-${tierIndex}-${index}`}
                                                src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
              }
                {help && help.display &&
                    <div className="help">
                        <img src={!!help.picture?.childImageSharp ? help.picture.childImageSharp.fluid.src : help.picture} />
                        <div>
                            <span className="help-title">{help.title}</span>
                            <span>{help.description}</span>
                            <LinkComponent href={help.button.link}>{help.button.text}<img src={leftArrow} alt="" /> </LinkComponent>
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
        </div> 
    )
}

MembersPageTemplate.propTypes = {
    companies: PropTypes.object,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    footer: PropTypes.object,
}

const MembersPage = ({ isLoggedUser, data }) => {
    const { markdownRemark: post } = data

    const handleOnClick = useCallback(event => {
        event.preventDefault();
        let origin = window.location.origin;
        let type = event.currentTarget.dataset.membershipType;
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
            <MembersPageTemplate
                isLoggedUser={isLoggedUser}
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                subTitle={post.frontmatter.subTitle}
                header={post.frontmatter.header}
                whyJoin={post.frontmatter.whyJoin}
                memberBenefits={post.frontmatter.memberBenefits}
                quote={post.frontmatter.quote}
                companyTier={post.frontmatter.companyTier}
                help={post.frontmatter.help}
                footer={post.frontmatter.footer}
                content={post.html}
            />
        </Layout>
    )
}

MembersPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(MembersPage)


export const membersPageQuery = graphql`
  query MembersPage($id: String!) {
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
            button {
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
            membership
        }
        whyJoin {
            display
            title
            items {
                image {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                    extension
                }
                title
                description
            }
        }
        memberBenefits {
            display
            title
            table {
                text
                silver
                gold
                platinum
            }
            fees {
                silver {
                    price
                    button {
                        link
                        text
                    }
                }
                gold {
                    price
                    button {
                        link
                        text
                    }
                }
                platinum {
                    price
                    button {
                        link
                        text
                    }
                }
            }
            scheduleCall
        }
        quote {
            display
            text
            people {
                picture {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
                name
                position
                company {
                    childImageSharp {
                        fluid(maxWidth: 640, quality: 64) {
                          ...GatsbyImageSharpFluid
                        }
                    }
                    publicURL
                }
            }
        }        
        help {
            display
            title
            description
            button {
                text
                link
            }
            picture {
                childImageSharp {
                    fluid(maxWidth: 640, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                }
                publicURL
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
