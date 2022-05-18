import React from 'react'
import LinkComponent from "./LinkComponent";

const ProjectsSubNav = ({active}) => {

  const isActive = (navItemName) => {
    return active === navItemName ? 'active' : '';
  }

  return (
    <nav className="subnav-bar">
      <div className="container">
        <div className="location">
          <LinkComponent href="/projects" >Projects</LinkComponent>
        </div>

        <ul id="links-list" className="links-list">
          <li>
            <LinkComponent href="/projects/hosting" className={`link ${isActive('hosting')}`}>
              Hosting
            </LinkComponent>
          </li>
          <li>
            <LinkComponent href="/projects/services" className={`link ${isActive('services')}`}>
              Services
            </LinkComponent>
          </li>
          <li>
            <LinkComponent href="/projects/funding" className={`link ${isActive('funding')}`}>
              Funding
            </LinkComponent>
          </li>
          <li>
            <LinkComponent href="/projects" className={`link ${isActive('projects')}`}>
              All Projects
            </LinkComponent>
          </li>
          <li>
            <LinkComponent href="/projects/contact" className="link registration">
              Contact us
            </LinkComponent>
          </li>
        </ul>
      </div>
    </nav>
  )};

export default ProjectsSubNav