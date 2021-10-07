import {
  getRequest,
  putRequest,
  postRequest,
  deleteRequest,
  createAction,
  stopLoading,
  startLoading,
  authErrorHandler
} from "openstack-uicore-foundation/lib/methods";

import { customErrorHandler } from '../utils/customErrorHandler';

export const START_LOADING_IDP_PROFILE = 'START_LOADING_IDP_PROFILE';
export const STOP_LOADING_IDP_PROFILE = 'STOP_LOADING_IDP_PROFILE';
export const GET_IDP_PROFILE = 'GET_IDP_PROFILE';
export const MEMBERSHIP_TYPE_UPDATED = 'MEMBERSHIP_TYPE_UPDATED';
export const MEMBERSHIP_TYPE_COMMUNITY = 'Community';
export const MEMBERSHIP_TYPE_FOUNDATION = 'Foundation';
export const MEMBERSHIP_TYPE_NONE = 'None';
export const AFFILIATION_SAVED = 'AFFILIATION_SAVED';
export const AFFILIATION_DELETED = 'AFFILIATION_DELETED';
export const AFFILIATION_ADDED = 'AFFILIATION_ADDED';
export const ORGANIZATION_ADDED = 'ORGANIZATION_ADDED';
export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_ERROR = 'GET_MEMBERS_ERROR';

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
    customErrorHandler
  )(params)(dispatch)
    .then(() => dispatch(dispatch(createAction(STOP_LOADING_IDP_PROFILE))));
}

export const getMembers = (keyword, letter, page) => (dispatch, getState) => {

  let params = {
    filter: `active==1,group_slug==foundation-members${keyword ? `,last_name=@${keyword},first_name=@${keyword},full_name=@${keyword},github_user=@${keyword},irc=@${keyword}` : letter ? `,last_name=@${letter}` : ''}`,
    per_page: 100,
    page: page || 1
  };

  return getRequest(
    createAction(GET_MEMBERS),
    createAction(GET_MEMBERS_SUCCESS),
    `${window.API_BASE_URL}/api/public/v1/members`,
    customErrorHandler
  )(params)(dispatch)
    .then((members) => {
      console.log('members', members)
    }).catch((e) => {
      console.log(e);
      dispatch(createAction(GET_MEMBERS_ERROR)())
    });
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