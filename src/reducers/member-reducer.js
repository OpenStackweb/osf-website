import {
  GET_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR
} from '../actions/member-actions'

const DEFAULT_STATE = {
  members_list: [],
  current_page: null,
  last_page: null,
  loading_members: false
}

const memberReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {

    case GET_MEMBERS: {
      return { ...state, loading_members: true }
    }
      break;
    case GET_MEMBERS_SUCCESS: {
      const { data, current_page, last_page } = payload.response;
      return { ...state, members_list: data, current_page, last_page, loading_members: false }
    }
      break;
    case GET_MEMBERS_ERROR: {
      return { ...state, loading_members: false }
    }
      break;
    default:
      return state;
  }
}

export default memberReducer