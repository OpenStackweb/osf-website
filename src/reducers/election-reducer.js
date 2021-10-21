import { START_LOADING, STOP_LOADING } from "openstack-uicore-foundation/lib/actions";

import {
  GET_ELECTIONS_STATUS,
  NOMINATE_MEMBER,
  NOMINATE_MEMBER_SUCCESS,
  NOMINATE_MEMBER_ERROR,
  GET_CANDIDATES,
  GET_GOLD_CANDIDATES
} from '../actions/election-actions'

const DEFAULT_STATE = {
  loading: false,
  election_status: null,
  candidates: [],
  gold_candidates: [],
  member_nomination: null,
  member_nomination_loading: null,
}

const electionReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {

    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case GET_ELECTIONS_STATUS: {
      return { ...state, election_status: payload.response, member_nomination: null }
    }
      break;
    case GET_CANDIDATES: {
      return { ...state, candidates: payload.response.data }
    }
      break;
    case GET_GOLD_CANDIDATES: {
      return { ...state, gold_candidates: payload.response.data }
    }
      break;
    case NOMINATE_MEMBER: {
      return { ...state, member_nomination: true, member_nomination_loading: true }
    }
      break;
    case NOMINATE_MEMBER_SUCCESS: {
      return { ...state, member_nomination: true, member_nomination_loading: false }
    }
      break;
    case NOMINATE_MEMBER_ERROR: {
      return { ...state, member_nomination: payload, member_nomination_loading: false }
    }
      break;
    default:
      return state;
  }
}

export default electionReducer