import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import LinkComponent from '../components/LinkComponent';
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import PTGSubNav from '../components/PTGSubNav';
import ColorBar from '../img/color-bar.png'

import { connect } from "react-redux";

import leftArrow from '../img/svg/arrow-left.svg'

export const PTGPageTemplate = ({
  isLoggedUser,
  header,
  form,
  footer,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <PTGSubNav active="ptg" pageName="About"/>
      </div>
      {header && header.display &&
        <div className="join-header ptg-header">
            <div className="header-right">
                {/* <span className="upper-title">
                    {header.upperTitle}
                </span> */}
                <span className="ptg-logo">
                  <img alt="PTG logo" src="/img/ptg-page/ptg-logo.svg" />
                </span>
                <span className="description">
                    {header.description}
                    <br />
                </span>
                <span class="ptg-header-bottom-title"><a class="primary-link-color" href="/summit/vancouver-2023">OpenInfra Summit + PTG</a></span>
                <span className="date">
                  <img src={(header.date.icon.extension === 'svg' || header.date.icon.extension === 'gif') && !header.date.icon.childImageSharp ?
                    header.date.icon.publicURL
                    :
                    !!header.date.icon.childImageSharp ? header.date.icon.childImageSharp.fluid.src : header.date.icon} /> {header.date.text}
                </span>
                <span className="location">
                  <img src={(header.location.icon.extension === 'svg' || header.location.icon.extension === 'gif') && !header.location.icon.childImageSharp ?
                    header.location.icon.publicURL
                    :
                    !!header.location.icon.childImageSharp ? header.location.icon.childImageSharp.fluid.src : header.location.icon} /> Vancouver Convention Centre
                </span>
                <div className="buttons">
                    {header.buttons.map((button, index) => {
                        return (
                            <a
                                key={`header-button-${index}`}
                                href={button.link}>
                                {button.text} <img src={leftArrow} alt="left" />
                            </a>
                        )
                    })}
                </div>
            </div>
            <div className="header-left">
                <div className="picture">
                    <img alt="img" src="/img/ptg-page/hero-image.png" />
                </div>
            </div>
            <div className="ptg-header-bottom">
              {/* <p className="ptg-two-event-text">Upcoming PTG:</p> */}
              <div className="ptg-header-bottom-container">
                {/* <div className="ptg-header-bottom-left">
                  <span className="ptg-header-bottom-title">Virtual PTG</span>
                  <span className="date">
                    <img src={(header.date.icon.extension === 'svg' || header.date.icon.extension === 'gif') && !header.date.icon.childImageSharp ?
                      header.date.icon.publicURL
                      :
                      !!header.date.icon.childImageSharp ? header.date.icon.childImageSharp.fluid.src : header.date.icon} /> {header.date.text}
                  </span>
                  <span className="location">
                    <img src={(header.location.icon.extension === 'svg' || header.location.icon.extension === 'gif') && !header.location.icon.childImageSharp ?
                      header.location.icon.publicURL
                      :
                      !!header.location.icon.childImageSharp ? header.location.icon.childImageSharp.fluid.src : header.location.icon} /> Virtual
                  </span>
                  <div className="buttons ptg-bottom-left-buttons">
                        {header.buttons.map((button, index) => {
                            return (
                                <a
                                    key={`header-button-${index}`}
                                    href={button.link}>
                                    {button.text} <img src={leftArrow} alt="left" />
                                </a>
                            )
                        })}
                    </div>
                  <p>Make sure you <a class="primary-link-color" href="https://openinfrafoundation.formstack.com/forms/march2023_vptg_survey">sign up your team</a> if that hasn't been done already</p>

                </div> */}
                {/* <div className="ptg-header-bottom-right">
                <span className="ptg-header-bottom-title"><a class="primary-link-color" href="/summit/vancouver-2023">OpenInfra Summit + PTG</a></span>
                  <span className="date">
                    <img src={(header.date.icon.extension === 'svg' || header.date.icon.extension === 'gif') && !header.date.icon.childImageSharp ?
                      header.date.icon.publicURL
                      :
                      !!header.date.icon.childImageSharp ? header.date.icon.childImageSharp.fluid.src : header.date.icon} /> June 13-15
                  </span>
                  <span className="location">
                    <img src={(header.location.icon.extension === 'svg' || header.location.icon.extension === 'gif') && !header.location.icon.childImageSharp ?
                      header.location.icon.publicURL
                      :
                      !!header.location.icon.childImageSharp ? header.location.icon.childImageSharp.fluid.src : header.location.icon} /> Vancouver Convention Centre
                  </span>
                  <div class="buttons"><a href="https://vancouver2023.openinfra.dev/">Register Now <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNSAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGQ9Ik03MDguNzE2IDM0OS4wNTRsLTQuODA1LTQuODA2YS44MjguODI4IDAgMCAwLTEuMTgzIDAgLjgyOC44MjggMCAwIDAgMCAxLjE4MmwzLjM4OCAzLjM4N2gtMTEuMjgxYS44NC44NCAwIDAgMC0uODM1LjgzNi44NC44NCAwIDAgMCAuODM1LjgzNWgxMS4yNjZsLTMuMzczIDMuMzg3YS44MjguODI4IDAgMCAwIDAgMS4xODIuODYzLjg2MyAwIDAgMCAuNi4yNTJjLjIyIDAgLjQyNS0uMDc5LjU5OS0uMjUybDQuODItNC44MjJhLjg1OC44NTggMCAwIDAgLjI1Mi0uNTk4IDEuMDY5IDEuMDY5IDAgMCAwLS4yODMtLjU4MyIgaWQ9ImEtYXJyb3ctbGVmdCIgLz4NCiAgICA8L2RlZnM+DQogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY5NCAtMzQ0KSI+DQogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EtYXJyb3ctbGVmdCIgZmlsbD0iI2ZmZiIgLz4NCiAgICA8L2c+DQo8L3N2Zz4=" alt="left" /></a></div>
                  <p>Make sure you <a class="primary-link-color" href="https://openinfrafoundation.formstack.com/forms/june2023_ptg_survey">sign up your team</a> if that hasn't been done already</p>
                </div> */}
              </div>
            </div>
        </div>
        }

      <main className="main">
        <div className="content">
          <section className="ptg-who">
            <div className="ptg-container">
              <div className="ptg-who-teams">
                <h4 className="title">The June 2023 Project Teams List is Official!</h4>
                <p>If your team was planning to meet and isn't in this list, please contact <a href="mailto:ptg@openinfra.dev">ptg@openinfra.dev</a></p>
                <h5><b>OpenInfra Foundation Teams</b></h5>
                <div class="ptg-who-teams-list">
                  <ul>
                    <li>Diversity and Inclusion Working Group</li>
                    <li>Environmental Sustainability Working Group</li>
                    <li>Kata Containers</li>
                    <li>StarlingX</li>
                  </ul>
                </div>
                <h5><b>OpenStack Service Teams</b></h5>
                <div class="ptg-who-teams-list">
                  <ul>
                    <li>Cinder</li>
                    <li>Cyborg</li>
                    <li>Designate</li>
                    <li>Heat</li>
                    <li>Ironic</li>
                    <li>Keystone</li>
                    <li>Manila</li>
                    <li>Neutron</li>
                    <li>Nova</li>
                    <li>OpenStack-Ansible</li>
                    <li>Puppet OpenStack</li>
                    <li>QA</li>
                    <li>SDK/CLI/AOC</li>
                    <li>Tacker</li>
                    <li>Telemetry</li>
                  </ul>
                </div>
                <h5><b>Other OpenStack Teams</b></h5>
                <div class="ptg-who-teams-list">
                  <ul>
                    <li>Security SIG</li>  
                    <li>OpenStack Technical Committee</li> 
                    <li>Scientific SIG</li>  
                  </ul>
                </div>
              </div>
            </div>
            <div className="ptg-container">
              <div className="ptg-who-boxes">
                <div className="should">
                  <div className='top'>
                    <h4>
                      <img src="/img/ptg-page/check-icon.svg" />
                      Who Should Attend
                    </h4>
                  </div>
                  <h5>PROJECT CONTRIBUTORS</h5>
                  <p>
                    Contributors actively involved in an Open Infrastructure project team that is meeting at the PTG. Attendees should have existing knowledge of the teams whose meetings they are planning to attend. If you are hoping to get started with a particular team, check with them to make sure they are planning to do onboarding before you book travel because many teams will have full agendas.
                  </p>
                  <h5>OPERATORS / END USERS</h5>
                  <p>
                    Operators who deploy the software (and end users who directly interact with those deployments) are encouraged to attend, interact with upstream contributors for the projects you run, plan to run or have feedback for. You will also have the opportunity to collaborate with fellow operators to discuss common pain points and best practices.
                  </p>
                  <h5>TEAM LEADERS</h5>
                  <p>
                    Leaders from teams, SIGs, working groups that decide not to meet are encouraged to attend the PTG anyway to represent the views of their group at the event.
                  </p>
                </div>
                <div className="shouldnot">
                  <div className='top'>
                    <h4>
                      <img src="/img/ptg-page/x-icon.svg" />
                      Who Should Not Attend
                    </h4>
                  </div>
                  <p>
                    The PTG is intended for engaged community members that are involved in open source teams working on one of the projects supported by the OpenInfra Foundation or adjacent project communities. This includes workgroups, development teams, external open source projects (like Ceph or Kubernetes, SIG, etc). If you're brand new to a project, we recommend attending the <a href="https://www.openinfra.dev/summit/">OpenInfra Summit</a> first, which features presentations, Forum sessions (designed to get wider community feedback) and on-boarding sessions.
                  </p>
                  <p>
                    Usually this event is not for new contributors; however,  we are including the possibility for teams to do project onboarding as a part of the PTG. That being said, not all teams will be participating, only those that want to.
                  </p>
                </div>
              </div>
            </div>
            <img src={ColorBar} className="multi-color-border" alt="Color Bar" />
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
                      <img alt="form image" src={!!form.image.childImageSharp ? form.image.childImageSharp.fluid.src : form.image} />
                    </div>
                  </div>
                  <div className="form-right">
                    <span className="title-desktop">
                      {form.title}
                    </span>
                    <p className='description'>
                        Most questions can be answered by reading the <a href="/ptg/faq">PTG FAQs</a>. Still more questions? Email <a href="mailto:ptg@openinfra.dev">ptg@openinfra.dev</a> or subscribe to our newsletter to be kept up to date with the latest about Project Teams Gathering.
                      </p>
                    <div>
                      <LinkComponent className="form-cta" href={form.button.link}>{form.button.text} <img src={leftArrow} alt="" /></LinkComponent>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {footer &&
            <Hero content={footer} />
          }
        </div>
      </main>
    </div>
  )
}

PTGPageTemplate.propTypes = {
  companies: PropTypes.object,
  header: PropTypes.object,
  form: PropTypes.object,
  footer: PropTypes.object,
}

const PTGPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

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
  )
} 

PTGPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(PTGPage)

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
          upperTitle
          description
          date {
            text
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          location {
            text
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
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
`
