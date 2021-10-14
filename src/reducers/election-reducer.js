import {
  GET_ELECTIONS_STATUS,
  NOMINATE_MEMBER,
  NOMINATE_MEMBER_SUCCESS,
  NOMINATE_MEMBER_ERROR
} from '../actions/election-actions'

const DEFAULT_STATE = {
  election_status: null,
  member_nomination: null,
  member_nomination_loading: null,
}

const electionReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {

    case GET_ELECTIONS_STATUS: {
      return { ...state, election_status: payload.response, member_nomination: null }
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
      const errorMessage = payload.err.response.body.error_description;
      return { ...state, member_nomination: errorMessage, member_nomination_loading: false }
    }
      break;
    default:
      return state;
  }
}

export default electionReducer