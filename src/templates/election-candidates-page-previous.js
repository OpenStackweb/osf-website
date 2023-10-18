import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import { connect } from 'react-redux'
import moment from 'moment-timezone';
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from '../components/NavbarV2';
import Header from "../components/Header";
import SEO from "../components/SEO";
import LinkComponent from "../components/LinkComponent";

const ElectionCandidatesPagePreviousTemplate = ({ candidates, electionData }) => {

  const {closes} = electionData;

  const electionYear = moment(closes * 1000).utc().format('YYYY');
  
  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
            {

              <div className="columns">
                <div className="column is-one-third">
                <div class="election-item"><a aria-current="page" class="" href={`/election/${electionYear}-individual-director-election`}>ELECTION DETAILS<i class="fa fa-chevron-right"></i></a></div>
                <div class="election-item"><a aria-current="page" class="" href={`/election/${electionYear}-individual-director-election/candidates/`}>SEE THE CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                <div class="election-item"><a aria-current="page" class="" href={`/election/${electionYear}-individual-director-election/candidates/gold`}>GOLD MEMBER ELECTION CANDIDATES<i class="fa fa-chevron-right"></i></a></div>
                <div class="election-item"><a aria-current="page" class="" href="../../legal/code-of-conduct">CODE OF CONDUCT<i class="fa fa-chevron-right"></i></a></div>
                <div class="election-item"><a aria-current="page" class="" href="mailto:info@openinfra.dev">REPORT A BUG<i class="fa fa-chevron-right"></i></a></div>
                </div>
                <div className="column is-two-thirds">                  
                  <div className="candidate-tier">
                    <h2>Candidates On The Ballot</h2>
                    <span >
                    The candidates on this list have the 10 nominations required to be on the election ballot and have completed the application.
                    </span>
                  </div>
                  <div className="candidate-list">


                    {candidates.map((candidate, index) => {
                      return (
                        <>
                          <div className="candidate-wrapper" key={`candidate-ballot-${index}`}>
                            {candidate.member.pic && <img src={candidate.member.pic} alt={`${candidate.member.first_name} ${candidate.member.last_name}`} />}
                            <h4>{`${candidate.member.first_name} ${candidate.member.last_name}`}</h4>
                            <div>
                              {/* <b>Nominated by:</b>
                              {candidate.member.election_applications.map(({ nominator }, i) => {
                                return (
                                  <span className="candidate-nominator" key={`nominator-ballot-${i}-${index}`}>{`${nominator.first_name} ${nominator.last_name}`}</span>
                                )
                              })} */}
                            </div>
                            <br />
                            <div>
                              <b>About {`${candidate.member.first_name} ${candidate.member.last_name}`}</b>
                              <span dangerouslySetInnerHTML={{ __html: candidate.bio || candidate.member.bio }} />
                            </div>
                            <LinkComponent href={`/a/community/members/${candidate.member.id}`}>
                              {`View  ${candidate.member.first_name} ${candidate.member.last_name}'s full candidate profile and Q&A >>`}
                            </LinkComponent>
                            <hr />
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

const ElectionCandidatesPagePrevious = ({ data, isLoggedUser, location }) => {
  
  const { markdownRemark: post, allCandidateData: { edges: candidateArray }, electionData } = data;
  
  const candidates = candidateArray.map(c => c.node);

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <div>
        <div className="wrapper project-background">
          <TopBar />
          <NavbarV2 isLoggedUser={isLoggedUser} />
          <Header title={post.frontmatter.title} />
          <ElectionCandidatesPagePreviousTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            electionData={electionData}
            candidates={candidates}
          />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
}), {}
)(ElectionCandidatesPagePrevious)


export const electionCandidatesPagePreviousQuery = graphql`
  query ElectionCandidatesPagePrevious($id: String!, $electionId: String) {
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
      }
    }
    electionData(id: {eq: $electionId}) {
      closes
    }
    allCandidateData(filter: {election_id: {eq: $electionId}}) {
      edges {
        node {
          id
          bio
          member {
            first_name
            last_name
            pic
          }
        }
      }
    }
  }
`
