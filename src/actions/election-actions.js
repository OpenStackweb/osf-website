import { navigate } from "gatsby-link";
import {
  postRequest,
  getRequest,
  putRequest,
  createAction,
  stopLoading,
  startLoading,
  authErrorHandler,
  updateUserInfo
} from "openstack-uicore-foundation/lib/methods";

import Swal from "sweetalert2";

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
    null
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
    null
  )(params)(dispatch)
    .then(() => dispatch(stopLoading()))
    .catch((e) => {
      dispatch(stopLoading());
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
    null
  )(params)(dispatch)
    .then(() => dispatch(stopLoading()))
    .catch((e) => {
      dispatch(stopLoading());
      console.log(e);
    });
}

export const nominateMember = (candidate_id) => async (dispatch, getState) => {

  let { loggedUserState: { accessToken, member } } = getState();

  if (!accessToken) return Promise.resolve();

  dispatch(startLoading());

  let params = {
    access_token: accessToken,
    expand: 'candidate, nominator',
    fields: 'candidate.first_name, candidate.last_name, nominator.first_name, nominator.last_name'
  };

  return postRequest(
    createAction(NOMINATE_MEMBER),
    createAction(NOMINATE_MEMBER_SUCCESS),
    `${window.API_BASE_URL}/api/v1/elections/current/candidates/${candidate_id}`,
    null,
    authErrorHandler
  )(params)(dispatch)
    .then((payload) => {
      let {response} = payload
      const updatedProfile = { ...member, election_nominations: [...member.election_nominations, response] };
      dispatch(updateUserInfo(updatedProfile));
      dispatch(stopLoading());
    })
    .catch((e) => {
      const errorMessage = { message: JSON.parse(e.res.text).errors?.[0] || JSON.parse(e.res.text).error_description, status: e.res.statusCode };
      dispatch(createAction(NOMINATE_MEMBER_ERROR)(errorMessage))
      dispatch(stopLoading());
    });
}

export const updateCandidateProfile = (profile) => (dispatch, getState) => {

  let { loggedUserState: { accessToken, member } } = getState();

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
      }).then((result) => {
        if (result.value) {
          const updatedProfile = { ...member, candidate_profile: { ...member.candidate_profile, ...profile } };
          dispatch(updateUserInfo(updatedProfile));
          navigate('/a/profile')
        }
      });
    })
    .catch((err) => {
      console.log('error', err);
      dispatch(stopLoading());
    });

}