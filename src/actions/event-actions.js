import {
    getRequest,
    createAction,
    stopLoading,
    startLoading
} from 'openstack-uicore-foundation/lib/utils/actions';
import { LOGOUT_USER } from "openstack-uicore-foundation/lib/security/actions";
import { getAccessTokenSafely} from "../utils/security";
import {customErrorHandler} from '../utils/customErrorHandler';

export const GET_EVENT_DATA = 'GET_EVENT_DATA';
export const GET_EVENT_DATA_ERROR = 'GET_EVENT_DATA_ERROR';

export const handleResetReducers = () => (dispatch) => {
    dispatch(createAction(LOGOUT_USER)({}));
};

export const getEventById = (eventId) => async (dispatch, getState) => {
    // check first the reducer
    let {allSchedulesState: {allEvents}} = getState();
    const event = allEvents.find(ev => ev.id === parseInt(eventId));

    if (event) {
        dispatch(createAction(GET_EVENT_DATA)({event}));
        return Promise.resolve();
    }

    // if does not exists get it from api
    const accessToken = await getAccessTokenSafely();

    if (!accessToken) return Promise.resolve();

  dispatch(startLoading());

  let params = {
        access_token: accessToken,
        expand: 'track,location,location.venue,location.floor,speakers,slides,links,videos,media_uploads'
    };

    return getRequest(
        null,
        createAction(GET_EVENT_DATA),
        `${window.API_BASE_URL}/api/v1/summits/current/events/${eventId}/published`,
        customErrorHandler
    )(params)(dispatch).then(() => {
        dispatch(stopLoading());
    }).catch(e => {
        dispatch(stopLoading());
        dispatch(createAction(GET_EVENT_DATA_ERROR)(e));
        return (e);
    });

};
