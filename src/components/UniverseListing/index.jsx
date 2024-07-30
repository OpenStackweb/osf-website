import React from 'react'
import './styles.scss';
import universeProjects from './universeProjects.json';

const UniverseListing = () => {
  return (
    <section className="universe-section-wrapper">
      <div className="container">
        <h1 className="title">
          OpenInfra Universe
        </h1>
        <p className="intro">
          Open infrastructure goes beyond the projects that are <a href="/projects/">directly hosted at the OpenInfra Foundation</a>. The OpenInfra Universe provides a look at the open source solutions available for infrastructure projects: open source projects that help provide infrastructure resources for others to build on, in use cases such as edge computing, container infrastructure, public/private hybrid cloud, AI & machine learning, CI/CD, and more. Most of these projects power or rely on the OpenInfra Blueprint (Linux, OpenStack, and Kubernetes), an end-to-end open source solution for providing infrastructure. Projects in the OpenInfra Universe are discussed at <a href="/community-events/">OpenInfra events</a> around the world. 
        </p>
        <p>
        <a className="button button-red" href="#universe-list">
          <span>See the Projects</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#ffffff" className="down-arrow">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </a>
        </p>
      </div>
      <div className="universe-main">
        <div className="container">
          <div className="universe-list" id="universe-list">
              {universeProjects.map(universe => (
                  <a key={universe.name} href={universe.link} className="universe-block">
                    <div className="universe-openinfra-project">
                      {universe.isOIF && 
                        <div>
                          <span>OpenInfra Foundation Project</span>
                          <img className="universe-bar" src="/img/universe/oif-project-bar.svg" alt="" />
                        </div>
                      }
                    </div>
                    <div className="universe-content">
                      <div className="universe-logo-wrapper">
                        <img className="universe-project-logo" src={`/img/universe/projects/${universe.logo}`} alt="" />
                      </div>
                      <div className="universe-project-name">
                        {universe.name}
                      </div>
                      <div className="universe-project-description">
                        {universe.description}
                      </div>
                      <div className="universe-tag-wrapper">
                        {universe.tags.map((tag, index) => (
                          <div key={index} className="universe-tag">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
              ))}
          </div>
          <p className="universe-footnote">
            The trademarks, logos, and service marks (collectively the "Trademarks") displayed on this website are registered and unregistered Trademarks of their respective owners. No rights or licenses to the Trademarks are granted, or implied, by their presence on this website.
          </p>
        </div>
      </div>
    </section>
  )
}

export default UniverseListing
