import { START_LOADING, STOP_LOADING, LOGOUT_USER, SET_LOGGED_USER } from "openstack-uicore-foundation/lib/actions";

import {
    GET_CURRENT_SUMMIT,
} from '../actions/summit-actions'

const DEFAULT_STATE = {
    loading: false,
    current_summit: null,
}

const summitReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_LOGGED_USER:
        case LOGOUT_USER: {
            return DEFAULT_STATE;
        }
            break;
        case START_LOADING:
            return { ...state, loading: true };
            break;
        case STOP_LOADING:
            return { ...state, loading: false };
            break;
        case GET_CURRENT_SUMMIT: {            
            return { ...state, current_summit: payload.response }
        }
            break;
        default:
            return state;
    }
}

export default summitReducer