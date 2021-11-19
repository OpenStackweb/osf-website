import React from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { isAuthorizedUser } from '../utils/authorizedGroups';
import { doLogin, isIdTokenAlive } from 'openstack-uicore-foundation/lib/methods'
import HeroComponent from "../components/HeroComponent";


const PrivateRoute = ({ children, location, isLoggedUser, user, isIdTokenAlive }) => {
  
  // Check if it's building to not access the state of the reducer on openstack-uicore
  const isProduction = process.env.NODE_ENV

  if (!isProduction && !isLoggedUser) {
    doLogin(`${location.pathname}`);
    return null
  }

  if (!isProduction && !isAuthorizedUser(user)) {
    navigate('/', {
      state: {
        error: 'no-authz'
      }
    })
    return null
  }

  if (!isProduction) {
    try {      
      if (!isIdTokenAlive()) {        
        doLogin(`${location.pathname}`);
        return <HeroComponent title={'Checking Credentials ...'} />
      }      
    }
    catch (e) {      
      console.log('catch error', e)
      doLogin(`${location.pathname}`);
      return <HeroComponent title={'Checking Credentials ...'} />
    }
  }

  return children;
}

const mapStateToProps = ({ loggedUserState, userState }) => ({
  isLoggedUser: loggedUserState.isLoggedUser,
  user: loggedUserState.member
})

export default connect(mapStateToProps, { isIdTokenAlive })(PrivateRoute)