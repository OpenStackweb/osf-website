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
  authErrorHandler,
  showMessage,
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
export const START_LOADING_SPEAKER_PROFILE = 'START_LOADING_SPEAKER_PROFILE';
export const STOP_LOADING_SPEAKER_PROFILE = 'STOP_LOADING_SPEAKER_PROFILE';
export const GET_SPEAKER_PROFILE = 'GET_SPEAKER_PROFILE';
export const UPDATE_SPEAKER_PROFILE = 'UPDATE_SPEAKER_PROFILE';
export const SPEAKER_PROFILE_SAVED = 'SPEAKER_PROFILE_SAVED';
export const PROFILE_PIC_ATTACHED = 'PROFILE_PIC_ATTACHED';
export const BIG_PIC_ATTACHED = 'BIG_PIC_ATTACHED';

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

export const updateMembershipType = (type) => async (dispatch, getState) => {
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

export const getSpeakerProfile = () => (dispatch, getState) => {

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
    `${window.API_BASE_URL}/api/v1/speakers/me`,
    customErrorHandler
  )(params)(dispatch).then(() => {
    dispatch(stopLoading());
    dispatch(createAction(STOP_LOADING_SPEAKER_PROFILE)());
  }
  );
};

export const saveSpeakerProfile = (entity) => (dispatch, getState) => {
  let { loggedUserState } = getState();
  let { accessToken } = loggedUserState;

  dispatch(startLoading());

  let params = {
    access_token: accessToken,
  };

  let pic_file = entity.pic_file;
  let big_pic_file = entity.big_pic_file;
  let normalizedEntity = normalizeEntityProfile(entity);

  let success_message = {
    title: 'Done!',
    html: '',
    type: 'success'
  };

  if (entity.id) {

    return putRequest(
      createAction(UPDATE_SPEAKER_PROFILE),
      createAction(SPEAKER_PROFILE_SAVED),
      `${window.API_BASE_URL}/api/v1/speakers/${entity.id}`,
      normalizedEntity,
      authErrorHandler,
      entity
    )(params)(dispatch)
      .then((payload) => {
        if (pic_file) {
          dispatch(uploadFileProfile(payload.response, pic_file));
        }
        if (big_pic_file) {
          dispatch(uploadFileBigPhoto(payload.response, big_pic_file));
        }
      })
      .then((payload) => {
        success_message.html = "Profile saved successfully!"
        dispatch(showMessage(success_message));
      });
  }

  return postRequest(
    createAction(UPDATE_SPEAKER_PROFILE),
    createAction(SPEAKER_PROFILE_SAVED),
    `${window.API_BASE_URL}/api/v1/speakers/me`,
    normalizedEntity,
    authErrorHandler,
    entity
  )(params)(dispatch)
    .then((payload) => {
      if (pic_file) {
        dispatch(uploadFileProfile(payload.response, pic_file));
      }
      if (big_pic_file) {
        dispatch(uploadFileBigPhoto(payload.response, big_pic_file));
      }
    })
    .then((payload) => {
      // we need to call this because we need the expanded member in the speaker payload
      dispatch(getSpeakerProfile());
    })
    .then((payload) => {
      success_message.html = "Profile saved successfully!"
      dispatch(showMessage(success_message));
    });
}

export const uploadFileProfile = (entity, file) => (dispatch, getState) => {
  let { loggedUserState } = getState();
  let { accessToken } = loggedUserState;

  let formData = new FormData();
  formData.append('file', file);

  let params = {
    access_token: accessToken,
  };

  dispatch(createAction(START_LOADING_SPEAKER_PROFILE)());

  postRequest(
    null,
    createAction(PROFILE_PIC_ATTACHED),
    `${window.API_BASE_URL}/api/v1/speakers/me/photo`,
    formData,
    authErrorHandler,
    { pic: entity.pic }
  )(params)(dispatch).then(() => {
    dispatch(getSpeakerProfile());
  })
}

export const uploadFileBigPhoto = (entity, file) => (dispatch, getState) => {
  let { loggedUserState } = getState();
  let { accessToken } = loggedUserState;

  let formData = new FormData();
  formData.append('file', file);

  let params = {
    access_token: accessToken,
  };

  dispatch(createAction(START_LOADING_SPEAKER_PROFILE)());

  postRequest(
    null,
    createAction(BIG_PIC_ATTACHED),
    `${window.API_BASE_URL}/api/v1/speakers/me/big-photo`,
    formData,
    authErrorHandler,
    { pic: entity.pic }
  )(params)(dispatch).then(() => {
    dispatch(getSpeakerProfile());
  })
}

const normalizeEntityProfile = (entity) => {
  let normalizedEntity = { ...entity };

  // normalizedEntity.areas_of_expertise = entity.areas_of_expertise.map(a => a.label);
  // normalizedEntity.other_presentation_links = entity.other_presentation_links.filter(l => l.link);

  delete normalizedEntity['affiliations'];
  delete normalizedEntity['pic'];
  delete normalizedEntity['pic_file'];
  delete normalizedEntity['member'];
  delete normalizedEntity['member_id'];

  return normalizedEntity;
}