import React from 'react'

import styles from '../style/modules/legal-popup.module.scss';


const LegalAgreementPopupComponent = ({ title, content, showPopup, closePopup }) => {

  return (
    <div className={`${styles.modal} ${showPopup ? styles.isActive : ''}`}>
      <div className={`${styles.modalCard} ${styles.profilePopup}`}>
        <header className={`${styles.modalCardHead}`}>
          <p className={`${styles.modalCardTitle}`} dangerouslySetInnerHTML={{ __html: title }}></p>
          <button className="link" onClick={() => closePopup()}>
            <i className={`${styles.closeIcon} fa fa-times icon`} />
          </button>
        </header>
        <section className={`${styles.modalCardBody}`}>
          <div className={styles.modalCardPicture}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>
      </div>
    </div>
  )
};

export default LegalAgreementPopupComponent