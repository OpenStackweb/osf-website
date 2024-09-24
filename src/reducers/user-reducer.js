import { LOGOUT_USER, RECEIVE_USER_INFO } from "openstack-uicore-foundation/lib/security/actions";

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
  START_LOADING_SPEAKER_PROFILE,
  STOP_LOADING_SPEAKER_PROFILE,
  GET_SPEAKER_PROFILE,
  REMOVE_FROM_SCHEDULE,
  ADD_TO_SCHEDULE
} from '../actions/user-actions'

const DEFAULT_STATE = {
  loadingIDP: false,
  idpProfile: null,
  userProfile: null,
  loadingSpeaker: false,
  speakerProfile: null,
  currentMembershipType: null,
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
    case START_LOADING_SPEAKER_PROFILE:
      return { ...state, loadingSpeaker: true };
    case STOP_LOADING_SPEAKER_PROFILE:
      return { ...state, loadingSpeaker: false };
    case GET_IDP_PROFILE:
      return { ...state, idpProfile: payload.response }
    case GET_USER_PROFILE:
      const { response: userProfile } = payload;
      return {
        ...state,
        userProfile: userProfile,
        //   isAuthorized: isAuthorizedUser(userProfile.groups),
        //   hasTicket: userProfile.summit_tickets?.length > 0
      }
    case RECEIVE_USER_INFO: {
      let {response} = action.payload;
      let affiliations = response.affiliations.map((a) => {
        return {...a};
      });
      return {...state, currentMembershipType: response.membership_type};
    }
    case AFFILIATION_ADDED: {
      let affiliation = { ...payload.response };

      return {
        ...state,
        userProfile: {
          ...state.userProfile, 
          all_affiliations: [...state.userProfile.all_affiliations, affiliation]
        }
      };
    }
    case AFFILIATION_SAVED: {
      let affiliation = { ...payload.response };
      return {
        ...state,
        userProfile: {
          ...state.userProfile, 
          all_affiliations: state.userProfile.all_affiliations.map(a => {
            if (a.id !== affiliation.id) return a;
            // Otherwise, this is the one we want - return an updated value
            return {
              ...a,
              ...affiliation
            }
          })
        }
      };
    }
    case AFFILIATION_DELETED: {
      let { affiliationId } = payload;
      let affiliations = state.userProfile.all_affiliations.filter(a => a.id !== affiliationId);
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          all_affiliations: affiliations
        }
      };
    }
    case MEMBERSHIP_TYPE_UPDATED: {
      let member = { ...payload.response };
      return { ...state, currentMembershipType: member.membership_type };
    }
    case SCHEDULE_SYNC_LINK_RECEIVED:
      const { link } = payload.response;
      return { ...state, userProfile: { ...state.userProfile, schedule_shareable_link: link } };
    case ADD_TO_SCHEDULE: {
      const { event } = payload;
      const schedule_summit_events = [...state.userProfile.schedule_summit_events, event];
      return { ...state, userProfile: { ...state.userProfile, schedule_summit_events } }
    }
    case REMOVE_FROM_SCHEDULE: {
      const { event } = payload;
      const schedule_summit_events = state.userProfile.schedule_summit_events.filter(ev => ev.id !== event.id);
      return { ...state, userProfile: { ...state.userProfile, schedule_summit_events } }
    }
    case GET_SPEAKER_PROFILE: {
      let entity = { ...payload.response };

      for (var key in entity) {
        if (entity.hasOwnProperty(key)) {
          entity[key] = (entity[key] == null) ? '' : entity[key];
        }
      }

      let areasOfExpertise = entity.areas_of_expertise.map(aoe => ({ label: aoe.expertise, value: aoe.id }));
      entity.areas_of_expertise = areasOfExpertise;

      let orgRoles = entity.organizational_roles.map(or => or.id);
      entity.organizational_roles = orgRoles;

      let languages = entity.languages.map(l => l.id);
      entity.languages = languages;

      let travel_preferences = entity.travel_preferences.map(c => c.country_iso_code);
      entity.travel_preferences = travel_preferences;

      if (entity.other_presentation_links.length < 5) {
        let link = { title: '', link: '' };
        let missing = 5 - entity.other_presentation_links.length;
        let presentation_links = [...entity.other_presentation_links];
        presentation_links.length += missing;
        presentation_links.fill(Object.assign({}, link), entity.other_presentation_links.length);
        entity.other_presentation_links = presentation_links;
      }
      return { ...state, speakerProfile: { ...state.speakerProfile, ...entity } };
    }
    default:
      return state;
  }
}

export default userReducer
