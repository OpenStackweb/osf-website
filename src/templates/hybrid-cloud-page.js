import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
import SEO from '../components/SEO'

import { connect } from "react-redux";
import LinkComponent from '../components/LinkComponent'

import leftArrow from '../img/svg/arrow-left.svg'

export const HybridCloudPageTemplate = ({
  isLoggedUser,
  title,
  subTitle,
  introduction,
  useCases,
  benefits,
  projects,
  organizations,
  footer,
}) => {

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <Header title={title} subTitle={subTitle} />
      </div>

      <main className="main">
        <div className="content">
          {introduction &&
            <div className="hybrid-cloud-introduction">{introduction}</div>
          }
          {useCases?.display &&
            <div className="hybrid-cloud-cases">
              <span className="title">
                {useCases.title}
              </span>
              {useCases.cases.map((c, index) => {
                return (
                  <div className="case-wrapper" key={`useCase-${index}`}>
                    <div className="case-image" style={{ backgroundColor: c.backgroundColor }}>
                      <img alt="img" src={
                        (c.image?.extension === 'svg' || c.image?.extension === 'gif') && !c.image?.childImageSharp ?
                          c.image?.publicURL
                          :
                          !!c.image?.childImageSharp ? c.image?.childImageSharp.fluid.src : c.image
                      } />
                    </div>
                    <div className="case-text">
                      <span dangerouslySetInnerHTML={{ __html: c.text }} />
                      <span>{c.source}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          }
          {benefits?.display &&
            <div className="hybrid-cloud-benefits">
              <span className="title">
                {benefits.title}
              </span>
              <div className="benefit-wrapper">
                {benefits.items.map((benefit, index) => {
                  return (
                    <div key={`benefit-${index}`}>
                      <img alt="img" src={
                        (benefit.image?.extension === 'svg' || benefit.image?.extension === 'gif') && !benefit.image?.childImageSharp ?
                          benefit.image?.publicURL
                          :
                          !!benefit.image?.childImageSharp ? benefit.image?.childImageSharp.fluid.src : benefit.image
                      } />
                      <span>{benefit.title}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          }
          {projects.display &&
            <div className="hybrid-cloud-projects">
              <span className="title">
                {projects.title}
              </span>
              {projects.list.map((project, index) => {
                return (
                  <div className="project-wrapper" key={`project-${index}`}>
                    <img alt="img" src={
                      (project.image.extension === 'svg' || project.image.extension === 'gif') && !project.image.childImageSharp ?
                        project.image.publicURL
                        :
                        !!project.image.childImageSharp ? project.image.childImageSharp.fluid.src : project.image
                    } />
                    <ul>
                      {project.bullets.map(({ bullet }, i) => {
                        return (
                          <li key={`project-${index}-${i}`} dangerouslySetInnerHTML={{ __html: bullet }} />
                        )
                      })}
                    </ul>
                    {index + 1 !== projects.list.length && <hr />}
                  </div>
                )
              })}
            </div>
          }
          {organizations.display &&
            <div className="hybrid-cloud-organizations">
              <span className="title">
                {organizations.title}
              </span>
              <div>
                {organizations.list.map((organization, index) => {
                  return (
                    <div className="organization-wrapper" key={`organization-${index}`}>
                      <LinkComponent href={organization.link}>
                        <img alt="img" src={
                          (organization.image?.extension === 'svg' || organization.image?.extension === 'gif') && !organization.image?.childImageSharp ?
                            organization.image?.publicURL
                            :
                            !!organization.image?.childImageSharp ? organization.image?.childImageSharp.fluid.src : organization.image
                        } />
                      </LinkComponent>
                    </div>
                  )
                })}
              </div>
            </div>
          }
          {footer?.display &&
            <section className="hybrid-cloud-footer">
              <h4 className="title">{footer.title}</h4>
              <div className="text">
                {footer.subTitle}
              </div>
              <LinkComponent href={footer.button} className="footer-button">
                <span>{footer.buttonText}</span>
                <img src={leftArrow} alt="img" />
              </LinkComponent>
            </section>
          }
        </div>
      </main>
    </div>
  )
}

HybridCloudPageTemplate.propTypes = {
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const HybridCloudPage = ({ isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <HybridCloudPageTemplate
        isLoggedUser={isLoggedUser}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        introduction={post.frontmatter.introduction}
        useCases={post.frontmatter.useCases}
        benefits={post.frontmatter.benefits}
        projects={post.frontmatter.projects}
        organizations={post.frontmatter.organizations}
        footer={post.frontmatter.footer}
      />
    </Layout>
  )
}

HybridCloudPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(HybridCloudPage)

export const hybridCloudPageQuery = graphql`
        query HybridCloudPage($id: String!) {
          markdownRemark(id: {eq: $id }) {
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
        introduction
        useCases {
          display
          title
          cases {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
            backgroundColor
            text
            source
          }
        }
        benefits {
          display
          title
          items {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
            title
          }
        }
        projects {
          display
          title
          list {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
            bullets {
              bullet
            }
          }
        }
        organizations {
          display
          title
          list {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
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
