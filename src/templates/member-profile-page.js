import React, { useState, useEffect } from 'react'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import LinkComponent from '../components/LinkComponent';
import NominationModal from '../components/NominationModal';

import { connect } from "react-redux";
import { getMemberProfile, getElectionMemberProfile } from '../actions/member-actions';
import { getElectionStatus, nominateMember } from '../actions/election-actions';

import { doLogin, formatEpoch } from 'openstack-uicore-foundation/lib/methods'
import { AjaxLoader } from "openstack-uicore-foundation/lib/components";

export const MemberProfilePageTemplate = ({
  isLoggedUser,
  isOwnProfile,
  member_profile,
  loading_members,
  nomination_open,
  election_name,
  nominateMember,
  member_nomination,
  member_nomination_loading
}) => {

  const [nominationModal, setNominationModal] = useState(false);

  const onClickLogin = (evt) => {
    evt.preventDefault();
    doLogin(`/a/community/members/${member_profile.id}`);
  }

  const goToProfile = () => {
    navigate('/a/profile')
  }

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
        <Header title='Open Infrastructure Foundation' subTitle='Individual Member Profile' />
      </div>
      <AjaxLoader show={loading_members || member_nomination_loading} size={120} />
      <main className="main">
        <div className="content">
          <section className="section about-s1-main">
            <div className="container about-s1-container" style={{ minHeight: '25vh' }}>
              {!loading_members && member_profile &&
                <>
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
                          <LinkComponent href={member_profile.linked_in}>{member_profile.linked_in}</LinkComponent>
                        </span>
                      </>
                    }
                    {member_profile.twitter &&
                      <>
                        <span className="profile-title">Twitter</span>
                        <span className="profile-text">
                          <LinkComponent href={`https://www.twitter.com/${member_profile.twitter}`}>{`@${member_profile.twitter}`}</LinkComponent>
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
                          <LinkComponent href={`https://github.com/${member_profile.github_user}`}>{member_profile.github_user}</LinkComponent>
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
                    { nomination_open &&
                      member_profile.hasOwnProperty("candidate_profile") &&
                      member_profile.candidate_profile.has_accepted_nomination &&
                      <div className="member-profile-group">
                        <span className="member-candidate">{member_profile.first_name} is a candidate in the {election_name} .</span>
                        <hr />
                        {member_profile.election_applications?.length >= 10 ?
                          <span>
                            {member_profile.first_name} has been nominated enough times to appear on the
                            election ballot. You can read the answers {member_profile.first_name} gave to the election questions below.
                          </span>
                          :
                          <span>
                            <p>Read the Q&A below and see if you want to
                              <a onClick={isLoggedUser ? () => setNominationModal(!nominationModal) : onClickLogin}> Nominate {member_profile.first_name}</a> in this election.
                            </p>
                          </span>
                        }
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
                      </div>
                    }
                    {nomination_open &&
                      <div className="member-profile-group">

                        <span className="profile-title-election">Election</span>
                        <span className="profile-text">Nominations are open for the <LinkComponent href="/election">{election_name}.</LinkComponent></span>
                        <br />
                        <button className="profile-nominate-button" onClick={isLoggedUser ? () => setNominationModal(!nominationModal) : onClickLogin}>
                          {isLoggedUser ?
                            `Nominate ${member_profile.first_name} ${member_profile.last_name}`
                            :
                            'Log In to Nominate'
                          }
                        </button>
                      </div>
                    }
                    {nomination_open && isOwnProfile &&
                      <>
                        <hr />
                        <div className="member-profile-group">
                          <span className="member-candidate">Your Profile</span>
                          <button className="profile-nominate-button" onClick={() => goToProfile()}>
                            Edit Your Profile
                          </button>
                        </div>
                      </>
                    }
                  </div>
                </>
              }
            </div>
          </section>
        </div>
      </main>
      {nominationModal &&
        <NominationModal
          closeModal={() => setNominationModal(!nominationModal)}
          candidate_profile={member_profile}
          member_nomination={member_nomination}
          nominateMember={nominateMember}
          member_nomination_loading={member_nomination_loading} />
      }
    </div>
  )
}

const MemberProfilePage = ({
  isLoggedUser,
  currentMember,
  memberId,
  getMemberProfile,
  getElectionMemberProfile,
  member_profile,
  getElectionStatus,
  nominateMember,
  election_status,
  member_nomination,
  member_nomination_loading,
  loading_members
}) => {

  const nomination_open = election_status?.status === 'NominationsOpen' ? true : false;
  const isOwnProfile = currentMember?.id === parseInt(memberId);

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
        isOwnProfile={isOwnProfile}
        member_profile={member_profile}
        loading_members={loading_members}
        nominateMember={nominateMember}
        nomination_open={election_status?.status === 'NominationsOpen'}
        election_name={election_status?.name}
        member_nomination={member_nomination}
        member_nomination_loading={member_nomination_loading}
      />
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  currentMember: state.loggedUserState.member,
  member_profile: state.memberState.member_profile,
  loading_members: state.memberState.loading_members,
  election_status: state.electionState.election_status,
  member_nomination: state.electionState.member_nomination,
  member_nomination_loading: state.electionState.loading,
}), { getMemberProfile, getElectionStatus, getElectionMemberProfile, nominateMember })(MemberProfilePage)