import React from "react";

import sponsoredProjects from "../../content/sponsored-projects.json";
import { getSubProjectById } from "../../utils/sponsoredProjects";
import {
  getEnvVariable,
  MEMBERS_SUBPROJECT_ID,
} from "../../utils/envVariables";

const PlatinumMembersSection2 = class extends React.Component {
  render() {
    const subProject = getSubProjectById(
      sponsoredProjects,
      parseInt(getEnvVariable(MEMBERS_SUBPROJECT_ID))
    );

    return (
      <div>
        <div className="container">
          <h3 className="home-v2-community-subheader">Backed By</h3>
          <h2 className="home-v2-header home-v2-community-header">
            Our Members
          </h2>
          <p className="home-v2-community-paragraph">
            The OpenInfra Foundation is supported by a strong network of some of
            the largest organizations in the world. These open source leaders
            champion open infrastructure and understand the vital importance it
            plays in their business.
          </p>
        </div>
        <div className="container">
          <h3 className="home-v2-community-subheader home-v2-community-subheader-margin home-v2-community-subheader-platinum">
            Platinum Members
          </h3>
        </div>
        <div className="home-v2-slider-container">
          <div className="home-v2-slider-body">
            <div className="home-v2-slider home-v2-slider-platinum">
              {subProject?.sponsorship_types
                .sort((a, b) => a.order - b.order)
                .map((t, tierIndex) => {
                  if (t.name == "Platinum Members") {
                    return (
                      <div
                        className="slide-track home-v2-platinum-sponsor-container slide-track-platinum-1"
                        key={`company-tier-${tierIndex}`}
                      >
                        {t.supporting_companies
                          .sort((a, b) => a.order - b.order)
                          .map(({ company }, index) => {
                            return (
                              <div
                                className="slide home-v2-platinum-sponsor"
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
                          })}
                        {t.supporting_companies
                          .sort((a, b) => a.order - b.order)
                          .map(({ company }, index) => {
                            return (
                              <div
                                className="slide home-v2-platinum-sponsor"
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
                          })}
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PlatinumMembersSection2;
