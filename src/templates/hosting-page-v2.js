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
import OurModelSection from "../components/Hosting/OurModelSection";
import FourOpensSection from "../components/Hosting/FourOpensSection";
import OurNetworkSection from "../components/Hosting/OurNetworkSection";
import { getSponsorshipTypes } from "../actions/sponsor-actions";
import OurTrackRecordSection from "../components/Hosting/OurTrackRecordSection";
import OurFocusSection from "../components/Hosting/OurFocusSection";
import OurServicesSection from "../components/Hosting/OurServicesSection";
import JourneySection from "../components/Hosting/JourneySection";
import ProjectsSubNav from "../components/ProjectsSubNav";

import '../style/modules/_hosting.scss';


export const HostingPageV2Template = ({ sponsors = [] }) => {

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
        <NavbarV2 />
        <ProjectsSubNav active="hosting" />
        <HeaderV2
          frontImage={heroFront}
          title="host a project with The OpenInfra Foundation"
          subtitle="We build communities who write infrastructure software that runs in production. Let us build a strong open source community around your project. "
          sublabel="Ready to hear more? "
          contactLink="/projects/contact"
          moreLink="#building"
        />
      </div>

      <main className="main">
        <div className="content">
          <BuildSection />
          <OurModelSection />
          <FourOpensSection />
          <OurNetworkSection sponsors={platAndGoldCompanies} />
          <OurTrackRecordSection />
          <JourneySection />
          <OurFocusSection />
          <OurServicesSection />
          <HostingProjectV2 />
        </div>
      </main>
    </div>
  )
}

const HostingPageV2 = ({ data, sponsors, getSponsorshipTypes }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <HostingPageV2Template sponsors={sponsors} />
    </Layout>
  )
}

HostingPageV2.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  sponsors: state.sponsorState.sponsorshipTypes,
}), { getSponsorshipTypes })(HostingPageV2)

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
