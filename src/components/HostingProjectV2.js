import React from 'react'
import LinkComponent from './LinkComponent'
import arrow from '../img/svg/arrow-left.svg';

const HostingProjectV2 = () =>
  <section className="projects-s2-main-v2">
    <div className="container">
      <h4 className="itemtitle">Interested In Hosting With The OpenInfra Foundation?</h4>
      <div className="fix-h5">
        Do you have a foundational open source infrastructure project you want to build a large open collaboration around? Your project would benefit from neutral governance, fiscal hosting and shared marketing?
      </div>
      <LinkComponent href="mailto:newprojects@openinfra.dev" className="button button-red projects-btn">
        <span>CONTACT US</span><img src={arrow}/>
      </LinkComponent>
    </div>
  </section>

export default HostingProjectV2
