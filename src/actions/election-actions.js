import { navigate } from "gatsby-link";
import {
  postRequest,
  getRequest,
  putRequest,
  createAction,
  stopLoading,
  startLoading,
  authErrorHandler
} from "openstack-uicore-foundation/lib/methods";

import Swal from "sweetalert2";

import { customErrorHandler } from '../utils/customErrorHandler';

export const GET_ELECTIONS_STATUS = 'GET_ELECTIONS_STATUS';
export const GET_CANDIDATES = 'GET_CANDIDATES';
export const GET_GOLD_CANDIDATES = 'GET_GOLD_CANDIDATES';
export const NOMINATE_MEMBER = 'NOMINATE_MEMBER';
export const NOMINATE_MEMBER_SUCCESS = 'NOMINATE_MEMBER_SUCCESS';
export const NOMINATE_MEMBER_ERROR = 'NOMINATE_MEMBER_ERROR';
export const UPDATE_CANDIDATE_PROFILE = 'UPDATE_CANDIDATE_PROFILE';

export const getElectionStatus = () => (dispatch, getState) => {

  dispatch(startLoading());

  return getRequest(
    null,
    createAction(GET_ELECTIONS_STATUS),
    `${window.API_BASE_URL}/api/public/v1/elections/current`,
    customErrorHandler
  )({})(dispatch)
    .then(() => dispatch(stopLoading()))
    .catch((e) => {
      dispatch(stopLoading());
      console.log(e);
    });
}

export const getCandidates = () => (dispatch, getState) => {

  dispatch(startLoading());

  const params = {
    page: 1,
    per_page: 100,
    order: '+first_name,+last_name',
    expand: 'member, member.election_applications, member.election_applications.nominator',
    fields: 'member.election_applications.nominator.first_name, member.election_applications.nominator.last_name'
  }

  return getRequest(
    null,
    createAction(GET_CANDIDATES),
    `${window.API_BASE_URL}/api/public/v1/elections/current/candidates`,
    customErrorHandler
  )(params)(dispatch)
    .then((c) => c)
    .catch((e) => {
      console.log(e);
    });
}

export const getGoldCandidates = () => (dispatch, getState) => {

  dispatch(startLoading());

  const params = {
    page: 1,
    per_page: 100,
    order: '+first_name,+last_name',
    expand: 'member',    
  }

  return getRequest(
    null,
    createAction(GET_GOLD_CANDIDATES),
    `${window.API_BASE_URL}/api/public/v1/elections/current/candidates/gold`,
    customErrorHandler
  )(params)(dispatch)
    .then((c) => c)
    .catch((e) => {
      console.log(e);
    });
}

export const nominateMember = (candidate_id) => async (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  dispatch(startLoading());

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
      dispatch(stopLoading());
      console.log('nomination?', nomination);
    })
    .catch((e) => {
      dispatch(stopLoading());
      const errorMessage = JSON.parse(e.res.text).errors[0];
      dispatch(createAction(NOMINATE_MEMBER_ERROR)(errorMessage))
    });
}

export const updateCandidateProfile = (profile) => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  dispatch(startLoading());

  let params = {
    access_token: accessToken,
  };

  putRequest(
    null,
    createAction(UPDATE_CANDIDATE_PROFILE),
    `${window.API_BASE_URL}/api/v1/elections/current/candidates/me`,
    profile,
    authErrorHandler
  )(params)(dispatch)
    .then((payload) => {
      dispatch(stopLoading());
      Swal.fire({
        title: "Success",
        text: "The changes in the profile has been saved",
        type: "success",
      }).then(function (result) {
        if (result.value) {          
          navigate('/a/profile')
        }
      });
    })
    .catch((err) => {
      console.log('error', err);
      dispatch(stopLoading());
    });

}