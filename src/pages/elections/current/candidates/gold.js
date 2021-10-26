import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import LinkComponent from "../../../../components/LinkComponent"
import Layout from '../../../../components/Layout'
import TopBar from "../../../../components/TopBar";
import Navbar from "../../../../components/Navbar";
import Header from "../../../../components/Header";
import SEO from "../../../../components/SEO";

import { getGoldCandidates, getElectionStatus } from "../../../../actions/election-actions";

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";

const ElectionGoldCandidatesPageTemplate = ({ goldCandidates, electionStatus, loading }) => {

  return (
    <main className="main">
      <div className="content">
        <section className="section about-s1-main">
          <AjaxLoader show={loading} size={120} />
          <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
            {!loading && goldCandidates &&
              <div className="columns">
                <div className="column">
                  {electionStatus?.status === "NominationsOpen" &&
                    <>
                      <div className="candidate-tier">
                        <h2>Gold Director Selector Candidates</h2>
                        <span>
                          The candidates on this list are the intended Gold Directors from the Gold Member companies who are running for election as Gold Director Selectors.
                        </span>
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

const ElectionGoldCandidatesPage = ({ isLoggedUser, goldCandidates, loading, location, getGoldCandidates, electionStatus, getElectionStatus }) => {

  useState(() => {
    getGoldCandidates();
    getElectionStatus();
  }, [])
  return (
    <Layout>
      <SEO />
      <div>
        <div className="wrapper project-background">
          <TopBar />
          <Navbar isLoggedUser={isLoggedUser} />
          <Header title="2021 Board Elections: Gold Member Candidate List" />
          <ElectionGoldCandidatesPageTemplate
            isLoggedUser={isLoggedUser}
            location={location}
            goldCandidates={goldCandidates}
            electionStatus={electionStatus}
            loading={loading}
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