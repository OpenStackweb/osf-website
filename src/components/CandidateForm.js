import React, { useState } from 'react'
import PropTypes from "prop-types";
import { TextEditor } from 'openstack-uicore-foundation/lib/components'

const CandidateForm = ({ electionStatus, currentMember, saveCandidateProfile }) => {

    const candidateProfile = currentMember.candidate_profile;

    const [candidateForm, setCandidateForm] = useState({
        bio: candidateProfile?.bio || currentMember.bio || "",
        relationship_to_openstack: candidateProfile?.relationship_to_openstack || "",
        experience: candidateProfile?.experience || "",
        boards_role: candidateProfile?.boards_role || "",
        top_priority: candidateProfile?.top_priority || "",
    });

    if(!electionStatus){
        return (<p>There is no current election.</p>)
    }

    return (
        <div className="candidate-profile-form">
            <h2>Candidate Application Form</h2>
            <div className="candidate-profile-item">
                <label>Provide a brief biography of yourself.</label>
                <TextEditor
                    id="bio"
                    className="candidate-profile-editor"
                    value={candidateForm.bio}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, bio: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_relationship_to_openstack_label }} />
                <TextEditor
                    id="relationship_to_openstack"
                    className="candidate-profile-editor"
                    value={candidateForm.relationship_to_openstack}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, relationship_to_openstack: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_experience_label }} />
                <TextEditor
                    id="experience"
                    className="candidate-profile-editor"
                    value={candidateForm.experience}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, experience: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_boards_role_label }} />
                <TextEditor
                    id="boards_role"
                    className="candidate-profile-editor"
                    value={candidateForm.boards_role}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, boards_role: ev.target.value })}
                />
            </div>
            <div className="candidate-profile-item">
                <label dangerouslySetInnerHTML={{ __html: electionStatus?.candidate_application_form_top_priority_label }} />
                <TextEditor
                    id="top_priority"
                    className="candidate-profile-editor"
                    value={candidateForm.top_priority}
                    onChange={(ev) => setCandidateForm({ ...candidateForm, top_priority: ev.target.value })}
                />
            </div>

            <button className="" onClick={() => saveCandidateProfile(candidateForm)}>Save Candidate Application</button>
        </div>
    )
}

export default CandidateForm