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
import { useMemo } from 'react'


const supportingOrganizationID = 6; // IDs of deprecated tiers
const supportingOrganizationsDescription = (
  <div className="fix-h5">
    The Supporting Organizations category has been deprecated.
    Take a look at the benefits of membership with OpenInfra Foundation{" "}
    <a href="https://openinfra.org/join/members/">here</a>.
    If you&apos;re interested in joining, please send an email to{" "}
    <a href="mailto:ecosystem@openinfra.dev">ecosystem@openinfra.dev</a>.
  </div>
);

const getCompanyLink = (company, tierId) => {
  let url = company.url;
  if (company?.name?.length) {
    url = `/a/members/profile/${tierId}/${kebabCase(company?.name)}`;
  }
  console.log('company url', url, { company, tierId });
  return url;
}

const getCompanyLogoSrc = (company, width) => {
  return `https://openinfra.dev/cdn-cgi/image/quality=75$,width=${width}/${company?.logo || company?.big_logo}`;
}

const SponsorCompany = ({ company, tierId, width }) => (
  <LinkComponent href={getCompanyLink(company, tierId)}>
    <img
      src={getCompanyLogoSrc(company, width)}
      alt={company.name}
      key={company.id}
    />
  </LinkComponent>
);

export const CompaniesPageTemplate = ({
  isLoggedUser,
  header,
  sponsors,
  sponsorsLevel,
  loading,
  location,
}) => {

  const goToTier = () => {
    if (location.hash) {
      navigate(location.hash)
    }
  }

  useEffect(() => {
    if (sponsors?.length) goToTier()
  }, [sponsors])

  const customWidths = sponsorsLevel.reduce((acc, level) => {
    acc[level.id] = level.width || 0;
    return acc;
  }, {});

  const sponsorsToShow = useMemo(() => sponsors
    ?.filter(tier => tier.is_active)
    ?.map(tier => {

      const elemId = tier.name.split(' ')[0].toLowerCase();
      return tier.id !== supportingOrganizationID ?
        {
          elemId,
          ...tier,
          supporting_companies: [...tier.supporting_companies]
            .sort((a, b) => a.company.name.localeCompare(b.company.name)),
        }
        :
        {
          elemId,
          ...tier,
          supporting_companies: [],
          description: supportingOrganizationsDescription
        };
    }) || [], [sponsors]);

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
        <Header title={header.title} subTitle={header.subTitle} link={header.link} />
      </div>

      <main className="main">
        <div className="content">
          <div className="container">
            <section className="companies-s1-main">
              {!loading && sponsorsToShow?.map((tier) => (
                <div className="companies-s1-container" key={`companies-s1-container-${tier.id}`} id={tier.elemId}>
                  <div className="companies-s1-columns">
                    <div className="companies-s1-column1">
                      <div className="fix-h3">{tier.name}</div>
                      {typeof tier.description === 'string' ? (
                        <div className="fix-h5" dangerouslySetInnerHTML={{ __html: tier.description }} />
                      ) : (
                        tier.description
                      )}
                    </div>
                    {tier.supporting_companies.length > 0 && (
                      <div className="companies-s1-1-container">
                        <div className={`company-level-${tier.elemId}`}>
                          {tier.supporting_companies
                            .map(({ company }) => (
                              <SponsorCompany
                                company={company}
                                tierId={tier.id}
                                width={customWidths[tier.id] ?? 0}
                                key={getCompanyLink(company, tier.id)}
                              />
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </section>
          </div>
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

const CompaniesPage = ({ isLoggedUser, data, sponsors, location }) => {
  const { markdownRemark: post } = data

  const sortedSponsors = useMemo(() => ([...sponsors]?.sort((a, b) => a.order - b.order) ?? []), [sponsors]);

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <CompaniesPageTemplate
        isLoggedUser={isLoggedUser}
        header={post.frontmatter.header}
        sponsors={sortedSponsors}
        sponsorsLevel={post.frontmatter.sponsorsLevel}
        location={location}
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
}))(CompaniesPage)

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
