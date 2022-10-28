import {LOGOUT_USER, SET_LOGGED_USER} from "openstack-uicore-foundation/lib/utils/actions";

import {
  GET_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
  GET_MEMBER_PROFILE_SUCCESS,
  GET_ELECTION_MEMBER_PROFILE,
  GET_ELECTION_MEMBER_PROFILE_SUCCESS,
  GET_ELECTION_MEMBER_PROFILE_ERROR,
} from '../actions/member-actions'

import { NOMINATE_MEMBER_SUCCESS } from "../actions/election-actions";

const DEFAULT_STATE = {
  members_list: [],
  current_page: null,
  last_page: null,
  loading_members: false,
  member_profile: null
}

const memberReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_LOGGED_USER:
    case LOGOUT_USER: {
      return DEFAULT_STATE;
    }
    case GET_MEMBERS: {
      return { ...state, loading_members: true }
    }
    case GET_MEMBERS_SUCCESS: {
      const { data, current_page, last_page } = payload.response;
      return { ...state, members_list: data, current_page, last_page, loading_members: false }
    }
    case GET_MEMBERS_ERROR: {
      return { ...state, loading_members: false }
    }
    case GET_MEMBER_PROFILE_SUCCESS: {
      return { ...state, member_profile: payload.response }
    }
    case GET_ELECTION_MEMBER_PROFILE: {
      return { ...state, loading_members: true, }
    }
    case GET_ELECTION_MEMBER_PROFILE_SUCCESS: {
      return { ...state, member_profile: { ...state.member_profile, ...payload.response }, loading_members: false, }
    }
    case GET_ELECTION_MEMBER_PROFILE_ERROR: {
      return { ...state, loading_members: false, }
    }
    case NOMINATE_MEMBER_SUCCESS: {
      const newNomination = payload.response;
      return { ...state, member_profile: { ...state.member_profile, election_applications: [...state.member_profile.election_applications, newNomination] } }
    }
    default:
      return state;
  }
}

export default memberReducer
