import {
  getAccessToken,
  getRequest,
  putRequest,
  postRequest,
  deleteRequest,
  createAction,
  putFile,
  stopLoading,
  startLoading,
  authErrorHandler
} from "openstack-uicore-foundation/lib/methods";

import Swal from 'sweetalert2';

import { customErrorHandler } from "../utils/customErrorHandler";

export const START_LOADING_IDP_PROFILE = 'START_LOADING_IDP_PROFILE';
export const STOP_LOADING_IDP_PROFILE = 'STOP_LOADING_IDP_PROFILE';
export const GET_IDP_PROFILE = 'GET_IDP_PROFILE';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PROFILE_PIC = 'UPDATE_PROFILE_PIC';
export const UPDATE_IDP_PROFILE = 'UPDATE_IDP_PROFILE';
export const MEMBERSHIP_TYPE_UPDATED = 'MEMBERSHIP_TYPE_UPDATED';
export const MEMBERSHIP_TYPE_COMMUNITY = 'Community';
export const MEMBERSHIP_TYPE_FOUNDATION = 'Foundation';
export const MEMBERSHIP_TYPE_NONE = 'None';
export const AFFILIATION_SAVED = 'AFFILIATION_SAVED';
export const AFFILIATION_DELETED = 'AFFILIATION_DELETED';
export const AFFILIATION_ADDED = 'AFFILIATION_ADDED';
export const ORGANIZATION_ADDED = 'ORGANIZATION_ADDED';

export const getIDPProfile = () => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  return getRequest(
    createAction(START_LOADING_IDP_PROFILE),
    createAction(GET_IDP_PROFILE),
    `${window.IDP_BASE_URL}/api/v1/users/me`,
      authErrorHandler
  )(params)(dispatch)
    .then(() => dispatch(dispatch(createAction(STOP_LOADING_IDP_PROFILE))));
}

export const updatePassword = (password) => async (dispatch) => {

  const accessToken = await getAccessToken();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  dispatch(createAction(START_LOADING_IDP_PROFILE)());

  putRequest(
    null,
    createAction(UPDATE_PASSWORD),
    `${window.IDP_BASE_URL}/api/v1/users/me`,
    password,
    customErrorHandler
  )(params)(dispatch)
    .then(() => {
      dispatch(createAction(STOP_LOADING_IDP_PROFILE)());
      let msg = 'Password Updated';
      Swal.fire("Success", msg, "success");
    })
    .catch(() => dispatch(createAction(STOP_LOADING_IDP_PROFILE)()));
}

export const updateProfilePicture = (pic) => async (dispatch) => {

  const accessToken = await getAccessToken();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  dispatch(createAction(START_LOADING_IDP_PROFILE)());

  putFile(
    null,
    createAction(UPDATE_PROFILE_PIC),
    `${window.IDP_BASE_URL}/api/v1/users/me/pic`,
    pic,
    {},
    customErrorHandler,
  )(params)(dispatch)
    .then(() => dispatch(getIDPProfile()))
    .catch(() => dispatch(createAction(STOP_LOADING_IDP_PROFILE)()));
}

export const updateProfile = (profile) => async (dispatch) => {

  const accessToken = await getAccessToken();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  dispatch(createAction(START_LOADING_IDP_PROFILE)());

  putRequest(
    null,
    createAction(UPDATE_IDP_PROFILE),
    `${window.IDP_BASE_URL}/api/v1/users/me`,
    profile,
    customErrorHandler
  )(params)(dispatch)
    .then(() => dispatch(getIDPProfile()))
    .catch(() => dispatch(createAction(STOP_LOADING_IDP_PROFILE)()));
}

/******************************  AFFILIATIONS **************************************************/


export const addOrganization = (organization, callback) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  const params = {
    access_token: accessToken,
  };

  dispatch(startLoading());

  postRequest(
    null,
    createAction(ORGANIZATION_ADDED),
    `${window.API_BASE_URL}/api/v1/organizations`,
    { name: organization },
    authErrorHandler
  )(params)(dispatch).then((payload) => {
    dispatch(stopLoading());
    callback(payload.response);
  });
}


export const addAffiliation = (affiliation) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  dispatch(startLoading());

  const params = {
    access_token: accessToken,
    expand: 'organization'
  };

  const normalizedEntity = normalizeEntity(affiliation);

  postRequest(
    null,
    createAction(AFFILIATION_ADDED),
    `${window.API_BASE_URL}/api/v1/members/me/affiliations`,
    normalizedEntity,
    authErrorHandler,
    affiliation
  )(params)(dispatch).then((payload) => {
    dispatch(stopLoading());
  });

}

export const saveAffiliation = (affiliation) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  dispatch(startLoading());

  const params = {
    access_token: accessToken,
  };

  const normalizedEntity = normalizeEntity(affiliation);

  putRequest(
    null,
    createAction(AFFILIATION_SAVED),
    `${window.API_BASE_URL}/api/v1/members/me/affiliations/${affiliation.id}`,
    normalizedEntity,
    authErrorHandler
  )(params)(dispatch)
    .then((payload) => {
      dispatch(stopLoading());
    });
}

export const deleteAffiliation = (affiliationId) => (dispatch, getState) => {

  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  const params = {
    access_token: accessToken,
  };

  return deleteRequest(
    null,
    createAction(AFFILIATION_DELETED)({ affiliationId }),
    `${window.API_BASE_URL}/api/v1/members/me/affiliations/${affiliationId}`,
    null,
    authErrorHandler
  )(params)(dispatch).then(() => {
    dispatch(stopLoading());
  }
  );
};

const normalizeEntity = (entity) => {
  const normalizedEntity = { ...entity };

  if (!normalizedEntity.end_date) delete (normalizedEntity['end_date']);

  normalizedEntity.organization_id = (normalizedEntity.organization != null) ? normalizedEntity.organization.id : 0;
  delete (normalizedEntity['organization']);

  return normalizedEntity;

}

export const updateMembershipType = (type) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  dispatch(startLoading());

  const params = {
    access_token: accessToken,
  };

  return putRequest(
    null,
    createAction(MEMBERSHIP_TYPE_UPDATED),
    `${window.API_BASE_URL}/api/v1/members/me/membership/${type.toString().toLowerCase()}`,
    {},
    authErrorHandler
  )(params)(dispatch)
    .then((payload) => {
      dispatch(stopLoading());
    });
}

export const resignMembershipType = () => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  dispatch(startLoading());

  const params = {
    access_token: accessToken,
  };

  return deleteRequest(
    null,
    createAction(MEMBERSHIP_TYPE_UPDATED),
    `${window.API_BASE_URL}/api/v1/members/me/membership/resign`,
    {},
    authErrorHandler
  )(params)(dispatch)
    .then((payload) => {
      dispatch(stopLoading());
    });
}