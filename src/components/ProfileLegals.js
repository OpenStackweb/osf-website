import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';
import { formatEpoch } from 'openstack-uicore-foundation/lib/methods'

const ProfileLegals = ({ legalAgreements }) => {

    if (legalAgreements.length === 0) {
        return (
            <div>
                You have no current legal agreements.
            </div>
        )
    }

    return (
        <div>
            <h3>Your Current Legal Agreements</h3>
            {legalAgreements.map((legalAgreement, index) => {
                return (
                    <div key={`legal-${index}`}>
                        <a>{legalAgreement.document.title}</a>
                        <span> (Signed: {formatEpoch(legalAgreement.last_edited, "MMMM DD, YYYY")})</span>
                    </div>
                )
            })}
        </div>
    )

}

export default ProfileLegals;