import React, { useState } from 'react'
import { navigate } from 'gatsby-link';
import moment from 'moment-timezone';

const NominationModal = ({ candidate_profile, closeModal, nominateMember, member_nomination, member_nomination_loading }) => {

  const [nominated, setNominated] = useState(false);

  const goToNominations = () => {
    navigate('/election/candidates');
  }

  const goToAllMembers = () => {
    navigate('/a/community/members');
  }

  const getModalTitle = () => {
    return candidate_profile.election_applications?.length > 9 ?
      'This candidate has already received 10 nominations.'
      :
      'Please confirm your nomination'
  }

  const getModalText = () => {
    return candidate_profile.election_applications?.length > 9 ?
      `That's all the nominations that are required to appear on the
    election ballot. You may want to nominate someone else who you 
    think would be a good candidate`
      :
      `Are you sure you would officially like to nominate ${candidate_profile.first_name} 
    to the OpenInfra Foundation Board`
  }

  const getModalButtons = () => {
    if (nominated && !member_nomination_loading) {
      if (member_nomination) {
        return typeof (member_nomination) === 'boolean' ?
          <div className="nomination-modal-buttons">
            <button className="nomination-modal-button" onClick={closeModal}>Done</button>
            <button className="nomination-modal-button" onClick={() => goToAllMembers()}>Nominate Someone Else</button>
          </div>
          :
          <div className="nomination-modal-buttons">
            <button className="nomination-modal-button" onClick={() => goToNominations()}>See Nominations</button>
            <button className="nomination-modal-button" onClick={() => goToAllMembers()}>See All Members</button>
          </div>
      }
    } else {
      return candidate_profile.election_applications?.length > 9 ?
        <div className="nomination-modal-buttons">
          <button className="nomination-modal-button" onClick={closeModal}>Go Back</button>
          <button className="nomination-modal-button" onClick={() => goToAllMembers()}>Nominate Someone Else</button>
        </div>
        :
        <div className="nomination-modal-buttons">
          <button className="nomination-modal-button" onClick={closeModal}>No</button>
          <button className="nomination-modal-button" onClick={() => { setNominated(!nominated); nominateMember(candidate_profile.id) }}>Yes, Nominate {candidate_profile.first_name}</button>
        </div>
    }
  }

  const getNominationMessage = () => {
    return member_nomination !== null ?
      typeof (member_nomination) === 'boolean' ?
        <>
          <article className="message is-success">
            <div className="message-header">
              <p>Success</p>
            </div>
            <div className="message-body">
              You've just nominated {candidate_profile.first_name} for the OpenInfra Foundation Board
            </div>
          </article>
          <div className="content">
            <h2>
              {candidate_profile.first_name} has {candidate_profile.election_applications.length}
              {candidate_profile.election_applications.length > 1 ? ' nominations' : ' nomination'}</h2>
            <ul>
              {candidate_profile.election_applications.map((application, index) => {
                return (
                  <li>
                    Nominated by {`${application.nominator.first_name} ${application.nominator.last_name} `}
                    on {moment(application.last_edited * 1000).format('MMMM DD, YYYY')}
                  </li>
                )
              })
              }
            </ul>
            <span>
              This candidate needs at least 10 nominations to appear on the election ballot
            </span>
          </div>
        </>
        :
        <article className={`message ${member_nomination.status === 412 ? 'is-warning' : 'is-danger'} `}>
          <div className="message-header">
            <p>{member_nomination.status === 412 ? 'Warning' : 'Error'}</p>
          </div>
          <div className="message-body">
            {member_nomination.message}
          </div>
        </article>
      : null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content" style={{ width: '100%', padding: '5vw' }}>
        <div className="nomination-modal">
          <span className="title">
            {getModalTitle()}
          </span>
          {nominated && !member_nomination_loading && getNominationMessage()}
          <span>
            {!nominated && getModalText()}
          </span>
          {getModalButtons()}
        </div>
      </div>
      <button className="modal-close is-large" onClick={closeModal} aria-label="close" />
    </div>
  )
}

export default NominationModal
