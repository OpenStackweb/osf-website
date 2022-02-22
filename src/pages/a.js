import React from "react"
import { Router, Location } from "@reach/router"
import { connect } from 'react-redux'
import PrivateRoute from '../routes/PrivateRoute'
import withSessionChecker from "../utils/withSessionChecker"
import ProfilePage from "../templates/profile-page";
import RegistrationPage from "../templates/registration-page";
import ErrorPage from "../templates/error-page";
import MembershipResignPage from "../templates/membership-resign";
import MembershipCommunityPage from "../templates/membership-community";
import MembershipFoundationPage from "../templates/membership-foundation";
import MemberListPage from "../templates/member-list-page"
import MemberProfilePage from "../templates/member-profile-page"
import CompanyProfilePage from "../templates/company-profile-page"
import CandidatePage from "../templates/candidate-page"
import EditProfilePage from "../templates/edit-profile-page"
import NotFoundPage from "./404"
import PublicRoute from "../routes/PublicRoute"

const App = ({ isLoggedUser, user }) => {
  return (
    <Location>
      {({ location }) => (
        <Router basepath="/a" >
          <PrivateRoute path="/" location={location}>
            <ProfilePage path="/profile" isLoggedIn={isLoggedUser} user={user} location={location} />
            <EditProfilePage path="/profile/edit" isLoggedIn={isLoggedUser} user={user} location={location} />
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

const mapStateToProps = ({ loggedUserState, userState }) => ({
  isLoggedUser: loggedUserState.isLoggedUser,
  user: userState.member
})

export default connect(mapStateToProps)(withSessionChecker(App))