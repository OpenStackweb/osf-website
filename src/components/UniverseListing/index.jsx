import React from 'react'
import './styles.scss';
import LinkComponent from '../LinkComponent';


const UNIVERSE = [
  {name: "Airship", link: "https://airshipit.org", logo: "airship.svg", description: "Airship is a collection of loosely coupled but interoperable open source tools that declaratively", tags: ["cloud provisioning", "another"], isOIF: true},
  {name: "Ceph", link: "https://ceph.io", logo: "ceph.svg", description: "Ceph is a free and open-source software-defined storage platform that provides object storage, block storage, and file storage built on a common distributed cluster foundation.", tags: ["storage"], isOIF: false},
  {name: "Exosphere", link: "https://exosphere.app", logo: "exosphere.png", description: "A user-friendly, extensible OpenStack client.", tags: ["front-end client"], isOIF: false},
  {name: "Kata Containers", link: "https://katacontainers.io", logo: "katacontainers.svg", description: "Kata Containers is an open source container runtime, building lightweight virtual machines that seamlessly plug into the containers ecosystem.", tags: ["container runtime"], isOIF: true},
  {name: "Kubernetes", link: "https://kubernetes.io", logo: "kubernetes.png", description: "Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management.", tags: ["container orchestration"], isOIF: false},
  {name: "openEuler", link: "https://www.openeuler.org/", logo: "openeuler.png", description: "openEuler is an open source, free Linux distribution platform. The platform provides an open community for global developers to build an open, diversified, and architecture-inclusive software ecosystem.", tags: ["OS distribution"], isOIF: false},
  {name: "OpenStack", link: "https://openstack.org", logo: "openstack.svg", description: "OpenStack is a free, open standard cloud computing platform. It is mostly deployed as infrastructure-as-a-service in both public and private clouds where virtual servers and other resources are made available to users.", tags: ["cloud platform"], isOIF: true},
  {name: "StarlingX", link: "https://starlingx.io", logo: "starlingx.svg", description: "StarlingX is a complete, open source cloud infrastructure software stack for the edge computing workloads, used by the most demanding applications.", tags: ["Edge Computing"], isOIF: true},
  {name: "Zuul", link: "https://zuul-ci.org", logo: "zuul.svg", description: "Zuul is an open source CI that powers some of the largest Open Source development efforts.", tags: ["continuous integration"], isOIF: true},
];

const UniverseListing = () => {
  return (
    <section className="universe-section-wrapper">
      <div className="container">
        <h1 className="title">
          OpenInfra Universe
        </h1>
        <p className="intro">
          Open infrastructure goes beyond the projects that are <a href="/projects/">directly hosted at the OpenInfra Foundation</a>. The OpenInfra Universe provides a look at the open source solutions available for infrastructure projects: open source projects that help provide infrastructure resources for others to build on, in use cases such as edge computing, container infrastructure, public/private hybrid cloud, AI & machine learning, CI/CD, and more. Projects in the OpenInfra Universe are discussed at <a href="/community-events/">OpenInfra events</a> around the world. 
        </p>
        <p>
        <a class="button button-red" href="#universe-list">
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
              {UNIVERSE.map(universe => (
                <div className="universe-block">
                  <div className="universe-openinfra-project">
                    {universe.isOIF && 
                      <div>
                        <span>OpenInfra Foundation Project</span>
                        <img className="universe-bar" src="img/universe/oif-project-bar.svg" alt="" />
                      </div>
                    }
                  </div>
                  <div className="universe-content">
                    <div className="universe-logo-wrapper">
                      <LinkComponent href={universe.link}>
                        <img className="universe-project-logo" src={`img/universe/projects/${universe.logo}`} alt="" />
                      </LinkComponent>
                    </div>
                    <div className="universe-project-name">
                      {universe.name}
                    </div>
                    <div className="universe-project-description">
                      {universe.description}
                    </div>
                    <div className="universe-project-link">
                      <LinkComponent href={universe.link}>{universe.link}</LinkComponent>
                    </div>
                    <div className="universe-tag-wrapper">
                      {universe.tags.map(tag => (
                        <div className="universe-tag">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniverseListing
