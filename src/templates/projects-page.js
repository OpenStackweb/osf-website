import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'
import HostingProject from '../components/HostingProject'

import leftArrow from '../img/svg/arrow-left.svg'
import LinkComponent from '../components/LinkComponent'
import { connect } from "react-redux";
import ProjectsSubNav from "../components/ProjectsSubNav";

export const ProjectsPageTemplate = ({
  isLoggedUser,
  header,
  projectCategories,
  projectList,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content  

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <Header title={header.title} subTitle={header.subTitle} />
      </div>

      <main className="main">
        <div className="content">
          {projectCategories.map(category => {
            return (
              projectList.filter(project => project.category && project.category === category.categoryId).length > 0 &&
              <section className="projects-s1-main container">
                <h3 className="itemtitle">{category.label}</h3>
                <hr className="itemtitle-hr" />
                {projectList.filter(project => project.category && project.category === category.categoryId).map((project, index) => {
                  return (
                    <div className="projects-s1-container columns" key={index}>
                      <div className="column is-2">
                        {project.logo ?
                          project.logo.extension === 'svg' && !project.logo.childImageSharp ?
                            <img src={!!project.logo.publicURL ? project.logo.publicURL : project.logo} alt='' className={`${project.class}-logo-image projetcs-s1-container-child`} />
                            :
                            <img src={!!project.logo.childImageSharp ? project.logo.childImageSharp.fluid.src : project.logo} alt='' className="projetcs-s1-container-child" />
                          :
                          null
                        }
                      </div>
                      <div className="projetcs-s1-container-child column is-7 is-full-mobile projects-primary-container">
                        <h2>{project.title}</h2>
                        <h3 id={project.class ? `${project.class}-h3` : ''}>{project.subTitle}</h3>
                        <p>
                          {project.description}
                        </p>
                        <div className="columns important-links-columns">
                          {/* <div className="column is-three-fifths">
                            {project.features && project.features.map((feature, index) => {
                              if (feature.image) {
                                return (
                                  <p key={index}>
                                    <img
                                      src={feature.icon.extension === 'svg' && !feature.icon.childImageSharp ?
                                        feature.icon.publicURL
                                        :
                                        !!feature.icon.childImageSharp ? feature.icon.childImageSharp.fluid.src : feature.icon}
                                      alt="" />
                                    {feature.text}
                                  </p>
                                )
                              }
                            })}
                          </div> */}
                          <div className="column important-links-column">
                            {project.links?.length > 0 && project.links.map((link, index) => {
                              if (link.link) {
                                return (
                                  <p key={index} className={project.class ? `${project.class}-important-link projects-important-link` : ''}>
                                    <LinkComponent href={link.link}>{link.text}</LinkComponent>
                                  </p>
                                )
                              }
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="projetcs-s1-container-child column is-3">
                        {project.button?.link &&
                          <LinkComponent href={project.button.link} className="button button-red projects-btn" id={project.class ? `${project.class}-btn` : ''}>
                            <span>{project.button.text} <img src={leftArrow} alt="" /></span>
                          </LinkComponent>
                        }
                      </div>
                    </div>
                  )
                })}
              </section>
            )
          })}

          <PageContent content={content} />
        </div>
      </main>
    </div>
  )
}

ProjectsPageTemplate.propTypes = {
  header: PropTypes.object,
  confirmed: PropTypes.object,
  pilot: PropTypes.object,
}

const ProjectsPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <ProjectsPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        projectCategories={post.frontmatter.projectCategories}
        projectList={post.frontmatter.projectList}
        content={post.html}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(ProjectsPage)

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
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
        header {
          title
          subTitle
        }        
        projectCategories {
          label
          categoryId
        }
        projectList {
          logo {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL
          }
          title
          subTitle
          category
          class
          description
          button {
            text
            link
          }
          features {
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            text
          }
          links {
            link
            text
          }
        }        
      }
    }
  }
`
