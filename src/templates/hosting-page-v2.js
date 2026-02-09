import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import HeaderV2 from '../components/HeaderV2';
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO';
import HostingProjectV2 from '../components/HostingProjectV2';
import heroFront from '../img/hosting-hero-img.png';
import BuildSection from "../components/Hosting/BuildSection";
import LinkComponent from '../components/LinkComponent';
import OurModelSection from "../components/Hosting/OurModelSection";
import FourOpensSection from "../components/Hosting/FourOpensSection";
import OurNetworkSection from "../components/Hosting/OurNetworkSection";
import { getSponsorhipTypes } from "../actions/sponsor-actions";
import OurFocusSection from "../components/Hosting/OurFocusSection";
import AnnualReportsSection from "../components/Hosting/AnnualReportsSection";

import '../style/modules/_hosting.scss';


export const HostingPageV2Template = ({ sponsors = [], isLoggedUser }) => {

  const platAndGoldCompanies = sponsors.reduce((result, item) => {
    if (["PLATINUM MEMBERS", "GOLD MEMBERS"].includes(item.name)) {
      return [...result, ...item.supporting_companies.map(sc => sc.company)]
    }
    return result;
  }, []);

  return (
    <div className="hosting-page">
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <div className="about-page-hero">
          <HeaderV2
            frontImage={heroFront}
            title="About The OpenInfra Foundation"
            subtitle={
              <>
                We build communities who write infrastructure software that runs in production. With over 110,000 members in 187 countries, we support the largest, most active, and engaged open source infrastructure communities globally. OpenInfra Foundation is part of the nonprofit{' '}
                <LinkComponent href="https://linuxfoundation.org" target="_blank" rel="noopener noreferrer" style={{ color: '#E61E24', textDecoration: 'underline' }}>Linux Foundation</LinkComponent>.
              </>
            }
          />
        </div>
      </div>

      <main className="main">
        <div className="content">
          <BuildSection />
          <OurModelSection />
          <FourOpensSection />
          <OurNetworkSection sponsors={platAndGoldCompanies} />
          <OurFocusSection />
          <HostingProjectV2 />
          <AnnualReportsSection />
        </div>
      </main>
    </div>
  )
}

const HostingPageV2 = ({ data, sponsors, isLoggedUser }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <HostingPageV2Template sponsors={sponsors} isLoggedUser={isLoggedUser} />
    </Layout>
  )
}

HostingPageV2.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  sponsors: state.sponsorState.sponsorshipTypes,
}), { getSponsorhipTypes })(HostingPageV2)

export const hostingPageV2Query = graphql`
  query HostingPageV2($id: String!) {
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
      }
    }
  }
`