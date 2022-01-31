import {
    getRequest,
    createAction,
    stopLoading,
    startLoading
} from "openstack-uicore-foundation/lib/methods";

export const GET_CURRENT_SUMMIT = 'GET_CURRENT_SUMMIT';
export const GET_CURRENT_SUMMIT_SUCCESS = 'GET_CURRENT_SUMMIT_SUCCESS';
export const GET_CURRENT_SUMMIT_ERROR = 'GET_CURRENT_SUMMIT_ERROR';

export const getCurrentSummit = () => (dispatch, getState) => {

    dispatch(startLoading());

    const params = {
        expand: 'summit_sponsors.company,summit_sponsors.sponsorship',
    }
    return getRequest(
        null,
        createAction(GET_CURRENT_SUMMIT),
        `${window.API_BASE_URL}/api/public/v1/summits/current`,
        null
    )(params)(dispatch)
        .then(() => dispatch(stopLoading()))
        .catch((e) => {
            dispatch(stopLoading());
            console.log(e);
        });
}