
import { browserWrapper } from "./src/state/ReduxWrapper"

// @see wrapRootElement
export const wrapRootElement = browserWrapper;

window.IDP_BASE_URL = process.env.GATSBY_IDP_BASE_URL;
window.OAUTH2_CLIENT_ID = process.env.GATSBY_OAUTH2_CLIENT_ID;
window.SCOPES = process.env.GATSBY_SCOPES;
window.API_BASE_URL = process.env.GATSBY_API_BASE_URL;
window.SPONSORED_PROJECT_ID = process.env.GATSBY_SPONSORED_PROJECT_ID

export const onRouteUpdate = ({ location, prevLocation }) => {

}