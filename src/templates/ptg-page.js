import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import LinkComponent from '../components/LinkComponent';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
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
        <Navbar isLoggedUser={isLoggedUser} />
        <PTGSubNav active="ptg" pageName="PTG"/>
      </div>
      {header && header.display &&
        <div className="join-header ptg-header">
            <div className="header-right">
                <span className="upper-title">
                    {header.upperTitle}
                </span>
                <span className="ptg-logo">
                  <img alt="PTG logo" src="/img/ptg-page/ptg-logo.svg" />
                </span>
                <span className="description">
                    {header.description}
                </span>
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
                    !!header.location.icon.childImageSharp ? header.location.icon.childImageSharp.fluid.src : header.location.icon} /> <a href="https://www.hyatt.com/en-US/group-booking/CMHRC/G-L0RT">{header.location.text} <span>(book now)</span></a>
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
                <p>Make sure you <a class="primary-link-color" href="https://openinfrafoundation.formstack.com/forms/oct2022_ptg_team_signup">sign up your team</a> if that hasn't been done already</p>
            </div>
            <div className="header-left">
                <div className="picture">
                    <img alt="img" src="/img/ptg-page/hero-image.png" />
                </div>
            </div>
        </div>
        }

      <main className="main">
        <div className="content">
          <section className="ptg-who">
            {/* <div className="ptg-who-teams">
              <h4 className="title">The April 2022 Project Teams List is Official!</h4>
              <p>If your team was planning to meet and isn"t in this list, please contact <a href="mailto:ptg@openinfra.dev">ptg@openinfra.dev</a> IMMEDIATELY</p>
              <div class="ptg-who-teams-list">
                <ul>
                  <li>Ansible OpenStack modules</li>
                  <li>Cinder</li>
                  <li>Designate</li>
                  <li>Glance</li>
                  <li>Ironic</li>
                  <li>Kuryr</li>
                  <li>Neutron</li>
                  <li>OpenInfra Edge Computing Group</li>
                  <li>OpenStack-Ansible</li>
                </ul>
                <ul>
                  <li>Release Management</li>
                  <li>StarlingX</li>
                  <li>TripleO</li>
                  <li>Barbican</li>
                  <li>CloudKitty</li>
                  <li>Diversity & Inclusion WG</li>
                  <li>Horizon</li>
                  <li>Keystone</li>
                  <li>Large Scale SIG</li>
                </ul>
                <ul>
                  <li>Nova/Placement</li>
                  <li>OpenStack Charms</li>
                  <li>OpenStack-Helm</li>
                  <li>SDK</li>
                  <li>Swift</li>
                  <li>Blazer</li>
                  <li>Cyborg</li>
                  <li>First Contact SIG</li>
                  <li>Interop</li>
                </ul>
                <ul>
                  <li>Kolla</li>
                  <li>Manila</li>
                  <li>Octavia</li>
                  <li>OpenStack Technical Committee</li>
                  <li>QA</li>
                  <li>Security SIG</li>
                  <li>Tacker</li>
                </ul>
              </div>
            </div> */}
            <div className="ptg-who-boxes">
              <div className="should">
                <div className='top'>
                  <h4>
                    <img src="/img/ptg-page/check-icon.svg" />
                    Who Should Attend
                  </h4>
                </div>
                <h5>DEVELOPERS / OPERATORS / END USERS</h5>
                <p>
                  Developers, operators and end users who are involved or hoping to get involved in an OpenInfra project contributor group that decided to meet at the PTG.
                </p>
                <p>
                  NOTE: If you are hoping to get involved with a particular team, check with them to make sure they are planning to do onboarding before you book travel.
                </p>
                <h5>LEADERS</h5>
                <p>
                  Leaders from teams, SIGs, working groups that decide not to meet at the PTG should attend to represent the views of their group at the event.
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
                  The event is optimized for engaged community members that are involved in one of the various teams working on one of the projects supported by the OpenInfra Foundation (workgroups, development teams, SIGs…). If you're brand new to OpenInfra projects, you might want to attend the OpenInfra Summit event instead, which features presentations, forum sessions (designed to get wider community feedback) and on-boarding sessions.
                </p>
                <p>
                  The event is not the occasion to sell goods or to propose jobs to the attendees -- hiring managers and product vendors will therefore probably feel out of place.
                </p>
                <p>
                  Usually this event is not for new contributors; however,  we are including the possibility for teams to do project onboarding as a part of the PTG. That being said, not all teams will be participating, only those that want to.
                </p>
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
