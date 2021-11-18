import { SSRWrapper } from "./src/state/ReduxWrapper"
// @see https://www.gatsbyjs.com/docs/adding-redux-store/
export const wrapRootElement = SSRWrapper;

import { JSDOM } from 'jsdom'
import { Blob } from 'blob-polyfill';
import { XMLHttpRequest } from 'xmlhttprequest';

// see https://github.com/jsdom/jsdom/issues/2308
global.dom = new JSDOM(`...`,{ url: "http://localhost"});
global.window = dom.window
global.document = dom.window.document
global.navigator = global.window.navigator

global.window.matchMedia = function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

global.Blob = Blob
global.XMLHttpRequest = XMLHttpRequest
