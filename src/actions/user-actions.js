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
import axios from "axios";
import { handleApiError } from "../utils/security";


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
export const START_LOADING_PROFILE = 'START_LOADING_PROFILE';
export const STOP_LOADING_PROFILE = 'STOP_LOADING_PROFILE';
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SCHEDULE_SYNC_LINK_RECEIVED = 'SCHEDULE_SYNC_LINK_RECEIVED';
export const ADD_TO_SCHEDULE = 'ADD_TO_SCHEDULE';
export const REMOVE_FROM_SCHEDULE = 'REMOVE_FROM_SCHEDULE';
export const GET_SPEAKER_PROFILE = 'GET_SPEAKER_PROFILE';

/******************* PROFILE *******************************************************************/
export const getUserProfile = () => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  let params = {
    access_token: accessToken,
    expand: 'groups,summit_tickets,summit_tickets,summit_tickets.owner,summit_tickets.owner.presentation_votes,summit_tickets.owner.extra_questions,summit_tickets.badge,summit_tickets.badge.features,summit_tickets.badge.type, summit_tickets.badge.type.access_levels,summit_tickets.badge.type.features,favorite_summit_events,feedback,schedule_summit_events,rsvp,rsvp.answers,legal_agreements,legal_agreements.document'
  };

  dispatch(startLoading());
  dispatch(createAction(START_LOADING_PROFILE)());
  return getRequest(
    null,
    createAction(GET_USER_PROFILE),
    `${window.API_BASE_URL}/api/v1/summits/current/members/me`,
    authErrorHandler
  )(params)(dispatch).then(() => {
    return dispatch(getIDPProfile()).then(() => {
      return dispatch(getScheduleSyncLink()).then(() => dispatch(createAction(STOP_LOADING_PROFILE)()))
    });
  }).catch(() => dispatch(createAction(STOP_LOADING_PROFILE)()));
}

export const getScheduleSyncLink = () => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  let params = {
    access_token: accessToken,
  };

  return postRequest(
    null,
    createAction(SCHEDULE_SYNC_LINK_RECEIVED),
    `${window.API_BASE_URL}/api/v1/summits/current/members/me/schedule/shareable-link`,
    null,
    authErrorHandler,
  )(params)(dispatch);
};

export const getIDPProfile = () => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.reject();

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

export const updatePassword = (password) => async (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.reject();

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

export const updateProfilePicture = (pic) => async (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.reject();

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

export const updateIDPProfile = (profile) => async (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.reject();

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

export const updateProfile = (profile) => async (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.reject();

  let params = {
    access_token: accessToken,
  };

  const normalizedEntity = normalizeEntity(profile);

  dispatch(createAction(START_LOADING_IDP_PROFILE)());

  putRequest(
    null,
    createAction(UPDATE_IDP_PROFILE),
    `${window.API_BASE_URL}/api/v1/members/me`,
    normalizedEntity,
    customErrorHandler
  )(params)(dispatch)
    .then(() => dispatch(getUserProfile()))
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

  if (!normalizedEntity.shirt_size) delete (normalizedEntity['shirt_size']);

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

/*********************** MY SCHEDULE ***************************************/

export const addToSchedule = (event) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  const url = `${window.API_BASE_URL}/api/v1/summits/current/members/me/schedule/${event.id}`;

  return axios.post(
    url, { access_token: accessToken }
  ).then(async () => {
    await dispatch(createAction(ADD_TO_SCHEDULE)({ event }));
    return event;
  }).catch(handleApiError);
};

export const removeFromSchedule = (event) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  const url = `${window.API_BASE_URL}/api/v1/summits/current/members/me/schedule/${event.id}`;

  return axios.delete(
    url, { data: { access_token: accessToken } }
  ).then(async () => {
    dispatch(createAction(REMOVE_FROM_SCHEDULE)({ event }));
    return event;
  }).catch(handleApiError);
};

/*********************** SPEAKER PROFILE ***************************************/

export const getSpeakerProfile = (speakerId) => (dispatch, getState) => {

  const { loggedUserState } = getState();
  const { accessToken } = loggedUserState;

  dispatch(startLoading());

  let params = {
    access_token: accessToken,
    expand: 'member,presentations'
  };

  return getRequest(
    null,
    createAction(GET_SPEAKER_PROFILE),
    `${window.API_BASE_URL}/api/v1/speakers/${speakerId}`,
    authErrorHandler
  )(params)(dispatch).then(() => {
    dispatch(stopLoading());
  }
  );
};
