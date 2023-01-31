import React, { useState } from "react";
import { graphql } from 'gatsby';
import { connect } from 'react-redux'
import LinkComponent from "../components/LinkComponent"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Header from "../components/Header";
import SEO from "../components/SEO";

import { getGoldCandidates, getElectionStatus } from "../actions/election-actions";

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";

const ElectionGoldCandidatesPageTemplate = ({ intro, goldCandidates, loading, menu }) => {

  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <AjaxLoader show={loading} size={120} />
          <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
            {!loading && goldCandidates &&
              <div className="columns">
                <div className="column is-one-third">
                  {menu.map((m, index) => {
                    return (
                      <div className="election-item" key={index}>
                        <LinkComponent href={m.link}>
                          {m.text}
                          <i className="fa fa-chevron-right" />
                        </LinkComponent>
                      </div>
                    )
                  })}
                </div>
                <div className="column is-two-thirds">
                  <div className="candidate-tier">
                    <h2>{intro.title}</h2>
                    <span dangerouslySetInnerHTML={{ __html: intro.description }} />
                  </div>
                  <div className="candidate-list">
                    {goldCandidates.map((candidate, index) => {
                      return (
                        <>
                          <div className="candidate-wrapper" key={`gold-candidate-${index}`}>
                            {candidate.member.pic && <img src={candidate.member.pic} alt={`${candidate.member.first_name} ${candidate.member.last_name}`} />}
                            <h4>{`${candidate.member.first_name} ${candidate.member.last_name}`}</h4>
                            <br />
                            <div>
                              <b>About {`${candidate.member.first_name} ${candidate.member.last_name}`}</b>
                              <span dangerouslySetInnerHTML={{ __html: candidate.bio || candidate.member.bio }} />
                            </div>
                            <LinkComponent href={`/a/community/members/${candidate.member.id}`}>
                              {`View  ${candidate.member.first_name} ${candidate.member.last_name}'s full candidate profile and Q&A >>`}
                            </LinkComponent>
                            {index + 1 < goldCandidates.length && <hr />}
                          </div>
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
            }
          </div>
        </section>
      </div>
    </main>
  )
}

const ElectionGoldCandidatesPage = ({ data, isLoggedUser, goldCandidates, loading, location, getGoldCandidates, electionStatus, getElectionStatus }) => {

  useState(() => {
    getGoldCandidates();
    getElectionStatus();
  }, [])

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <div>
        <div className="wrapper project-background">
          <TopBar />
          <NavbarV2 isLoggedUser={isLoggedUser} />
          <Header title={post.frontmatter.title} />
          <ElectionGoldCandidatesPageTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            goldCandidates={goldCandidates}
            electionStatus={electionStatus}
            loading={loading}
            menu={post.frontmatter.menu}
            intro={post.frontmatter.intro}
          />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  electionStatus: state.electionState.election_status,
  goldCandidates: state.electionState.gold_candidates,
  loading: state.electionState.loading
}), {
  getGoldCandidates,
  getElectionStatus
}
)(ElectionGoldCandidatesPage)

export const electionGoldCandidatesPageQuery = graphql`
  query ElectionGoldCandidatesPages($id: String!) {
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
        menu {
          text
          link
        }      
        title 
        intro {   
          title
          description
        }                   
      }
    }
  }
`
