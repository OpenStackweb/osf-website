import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import { kebabCase } from 'lodash'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import NavbarV2 from '../components/NavbarV2';
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
  sponsorsLevel,
  loading,
  location,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  const goToTier = () => {
    if (location.hash) {
      setTimeout(() => {
        navigate(location.hash)
      }, 750)
    }
  }

  useEffect(() => {
    if (sponsors.length > 0) goToTier()
  }, [sponsors])


  return (
    <div>
      <AjaxLoader relative={true} color={'#ffffff'} show={loading} size={120} />
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <Header title={header.title} subTitle={header.subTitle} link={header.link} />
      </div>

      <main className="main">
        <div className="content">
          <div className="container">
            <section className="companies-s1-main">
              {sponsors?.map((tier) => {
                const isTierSupportingOrganizations = tier.id === 6;
                const customWidth = sponsorsLevel.find(e => e.id === tier.id)?.width;
                const tierId = tier.name.split(' ')[0].toLowerCase();
                if (tier.is_active === true) {
                  return (
                    <div className="companies-s1-container" key={`companies-s1-container-${tier.id}`} id={tierId}>
                      <div className="companies-s1-columns">
                        <div className="companies-s1-column1">
                          <div className="fix-h3">{tier.name}</div>
                          {isTierSupportingOrganizations ? (
                            <div className="fix-h5">
                              The Supporting Organizations category has been deprecated.
                              Take a look at the benefits of membership with OpenInfra Foundation{" "}
                              <a href="https://openinfra.org/join/members/">here</a>.
                              If you&apos;re interested in joining, please send an email to{" "}
                              <a href="mailto:ecosystem@openinfra.dev">ecosystem@openinfra.dev</a>.
                            </div>
                          ) : (
                            <div className="fix-h5" dangerouslySetInnerHTML={{ __html: tier.description }}>
                            </div>
                          )}
                        </div>
                        <div className="companies-s1-1-container">
                          <div className={`company-level-${tier.name.split(' ')[0].toLowerCase()}`}>
                            {!isTierSupportingOrganizations &&
                              tier.supporting_companies
                                .sort((a, b) => a.company.name.localeCompare(b.company.name))
                                .map(({ company }) => {
                                  const href = company?.description?.length ? `/a/members/profile/${tier.id}/${kebabCase(company?.name)}` : company.url;
                                  const src = `https://openinfra.dev/cdn-cgi/image/quality=75${customWidth ? `,width=${customWidth}` : ''}/${company?.logo || company?.big_logo}`;
                                  return (
                                    <LinkComponent href={href} key={href}>
                                      <img
                                        src={src}
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

const CompaniesPage = ({ isLoggedUser, data, getSponsorhipTypes, sponsors, location, loading }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <CompaniesPageTemplate
        isLoggedUser={isLoggedUser}
        header={post.frontmatter.header}
        sponsors={sponsors.sort((a, b) => a.order - b.order)}
        sponsorsLevel={post.frontmatter.sponsorsLevel}
        location={location}
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
        sponsorsLevel {
          id
          width
        }
      }
    }
  }
`
