import { createAction } from 'openstack-uicore-foundation/lib/methods';

export const RESET_STATE = 'RESET_STATE';
export const SYNC_DATA = 'SYNC_DATA';

export const resetState = () => (dispatch) => {
  dispatch(createAction(RESET_STATE)({}));
};

export const syncData = () => (dispatch, getState) => {
  const {userState, loggedUserState} = getState();
  const {isLoggedUser} = loggedUserState;
  const {userProfile} = userState;

  dispatch(createAction(SYNC_DATA)({isLoggedUser, userProfile }));
};
