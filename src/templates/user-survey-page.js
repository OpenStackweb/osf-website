import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import { kebabCase, debounce } from 'lodash'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import GoTopButton from '../components/GoTopButton'
import SEO from '../components/SEO'
import Navigator from '../components/Navigator'

import { connect } from "react-redux";

import leftArrow from '../img/svg/arrow-left.svg'

export const UserSurveyPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  about,
  surveyTypes
}) => {

  const [currentSection, setCurrentSection] = useState('');
  const [showGoTop, setShowGoTop] = useState(false);

  const sectionsRef = useRef([]);

  useEffect(() => {
    window.addEventListener('scroll', debounce(scrollHandler, 150), { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
    sectionsRef.current.map(s => {
      if (window.pageYOffset + 44 >= s.offsetTop && window.pageYOffset + 44 < s.offsetTop + s.offsetHeight) {
        setCurrentSection(s.id)
      }
      if (window.pageYOffset > 700 && window.pageYOffset < document.documentElement.scrollHeight - 1400) {
        setShowGoTop(true)
      } else {
        setShowGoTop(false)
      }
    })
  }

  const scrollToSection = (section) => {
    sectionsRef.current.map((e, i) => {
      if (e.id === kebabCase(section)) {
        sectionsRef.current[i].scrollIntoView({ behavior: "smooth" });
        setCurrentSection(kebabCase(section))
      }
    });
  }

  const scrollTop = () => {
    sectionsRef.current[0].scrollIntoView({ behavior: "smooth" });
  }

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
      <Navigator optionsList={surveyTypes.map(s => s.frontmatter.title)} currentSection={currentSection} changeOption={(ev) => scrollToSection(ev)} />

      {surveyTypes.map((s, index) => {
        return (
          <div className="user-survey-abstract" id={kebabCase(s.frontmatter.title)} ref={el => sectionsRef.current[index] = el} key={`user-survey-${index}`}>
            <img className="survey-image" src={!!s.frontmatter.logo.childImageSharp ? s.frontmatter.logo.childImageSharp.fluid.src : s.frontmatter.logo} />
            <HTMLContent className="survey-text" content={s.html} />
            <button className="survey-button" onClick={() => navigate(s.frontmatter.button.link)}>
              {s.frontmatter.button.text}
              <img src={leftArrow} alt="" />
            </button>
            {surveyTypes.length > index + 1 && <hr />}
          </div>
        )
      })}
      {showGoTop && <GoTopButton onClick={() => scrollTop()} />}
    </div>
  )
}

UserSurveyPageTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  about: PropTypes.object,
}

const UserSurveyPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post, allMarkdownRemark: { nodes } } = data

  return (
    <Layout style={{ overflow: 'visible' }}>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <UserSurveyPageTemplate
        isLoggedUser={isLoggedUser}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        about={post.frontmatter.about}
        surveyTypes={nodes.sort((a, b) => a.frontmatter.order - b.frontmatter.order)}
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
      }
    }
    allMarkdownRemark(filter: {frontmatter: {userSurvey: {eq: true}}}) {
      nodes {
        html
        frontmatter {
          order
          title
          logo {
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
      }
    }
  }
`
