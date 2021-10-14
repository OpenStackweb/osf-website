import {
  postRequest,
  getRequest,
  createAction,
} from "openstack-uicore-foundation/lib/methods";

import { customErrorHandler } from '../utils/customErrorHandler';

export const GET_ELECTIONS_STATUS = 'GET_ELECTIONS_STATUS';
export const NOMINATE_MEMBER = 'NOMINATE_MEMBER';
export const NOMINATE_MEMBER_SUCCESS = 'NOMINATE_MEMBER_SUCCESS';
export const NOMINATE_MEMBER_ERROR = 'NOMINATE_MEMBER_ERROR';

export const getElectionStatus = () => (dispatch, getState) => {

  const filters = {
    fields: 'name,status'
  }

  return getRequest(
    null,
    createAction(GET_ELECTIONS_STATUS),
    `${window.API_BASE_URL}/api/public/v1/elections/current`,
    customErrorHandler
  )(filters)(dispatch)
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
    null,
    createAction(NOMINATE_MEMBER),
    `${window.API_BASE_URL}/api/v1/elections/current/candidates/${candidate_id}`,
    null,
    customErrorHandler
  )(params)(dispatch)
    .then((nomination) => {
      dispatch(createAction(NOMINATE_MEMBER_SUCCESS)())
      console.log('nomination?', nomination);
    })
    .catch((e) => {
      console.log('error: ', e);
      dispatch(createAction(NOMINATE_MEMBER_ERROR)(e))
    });
}