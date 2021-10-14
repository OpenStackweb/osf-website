import {
  getRequest,
  createAction,
  escapeFilterValue
} from "openstack-uicore-foundation/lib/methods";

import { customErrorHandler } from '../utils/customErrorHandler';

export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_ERROR = 'GET_MEMBERS_ERROR';
export const GET_MEMBER_PROFILE = 'GET_MEMBER_PROFILE';
export const GET_MEMBER_PROFILE_SUCCESS = 'GET_MEMBER_PROFILE_SUCCESS';
export const GET_MEMBER_PROFILE_ERROR = 'GET_MEMBER_PROFILE_ERROR';
export const GET_ELECTION_MEMBER_PROFILE = 'GET_ELECTION_MEMBER_PROFILE';
export const GET_ELECTION_MEMBER_PROFILE_SUCCESS = 'GET_ELECTION_MEMBER_PROFILE_SUCCESS';
export const GET_ELECTION_MEMBER_PROFILE_ERROR = 'GET_ELECTION_MEMBER_PROFILE_ERROR';

export const getMembers = (keyword, letter, page = 1) => (dispatch, getState) => {

  const filter = ['active==1', 'group_slug==foundation-members'];

  if (keyword) {
    const escapedKeyword = escapeFilterValue(keyword);
    filter.push(`last_name=@${escapedKeyword},first_name=@${escapedKeyword},full_name=@${escapedKeyword},github_user=@${escapedKeyword},irc=@${escapedKeyword}`)
  }

  if (letter) {
    filter.push(`last_name@@${letter}`);
  }

  let params = {
    'filter[]': filter,
    per_page: 50,
    page: page
  };

  return getRequest(
    createAction(GET_MEMBERS),
    createAction(GET_MEMBERS_SUCCESS),
    `${window.API_BASE_URL}/api/public/v1/members`,
    customErrorHandler
  )(params)(dispatch)
    .then().catch((e) => {
      console.log(e);
      dispatch(createAction(GET_MEMBERS_ERROR)())
    });
}

export const getMemberProfile = (memberId) => (dispatch, getState) => {

  return getRequest(
    createAction(GET_MEMBER_PROFILE),
    createAction(GET_MEMBER_PROFILE_SUCCESS),
    `${window.API_BASE_URL}/api/public/v1/members/${memberId}`,
    customErrorHandler
  )({})(dispatch)
    .then().catch((e) => {
      console.log(e);
      dispatch(createAction(GET_MEMBER_PROFILE_ERROR)())
    });
}

export const getElectionMemberProfile = (memberId) => (dispatch, getState) => {

  const filters = {
    expand: 'candidate_profile,candidate_profile.election,election_applications,election_applications.nominator',
    fields: 'election_applications.nominator.first_name,election_applications.nominator.last_name',
    relations: 'election_applications.nominator.none'
  }

  return getRequest(
    createAction(GET_ELECTION_MEMBER_PROFILE),
    createAction(GET_ELECTION_MEMBER_PROFILE_SUCCESS),
    `${window.API_BASE_URL}/api/public/v1/members/${memberId}`,
    customErrorHandler
  )(filters)(dispatch)
    .then().catch((e) => {
      console.log(e);
      dispatch(createAction(GET_ELECTION_MEMBER_PROFILE_ERROR)())
    });
}
