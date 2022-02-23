import settings from '../content/settings.json';

import { LOGOUT_USER } from "openstack-uicore-foundation/lib/actions";
import {RESET_STATE, SYNC_DATA} from "../actions/base-actions";

const DEFAULT_STATE = {
  lastBuild: 0,
};

const settingReducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case RESET_STATE:
    case LOGOUT_USER:
      return DEFAULT_STATE;
    case SYNC_DATA:
      return {...DEFAULT_STATE, lastBuild: settings.lastBuild};
    default:
      return state;
  }
};

export default settingReducer
