import React, { useState, useEffect } from 'react'
import LinkComponent from './LinkComponent';

import { navigate } from "gatsby"
import moment from 'moment-timezone';

const CandidateProfile = ({ electionProfile, electionStatus }) => {

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

    const handleElectionDetails = () => {
        navigate('/election/')
    }

    const handleAcceptNomination = () => {
        navigate('/a/profile/candidate')
    }

    const handleSeeNominations = () => {
        navigate('/election/candidates')
    }

    const handleNominateMember = () => {
        navigate('/a/community/members')
    }


    return (
        <div className="candidate-profile-wrapper">
            <div className="candidate-profile-header">
                <span>The current election is the <LinkComponent href="/election">{electionStatus?.name}</LinkComponent>. </span>
                <button className="" onClick={() => handleElectionDetails()}>Election Details</button>
            </div>
            <hr />
            <div className="candidate-profile-section">
                <h4>Your Status As A Candidate</h4>

                {ready && electionStatus.status === 'NominationsOpen' ?
                    today > electionStatus.nomination_opens * 1000 && today < electionStatus.nomination_application_deadline * 1000 ?
                        <span>
                            <p>Nominations are currently closed. Elections start {moment(electionStatus.nomination_opens * 1000).format('dddd, MMMM DD, YYYY')}. See the <a href="#">Election Details</a>.</p>
                            {electionProfile?.candidate_profile?.is_gold_member &&
                                <span>
                                    If you are a Gold Member Candidate, you can still edit your <LinkComponent href="/a/profile/candidate">Candidate Profile</LinkComponent>.
                                </span>
                            }
                        </span>
                        :
                        electionProfile?.election_applications.length >= 1 ?
                            <>
                                <span>
                                    You have been nominated <b>{`${electionProfile?.election_applications.length}`}</b> {`${electionProfile?.election_applications.length > 1 ? 'times' : 'time'}`},
                                    {electionProfile?.candidate_profile?.has_accepted_nomination ?
                                        ` and agreed to accept the nomination. You will be listed as a candidate on the ballot when you receive 10 nominations.`
                                        :
                                        ` but you have not accepted the nomination. You must accept the nomination and complete a Candidate Profile to be officially listed as a candidate for this election.`
                                    }
                                </span>
                                <button className="" onClick={() => handleAcceptNomination()}>{electionProfile?.candidate_profile?.has_accepted_nomination ? 'Edit Candidate Application' : 'Accept Nomination'}</button>
                            </>
                            :
                            <>
                                {electionProfile?.candidate_profile?.has_accepted_nomination ?
                                    <span>
                                        You have completed your Candidate Application, but have not been nominated yet. You will be listed as a candidate on the ballot when you receive 10 nominations.
                                    </span>
                                    :
                                    <span>
                                        <strong>You don't have any nominations for this election.</strong> To get started, complete your Candidate Application and encourage people to nominate you. Once you have completed the application and have at least 10 nominations, you will be listed on the election ballot.
                                    </span>
                                }
                                <button className="" onClick={() => handleAcceptNomination()}>{electionProfile?.candidate_profile?.has_accepted_nomination ? 'Edit Candidate Application' : 'Fill Out Application'}</button>
                            </>
                    :
                    <span>
                        There is no current Election. When an election is active, this page allows you to nominate candidates and edit your own candidate information.
                    </span>
                }

            </div>
            <hr />
            <div className="candidate-profile-section">
                <h4>Your Candidate Nominations</h4>
                {electionProfile.election_nominations?.length > 0 ?
                    <>
                        <span>These are the OpenInfra Foundation Individual Members you have nominated in this election.</span>
                        <ul>
                            {electionProfile.election_nominations.map((nomination, index) => {
                                return (
                                    <li key={`aplication-${index}`}>
                                        You nominated <b>{`${nomination.candidate.first_name} ${nomination.candidate.last_name}`}</b> on {moment(nomination.last_edited * 1000).format('MMMM DD, YYYY')} at {moment(nomination.last_edited * 1000).format('hh:mm A')}
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                    :
                    <span>You have not nominated any candidates for this election.</span>
                }
                <button className="" onClick={() => handleSeeNominations()}>See The Current Nominations</button>
                {ready && electionStatus.status === 'NominationsOpen' &&
                    <button className="" onClick={() => handleNominateMember()}>Nominate a Member</button>
                }
            </div>
        </div>
    )
}

export default CandidateProfile