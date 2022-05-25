import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import { connect } from "react-redux";
import HeaderV2 from '../components/HeaderV2';
import ProjectsSubNav from "../components/ProjectsSubNav";
import heroFront from "../img/funding-hero-img.png";
import HostingProjectV2 from "../components/HostingProjectV2";
import LinkComponent from "../components/LinkComponent";
import ColorTable from "../components/ColorTable";
import blueCheck from '../img/svg/blue-check-2.svg';
import greenCheck from '../img/svg/green-check-2.svg';
import '../style/modules/_funding.scss';

export const FundingPageTemplate = ({isLoggedUser}) => {

  const itemsLeftTable = [
    'Independent, elected, not tied to foundation funding',
    'Determined by project community members',
    'Typically includes a “Technical Steering Committee” and clear rules for code contributions and reviews'
  ];

  const itemsRightTable = [
    'Allows orgs to pool funding and decide how funds are spent to support project (Directed Fund)',
    'Determined by project corporate members',
    'Typically includes a “Governing Board”'
  ];

  return (
    <div  className="funding-page">
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <ProjectsSubNav active="funding" />
        <HeaderV2
          frontImage={heroFront}
          title="Funding for OpenInfra Projects"
          subtitle="Directly aligning companies who want to work together with the projects they care about."
          sublabel="Interested in Hosting your project with the OpenInfra Foundation?"
          contactLink="/projects/contact"
          moreLink=" /projects/hosting"
          rightArrowLearnMore
        />
      </div>

      <main className="main">
        <div className="content">
          <section className="section funding" id="building">
            <div className="container">
                <div className="text-box">
                  <p className="title">Importance Of Project Funding</p>
                  <p className="text">
                    Having sufficient funding is an important part of growing open source projects with real commercial viability.
                    These funds are used for a wide range of services needed to organize, promote, protect, and manage the project.
                    Where funding comes from depends on the project and the companies involved. Some projects are funded by individual donors.
                    Others by a single company. We’ve found that the most successful open source projects are funded by multiple companies,
                    because they are able to combine their resources to achieve a much stronger rate of return. This is the basis
                    of our model for growing successful open source projects called the <LinkComponent href="projects/hosting#our-model">3 Forces</LinkComponent>.
                    We’ve developed the Directed Funding product to ensure that participating company resources are aligned with the project they care about.
                  </p>
                </div>
                <div className="text-box">
                  <p className="title">How directed funding works in practice</p>
                  <p className="text">
                    <ul>
                      <li>
                        OpenInfra Foundation establishes a project-specific entity to hold project funding. We’ve developed
                        the framework so this entity is created in an efficient way, but is flexible enough to be modified
                        based on the needs of your project community.
                      </li>
                      <li>
                        At least one Platinum member of the OpenInfra Foundation serves as an executive sponsor for the project,
                        to ensure strong alignment with the OpenInfra Foundation board.
                      </li>
                      <li>
                        Other interested organizations join the directed fund. If they are not already members, they will
                        need to become members of the OpenInfra Foundation.
                      </li>
                      <li>
                        The fund participants, as a group, decide what their contributions will be, with the goal of
                        assemble the project’s budget.
                      </li>
                      <li>
                        The fund board (representing participants) decides how to allocate budget to best support the project,
                        with guidance from the OpenInfra Foundation.
                      </li>
                      <li>
                        OpenInfra Foundation staff delivers services to build a community who writes software that runs in production.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="text-box">
                  <p className="title">Navigating A Broad Ecosystem</p>
                  <p className="text">
                    Attracting and engaging multiple companies lays the groundwork that allows you to build the most successful
                    projects. Take OpenStack, for example. There have been hundreds of companies contributing code and funding
                    since it was created in 2010.  The involvement of those companies was vital to OpenStack becoming the
                    de-facto standard in open source cloud infrastructure. Regardless of whether your aspirations for your
                    project are OpenStack-scale or smaller, getting a multitude of diverse companies involved is crucial to
                    open soruce success.
                    <br />
                    <br />
                    Unfortunately, when there are multiple companies involved there are more opinions around strategic direction,
                    more thoughts about how a project should be managed, and more potential for conflict. This is where the
                    OpenInfra Foundation comes in. We align companies who wish to work together, providing them with a framework
                    and tools to effectively collaborate, to produce code, and to pool/invest their funds in the ways that best
                    help the project they care about. We do this by navigating relationships, understanding organizational goals,
                    and through the establishment of technical and funding governance.
                  </p>
                </div>
                <div className="text-box">
                  <p className="title">Establishing Governance</p>
                  <p className="text">
                    Whether your project is already open source or you’re moving to an open model, you’ll want to set up proper
                    governance to define how the project will operate, who makes decisions, and how funds are spent. The OpenInfra
                    Foundation will help you establish both technical governance code and funding governance. Technical governance
                    establishes things like “Technical Steering Committees” and defines clear rules for code contributions.
                    Funding governance establishes things like a “Governing Board” and decides how funding is pooled and spent.
                    <br />
                    <br />
                    We have a legal framework to help you establish the governance needed for a successful open source project.
                    Our framework is flexible, allowing you to set the structure that best fits the needs of the organizations
                    most interested in ushering the project to success. The OpenInfra Foundation will guide you through this
                    process from start to finish.
                  </p>
                </div>
              <div className="tables">
                <ColorTable color="#2FB2DF" title="Technical Governance" items={itemsLeftTable} itemIcon={blueCheck} />
                <ColorTable color="#45B65C" title="Funding Governance" items={itemsRightTable} itemIcon={greenCheck} />
              </div>
            </div>
          </section>
          <HostingProjectV2/>
        </div>
      </main>
    </div>
  )
}

FundingPageTemplate.propTypes = {
  header: PropTypes.object,
  row1: PropTypes.object,
  row2: PropTypes.object,
  row3: PropTypes.object,
  row4: PropTypes.object,
  row5: PropTypes.object,
  row6: PropTypes.object,
}

const FundingPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <FundingPageTemplate isLoggedUser={isLoggedUser} />
    </Layout>
  )
}

FundingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(FundingPage)

export const fundingPageQuery = graphql`
  query FundingPage($id: String!) {
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
