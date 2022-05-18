import React from 'react';
import OpenSourceIcon from '../../img/svg/open-source-icon.svg';
import OpenDevelopmentIcon from '../../img/svg/open-development-icon.svg';
import OpenCommunityIcon from '../../img/svg/open-community-icon.svg';
import OpenDesignIcon from '../../img/svg/open-design-icon.svg';
import arrow from "../../img/svg/arrow-left.svg";
import LinkComponent from "../LinkComponent";

const OpenIcon = ({icon, label}) => {
  return (
    <div className="open-icon-wrapper">
      <img src={icon} alt={label}/>
      <p className="label">{label}</p>
    </div>
  );
};

const FourOpensSection = () => {
  return (
    <section className="section four-opens">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p className="overview">OUR COLLABORATION PRINCIPLES</p>
            <h2 className="title">
              4 Opens: Building TRUE Open Source Communities
            </h2>
            <p className="body">
              The collaborative approach to developing open source has been under attack over the past
              several years, with single-vendor projects and controversial licensing decisions filling the
              headlines. At the OpenInfra Foundation, we believe in openly-developed open source.
              This approach goes beyond open source licensing, following our "Four Opens" principles:
            </p>
            <div className="opens-wrapper">
              <OpenIcon icon={OpenSourceIcon} label="open source"/>
              <OpenIcon icon={OpenDevelopmentIcon} label="open development"/>
              <OpenIcon icon={OpenCommunityIcon} label="open community"/>
              <OpenIcon icon={OpenDesignIcon} label="open design"/>
            </div>
            <div className="link-read-more">
              <LinkComponent href="/four-opens">
                <span>READ ABOUT THE 4 OPENS</span><img src={arrow} alt="arrow"/>
              </LinkComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FourOpensSection
