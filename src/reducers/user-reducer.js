import { LOGOUT_USER, RECEIVE_USER_INFO } from "openstack-uicore-foundation/lib/actions";

import {
  GET_IDP_PROFILE,
  START_LOADING_IDP_PROFILE,
  STOP_LOADING_IDP_PROFILE,
  AFFILIATION_ADDED,
  AFFILIATION_SAVED,
  AFFILIATION_DELETED,
  MEMBERSHIP_TYPE_UPDATED,
  SCHEDULE_SYNC_LINK_RECEIVED,
  START_LOADING_PROFILE,
  STOP_LOADING_PROFILE,
  GET_USER_PROFILE,
  REMOVE_FROM_SCHEDULE,
  ADD_TO_SCHEDULE
} from '../actions/user-actions'

const DEFAULT_STATE = {
  loadingIDP: false,
  idpProfile: null,
  userProfile: null,
  currentMembershipType: null,
  currentAffiliations: [],
  isAuthorized: false,
  hasTicket: false,
  attendee: null
}

const userReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGOUT_USER:
      return DEFAULT_STATE;
    case START_LOADING_PROFILE:
      return { ...state, loading: true };
    case STOP_LOADING_PROFILE:
      return { ...state, loading: false };
    case START_LOADING_IDP_PROFILE:
      return { ...state, loadingIDP: true };
    case STOP_LOADING_IDP_PROFILE:
      return { ...state, loadingIDP: false };
    case GET_IDP_PROFILE:
      debugger;
      return { ...state, idpProfile: payload.response }
    case GET_USER_PROFILE:
      debugger;
      const { response: userProfile } = payload;
      return { ...state,
        userProfile: userProfile,
     //   isAuthorized: isAuthorizedUser(userProfile.groups),
     //   hasTicket: userProfile.summit_tickets?.length > 0
      }
    case RECEIVE_USER_INFO:
      debugger;
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
    case AFFILIATION_DELETED: {
      let { affiliationId } = payload;
      let affiliations = state.currentAffiliations.filter(a => a.id !== affiliationId);
      return {
        ...state,
        currentAffiliations: affiliations
      };
    }
    case MEMBERSHIP_TYPE_UPDATED: {
      let member = { ...payload.response };
      return { ...state, currentMembershipType: member.membership_type };
    }
    case SCHEDULE_SYNC_LINK_RECEIVED:
      const {link} = payload.response;
      return { ...state, userProfile: {...state.userProfile, schedule_shareable_link: link} };
    case ADD_TO_SCHEDULE: {
      return { ...state, userProfile: { ...state.userProfile, schedule_summit_events: [...state.userProfile.schedule_summit_events, payload] } }
    }
    default:
      return state;
    case REMOVE_FROM_SCHEDULE: {
      return { ...state, userProfile: { ...state.userProfile, schedule_summit_events: [...state.userProfile.schedule_summit_events.filter(ev => ev.id !== payload.id)] } }
    }
  }
}

export default userReducer
