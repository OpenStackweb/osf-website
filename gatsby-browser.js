
import { browserWrapper } from "./src/state/ReduxWrapper"
// @see wrapRootElement
export const wrapRootElement = browserWrapper;

window.IDP_BASE_URL = process.env.GATSBY_IDP_BASE_URL;
window.OAUTH2_CLIENT_ID = process.env.GATSBY_OAUTH2_CLIENT_ID;
window.SCOPES = process.env.GATSBY_SCOPES;
window.API_BASE_URL = process.env.GATSBY_API_BASE_URL;

export const onRouteUpdate = ({ location, prevLocation }) => {
    let querystring = "?form-submitted";
    let hide = document.getElementById('form-fields');
    let show = document.getElementById('confirmation-message');
    if (window.location.toString().indexOf(querystring) !== -1) {
        hide.style.display = "none";
        show.style.display = "flex";
  }
}