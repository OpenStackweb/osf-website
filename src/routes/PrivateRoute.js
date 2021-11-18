import React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { isAuthorizedUser } from '../utils/authorizedGroups';
import { doLogin, isIdTokenAlive } from 'openstack-uicore-foundation/lib/methods'
import HeroComponent from "../components/HeroComponent";


const PrivateRoute = ({ children, location, isLoggedUser, user, isIdTokenAlive}) => {

  if (!isLoggedUser) {
    doLogin(`${location.pathname}`);
    return null
  }

  if (!isAuthorizedUser(user)) {
    navigate('/', {
      state: {
        error: 'no-authz'
      }
    })
    return null
  }

  try {
    if (!isIdTokenAlive()) {
      doLogin(`${location.pathname}`);
      return <HeroComponent title={'Checking Credentials ...'}/>
    }
  }
  catch (e) {
    console.log(e)
    doLogin(`${location.pathname}`);
    return <HeroComponent title={'Checking Credentials ...'}/>
  }

  return children;
}

const mapStateToProps = ({ loggedUserState, userState }) => ({
  isLoggedUser: loggedUserState.isLoggedUser,
  user: loggedUserState.member
})

export default connect(mapStateToProps, {isIdTokenAlive})(PrivateRoute)