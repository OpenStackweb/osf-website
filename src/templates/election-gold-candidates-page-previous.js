import React, { useState } from "react"
import { graphql } from 'gatsby';
import { connect } from 'react-redux'
import moment from 'moment-timezone';
import LinkComponent from "../components/LinkComponent"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";

const ElectionGoldCandidatesPagePreviousTemplate = ({ intro, goldCandidates, electionData }) => {

  const {closes} = electionData;

  const electionYear = moment(closes * 1000).utc().format('YYYY');

  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
            {goldCandidates &&
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

const ElectionGoldCandidatesPagePrevious = ({ data, isLoggedUser, location }) => {
    
  const { markdownRemark: post, allGoldCandidateData: { edges: candidateArray }, electionData } = data;

  const goldCandidates = candidateArray.map(c => c.node);

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <div>
        <div className="wrapper project-background">
          <TopBar />
          <Navbar isLoggedUser={isLoggedUser} />
          <Header title={post.frontmatter.title} />
          <ElectionGoldCandidatesPagePreviousTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            goldCandidates={goldCandidates}
            electionData={electionData}
            intro={post.frontmatter.intro}
          />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
}), {}
)(ElectionGoldCandidatesPagePrevious)

export const electionGoldCandidatesPagePreviousQuery = graphql`
  query ElectionGoldCandidatesPagePrevious($id: String!, $electionId: String) {
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
    electionData(id: {eq: $electionId}) {
      closes
    }
    allGoldCandidateData(filter: {election_id: {eq: $electionId}}) {
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
