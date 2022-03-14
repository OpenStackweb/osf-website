import summitData from '../content/summit.json';
import {filterEventsByAccessLevel, getFilteredEvents, preFilterEvents, syncFilters, filterMyEvents} from '../utils/schedule';
import {UPDATE_FILTER, UPDATE_FILTERS, CHANGE_VIEW, CHANGE_TIMEZONE} from '../actions/schedule-actions';
import {ADD_TO_SCHEDULE, GET_USER_PROFILE, REMOVE_FROM_SCHEDULE} from "../actions/user-actions";
import {SYNC_DATA} from '../actions/base-actions';

const summitTimeZoneId = summitData.time_zone_id;  // TODO use reducer data

const INITIAL_STATE = {
    events: [],
    filters: [],
    view: 'calendar',
    timezone: 'show',
    colorSource: 'track',
    is_my_schedule: false,
    only_events_with_attendee_access: false,
};

const scheduleReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case `SCHED_${GET_USER_PROFILE}`: {
            const {allEvents, events} = state;
            const allFilteredEvents = filterEventsByAccessLevel(allEvents, payload);
            const filteredEvents = filterEventsByAccessLevel(events, payload);
            return {...state, events: filteredEvents, allEvents: allFilteredEvents};
        }
        case `SCHED_${SYNC_DATA}`: {

            const {
                color_source,
                pre_filters,
                all_events,
                filters,
                only_events_with_attendee_access,
                is_my_schedule,
                userProfile,
                isLoggedUser
            } = payload; // data from JSON

            const filterByAccessLevel = only_events_with_attendee_access && isLoggedUser;
            const filterByMySchedule = is_my_schedule && isLoggedUser;
            const allFilteredEvents = preFilterEvents(all_events, pre_filters, summitTimeZoneId, userProfile, filterByAccessLevel, filterByMySchedule);
            const newFilters = syncFilters(filters, state.filters);
            const events = getFilteredEvents(allFilteredEvents, newFilters, summitTimeZoneId);

            return {...state, allEvents: allFilteredEvents, filters: newFilters, colorSource: color_source.toLowerCase(), events, is_my_schedule, only_events_with_attendee_access};
        }
        case `SCHED_${UPDATE_FILTER}`: {
            const {type, values} = payload;
            const {filters, allEvents} = state;
            filters[type].values = values;

            // update events
            const events = getFilteredEvents(allEvents, filters, summitTimeZoneId);

            return {...state, filters, events}
        }
        case `SCHED_${UPDATE_FILTERS}`: {
            const {filters, view} = payload;
            const {allEvents} = state;

            // update events
            const events = getFilteredEvents(allEvents, filters, summitTimeZoneId);

            return {...state, filters, events, view}
        }
        case `SCHED_${CHANGE_VIEW}`: {
            const {view} = payload;
            return {...state, view}
        }
        case `SCHED_${CHANGE_TIMEZONE}`: {
            const {timezone} = payload;
            return {...state, timezone}
        }
        case `SCHED_${ADD_TO_SCHEDULE}`: {
            const {event} = payload;
            const {allEvents, filters} = state;

            allEvents.push(event);
            const events = getFilteredEvents(allEvents, filters, summitTimeZoneId);

            return {...state, allEvents, events};

        }
        case `SCHED_${REMOVE_FROM_SCHEDULE}`: {
            const {event} = payload;
            const {allEvents: allEventsCurrent, filters} = state;

            const allEvents = allEventsCurrent.filter(ev => ev.id !== event.id);
            const events = getFilteredEvents(allEvents, filters, summitTimeZoneId);

            return {...state, allEvents, events};

        }
        default:
            return state;
    }
};

export default scheduleReducer
