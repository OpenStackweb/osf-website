import {
    getRequest,
    createAction,
  } from "openstack-uicore-foundation/lib/methods";
  
  import { customErrorHandler } from '../utils/customErrorHandler';
  
  export const GET_ELECTIONS_STATUS = 'GET_ELECTIONS_STATUS';  
  
  export const getElectionStatus = () => (dispatch, getState) => {    

    const filters = {
        fields: 'name,status'
    }
  
    return getRequest(
      null,
      createAction(GET_ELECTIONS_STATUS),
      `${window.API_BASE_URL}/api/public/v1/elections/current`,
      customErrorHandler
    )(filters)(dispatch)
      .then()
      .catch((e) => {
        console.log(e);        
      });
  }