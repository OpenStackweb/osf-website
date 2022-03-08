import {createAction} from 'openstack-uicore-foundation/lib/methods';
import { FragmentParser } from "openstack-uicore-foundation/lib/components";

import {pickBy, isEqual, isEmpty} from "lodash";

export const UPDATE_FILTER      = 'UPDATE_FILTER';
export const UPDATE_FILTERS     = 'UPDATE_FILTERS';
export const CHANGE_VIEW        = 'CHANGE_VIEW';
export const CHANGE_TIMEZONE    = 'CHANGE_TIMEZONE';


const fragmentParser = new FragmentParser();

export const updateFilter = (key, filter, action = UPDATE_FILTER) => (dispatch) => {
    dispatch(createAction(action)({...filter, key}))
};

export const deepLinkToEvent = (lastEvent) => {
    const windowExists = typeof window !== "undefined";
    const lastEventEl = lastEvent && document?.getElementById(`event-${lastEvent.id}`);
    if (!lastEventEl || !windowExists) return null;

    // reset scroll
    window.scrollTo(0,0);

    const eventHash = fragmentParser.getParam("event");

    if (eventHash) {
        const eventId = eventHash === "live" ? "live-line" : `event-${eventHash}`;
        const eventEl = document.getElementById(eventId);

        if (eventEl) {
            setTimeout(() => {
                eventEl.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 800);

            setTimeout(() => {
                const openInfoBtns = eventEl.getElementsByClassName("open-info-btn");
                if (openInfoBtns.length > 0) {
                    openInfoBtns[0].click();
                }
            }, 1200);
        }
    }
};

export const updateFiltersFromHash = (key, filters, view, actionCallback = UPDATE_FILTERS) => async (dispatch) => {
    const qsFilters = fragmentParser.getParams();
    const windowExists = typeof window !== "undefined";
    const filterKeys = Object.keys(filters);
    const newFilters = {};

    // clear hash that match filters
    fragmentParser.deleteParams(filterKeys);

    if (windowExists) {
        window.history.replaceState(null, null, ' ');
    }

    // escape if no hash
    if (isEmpty(qsFilters)) return Promise.resolve();

    // remove any query vars that are not filters
    const normalizedFilters =  pickBy(qsFilters, (value, key) => filterKeys.includes(key));

    // populate state filters with hash values
    Object.keys(filters).forEach(key => {
        newFilters[key] = {...filters[key]}; // copy label and rest of props

        if (key === 'title') {
            newFilters[key].values = normalizedFilters[key] ? decodeURIComponent(normalizedFilters[key]) : '';
        } else {
            const newValues = normalizedFilters[key] ? normalizedFilters[key].split(',') : [];
            newFilters[key].values = newValues.map(val => {
                if (isNaN(val)) return decodeURIComponent(val);
                return parseInt(val);
            })
        }
    });

    // only update if filters have changed
    if (!isEqual(newFilters, filters) || view !== qsFilters.view) {
        await dispatch(createAction(actionCallback)({filters: newFilters, view: qsFilters.view, key}));
        return Promise.resolve();
    } else {
        return Promise.resolve();
    }

};

export const getShareLink = (filters, view) => {
    const hashVars = [];

    if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
            if (value.values.length > 0) {
                const hashValue = Array.isArray(value.values) ? value.values.join(',') : encodeURIComponent(value.values);
                hashVars.push(`${key}=${hashValue}`)
            }
        });
    }

    if (view) {
        hashVars.push(`view=${view}`);
    }

    if (typeof window !== 'undefined') {
        return `${window.location}#${hashVars.join('&')}`;
    }

    return '';
};

export const callAction = (key, action, payload) => (dispatch) => {
    return dispatch(createAction(action)({...payload, key}));
};