import React from 'react'

const NominationModal = ({ member_profile, closeModal, nominateMember }) => {

    console.log('member profile', member_profile)

    const getModalTitle = () => {
        return member_profile.election_applications?.length > 9 ?
            'This candidate has already received 10 nominations.'
            :
            'Please confirm your nomination'
    }

    const getModalText = () => {
        return member_profile.election_applications?.length > 9 ?
            `That's all the nominations that are required to appear on the
    election ballot. You may want to nominate someone else who you 
    think would be a good candidate`
            :
            `Are you sure you would officially like to nominate ${member_profile.first_name} 
    to the Open Infrastructure Foundation Board`
    }

    const getModalButtons = () => {
        return member_profile.election_applications?.length > 9 ?
            <div className="nomination-modal-buttons">
                <button className="nomination-modal-button" onClick={closeModal}>Go Back</button>
                <button className="nomination-modal-button" onClick={closeModal}>Nominate Someone Else</button>
            </div>
            :
            <div className="nomination-modal-buttons">
                <button className="nomination-modal-button" onClick={closeModal}>No</button>
                <button className="nomination-modal-button" onClick={nominateMember}>Yes, Nominate {member_profile.first_name}</button>
            </div>
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-content">
                <div className="nomination-modal">
                    <span className="title">
                        {getModalTitle()}
                    </span>
                    <span>
                        {getModalText()}
                    </span>
                    {getModalButtons()}
                    <article class="message is-success">
                        <div class="message-header">
                            <p>Success</p>
                        </div>
                        <div class="message-body">
                            You've just nominated {member_profile.first_name} for the Open Infrastructure Foundation Board
                        </div>
                    </article>
                </div>
            </div>
            <button className="modal-close is-large" onClick={closeModal} aria-label="close" />
        </div>
    )
}

export default NominationModal
