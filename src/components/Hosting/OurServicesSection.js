import React from 'react'
import arrow from "../../img/svg/arrow-left.svg";
import arrowGray from "../../img/svg/arrow-left-gray.svg";
import greenCheck from "../../img/svg/green-check.svg";
import LinkComponent from "../LinkComponent";

const CheckLabel = ({label}) => {
  return (
    <div className="check-item">
      <img src={greenCheck} alt="check" />
      <span>{label}</span>
    </div>
  );
}

const OurServicesSection = () => {
  return (
    <section className="section our-services">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="overview">our services</p>
            <h2 className="title">
              Services we offer to OpenInfra projects
            </h2>
            <p className="body">
              Our model provides the tooling, guidance, and collaborative environment that allows communities to focus
              their attention on the important work of building and operating software that solves real problems around
              the globe. Projects can choose a package of services that fits their unique needs and ambitions, ranging
              from marketing to community management to development support services, and more.
            </p>
          </div>
          <div className="column is-one-third">
            <div className="checklist-box">
              <div className="checklist-box-title">
                DESIGNED FOR OPEN SOURCE
              </div>
              <div className="checklist-box-body">
                <p className="checklist-box-subtitle">
                  You focus on building software, we can handle the rest.
                </p>
                <CheckLabel label="Legal Services" />
                <CheckLabel label="Marketing & Communications" />
                <CheckLabel label="Events" />
                <CheckLabel label="Community Management" />
                <CheckLabel label="Program Management" />
                <CheckLabel label="Development Support" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection;
