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


          <section className="ptg-who">
            <div className="ptg-container">
              <div className="ptg-who-teams">
                <h4 className="title">
                  The April 2024 Project Teams List is Official!
                </h4>
                <p>
                  If your team was planning to meet and isn't in this list,
                  please contact{" "}
                  <a href="mailto:ptg@openinfra.dev">ptg@openinfra.dev</a>
                </p>
                <h5>
                  <b>OpenInfra Foundation Teams & Adjacent Communities</b>
                </h5>
                <div class="ptg-who-teams-list">
                  <ul>
                    <li>Diversity & Inclusion Working Group</li>
                    <li>openEuler</li>
                    <li>OpenInfra Edge Computing Group</li>
                    <li>Kata Containers</li>
                    <li>OpenDev</li>
                    <li>StarlingX</li>
                  </ul>
                </div>
                <h5>
                  <b>OpenStack Service Teams</b>
                </h5>
                <div class="ptg-who-teams-list">
                  <ul>
                    <li>Blazar</li>
                    <li>Cinder</li>
                    <li>CloudKitty</li>
                    <li>Designate</li>
                    <li>Glance</li>
                    <li>Horizon</li>
                    <li>i18n</li>
                    <li>Ironic</li>
                    <li>Keystone</li>
                    <li>Kolla</li>
                    <li>Magnum</li>
                    <li>Manila</li>
                    <li>Neutron</li>
                    <li>Nova</li>
                    <li>Octavia</li>
                    <li>OpenStackAnsible</li>
                    <li>OpenStackCharms</li>
                    <li>OpenStack-Helm</li>
                    <li>OpenStackSDK/CLI</li>
                    <li>Quality Assurance</li>
                    <li>Release Management</li>
                    <li>Sunbeam</li>
                    <li>Tacker</li>
                  </ul>
                </div>
                <h5>
                  <b>Other OpenStack Teams</b>
                </h5>
                <div class="ptg-who-teams-list">
                  <ul>
                  <li>OpenStack Security SIG</li>
                  <li>OpenStack Technical Committee</li>
                  <li>PublicCloud SIG</li>
                  <li>RBAC</li>
                  <li>VDI</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ptg-container">
              <div className="ptg-who-boxes">
                <div className="should">
                  <div className="top">
                    <h4>
                      <img src="/img/ptg-page/check-icon.svg" />
                      Who Should Attend
                    </h4>
                  </div>
                  <h5>PROJECT CONTRIBUTORS</h5>
                  <p>
                    Contributors actively involved in an Open Infrastructure
                    project team that is meeting at the PTG. Attendees should
                    have existing knowledge of the teams whose meetings they are
                    planning to attend. If you are hoping to get started with a
                    particular team, check with them to make sure they are
                    planning to do onboarding before you book travel because
                    many teams will have full agendas.
                  </p>
                  <h5>OPERATORS / END USERS</h5>
                  <p>
                    Operators who deploy the software (and end users who
                    directly interact with those deployments) are encouraged to
                    attend, interact with upstream contributors for the projects
                    you run, plan to run or have feedback for. You will also
                    have the opportunity to collaborate with fellow operators to
                    discuss common pain points and best practices.
                  </p>
                  <h5>TEAM LEADERS</h5>
                  <p>
                    Leaders from teams, SIGs, working groups that decide not to
                    meet are encouraged to attend the PTG anyway to represent
                    the views of their group at the event.
                  </p>
                </div>
                <div className="shouldnot">
                  <div className="top">
                    <h4>
                      <img src="/img/ptg-page/x-icon.svg" />
                      Who Should Not Attend
                    </h4>
                  </div>
                  <p>
                    The PTG is intended for engaged community members that are
                    involved in open source teams working on one of the projects
                    supported by the OpenInfra Foundation or adjacent project
                    communities. This includes workgroups, development teams,
                    external open source projects (like Ceph or Kubernetes, SIG,
                    etc). If you're brand new to a project, we recommend
                    attending the{" "}
                    <a href="https://www.openinfra.dev/summit/">
                      OpenInfra Summit
                    </a>{" "}
                    first, which features presentations, Forum sessions
                    (designed to get wider community feedback) and on-boarding
                    sessions.
                  </p>
                  <p>
                    Usually this event is not for new contributors; however, we
                    are including the possibility for teams to do project
                    onboarding as a part of the PTG. That being said, not all
                    teams will be participating, only those that want to.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={ColorBar}
              className="multi-color-border"
              alt="Color Bar"
            />
          </section>
          <section className="section about-s1-main about-s1-main-ptg">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  <PageContent content={content} />
                </div>
              </div>
            </div>
            <section className="summit-form ptg">
              <div className="summit-form-container ptg">
                <div className="form-columns">
                  <div className="form-left">
                    <div className="picture">
                      <img
                        alt="form image"
                        src={
                          !!form.image.childImageSharp
                            ? form.image.childImageSharp.fluid.src
                            : form.image
                        }
                      />
                    </div>
                  </div>
                  <div className="form-right">
                    <span className="title-desktop">{form.title}</span>
                    <p className="description">
                      Most questions can be answered by reading the{" "}
                      <a href="/ptg/faq">PTG FAQs</a>. Still more questions?
                      Email{" "}
                      <a href="mailto:ptg@openinfra.dev">ptg@openinfra.dev</a>{" "}
                      or subscribe to our newsletter to be kept up to date with
                      the latest about Project Teams Gathering.
                    </p>
                    <div>
                      <LinkComponent
                        className="form-cta"
                        href={form.button.link}
                      >
                        {form.button.text} <img src={leftArrow} alt="" />
                      </LinkComponent>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
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
