import {
  GET_ELECTIONS_STATUS,  
} from '../actions/election-actions'

const DEFAULT_STATE = {  
  election_status: null,  
}

const electionReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {

    case GET_ELECTIONS_STATUS: {
      return { ...state, election_status: payload.response }
    }
      break;    
    default:
      return state;
  }
}

export default electionReducer