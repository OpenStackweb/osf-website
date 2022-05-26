import { START_LOADING, STOP_LOADING, LOGOUT_USER } from "openstack-uicore-foundation/lib/actions";

import {
    RECEIVE_SPONSORSHIP_TYPES,
    RECEIVE_SPONSORSHIP_TYPE
} from '../actions/sponsor-actions'

const DEFAULT_STATE = {
    loading: false,
    sponsorshipTypes: [],
}

const sponsorReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case LOGOUT_USER:
            return DEFAULT_STATE;
        case START_LOADING:
            return { ...state, loading: true };
        case STOP_LOADING:
            return { ...state, loading: false };
        case RECEIVE_SPONSORSHIP_TYPES:
            return { ...state, sponsorshipTypes: payload.response.data }
        case RECEIVE_SPONSORSHIP_TYPE:
            const newType = payload.response.data[0];
            return { ...state, sponsorshipTypes: [...state.sponsorshipTypes, newType] }
        default:
            return state;
    }
}

export default sponsorReducer
