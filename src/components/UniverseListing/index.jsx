import React from 'react'
import './styles.scss';
import LinkComponent from '../LinkComponent';


const UNIVERSE = [
  {name: "Airship", link: "https://airshipit.org", logo: "airship.svg", description: "A collection of loosely coupled but interoperable tools that declaratively automate cloud provisioning.", tags: ["cloud provisioning"], isOIF: true},
  {name: "Azimuth", link: "https://www.stackhpc.com/azimuth-introduction.html", logo: "azimuth.png", description: "Azimuth provides a self-service portal for managing HPC and AI workloads based on a simplified version of the OpenStack Horizon.", tags: ["front-end client"], isOIF: false},
  {name: "Ceph", link: "https://ceph.io", logo: "ceph.svg", description: "A software-defined storage platform, often used in open infrastructure deployments to provide scalable block storage for OpenStack and others.", tags: ["storage"], isOIF: false},
  {name: "DPDK", link: "https://dpdk.org", logo: "dpdk.svg", description: "A set of user-space libraries and drivers that accelerate packet-processing workloads.", tags: ["packet processing"], isOIF: false},
  {name: "Exosphere", link: "https://exosphere.app", logo: "exosphere.png", description: "Provides a user-friendly interface for non-proprietary cloud infrastructure.", tags: ["front-end client"], isOIF: false},
  {name: "Kata Containers", link: "https://katacontainers.io", logo: "katacontainers.svg", description: "A container runtime with lightweight virtual machines that feel and perform like containers, but provide stronger workload isolation.", tags: ["container runtime"], isOIF: true},
  {name: "Kubernetes", link: "https://kubernetes.io", logo: "kubernetes.png", description: "An orchestration platform for containerized applications that runs on top of programmable infrastructure and key component of the LOKI stack.", tags: ["container orchestration"], isOIF: false},
  {name: "openEuler", link: "https://www.openeuler.org/", logo: "openeuler.png", description: "An operating system compatible with multiple computing architectures with a very active OpenStack SIG.", tags: ["OS distribution"], isOIF: false},
  {name: "OpenStack", link: "https://openstack.org", logo: "openstack.svg", description: "The combination of compute, network and storage resources providing the cloud infrastructure for public, private and hybrid clouds, and a key component of the LOKI stack.", tags: ["Compute", "Storage", "Networking"], isOIF: true},
  {name: "Sovereign Cloud Stack", link: "https://scs.community", logo: "scs.svg", description: "A network of standardized sovereign cloud and container infrastructure providers defining, implementing and operating a fully open, federated, compatible platform.", tags: ["IaaS"], isOIF: false},
  {name: "StarlingX", link: "https://starlingx.io", logo: "starlingx.svg", description: "A complete cloud infrastructure software stack for distributed systems created for ultra-low latency use cases.", tags: ["Edge Computing"], isOIF: true},
  {name: "Yaook", link: "https://yaook.cloud/", logo: "yaook.png", description: "Yaook is a lifecycle management tool for OpenStack hosted by ALASCA, using Kubernetes to automate provisioning, monitoring, and updating. Yaook manages bare metal, Kubernetes, and OpenStack components.", tags: ["lifecycle management"], isOIF: false},
  {name: "Zuul", link: "https://zuul-ci.org", logo: "zuul.svg", description: "A program that drives continuous integration, delivery, and deployment systems with a focus on project gating.", tags: ["continuous integration"], isOIF: true},
];

const UniverseListing = () => {
  return (
    <section className="universe-section-wrapper">
      <div className="container">
        <h1 className="title">
          OpenInfra Universe
        </h1>
        <p className="intro">
          Open infrastructure goes beyond the projects that are <a href="/projects/">directly hosted at the OpenInfra Foundation</a>. The OpenInfra Universe provides a look at the open source solutions available for infrastructure projects: open source projects that help provide infrastructure resources for others to build on, in use cases such as edge computing, container infrastructure, public/private hybrid cloud, AI & machine learning, CI/CD, and more. Most of these projects power or rely on LOKI (Linux OpenStack Kubernetes Infrastructure), an end-to-end open source solution for providing infrastructure. Projects in the OpenInfra Universe are discussed at <a href="/community-events/">OpenInfra events</a> around the world. 
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
                  <a href={universe.link} className="universe-block">
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
                        <img className="universe-project-logo" src={`img/universe/projects/${universe.logo}`} alt="" />
                      </div>
                      <div className="universe-project-name">
                        {universe.name}
                      </div>
                      <div className="universe-project-description">
                        {universe.description}
                      </div>
                      <div className="universe-tag-wrapper">
                        {universe.tags.map(tag => (
                          <div className="universe-tag">
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
