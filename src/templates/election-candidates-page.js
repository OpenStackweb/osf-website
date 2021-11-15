import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import moment from 'moment-timezone';
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SEO from "../components/SEO";
import LinkComponent from "../components/LinkComponent";

import { getCandidates, getElectionStatus } from "../actions/election-actions";

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";
import {ElectionPageTemplate} from "./election-page";

const ElectionCandidatesPageTemplate = ({ candidates, electionStatus, today, loading, menu, howToVote }) => {

  const acceptedCandidates = candidates.filter(c => c.member.election_applications.length >= 10);
  const noBallotCandidates = candidates.filter(c => c.member.election_applications.length < 10 && c.member.election_applications.length > 0);

  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <AjaxLoader show={loading} size={120} />
          <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
            {

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
                  {electionStatus?.status === "NominationsOpen" &&
                    <>
                      <article className="message is-primary">
                        <div className="message-body">
                          <h3>{howToVote.title}</h3>
                          <span
                              dangerouslySetInnerHTML={{ __html: howToVote.description.replace("{$ElectionName}", electionStatus?.name)}}/>
                        </div>
                      </article>
                      <div className="candidate-tier">
                        <h2>Candidates On The Ballot</h2>
                        <span >
                          The candidates on this list have the {electionStatus?.nominations_limit} nominations required to be on the election ballot and have completed the application.
                        </span>
                      </div>
                      <div className="candidate-list">
                        {acceptedCandidates.map((candidate, index) => {
                          return (
                            <>
                              <div className="candidate-wrapper" key={`candidate-ballot-${index}`}>
                                {candidate.member.pic && <img src={candidate.member.pic} alt={`${candidate.member.first_name} ${candidate.member.last_name}`} />}
                                <h4>{`${candidate.member.first_name} ${candidate.member.last_name}`}</h4>
                                <div>
                                  <b>Nominated by:</b>
                                  {candidate.member.election_applications.map(({ nominator }, i) => {
                                    return (
                                      <span className="candidate-nominator" key={`nominator-ballot-${i}-${index}`}>{`${nominator.first_name} ${nominator.last_name}`}</span>
                                    )
                                  })}
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
                      {today && today > electionStatus?.nomination_opens && today < electionStatus?.nomination_closes &&
                        <>
                          <div className="candidate-tier">
                            <h2>Candidates Not Yet On The Ballot</h2>
                            <span>
                              The candidates on this list have been nominated but do not yet have the 10 nominations required to appear on
                              the ballot. If you don't see a member you nominated, they may still need to complete the application and accept
                              the nomination.
                            </span>
                          </div>
                          <div className="candidate-list">
                            {noBallotCandidates.map((candidate, index) => {
                              return (
                                <>
                                  <div className="candidate-wrapper" key={`candidate-${index}`}>
                                    {candidate.member.pic && <img src={candidate.member.pic} alt={`${candidate.member.first_name} ${candidate.member.last_name}`} />}
                                    <h4>{`${candidate.member.first_name} ${candidate.member.last_name}`}</h4>
                                    <div>
                                      <b>Nominated by:</b>
                                      {candidate.member.election_applications.map(({ nominator }, i) => {
                                        return (
                                          <span className="candidate-nominator" key={`nominator-${i}-${index}`}>{`${nominator.first_name} ${nominator.last_name}`}</span>
                                        )
                                      })}
                                    </div>
                                    <br />
                                    <div>
                                      <b>About {`${candidate.member.first_name} ${candidate.member.last_name}`}</b>
                                      <span dangerouslySetInnerHTML={{ __html: candidate.bio || candidate.member.bio }} />
                                    </div>
                                    <LinkComponent href={`/a/community/members/${candidate.member.id}`}>
                                      {`View  ${candidate.member.first_name} ${candidate.member.last_name}'s full candidate profile and Q&A >>`}
                                    </LinkComponent>
                                    {index + 1 < noBallotCandidates.length && <hr />}
                                  </div>
                                </>
                              )
                            })}
                          </div>
                        </>
                      }
                    </>
                  }
                </div>
              </div>
            }
          </div>
        </section>
      </div>
    </main>
  )
}

const ElectionCandidatesPage = ({ data, isLoggedUser, candidates, location,
                                  getCandidates, electionStatus, getElectionStatus, loading }) => {

  useState(() => {
    getCandidates();
    getElectionStatus();
  }, [])

  const [today, setToday] = useState(moment().utc().unix())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    fetch(`https://timeintervalsince1970.appspot.com/`)
      .then(response => response.json())
      .then(resultData => {
        if (resultData.timestamp) {
          setToday(Math.trunc(resultData.timestamp) - 7200);
          setReady(true);
        }
      })
      .catch(() => {
        setToday(moment().utc().unix());
        setReady(true);
      })
  }, [])

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo} />
      <div>
        <div className="wrapper project-background">
          <TopBar />
          <Navbar isLoggedUser={isLoggedUser} />
          <Header title={post.frontmatter.title} />
          <ElectionCandidatesPageTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            candidates={candidates}
            electionStatus={electionStatus}
            today={ready ? today : null}
            menu={post.frontmatter.menu}
            loading={loading}
            howToVote={post.frontmatter.howToVote}
          />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  electionStatus: state.electionState.election_status,
  candidates: state.electionState.candidates,
  loading: state.electionState.loading
}), {
  getCandidates,
  getElectionStatus
}
)(ElectionCandidatesPage)


export const electionCandidatesPageQuery = graphql`
  query ElectionCandidatesPages($id: String!) {
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
        howToVote {   
          title
          description
        }      
      }
    }
  }
`