import summitData from '../content/summit.json';
import {filterEventsByAccessLevel, getFilteredEvents, preFilterEvents, syncFilters} from '../utils/schedule';

const summitTimeZoneId = summitData.time_zone_id;  // TODO use reducer data

const INITIAL_STATE = {
    events: [],
    filters: [],
    view: 'calendar',
    timezone: 'show',
    colorSource: 'track'
};

const scheduleReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case `SCHED_GET_USER_PROFILE`: {
            const {allEvents, events} = state;
            const allFilteredEvents = filterEventsByAccessLevel(allEvents, payload);
            const filteredEvents = filterEventsByAccessLevel(events, payload);
            return {...state, events: filteredEvents, allEvents: allFilteredEvents};
        }
        case `SCHED_SYNC_DATA`: {
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

            return {...state, allEvents: allFilteredEvents, filters: newFilters, colorSource: color_source.toLowerCase(), events};
        }
        case `SCHED_UPDATE_FILTER`: {
            const {type, values} = payload;
            const {filters, allEvents} = state;
            filters[type].values = values;

            // update events
            const events = getFilteredEvents(allEvents, filters, summitTimeZoneId);

            return {...state, filters, events}
        }
        case `SCHED_UPDATE_FILTERS`: {
            const {filters, view} = payload;
            const {allEvents} = state;

            // update events
            const events = getFilteredEvents(allEvents, filters, summitTimeZoneId);

            return {...state, filters, events, view}
        }
        case `SCHED_CHANGE_VIEW`: {
            const {view} = payload;
            return {...state, view}
        }
        case `SCHED_CHANGE_TIMEZONE`: {
            const {timezone} = payload;
            return {...state, timezone}
        }
        default:
            return state;
    }
};

export default scheduleReducer