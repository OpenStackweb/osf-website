
import { browserWrapper } from "./src/state/ReduxWrapper"

import CookieManager from "./src/utils/cookies/CookieManager";
import KlaroProvider from "./src/utils/cookies/providers/KlaroProvider";
import cookieServices from "./src/utils/cookies/services";
import TagManager from "./src/utils/tag-manager/TagManager";
import GoogleTagManagerProvider from "./src/utils/tag-manager/providers/GoogleTagManagerProvider";
import smoothscroll from 'smoothscroll-polyfill'

// @see wrapRootElement
export const wrapRootElement = browserWrapper;

window.IDP_BASE_URL = process.env.GATSBY_IDP_BASE_URL;
window.OAUTH2_CLIENT_ID = process.env.GATSBY_OAUTH2_CLIENT_ID;
window.SCOPES = process.env.GATSBY_SCOPES;
window.API_BASE_URL = process.env.GATSBY_API_BASE_URL;
window.SPONSORED_PROJECT_ID = process.env.GATSBY_SPONSORED_PROJECT_ID

export const onRouteUpdate = ({ location, prevLocation }) => {

}

export const onClientEntry = () => {
  // var set at document level
  // prevents widget color flashing from defaults to fetched by widget from marketing api
  // smooth scroll polyfill needed for Safari
  smoothscroll.polyfill();

  // Initialize TagManager and add GoogleTagManagerProvider
  const tagManager = new TagManager();
  const googleTagManagerProvider = new GoogleTagManagerProvider();
  tagManager.addProvider(googleTagManagerProvider);

  // Initialize Cookie Manager with Klaro provider
  const klaroProvider = new KlaroProvider();
  const cookieManager = new CookieManager(klaroProvider, cookieServices);
  cookieManager.show();
};
