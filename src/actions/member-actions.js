import {
  getRequest,
  createAction,
} from "openstack-uicore-foundation/lib/methods";

import { customErrorHandler } from '../utils/customErrorHandler';

export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_ERROR = 'GET_MEMBERS_ERROR';

export const getMembers = (keyword, letter, page = 1) => (dispatch, getState) => {

  let params = {
    filter: `active==1,group_slug==foundation-members${keyword ? `,last_name=@${keyword},first_name=@${keyword},full_name=@${keyword},github_user=@${keyword},irc=@${keyword}` : letter ? `,last_name=@@${letter}` : ''}`,
    per_page: 50,
    page: page
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