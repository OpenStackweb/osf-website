import React from 'react';
import InfraOpenSourceIcon from '../../img/svg/infra-open-source-icon.svg';
import InfraDiversificationIcon from '../../img/svg/infra-diversification-icon.svg';
import InfraDeploymentIcon from '../../img/svg/infra-deployment-icon.svg';
import InfraPrivacyIcon from '../../img/svg/infra-privacy-icon.svg';
import arrow from "../../img/svg/arrow-left.svg";
import LinkComponent from "../LinkComponent";

const OpenIcon = ({icon, label}) => {
  return (
    <div className="infra-icon-wrapper">
      <img src={icon} alt={label}/>
      <p className="label">{label}</p>
    </div>
  );
};

const OurFocusSection = () => {
  return (
    <section className="section our-focus">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p className="overview">OUR FOCUS</p>
            <h2 className="title">
              Building The Next Decade of Open Infrastructure
            </h2>
            <p className="body">
              We’re focused on what’s next in the world of infrastructure and positioned to make a significant impact
              over the next decade.
            </p>
            <div className="infra-wrapper">
              <OpenIcon
                icon={InfraOpenSourceIcon}
                label={<><b>More open source</b> components to build, test, and integrate</>}
              />
              <div className="separator" />
              <OpenIcon
                icon={InfraDiversificationIcon}
                label={<><b>Hardware diversification</b> including GPUs, FPGAs, DPUs to meet performance, economic, latency, and power requirements</>}
              />
              <div className="separator" />
              <OpenIcon
                icon={InfraDeploymentIcon}
                label={<><b>Deployment diversification</b> DCs, and edge and IoT deployments, from micro to hyperscale
                </>}
              />
              <div className="separator" />
              <OpenIcon
                icon={InfraPrivacyIcon}
                label={<>Governments with requirements around <b>data sovereignty, privacy</b></>}
              />
            </div>
            <p className="body">
              Some of the largest companies in the world want to work with us because we help projects thrive and truly
              believe that transparency and open collaboration is the key to building the most effective form of open
              source. This has been proven by the long-term success of OpenStack, the de-facto open source cloud project.
              Collectively we support the largest, most active, and engaged open source infrastructure communities globally.
              <br /><br />
              The OpenInfra Foundation operates efficiently based on years of experience navigating the intricacies of open collaboration, with a focus on community development. We dedicate our resources towards advancing the project
              goals and growing adoption. Our strength lies in the communities we serve.
              <br /><br />
              We are interested in hosting projects that will help define the next decade of open infrastructure. If your
              project is openly developed and in the infrastructure space, contact us!
            </p>
            <div className="actions">
              <LinkComponent href="/contact" className="button button-red">
                <span>CONTACT US</span><img src={arrow} alt="arrow"/>
              </LinkComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurFocusSection;
