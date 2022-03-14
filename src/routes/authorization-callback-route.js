/**
 * Copyright 2017 OpenStack Foundation
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

import React from 'react'
import URI from "urijs"
import { navigate } from '@reach/router'
import { connect } from 'react-redux';
import { AbstractAuthorizationCallbackRoute } from "openstack-uicore-foundation/lib/components";
import { getUserProfile} from '../actions/user-actions'
import {IDP_BASE_URL, OAUTH2_CLIENT_ID, getEnvVariable} from '../utils/envVariables'
import HeroComponent from "../components/HeroComponent";

class AuthorizationCallbackRoute extends AbstractAuthorizationCallbackRoute {

  constructor(props) {
    super(getEnvVariable(IDP_BASE_URL), getEnvVariable(OAUTH2_CLIENT_ID), props);
  }

  _callback(backUrl) {
    this.props.getUserInfo(
      'groups, all_affiliations, candidate_profile, election_applications, election_nominations, election_nominations.candidate',
      'election_nominations.candidate.first_name, election_nominations.candidate.last_name'
    ).then(() => this.props.getUserProfile().then(() => navigate(URI.decode(backUrl))));
  }

  _redirect2Error(error) {
    console.log(`AuthorizationCallbackRoute::_redirect2Error error ${error}`);
    navigate(`/a/error?error=${error}`);
    return null
  }

  _render(){
    return <HeroComponent title={'Checking Credentials ...'}/>
  }
}

const mapStateToProps = ({ loggedUserState }) => ({
  accessToken: loggedUserState.accessToken,
  idToken: loggedUserState.idToken,
  sessionState: loggedUserState.sessionState,
})

export default connect(mapStateToProps, {
  getUserProfile
})(AuthorizationCallbackRoute)
