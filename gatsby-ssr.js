import React from "react"
import { SSRWrapper } from "./src/state/ReduxWrapper"
// @see https://www.gatsbyjs.com/docs/adding-redux-store/
export const wrapRootElement = SSRWrapper;

import { JSDOM } from 'jsdom'
import { Blob } from 'blob-polyfill';
import { XMLHttpRequest } from 'xmlhttprequest';

global.dom = new JSDOM(`...`)
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

export const onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents
}) => {
    console.log("onPreRenderHTML");
    let headComponents = getHeadComponents()
    console.log("onPreRenderHTML::getHeadComponents");
    headComponents = headComponents.map(h => {
        console.log(h)
        if (h.type === 'script') {
            return { ...h, props: { ...h.props, 'data-cookieconsent': 'ignore' } }
        }
        return h;
    });
    replaceHeadComponents(headComponents);
    let preBodyComponents = getPreBodyComponents();
    console.log("onPreRenderHTML::getPreBodyComponents");
    preBodyComponents = preBodyComponents.map(bc => {
        console.log(bc)
        return bc;
    });
    replacePreBodyComponents(preBodyComponents)
    let postBodyComponents = getPostBodyComponents();
    console.log("onPreRenderHTML::getPostBodyComponents");
    postBodyComponents = postBodyComponents.map(bc => {
        console.log(bc)
        return bc;
    });
    replacePostBodyComponents(postBodyComponents)
}