import React, { useState } from 'react'
import PropTypes from "prop-types";

const CandidateForm = ({ electionStatus, saveCandidateProfile }) => {

    const [candidateProfile, setCandidateProfile] = useState({
        bio: "",
        relationship_to_openstack: "",
        experience: "",
        boards_role: "",
        top_priority: "",
    })

    return (
        <div className="candidate-profile-form">
            <h2>Candidate Application Form</h2>
            <div className="candidate-profile-item">
                <label>Provide a brief biography of yourself.</label>
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateProfile.bio}
                    onChange={(ev) => setCandidateProfile({ ...candidateProfile, bio: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_relationship_to_openstack_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateProfile.relationship_to_openstack}
                    onChange={(ev) => setCandidateProfile({ ...candidateProfile, relationship_to_openstack: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_experience_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateProfile.experience}
                    onChange={(ev) => setCandidateProfile({ ...candidateProfile, experience: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_boards_role_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateProfile.boards_role}
                    onChange={(ev) => setCandidateProfile({ ...candidateProfile, boards_role: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_top_priority_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateProfile.top_priority}
                    onChange={(ev) => setCandidateProfile({ ...candidateProfile, top_priority: ev.target.value })}
                />
            </div>

            <button className="" onClick={() => saveCandidateProfile(candidateProfile)}>Save Candidate Application</button>
        </div>
    )
}

export default CandidateForm