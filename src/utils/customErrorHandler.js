import expiredToken from './expiredToken';

import { stopLoading } from "openstack-uicore-foundation/lib/methods";
import Swal from 'sweetalert2';

export const customErrorHandler = (err, res) => (dispatch, state) => {
  let code = err.status;
  dispatch(stopLoading());
  let msg = '';
  switch (code) {
    case 401:
      console.log('authErrorHandler 401 - re login');
      expiredToken(err);
      break;
    case 412:
      for (let [key, value] of Object.entries(err.response.body.errors)) {
        if (isNaN(key)) {
          msg += key + ': ';
        }
        msg += value + '<br>';
      }      
      Swal.fire("Validation error", msg, "warning");
      break;
    default:
      break;
  }
}