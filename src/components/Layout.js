import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { Helmet } from 'react-helmet'
import FooterV2 from '../components/FooterV2'
import '../style/style.scss'
import { withPrefix } from 'gatsby'
import settings from "../content/settings.json";
import sponsoredProjects from "../content/sponsored-projects.json";
import { syncData } from "../actions/base-actions";
import smoothscroll from 'smoothscroll-polyfill'
import NavigationWidget from 'navigation-widget/dist';
import 'navigation-widget/dist/index.css';
import {getEnvVariable, SPONSORED_PROJECT_ID} from '../utils/envVariables'
// smooth scroll polyfill needed for Safari
smoothscroll.polyfill()

const TemplateWrapper = ({ children, style, lastBuild, syncData }) => {

    useEffect(() => {
        if (!lastBuild || settings.lastBuild > lastBuild) {
            syncData();
        }
    }, [lastBuild, syncData]);

    const currentProject = parseInt(getEnvVariable(SPONSORED_PROJECT_ID));

    return (
        <div className="wrapper" style={style}>
            <Helmet>
                <html lang="en" />
                <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
                <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
                <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />
                <link rel="stylesheet" type="text/css" href="/cloud-typography/fonts.css" />
                <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <div>{children}</div>
            <FooterV2 />
        </div>
    );
};

const mapStateToProps = ({ settingsState }) => ({
    lastBuild: settingsState.lastBuild
});

export default connect(mapStateToProps, {
    syncData
})(TemplateWrapper);

