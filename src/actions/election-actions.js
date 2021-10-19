import {
  postRequest,
  getRequest,
  putRequest,
  createAction,
  stopLoading,
  authErrorHandler,
} from "openstack-uicore-foundation/lib/methods";

import { customErrorHandler } from '../utils/customErrorHandler';

export const GET_ELECTIONS_STATUS = 'GET_ELECTIONS_STATUS';
export const NOMINATE_MEMBER = 'NOMINATE_MEMBER';
export const NOMINATE_MEMBER_SUCCESS = 'NOMINATE_MEMBER_SUCCESS';
export const NOMINATE_MEMBER_ERROR = 'NOMINATE_MEMBER_ERROR';
export const UPDATE_CANDIDATE_PROFILE = 'UPDATE_CANDIDATE_PROFILE';

export const getElectionStatus = () => (dispatch, getState) => {

  return getRequest(
    null,
    createAction(GET_ELECTIONS_STATUS),
    `${window.API_BASE_URL}/api/public/v1/elections/current`,
    customErrorHandler
  )({})(dispatch)
    .then()
    .catch((e) => {
      console.log(e);
    });
}

export const nominateMember = (candidate_id) => async (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  return postRequest(
    createAction(NOMINATE_MEMBER),
    createAction(NOMINATE_MEMBER_SUCCESS),
    `${window.API_BASE_URL}/api/v1/elections/current/candidates/${candidate_id}`,
    null,
    customErrorHandler
  )(params)(dispatch)
    .then((nomination) => {
      console.log('nomination?', nomination);
    })
    .catch((e) => {
      const errorMessage = JSON.parse(e.res.text).errors[0];
      dispatch(createAction(NOMINATE_MEMBER_ERROR)(errorMessage))
    });
}

export const updateCandidateProfile = (profile) => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  const normalizedProfile = profile;

  // bio => 'sometime|string'
  // relationship_to_openstack => 'sometimes|string'
  // experience => 'sometimes|string'
  // boards_role => 'sometimes|string'
  // top_priority => 'sometimes|string'

  putRequest(
    null,
    createAction(UPDATE_CANDIDATE_PROFILE),
    `${window.API_BASE_URL}/api/v1/elections/current/candidates/me`,
    profile,
    authErrorHandler
  )(params)(dispatch)
    .then((payload) => {
      dispatch(stopLoading());
    });

}