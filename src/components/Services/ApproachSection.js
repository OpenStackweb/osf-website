import React from 'react'
import LinkComponent from "../LinkComponent";
import legalIcon from '../../img/svg/legal-icon.svg';
import programIcon from '../../img/svg/program-icon.svg';
import marketingIcon from '../../img/svg/marketing-icon.svg';
import devIcon from '../../img/svg/dev-icon.svg';
import cmIcon from '../../img/svg/cm-icon.svg';
import eventsIcon from '../../img/svg/events-icon.svg';

const Box = ({title, icon, children}) => (
  <div className="icon-box">
    <img src={icon} alt="icon" />
    <p>{title}</p>
    {children}
  </div>
);

const ApproachSection = () => {
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <div>
          <p className="title">Not a “One Size Fits All” Approach</p>
          <p className="body">
            After gauging the unique needs of your project and the resources available from the organizations involved,
            The OpenInfra Foundation will work with you to develop a combination of services that will produce the most effective results.
            While we will do our best to guide you through the process, your governing body will also have the ability
            to customize service packages as they see fit.
          </p>
          <p className="sub-body">
            We offer the following services to OpenInfra projects:
          </p>
        </div>
        <div className="boxes">
          <div className="left-col">
            <Box icon={legalIcon} title="Legal Services">
              <ul>
                <li>Neutral home for assets and trademarks</li>
                <li>Trademark search, registration, and management</li>
                <li>Entity and charter creation</li>
                <li>Technical and funding governance set up</li>
                <li>CLA establishment and management</li>
                <li>Code of Conduct creation and management</li>
                <li>Commercial trademark program set up and management</li>
              </ul>
            </Box>
            <Box icon={marketingIcon} title="Marketing and Communications">
              <ul>
                <li>Branding and identity creation</li>
                <li>Web design and development</li>
                <li>Content creation and support</li>
                <li>Press and media management </li>
                <li>Analyst access and relations</li>
                <li>Internationalization and translation</li>
                <li>Inclusion in OpenInfra communications including press releases, newsletters, blogs, social media, email campaigns, and Superuser Magazine</li>
              </ul>
            </Box>
            <Box icon={eventsIcon} title="Events">
              <ul>
                <li>Event logistics and support</li>
                <li>Participation in OpenInfra events, including OpenInfra Summit, Project Teams Gathering (PTG), OpenStack Ops Meetup, OpenInfra Live, OpenInfra Days and OpenStack Days</li>
                <li>Community event development and management</li>
                <li>Strategic planning around industry events and sponsorships</li>
                <li>Collateral and swag creation</li>
              </ul>
            </Box>
          </div>
          <div className="right-col">
            <Box icon={programIcon} title="Program Management">
              <ul>
                <li>Funding governance guidance and support</li>
                <li>Governing Board coordination and support</li>
                <li>Strategic sessions with OpenInfra Foundation leadership </li>
                <li>Member relations and recruitment</li>
                <li>Online marketplace development and management</li>
              </ul>
            </Box>
            <Box icon={cmIcon} title="Community Management">
              <ul>
                <li>Dedicated community manager</li>
                <li>Technical governance guidance and support</li>
                <li>Project advocacy in public forums, such as events</li>
                <li>Contributor onboarding support</li>
                <li>Access to mentoring programs, such as Outreachy</li>
                <li>Community metrics dashboard by Bitergia ®</li>
                <li>User/Contributor/Developer survey set up and support</li>
                <li>Community marketing team set up and management</li>
              </ul>
            </Box>
            <Box icon={devIcon} title="Development Support">
              <ul>
                <li>Access to OpenDev suite of tools, including set up and support</li>
                <li>Strategic guidance around project infrastructure, documentation, testing, and CI services</li>
                <li>Release management</li>
                <li>Vulnerability management</li>
                <li>Technical writing services and support</li>
              </ul>
            </Box>
          </div>
        </div>
        <div className="more">
          <p className="body">
            We’ve found that the services listed above cover most projects, but we know that every project community
            is unique and services needed will vary. If you’re looking for a service that isn’t listed here,{' '}
            <LinkComponent href="/contact">let us know!</LinkComponent>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection