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

export const MembersPageTemplate = ({
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
                <div className="members-header">
                    <div className="header-right">
                        <span className="upper-title">
                            Join the openinfra foundation
                        </span>
                        <span className="title">
                            Our members make open infrastructure a reality
                        </span>
                        <span className="description">
                            The success of OpenInfra project communities relies on the support of
                            OpenInfra Foundation members who take an active role in helping achieve
                            the OpenInfra Foundation mission: Build open source communities who
                            write software that runs in production.
                        </span>
                        <div className="buttons">
                            <a>Schedule a Call <img src={leftArrow} alt="" /> </a>
                        </div>
                        <span>
                            Read about <a href="">membership levels</a>
                        </span>
                    </div>
                    <div className="header-left">
                        <div className="picture">
                            <img src="/img/members/Group 49.png" />
                        </div>
                    </div>
                </div>
                <div className="why-join">
                    <div className="why-join-title">
                        <span>
                            Why Organizations Join the Foundation
                        </span>
                    </div>
                    <div className="why-join-items">
                        <div className="why-join-container">
                            <img src="/img/members/light.svg" />
                            <div className="why-join-text">
                                <span className="why-join-container-title">Enable open source innovation</span>
                                <span className="why-join-container-description">
                                    Annual fees directly fund activities that support the community including global
                                    and regional events, infrastructure, marketing support, trademark and legal
                                    frameworks, open source governance consultation, and an OpenInfra Foundation staff
                                    to partner with to advance each Member organization’s specific open source strategy.
                                </span>
                            </div>
                        </div>
                        <div className="why-join-container">
                            <img src="/img/members/calendar.svg" />
                            <div className="why-join-text">
                                <span className="why-join-container-title">Strategy planning and guidance</span>
                                <span className="why-join-container-description">
                                    Platinum and Gold members get access to 1:1 planning sessions with OpenInfra Foundation
                                    executive leadership, to help shape your organization’s open source strategy.
                                </span>
                            </div>
                        </div>
                        <div className="why-join-container">
                            <img src="/img/members/world.svg" />
                            <div className="why-join-text">
                                <span className="why-join-container-title">Reach millions across the globe</span>
                                <span className="why-join-container-description">
                                    Tap into OpenInfra Foundation’s channels that reach millions of developers, operators, and
                                    users around the world, including a global network of OpenInfra web properties that reach
                                    millions of annual visitors. Gain access to unique speaking opportunities at global Summits,
                                    community events and our weekly show OpenInfra Live, which reaches thousands of people
                                    every episode. Contribute to the newsletter read by over 65,000 people a month.
                                </span>
                            </div>
                        </div>
                        <div className="why-join-container">
                            <img src="/img/members/people.svg" />
                            <div className="why-join-text">
                                <span className="why-join-container-title">Influence through open source events</span>
                                <span className="why-join-container-description">
                                    Local, regional, and global events where your organization can network with other large
                                    scale open infrastructure users and vendors and solve problems with like minded individuals
                                    and organizations.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member-benefits">
                    <span className="member-benefits-title">
                        OpenInfra Member Benefits
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
                        <div className="member-benefits-table-row">
                            <div className="row-text">
                                <b>Your company logo</b> displayed on openinfra.dev
                            </div>
                            <div className="row-silver">
                                &#10003;
                            </div>
                            <div className="row-gold">
                                &#10003;
                            </div>
                            <div className="row-platinum">
                                &#10003;
                            </div>
                        </div>
                        <div className="member-benefits-table-row">
                            <div className="row-text">
                                <b>Your company logo</b> displayed on openinfra.dev
                            </div>
                            <div className="row-silver">
                                &#10003;
                            </div>
                            <div className="row-gold">
                                &#10003;
                            </div>
                            <div className="row-platinum">
                                &#10003;
                            </div>
                        </div>
                        <div className="member-benefits-table-row">
                            <div className="row-text">
                                <b>Your company logo</b> displayed on openinfra.dev
                            </div>
                            <div className="row-silver">
                                &#10003;
                            </div>
                            <div className="row-gold">
                                &#10003;
                            </div>
                            <div className="row-platinum">
                                &#10003;
                            </div>
                        </div>
                        <div className="member-benefits-table-row">
                            <div className="row-text">
                                <b>Your company logo</b> displayed on openinfra.dev
                            </div>
                            <div className="row-silver">
                                &#10003;
                            </div>
                            <div className="row-gold">
                                &#10003;
                            </div>
                            <div className="row-platinum">
                                &#10003;
                            </div>
                        </div>
                        <div className="member-benefits-table-row">
                            <div className="row-text">
                                <b>Your company logo</b> displayed on openinfra.dev
                            </div>
                            <div className="row-silver">
                                &#10003;
                            </div>
                            <div className="row-gold">
                                &#10003;
                            </div>
                            <div className="row-platinum">
                                &#10003;
                            </div>
                        </div>
                        <div className="member-benefits-table-row" style={{ borderBottom: "none" }}>
                            <div className="row-text"></div>
                            <div className="row-silver"></div>
                            <div className="row-gold"></div>
                            <div className="row-platinum">&nbsp;</div>
                        </div>
                        <div className="member-benefits-table-lower-row" style={{ borderBottom: "none" }}>
                            <div className="row-text">
                                <b>Annual Membership Fee</b> <br />
                                Startup pricing available
                            </div>
                            <div className="row-silver">$15,000</div>
                            <div className="row-gold">$150,000</div>
                            <div className="row-platinum">$350,000</div>
                        </div>
                        <div className="member-benefits-table-button-row">
                            <div className="row-text">
                            </div>
                            <div className="row-silver">
                                <a href="" >Learn More</a>
                            </div>
                            <div className="row-gold">
                                <a href="" >Learn More</a>
                            </div>
                            <div className="row-platinum">
                                <a href="" >Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="member-benefits-questions">
                        Still have questions? <a href="">Schedule a phone call.</a>
                    </div>
                    <div className="member-benefits-mobile">
                        <div className="mobile-silver">
                            <div className="mobile-silver-title">
                                Silver
                            </div>
                            <div className="mobile-silver-benefits">
                                <div><span>&#10003;</span>Your company logo displayed on openinfra.dev</div>
                                <div><span>&#10003;</span>Ability to feature products and services in the OpenStack Marketplace</div>
                                <div><span>&#10003;</span>Access to commercial use trademark programs</div>
                                <div><span>&#10003;</span>Opportunity to showcase customer case studies and contribute to Superuser Magazine</div>
                                <div><span>&#10003;</span>Support for member announcements through press release quotes & social media </div>
                                <div><span>&#10003;</span>Premier placement on the OpenInfra Jobs Board</div>
                            </div>
                            <hr />
                            <div className="mobile-price">
                                <span className="price">$15,000</span>
                                <span className="fee">Annual Membership Fee</span>
                                <a href="" >Learn More</a>
                                <span>Startup pricing available</span>
                            </div>
                        </div>
                        <div className="mobile-gold">
                            <div className="mobile-gold-title">
                                Gold
                            </div>
                            <div className="mobile-gold-benefits">
                                <div><span>&#10003;</span>Your company logo displayed on openinfra.dev</div>
                                <div><span>&#10003;</span>Ability to feature products and services in the OpenStack Marketplace</div>
                                <div><span>&#10003;</span>Access to commercial use trademark programs</div>
                                <div><span>&#10003;</span>Opportunity to showcase customer case studies and contribute to Superuser Magazine</div>
                                <div><span>&#10003;</span>Support for member announcements through press release quotes & social media </div>
                                <div><span>&#10003;</span>Premier placement on the OpenInfra Jobs Board</div>
                            </div>
                            <div className="mobile-price">
                                <span className="price">$15,000</span>
                                <span className="fee">Annual Membership Fee</span>
                                <a href="" >Learn More</a>
                                <span>Startup pricing available</span>
                            </div>
                        </div>
                        <div className="mobile-platinum">
                            <div className="mobile-platinum-title">
                                Platinum
                            </div>
                            <div className="mobile-platinum-benefits">
                                <div><span>&#10003;</span>Your company logo displayed on openinfra.dev</div>
                                <div><span>&#10003;</span>Ability to feature products and services in the OpenStack Marketplace</div>
                                <div><span>&#10003;</span>Access to commercial use trademark programs</div>
                                <div><span>&#10003;</span>Opportunity to showcase customer case studies and contribute to Superuser Magazine</div>
                                <div><span>&#10003;</span>Support for member announcements through press release quotes & social media </div>
                                <div><span>&#10003;</span>Premier placement on the OpenInfra Jobs Board</div>
                            </div>
                            <div className="mobile-price">
                                <span className="price">$15,000</span>
                                <span className="fee">Annual Membership Fee</span>
                                <a href="" >Learn More</a>
                                <span>Startup pricing available</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="quote">
                    <span className="quote-text">
                        <img src="/img/members/Quotes.png" />
                        We are really excited [about] being an active member of the Open Infrastructure
                        Foundation, what we view as a place for crowdsourced innovation - the ability
                        for multiple companies, individuals and developers to come together and contribute
                        in a way that can solve these problems at scale.
                    </span>
                    <div>
                        <div className="quote-person">
                            <img className="quote-picture" src="/img/members/1616433488142 1.png" />
                            <div>
                                <span className="quote-name">Paul Miller,</span>
                                <span className="quote-title">CTO at Wind River</span>
                            </div>
                        </div>
                        <img className="quote-logo" src="/img/members/Wind_River_logo 1.png" />
                    </div>
                </div>
                <div className="company">
                    <div className="company-title">
                        You'll be in good company
                    </div>
                    <span>
                        Meet the global members helping build the next decade of open infrastructure
                    </span>
                    <hr />
                    <div className="company-tier">
                        <span className="company-tier-title">OpenInfra foundation platinum members</span>
                        <span className="company-tier-title-mobile">Platinum Members</span>
                        <div className="company-tier-logos platinum">
                            <img src="/img/members/platinum/Sponsor-Logos_AntGroup 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Ericsson 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FBC-new 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FiberHome 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Huawei 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_RedHat 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_TencentCloud 1.png"></img>
                            <img src="/img/members/platinum/WNDRVR 1.png"></img>
                        </div>
                    </div>
                    <div className="company-tier">
                        <span className="company-tier-title">OpenInfra foundation gold members</span>
                        <span className="company-tier-title-mobile">Gold Members</span>
                        <div className="company-tier-logos gold">
                            <img src="/img/members/platinum/Sponsor-Logos_AntGroup 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Ericsson 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FBC-new 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FiberHome 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Huawei 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_RedHat 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_TencentCloud 1.png"></img>
                            <img src="/img/members/platinum/WNDRVR 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_AntGroup 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Ericsson 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FBC-new 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FiberHome 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Huawei 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_RedHat 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_TencentCloud 1.png"></img>
                            <img src="/img/members/platinum/WNDRVR 1.png"></img>
                        </div>
                    </div>
                    <div className="company-tier">
                        <span className="company-tier-title">OpenInfra foundation silver members</span>
                        <div className="company-tier-logos silver">
                            <img src="/img/members/platinum/Sponsor-Logos_AntGroup 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Ericsson 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FBC-new 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FiberHome 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Huawei 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_RedHat 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_TencentCloud 1.png"></img>
                            <img src="/img/members/platinum/WNDRVR 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_AntGroup 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Ericsson 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FBC-new 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FiberHome 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Huawei 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_RedHat 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_TencentCloud 1.png"></img>
                            <img src="/img/members/platinum/WNDRVR 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_AntGroup 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Ericsson 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FBC-new 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_FiberHome 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_Huawei 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_RedHat 1.png"></img>
                            <img src="/img/members/platinum/Sponsor-Logos_TencentCloud 1.png"></img>
                            <img src="/img/members/platinum/WNDRVR 1.png"></img>
                        </div>
                    </div>
                </div>
                <div className="help">
                    <img src="/img/members/IMG_7800 1.png" />
                    <div>
                        <span className="help-title">We’re here to help</span>
                        <span>Get in touch if you’d like to know more about membership options</span>
                        <a>Schedule a Call <img src={leftArrow} alt="" /> </a>
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
            <MembersPageTemplate
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
