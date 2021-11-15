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

const isProduction = process.env.NODE_ENV === "production";

console.log('is production?', isProduction);

export const onPreRenderHTML = (args, pluginOptions) => {
    const { blockGtm = true, manualMode = true, includeInDevelopment = true, } = pluginOptions;
    // Do not modify scripts when in development. Can be overriden with plugin options.
    if (!isProduction || !includeInDevelopment)
        return;
    const { getHeadComponents, replaceHeadComponents, getPreBodyComponents, replacePreBodyComponents, } = args;
    const headComponents = getHeadComponents();
    // Headcomponents needs to be assigned to a new
    const newHeadComponents = headComponents.map((component) => {
        if (component.type === "script") {
            if ((component.key === "plugin-google-tagmanager" || component.key === "gatsby-plugin-linkedin-insight") &&
                manualMode &&
                blockGtm &&
                isProduction // gatsby-plugin-google-tagmanager will thrown an error if the script has not been loaded in development
            ) {
                // Add Cookiebot manual mode data attribute to GTM script
                return (React.createElement("script", Object.assign({ "data-cookieconsent": "statistics", type: "text/plain", key: component.key }, component.props)));
            }
        }
        return component;
    });
    replaceHeadComponents(newHeadComponents);
    const preBodyComponents = getPreBodyComponents();
    const newPreBodyComponents = preBodyComponents.map((component) => {
        if (component.type === "noscript") {
            if (component.key === "plugin-google-tagmanager" &&
                manualMode &&
                blockGtm &&
                isProduction // gatsby-plugin-google-tagmanager will thrown an error if the script has not been loaded in development
            ) {
                // Add Cookiebot manual mode data attribute to GTM noscript's iframe script
                const gtmIframeStr = component.props.dangerouslySetInnerHTML.__html;
                // Add data attribute to string
                const gtmIframeStrWithCookiebotManualMode = gtmIframeStr.substr(0, 8) +
                    'data-cookieconsent="statistics" ' +
                    gtmIframeStr.substr(8);
                const newProps = Object.assign({}, component.props);
                newProps.dangerouslySetInnerHTML.__html =
                    gtmIframeStrWithCookiebotManualMode;
                return React.createElement("noscript", Object.assign({ key: component.key }, newProps));
            }
        }
        return component;
    });
    replacePreBodyComponents(newPreBodyComponents);
};