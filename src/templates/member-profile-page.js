import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'


import { connect } from "react-redux";
import { getMemberProfile, getElectionMemberProfile } from '../actions/member-actions';
import { getElectionStatus } from '../actions/election-actions';

import { doLogin, formatEpoch } from 'openstack-uicore-foundation/lib/methods'
import NominationModal from '../components/NominationModal';

export const MemberProfilePageTemplate = ({
  isLoggedUser,
  member_profile,
  nomination_open
}) => {

  const [nominationModal, setNominationModal] = useState(false);  

  const onClickLogin = (evt) => {
    evt.preventDefault();
    doLogin('/a/profile');
  }

  const nominateMember = () => {
    console.log('nominate')
  }

  console.log('member profile', member_profile);

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title='Open Infrastructure Foundation' subTitle='Individual Member Profile' />
      </div>
      {/* <AjaxLoader show={loading_members} size={120} /> */}
      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="member-profile-group">
                <img className="profile-pic" src={member_profile.pic} alt={`${member_profile.first_name} ${member_profile.last_name}`} />
                <span className="profile-name">{`${member_profile.first_name} ${member_profile.last_name}`}</span>
              </div>
              <hr />
              {member_profile.created &&
                <>
                  <div className="member-profile-group">
                    <span className="profile-title">Date Joined</span>
                    <span className="profile-text">
                      {formatEpoch(member_profile.created, 'MMMM DD, YYYY')}
                    </span>
                  </div>
                  <hr />
                </>
              }
              <div className="member-profile-group">
                {member_profile.linked_in &&
                  <>
                    <span className="profile-title">LinkdIn</span>
                    <span className="profile-text">
                      <a href={member_profile.linked_in}>{member_profile.linked_in}</a>
                    </span>
                  </>
                }
                {member_profile.irc &&
                  <>
                    <span className="profile-title">IRC</span>
                    <span className="profile-text">
                      {member_profile.irc}
                    </span>
                  </>
                }
                {member_profile.github_user &&
                  <>
                    <span className="profile-title">Github</span>
                    <span className="profile-text">
                      {member_profile.github_user}
                    </span>
                  </>
                }
                {member_profile.bio &&
                  <>
                    <span className="profile-title">Bio</span>
                    <span className="profile-text" dangerouslySetInnerHTML={{ __html: member_profile.bio }} />
                  </>
                }
                {member_profile.affiliations?.length > 0 &&
                  <>
                    <span className="profile-title">Affiliations</span>
                    <ul>
                      {member_profile.affiliations.map((affiliation, index) => {
                        return (
                          <li key={index}>
                            {`${affiliation.organization.name} - From ${formatEpoch(affiliation.start_date, 'YYYY-MM-DD')} ${affiliation.end_date ? ` to ${formatEpoch(affiliation.end_date)}` : ' (Current)'}`}
                          </li>
                        )
                      })}
                    </ul>
                  </>
                }
                {nomination_open &&
                  member_profile.election_applications?.length >= 10 &&
                  <div className="member-profile-group">
                    <span className="member-candidate">{member_profile.first_name} is a candidate in the January 2021 Board Elections .</span>
                    <hr />
                    <span>
                      {member_profile.first_name} has been nominated enough times to appear on the
                      election ballot. You can read the answers {member_profile.first_name}
                      gave to the election questions below.
                    </span>
                    <hr />
                    <span className="profile-question">Q</span>
                    <span className="profile-title">{`${member_profile.candidate_profile?.election?.candidate_application_form_relationship_to_openstack_label}`}</span>
                    <span className="profile-answer">A</span>
                    <span className="profile-text" dangerouslySetInnerHTML={{ __html: member_profile.candidate_profile?.relationship_to_openstack }} />
                    <hr />
                    <span className="profile-question">Q</span>
                    <span className="profile-title">{`${member_profile.candidate_profile?.election?.candidate_application_form_experience_label}`}</span>
                    <span className="profile-answer">A</span>
                    <span className="profile-text" dangerouslySetInnerHTML={{ __html: member_profile.candidate_profile?.experience }} />
                    <hr />
                    <span className="profile-question">Q</span>
                    <span className="profile-title">{`${member_profile.candidate_profile?.election?.candidate_application_form_boards_role_label}`}</span>
                    <span className="profile-answer">A</span>
                    <span className="profile-text" dangerouslySetInnerHTML={{ __html: member_profile.candidate_profile?.boards_role }} />
                    <hr />
                    <span className="profile-question">Q</span>
                    <span className="profile-title">{`${member_profile.candidate_profile?.election?.candidate_application_form_top_priority_label}`}</span>
                    <span className="profile-answer">A</span>
                    <span className="profile-text" dangerouslySetInnerHTML={{ __html: member_profile.candidate_profile?.top_priority }} />
                    <hr />
                  </div>
                } {nomination_open &&
                  <div className="member-profile-group">
                    {member_profile.election_applications?.length > 0 &&
                      <>
                        <span className="profile-text">{member_profile.first_name} has already been nominated by:</span>
                        <ul>
                          {member_profile.election_applications.map((application, index) => {
                            return (
                              <li key={`aplication-${index}`}>
                                {`${application.nominator.first_name} ${application.nominator.last_name}`}
                              </li>
                            )
                          })}
                        </ul>
                      </>
                    }
                    <span className="profile-title-election">Election</span>
                    <span className="profile-text">Nominations are open for the <a href="">2021 Board Elections.</a></span>
                    <br />
                    <button className="profile-nominate-button" onClick={isLoggedUser ? null : onClickLogin}>
                      {isLoggedUser ?
                        `Nominate ${member_profile.first_name} ${member_profile.last_name}`
                        :
                        'Log In to Nominate'
                      }
                    </button>
                  </div>
                }
              </div>
            </div>
          </section>
        </div>
      </main>
      {nominationModal &&
        <NominationModal closeModal={() => setNominationModal(!nominationModal)} member_profile={member_profile} nominateMember={() => nominateMember} />
      }
    </div>
  )
}

const MemberProfilePage = ({ isLoggedUser, memberId, getMemberProfile, getElectionMemberProfile, member_profile, getElectionStatus, election_status }) => {

  const nomination_open = election_status.status === 'NominationsOpen' ? true : false;

  useEffect(() => {
    getMemberProfile(memberId);
    getElectionStatus();
  }, [])

  useEffect(() => {
    if (nomination_open) {
      getElectionMemberProfile(memberId);
    }
  }, [election_status])

  return (
    <Layout>
      <SEO />
      <MemberProfilePageTemplate
        isLoggedUser={isLoggedUser}
        member_profile={member_profile}
        nomination_open={election_status.status === 'NominationsOpen'}
      />
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  member_profile: state.memberState.member_profile,
  election_status: state.electionState.election_status,
}), { getMemberProfile, getElectionStatus, getElectionMemberProfile })(MemberProfilePage)