import React, {useEffect} from "react"
import { Router, Location } from "@reach/router"
import { connect } from 'react-redux'
import { syncData } from '../../actions/base-actions';
import settings from '../../content/settings';

import PrivateRoute from '../../routes/PrivateRoute'
import ProfilePage from "../../templates/profile-page";
import RegistrationPage from "../../templates/registration-page";
import ErrorPage from "../../templates/error-page";
import MembershipResignPage from "../../templates/membership-resign";
import MembershipCommunityPage from "../../templates/membership-community";
import MembershipFoundationPage from "../../templates/membership-foundation";
import MemberListPage from "../../templates/member-list-page"
import MemberProfilePage from "../../templates/member-profile-page"
import CompanyProfilePage from "../../templates/company-profile-page"
import CandidatePage from "../../templates/candidate-page"
import SchedulePage from "../../templates/berlin-2022-summit-schedule-page"
import NotFoundPage from "../404"
import ProfileLegalPage from "../../templates/profile-legal-page";
import ProfileElectionPage from "../../templates/profile-election-page";
import ProfileSpeakerPage from "../../templates/profile-speaker-page";

const App = ({ isLoggedUser, user, lastBuild, syncData }) => {

  useEffect(() => {
    if (!lastBuild || settings.lastBuild > lastBuild) {
      syncData();
    }
  }, [lastBuild, syncData]);

  console.log('TRHOGH AAAA');

  return (
    <Location>
      {({ location }) => (
        <Router basepath="/a" >
          <PrivateRoute path="/" location={location}>
            <SchedulePage path="/summit-my-schedule" schedKey="my-schedule-main" location={location} headerTitle="My Schedule" />
            <ProfilePage path="/profile" isLoggedIn={isLoggedUser} user={user} location={location} />
            <ProfileLegalPage path="/profile/legal" isLoggedIn={isLoggedUser} user={user} location={location} />
            <ProfileElectionPage path="/profile/elections" isLoggedIn={isLoggedUser} user={user} location={location} />
            <ProfileSpeakerPage path="/profile/speaker" isLoggedIn={isLoggedUser} user={user} location={location} />
            <CandidatePage path="/profile/candidate" isLoggedIn={isLoggedUser} user={user} location={location} />
            <MembershipResignPage path="/profile/membership/resign" isLoggedIn={isLoggedUser} user={user} location={location} />
            <MembershipCommunityPage path="/profile/membership/community" isLoggedIn={isLoggedUser} user={user} location={location} />
            <MembershipFoundationPage path="/profile/membership/foundation" isLoggedIn={isLoggedUser} user={user} location={location} />
          </PrivateRoute>
          <RegistrationPage path="/registration" location={location} isLoggedIn={isLoggedUser} />
          <MemberListPage path="/community/members" location={location} isLoggedIn={isLoggedUser} />
          <MemberProfilePage path="/community/members/:memberId" location={location} isLoggedIn={isLoggedUser} />
          <CompanyProfilePage path="/members/profile/:sponsorshipType/:company" location={location} isLoggedIn={isLoggedUser}/>
          <ErrorPage path="/error" location={location} isLoggedIn={isLoggedUser} />
          <NotFoundPage default />
        </Router>
      )}
    </Location>
  )
}

const mapStateToProps = ({ loggedUserState, userState, settingsState }) => ({
  isLoggedUser: loggedUserState.isLoggedUser,
  user: userState,
  lastBuild: settingsState.lastBuild
});

export default connect(mapStateToProps, { syncData })(App)
