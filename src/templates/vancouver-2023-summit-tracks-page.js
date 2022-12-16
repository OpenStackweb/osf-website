import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import SubNavYvr from '../components/SummitSubNavYvr'

import { connect } from "react-redux";

export const SummitTracksPageTemplate = ({
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
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <SubNavYvr active="summit-tracks" pageName="Tracks" isLoggedUser={isLoggedUser}/>
        <Header title={title} subTitle={subTitle} />
        <div className="container summit-track-subtitle-container">
          <a href="https://cfp.openinfra.dev/app/vancouver-2023/19" class="button-cta" target="_blank" rel="noopener noreferrer">Submit a Presentation<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNSAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGQ9Ik03MDguNzE2IDM0OS4wNTRsLTQuODA1LTQuODA2YS44MjguODI4IDAgMCAwLTEuMTgzIDAgLjgyOC44MjggMCAwIDAgMCAxLjE4MmwzLjM4OCAzLjM4N2gtMTEuMjgxYS44NC44NCAwIDAgMC0uODM1LjgzNi44NC44NCAwIDAgMCAuODM1LjgzNWgxMS4yNjZsLTMuMzczIDMuMzg3YS44MjguODI4IDAgMCAwIDAgMS4xODIuODYzLjg2MyAwIDAgMCAuNi4yNTJjLjIyIDAgLjQyNS0uMDc5LjU5OS0uMjUybDQuODItNC44MjJhLjg1OC44NTggMCAwIDAgLjI1Mi0uNTk4IDEuMDY5IDEuMDY5IDAgMCAwLS4yODMtLjU4MyIgaWQ9ImEtYXJyb3ctbGVmdCIgLz4NCiAgICA8L2RlZnM+DQogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY5NCAtMzQ0KSI+DQogICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EtYXJyb3ctbGVmdCIgZmlsbD0iI2ZmZiIgLz4NCiAgICA8L2c+DQo8L3N2Zz4=" alt="" /></a>
          <p>Individual presentations are 30 minutes</p>
        </div>
      </div>

      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  <PageContent content={content} />
                </div>
              </div>
            </div>
          </section>
          {footer &&
            <Hero content={footer} />
          }
        </div>
      </main>
    </div>
  )
}

SummitTracksPageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const SummitTracksPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <SummitTracksPageTemplate
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

SummitTracksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(SummitTracksPage)

export const summitTracksPageQuery = graphql`
  query SummitTracksPage($id: String!) {
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
