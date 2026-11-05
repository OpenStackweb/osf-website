import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby";
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import NavbarV2 from "../components/NavbarV2";
import Header from "../components/Header";
import SEO from "../components/SEO";
import 'openstack-uicore-foundation/lib/css/components/index.css';
import { AjaxLoader } from "openstack-uicore-foundation/lib/components";
import { MEMBERSHIP_TYPE_INDIVIDUAL, renewMembership } from "../actions/user-actions";

import leftArrow from '../img/svg/arrow-left.svg'

import '../style/modules/_renew-membership.scss';
import LinkComponent from "../components/LinkComponent";
import { membershipReturnPath } from "../utils/membership-return";

export const RenewMembershipPageTemplate = ({
  isLoggedUser,
  location,
  loading,
  renewMembership,
  userProfile
}) => {

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [renewedMembership, setRenewedMembership] = useState(false);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://openinfra.org';
  const returnTo = membershipReturnPath(new URLSearchParams(location?.search || '').get('returnTo'), origin);
  const returningToCandidate = /^\/a\/community\/members\/\d+\/?$/.test(returnTo.split('?')[0]);

  const handleRenewMembership = () => {
    renewMembership()
      .then(() => setRenewedMembership(true))
      .catch(() => setRenewedMembership(false));
  }

  useEffect(() => {
    if (userProfile.membership_type === MEMBERSHIP_TYPE_INDIVIDUAL) navigate(returnTo)
  }, [])

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <NavbarV2 isLoggedUser={isLoggedUser} />
      </div>
      <AjaxLoader show={loading} size={120} />
      <main className="main">
        <div className="content">
          <section className="section about-s1-main renew-section">
            <div className="container about-s1-container" style={{ position: "relative", overflow: "visible" }}>
              <div className="columns">
                <div className="column is-three-fifths text-column">
                  <h1>
                    <span className="renew-membership-title">REESTABLISH YOUR OPENINFRA MEMBERSHIP</span></h1>
                  {renewedMembership ?
                    <div role="status">
                      <p><strong>Thank you, you've renewed your membership.</strong></p>
                      <p>{returningToCandidate
                        ? 'Return to the candidate’s page to review and confirm your nomination. Renewing your membership has not submitted a nomination.'
                        : 'You can now continue where you left off.'}</p>
                      <button className="renew-membership-button button-cta" onClick={() => navigate(returnTo)}>
                        {returningToCandidate ? 'Continue to nomination' : 'Continue'}
                        <img src={leftArrow} alt="" />
                      </button>
                    </div>
                    :
                    <>
                      <span className="renew-membership-text">
                        <strong>OpenInfra has officially joined the Linux Foundation to strengthen open source infrastructure collaboration. </strong>
                        As part of this transition, all individual members need to reestablish their membership under the new governance structure.
                        Your participation remains free, and with your reestablished membership you will have the ability to vote to elect representatives on
                        the governing board.
                        <br /><br />
                        Help us build the future of open infrastructure together!
                      </span>
                      <div className="renew-membership-checkbox">
                        <input type="checkbox" name="coc" value={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
                        <label>
                          By submitting this application, you agree to the terms outlined in the
                          <LinkComponent href="/legal/oif-individual-member-program"> OIF Individual Member Program</LinkComponent> and the
                          <LinkComponent href="/legal/code-of-conduct"> Community Code of Conduct</LinkComponent>.
                        </label>
                      </div>
                      <button
                        className="renew-membership-button button-cta"
                        onClick={handleRenewMembership}
                        disabled={!acceptedTerms}>
                        CONFIRM<img src={leftArrow} alt="" />
                      </button>
                    </>
                  }
                </div>
                <div className="column">
                  <div className="image-grid">
                    <img src="/img/renew-membership/01.svg" />
                    <img src="/img/renew-membership/02.svg" />
                    <img src="/img/renew-membership/03.svg" />
                    <img src="/img/renew-membership/04.svg" />
                    <img src="/img/renew-membership/05.svg" />
                    <img src="/img/renew-membership/06.svg" />
                    <img src="/img/renew-membership/07.svg" />
                    <img src="/img/renew-membership/08.svg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

const RenewMembershipPage = ({
  isLoggedUser,
  location,
  loading,
  renewMembership,
  userProfile
}) => {

  return (
    <Layout>
      <SEO />
      <RenewMembershipPageTemplate
        location={location}
        loading={loading}
        isLoggedUser={isLoggedUser}
        renewMembership={renewMembership}
        userProfile={userProfile}
      />
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  loading: state.userState.loading,
  userProfile: state.userState.userProfile,
}),
  {
    renewMembership
  })(RenewMembershipPage)
