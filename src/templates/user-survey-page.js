import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import Navigator from '../components/Navigator'

import MarkdownIt from "markdown-it";

import { connect } from "react-redux";

import leftArrow from '../img/svg/arrow-left.svg'

export const UserSurveyPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  about,
  surveyTypes
}) => {

  const parser = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    xhtmlOut: true,
    typographer: true,
  });

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title={title} subTitle={subTitle} />
        {about.display &&
          <div className="user-survey-about">
            <div className="about-image">
              <img src={!!about.image.childImageSharp ? about.image.childImageSharp.fluid.src : about.image} />
            </div>
            <div className="about-text">
              <b>{about.title}</b>
              <span>{about.description}</span>
            </div>
          </div>
        }
      </div>
      <Navigator optionsList={surveyTypes.map(s => s.title)} changeOption={(ev) => console.log('cambio a: ', ev)} />

      {surveyTypes.map((s, index) => {
        return (
          <div className="user-survey-abstract" key={`user-survey-${index}`}>
            <img className="survey-image" src={!!s.logo.childImageSharp ? s.logo.childImageSharp.fluid.src : s.logo} />
            <div className="survey-text" dangerouslySetInnerHTML={{ __html: parser.render(s.abstract) }} />
            <button className="survey-button">
              {s.button.text}
              <img src={leftArrow} alt="" />
            </button>
            {surveyTypes.length > index + 1 && <hr />}
          </div>
        )
      })}
    </div>
  )
}

UserSurveyPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  about: PropTypes.object,
}

const UserSurveyPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <UserSurveyPageTemplate
        isLoggedUser={isLoggedUser}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        about={post.frontmatter.about}
        surveyTypes={post.frontmatter.surveyTypes}
      />
    </Layout>
  )
}

UserSurveyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(UserSurveyPage)

export const userSurveyPageQuery = graphql`
  query UserSurveyPage($id: String!) {
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
        about {
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
        }
        surveyTypes {
          title
          logo {
            childImageSharp {
              fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          title
          button {
            text
            link
          }
          abstract
        }
      }
    }
  }
`
