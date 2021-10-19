import React, { useState } from 'react'
import PropTypes from "prop-types";

const CandidateForm = ({ electionStatus, currentMember, saveCandidateProfile }) => {

    const [candidateForm, setCandidateForm] = useState({
        bio: currentMember.candidate_profile.bio || currentMember.bio || "",
        relationship_to_openstack: currentMember.candidate_profile.relationship_to_openstack || "",
        experience: currentMember.candidate_profile.experience || "",
        boards_role: currentMember.candidate_profile.boards_role || "",
        top_priority: currentMember.candidate_profile.top_priority || "",
    })

    console.log('candidateProfile', currentMember);

    return (
        <div className="candidate-profile-form">
            <h2>Candidate Application Form</h2>
            <div className="candidate-profile-item">
                <label>Provide a brief biography of yourself.</label>
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateForm.bio}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, bio: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_relationship_to_openstack_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateForm.relationship_to_openstack}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, relationship_to_openstack: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_experience_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateForm.experience}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, experience: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_boards_role_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateForm.boards_role}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, boards_role: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_top_priority_label }} />
                <textarea
                    className="candidate-profile-input"
                    autoComplete="off"
                    rows="4"
                    value={candidateForm.top_priority}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, top_priority: ev.target.value })}
                />
            </div>

            <button className="" onClick={() => saveCandidateProfile(currentMember)}>Save Candidate Application</button>
        </div>
    )
}

export default CandidateForm