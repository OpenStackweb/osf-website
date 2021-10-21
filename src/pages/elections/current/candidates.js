import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import moment from 'moment-timezone';
import Layout from '../../../components/Layout'
import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
import SEO from "../../../components/SEO";

import { getCandidates, getElectionStatus } from "../../../actions/election-actions";

const ElectionCandidatesPageTemplate = ({ candidates, electionStatus, today }) => {  

  const acceptedCandidates = candidates.filter(c => c.member.election_applications.length >= 10);
  const noBallotCandidates = candidates.filter(c => c.member.election_applications.length < 10 && c.member.election_applications.length > 0);

  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <div className="container about-s1-container">
            <div className="columns">
              <div className="column">
                {electionStatus.status === "NominationsOpen" &&
                  <>
                    <article className="message is-primary">
                      <div className="message-body">
                        <h3>HOW TO VOTE</h3>
                        <span>
                          If you are an eligible voter, you should have received an email with the subject
                          <b> "Open Infrastructure Foundation - 2021 Individual Director Election"</b> from
                          secretary@openstack.org. This email includes your unique voting link. If you did
                          not receive an email, please contact <a href="mailto:secretary@openstack.org">
                            secretary@openstack.org</a>.
                        </span>
                      </div>
                    </article>
                    <div className="candidate-tier">
                      <h2>Candidates On The Ballot</h2>
                      <span>
                        The candidates on this list have the 10 nominations required to be on the election ballot and have completed the application.
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
                              <a href={`/a/community/members/${candidate.member.id}`}>
                                {`View  ${candidate.member.first_name} ${candidate.member.last_name}'s full candidate profile and Q&A >>`}
                              </a>
                              <hr />
                            </div>
                          </>
                        )
                      })}
                    </div>
                    {today && today > electionStatus.nomination_opens && today < electionStatus.nomination_closes &&
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
                                  <a href={`/a/community/members/${candidate.member.id}`}>
                                    {`View  ${candidate.member.first_name} ${candidate.member.last_name}'s full candidate profile and Q&A >>`}
                                  </a>
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
          </div>
        </section>
      </div>
    </main>
  )
}

const ElectionCandidatesPage = ({ isLoggedUser, candidates, location, getCandidates, electionStatus, getElectionStatus }) => {

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

  return (
    <Layout>
      <SEO />
      <div>
        <div className="wrapper project-background">
          <TopBar />
          <Navbar isLoggedUser={isLoggedUser} />
          <Header title="2021 Board Elections" />
          <ElectionCandidatesPageTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            candidates={candidates}
            electionStatus={electionStatus}
            today={ready ? today : null}
          />
        </div>
      </div>
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  electionStatus: state.electionState.election_status,
  candidates: state.electionState.candidates
}), {
  getCandidates,
  getElectionStatus
}
)(ElectionCandidatesPage)