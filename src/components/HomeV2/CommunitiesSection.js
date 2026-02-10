import React from "react";

import sponsoredProjects from "../../content/sponsored-projects.json";
import { getSubProjectById } from "../../utils/sponsoredProjects";
import {
  getEnvVariable,
  MEMBERS_SUBPROJECT_ID,
} from "../../utils/envVariables";

const CommunitiesSection = class extends React.Component {
  render() {
    const subProject = getSubProjectById(
      sponsoredProjects,
      parseInt(getEnvVariable(MEMBERS_SUBPROJECT_ID))
    );
    return (
      <div>
        <div className="container">
          <h3 className="home-v2-community-subheader home-v2-community-subheader-margin">
            Gold Members
          </h3>
        </div>
        <div className="home-v2-slider-container">
          <div className="home-v2-slider-body">
            <div className="home-v2-slider home-v2-slider-gold">
              {subProject?.sponsorship_types
                .sort((a, b) => a.order - b.order)
                .map((t, tierIndex) => {
                  if (t.name == "Gold Members") {
                    return (
                      <div
                        className="slide-track home-v2-gold-sponsor-container slide-track-gold-1"
                        key={`company-tier-${tierIndex}`}
                      >
                        {t.supporting_companies
                          .sort((a, b) => a.order - b.order)
                          .map(({ company }, index) => {
                            if (index < 9) {
                              return (
                                <div
                                  className="home-v2-gold-sponsor slide slide-gold"
                                  key={`company-tier-${tierIndex}-${index}`}
                                >
                                  <img
                                    src={
                                      company.big_logo
                                        ? company.big_logo
                                        : company.logo
                                    }
                                    alt={company.name}
                                  />
                                </div>
                              );
                            }
                          })}
                        {t.supporting_companies
                          .sort((a, b) => a.order - b.order)
                          .map(({ company }, index) => {
                            if (index < 9) {
                              return (
                                <div
                                  className="home-v2-gold-sponsor slide slide-gold"
                                  key={`company-tier-${tierIndex}-${index}`}
                                >
                                  <img
                                    src={
                                      company.big_logo
                                        ? company.big_logo
                                        : company.logo
                                    }
                                    alt={company.name}
                                  />
                                </div>
                              );
                            }
                          })}
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        {subProject?.sponsorship_types
          ?.find((t) => t.name === "Gold Members")
          ?.supporting_companies?.length > 9 && (
          <div className="home-v2-slider-container">
            <div className="home-v2-slider-body">
              <div className="home-v2-slider">
                {subProject.sponsorship_types
                  .sort((a, b) => a.order - b.order)
                  .map((t, tierIndex) => {
                    if (t.name == "Gold Members") {
                      return (
                        <div
                          className="slide-track home-v2-gold-sponsor-container slide-track-gold-2 slide-track-offset-gold"
                          key={`company-tier-${tierIndex}`}
                        >
                          {t.supporting_companies
                            .sort((a, b) => a.order - b.order)
                            .map(({ company }, index) => {
                              if (index >= 9) {
                                return (
                                  <div
                                    className="home-v2-gold-sponsor slide slide-gold"
                                    key={`company-tier-${tierIndex}-${index}`}
                                  >
                                    <img
                                      src={
                                        company.big_logo
                                          ? company.big_logo
                                          : company.logo
                                      }
                                      alt={company.name}
                                    />
                                  </div>
                                );
                              }
                            })}
                          {t.supporting_companies
                            .sort((a, b) => a.order - b.order)
                            .map(({ company }, index) => {
                              if (index >= 9) {
                                return (
                                  <div
                                    className="home-v2-gold-sponsor slide slide-gold"
                                    key={`company-tier-${tierIndex}-${index}`}
                                  >
                                    <img
                                      src={
                                        company.big_logo
                                          ? company.big_logo
                                          : company.logo
                                      }
                                      alt={company.name}
                                    />
                                  </div>
                                );
                              }
                            })}

                          {t.supporting_companies
                            .sort((a, b) => a.order - b.order)
                            .map(({ company }, index) => {
                              if (index >= 9) {
                                return (
                                  <div
                                    className="home-v2-gold-sponsor slide slide-gold"
                                    key={`company-tier-${tierIndex}-${index}`}
                                  >
                                    <img
                                      src={
                                        company.big_logo
                                          ? company.big_logo
                                          : company.logo
                                      }
                                      alt={company.name}
                                    />
                                  </div>
                                );
                              }
                            })}
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="home-v2-community-btn-container">
            <a href="/join/">
              <div className="home-v2-community-btn home-v2-community-btn-primary">
                Become a Member
              </div>
            </a>
            <a href="/members/">
              <div className="home-v2-community-btn">
                <span className="secondary-btn-arrow">See All Members</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default CommunitiesSection;
