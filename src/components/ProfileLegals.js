import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';
import { formatEpoch } from 'openstack-uicore-foundation/lib/methods'
import LegalAgreementPopupComponent from './LegalAgreementPopup';

const ProfileLegals = ({ legalAgreements }) => {

  const [selectedAgreement, setSelectedAgreement] = useState(null);
  const [showAgreementPopup, setShowAgreementPopup] = useState(false);

  const showLegalAgreement = (agreement) => {
    setSelectedAgreement(agreement);
    setShowAgreementPopup(!showAgreementPopup)
  }

  const handleTogglePopup = (popup) => {
    if (popup) {
      document.body.classList.add('is-clipped');
    } else {
      document.body.classList.remove('is-clipped');
    }
    setShowAgreementPopup(popup)
  };

  if (legalAgreements.length === 0) {
    return (
      <div>
        You have no current legal agreements.
      </div>
    )
  }

  return (
    <>
      <div>
        <h3>Your Current Legal Agreements</h3>
        {legalAgreements.map((legalAgreement, index) => {
          return (
            <div key={`legal-${index}`}>
              <a href='#' onClick={() => showLegalAgreement(legalAgreement)}>{legalAgreement.document.title}</a>
              <span> (Signed: {formatEpoch(legalAgreement.last_edited, "MMMM DD, YYYY")})</span>
            </div>
          )
        })}
      </div>
      {showAgreementPopup &&
        <LegalAgreementPopupComponent
          title={selectedAgreement?.document.title}
          content={selectedAgreement?.document.content}
          showPopup={showAgreementPopup}
          closePopup={() => handleTogglePopup(!showAgreementPopup)} />
      }
    </>
  )

}

export default ProfileLegals;