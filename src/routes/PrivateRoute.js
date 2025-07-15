import React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { isAuthorizedUser } from '../utils/authorizedGroups';
import { doLogin } from 'openstack-uicore-foundation/lib/security/methods'
import HeroComponent from "../components/HeroComponent";

const PrivateRoute = ({ children, location, isLoggedUser, user, isIdTokenAlive, ...rest}) => {

  if (!isLoggedUser) {
    // do login after page is loaded and GA is called
    if(typeof window !== 'undefined') {
      window.setTimeout(() => {
        debugger;
        let backUrl = location.pathname ;
        if(location.search)
          backUrl += `${location.search}`;
        console.log(`calling doLogin with ${backUrl}`);
        doLogin(`${backUrl}`);
      }, 1500);
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
