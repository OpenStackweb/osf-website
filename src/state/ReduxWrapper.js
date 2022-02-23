import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { loggedUserReducer } from 'openstack-uicore-foundation/lib/reducers';
import userReducer from '../reducers/user-reducer';
import sponsorReducer from '../reducers/sponsor-reducer';
import memberReducer from '../reducers/member-reducer';
import electionReducer from '../reducers/election-reducer';
import summitReducer from '../reducers/summit-reducer';
import allSchedulesReducer from "../reducers/all-schedules-reducer";
import settingReducer from "../reducers/setting-reducer";

import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import { PersistGate } from 'redux-persist/integration/react';

const onBeforeLift = () => {
  console.log("reading state ...")
}

const clientId = typeof window === 'object' ? window.OAUTH2_CLIENT_ID : process.env.OAUTH2_CLIENT_ID

const config = {
  key: `root_${clientId}`,
  storage,
  blacklist: ['sponsorState']
}

const persistedReducers = persistCombineReducers(config, {
  loggedUserState: loggedUserReducer,
  userState: userReducer,
  sponsorState: sponsorReducer,
  memberState: memberReducer,
  electionState: electionReducer,
  summitState: summitReducer,
  allSchedulesState: allSchedulesReducer,
  settingsState: settingReducer
});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(persistedReducers, composeEnhancers(applyMiddleware(thunk)));

const onRehydrateComplete = () => {
  // repopulate access token on global access variable
  if (typeof window === 'object') {
    window.accessToken = store.getState().loggedUserState.accessToken;
    window.idToken = store.getState().loggedUserState.idToken;
    window.sessionState = store.getState().loggedUserState.sessionState;
  }
}

const persistor = persistStore(store, null, onRehydrateComplete);

export const browserWrapper = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  );
}

export const SSRWrapper = ({ element }) => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  );
}