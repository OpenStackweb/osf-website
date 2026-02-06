import React from 'react'
import LinkComponent from './LinkComponent'
import arrow from '../img/svg/arrow-left.svg';

const HostingProjectV2 = () =>
  <section className="projects-s2-main-v2">
    <div className="container">
      <p className="overview">next steps</p>
      <h4 className="itemtitle">Interested In Hosting With The OpenInfra Foundation?</h4>
      <div className="fix-h5">
        There are a few ways to start open source projects with the OpenInfra Foundation.
        Every project’s needs and goals are unique so the first step is to setup an exploratory review
        between the project leaders and the OpenInfra Foundation staff to discuss the project’s scope,
        use cases and vision for the future.
      </div>
      <LinkComponent href="/contact" className="button button-red projects-btn">
        <span>CONTACT US</span><img src={arrow}/>
      </LinkComponent>
    </div>
  </section>

export default HostingProjectV2
