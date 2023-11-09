import React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { isAuthorizedUser } from '../utils/authorizedGroups';
import { doLogin } from 'openstack-uicore-foundation/lib/security/methods'
import HeroComponent from "../components/HeroComponent";

const PrivateRoute = ({ children, location, isLoggedUser, user, isIdTokenAlive, ...rest}) => {

  if (!isLoggedUser) {
    if(typeof window !== 'undefined') {
      // do login after page is loaded and Google Tag Manager is loaded
      function checkIfAnalyticsLoaded() {
        if (typeof window.ga === 'function' && Array.isArray(window.dataLayer)) {
          doLogin(`${location.pathname}`);
        } else {
          setTimeout(checkIfAnalyticsLoaded, 500);
        }
      }
      checkIfAnalyticsLoaded();
    }
    return <HeroComponent title={'Checking Credentials ...'}/>
  }

  if (!isAuthorizedUser(user)) {
    navigate('/', {
      state: {
        error: 'no-authz'
      }
    })
    return <HeroComponent title={'User not Authorized ...'}/>
  }

  return children;
}

const mapStateToProps = ({ loggedUserState }) => ({
  isLoggedUser: loggedUserState.isLoggedUser,
  user: loggedUserState.member
})

export default connect(mapStateToProps)(PrivateRoute)
