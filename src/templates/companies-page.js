import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import BecomeSponsor from '../components/BecomeSponsor'
import SEO from '../components/SEO'
import LinkComponent from '../components/LinkComponent'

import { connect } from "react-redux";

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";

import { getSponsorhipTypes } from '../actions/sponsor-actions'

export const CompaniesPageTemplate = ({
  isLoggedUser,
  header,
  sponsors,
  loading,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  console.log('sponsors', sponsors)

  return (
    <div>
      <AjaxLoader relative={true} color={'#ffffff'} show={loading} size={120} />
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title={header.title} subTitle={header.subTitle} link={header.link} />
      </div>

      <main className="main">
        <div className="content">
          <div className="container">
            <section className="companies-s1-main">

              {sponsors.map((tier, index) => {
                if (tier.is_active === true) {
                  return (
                    <div className="companies-s1-container" key={index}>
                      <div className="companies-s1-columns">
                        <div className="companies-s1-column1">
                          <div className="fix-h3">{tier.name}</div>
                          <div className="fix-h5" dangerouslySetInnerHTML={{ __html: tier.description }}>
                          </div>
                        </div>
                        <div className="companies-s1-1-container">
                          <div className={`company-level-${tier.name.split(' ')[0].toLowerCase()}`}>
                            {tier.supporting_companies.sort((a, b) => a.company.name.localeCompare(b.company.name)).map(({ company }, companyIndex) => {
                              return (
                                <LinkComponent href={company?.description?.length > 0 ? `/a/members/profile/${tier.id}/${kebabCase(company.name)}` : company.url} key={companyIndex}>
                                  <img
                                    src={company.logo}
                                    alt={company.name}
                                    key={company.id}
                                  />
                                </LinkComponent>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </section>
          </div>
          <PageContent content={content} />
          <BecomeSponsor />
        </div>
      </main>
    </div>
  )
}

CompaniesPageTemplate.propTypes = {
  header: PropTypes.object,
  sponsors: PropTypes.array,
}

const CompaniesPage = ({ isLoggedUser, data, getSponsorhipTypes, sponsors, loading }) => {
  const { markdownRemark: post } = data

  useEffect(() => {
    getSponsorhipTypes();
  }, [])

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <CompaniesPageTemplate
        isLoggedUser={isLoggedUser}
        header={post.frontmatter.header}
        sponsors={sponsors.sort((a, b) => a.order - b.order)}
        loading={loading}
      />
    </Layout>
  )
}

CompaniesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  sponsors: state.sponsorState.sponsorshipTypes,
  loading: state.sponsorState.loading
}), {
  getSponsorhipTypes
})(CompaniesPage)

export const companiesPageQuery = graphql`
  query CompaniesPage($id: String!) {
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
          link {
            url
            text
          }
        }        
      }
    }
  }
`
