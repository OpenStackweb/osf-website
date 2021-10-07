import { LOGOUT_USER, RECEIVE_USER_INFO } from "openstack-uicore-foundation/lib/actions";

import {
  GET_IDP_PROFILE,
  START_LOADING_IDP_PROFILE,
  STOP_LOADING_IDP_PROFILE,
  AFFILIATION_ADDED,
  AFFILIATION_SAVED,
  AFFILIATION_DELETED,
  MEMBERSHIP_TYPE_UPDATED,
  GET_MEMBERS,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR
} from '../actions/user-actions'

const DEFAULT_STATE = {
  loadingIDP: false,
  idpProfile: null,
  currentMembershipType: null,
  currentAffiliations: [],
  members: null,
}

const userReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGOUT_USER:
      return DEFAULT_STATE;
    case START_LOADING_IDP_PROFILE:
      return { ...state, loadingIDP: true };
    case STOP_LOADING_IDP_PROFILE:
      return { ...state, loadingIDP: false };
    case GET_IDP_PROFILE:
      return { ...state, idpProfile: payload.response }
    case RECEIVE_USER_INFO:
      let { response } = action.payload;
      let affiliations = response.affiliations.map((a) => {
        return { ...a };
      });
      return { ...state, currentMembershipType: response.membership_type, currentAffiliations: affiliations };
    case AFFILIATION_ADDED: {
      let affiliation = { ...payload.response };

      return {
        ...state,
        currentAffiliations: [...state.currentAffiliations, affiliation]
      };
    }
      break;
    case AFFILIATION_SAVED: {
      let affiliation = { ...payload.response };
      return {
        ...state,
        currentAffiliations: state.currentAffiliations.map(a => {
          if (a.id !== affiliation.id) return a;
          // Otherwise, this is the one we want - return an updated value
          return {
            ...a,
            ...affiliation
          }
        })
      };
    }
      break;
    case AFFILIATION_DELETED: {
      let { affiliationId } = payload;
      let affiliations = state.currentAffiliations.filter(a => a.id !== affiliationId);
      return {
        ...state,
        currentAffiliations: affiliations
      };
    }
      break;
    case MEMBERSHIP_TYPE_UPDATED: {
      let member = { ...payload.response };
      return { ...state, currentMembershipType: member.membership_type };
    }
      break;
    case GET_MEMBERS: {      
      return { ...state, members: { loading_members: true } }
    }
    case GET_MEMBERS_SUCCESS: {
      const { data, current_page, last_page } = payload.response;
      return { ...state, members: { members_list: data, current_page, last_page, loading_members: false } }
    }
    case GET_MEMBERS_ERROR: {      
      return { ...state, members: { loading_members: false } }
    }    
      break;
    default:
      return state;
  }
}

export default userReducer
