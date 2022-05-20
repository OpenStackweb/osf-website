import React from 'react'
import arrow from "../../img/svg/arrow-left-gray.svg";
import iconsImg from "../../img/os-icons-img.png";
import LinkComponent from "../LinkComponent";

const OurTrackRecordSection = () => {
  return (
    <section className="section our-track-record">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="overview">our track record</p>
            <h2 className="title">
              Proven OPEN SOURCE success
            </h2>
            <p className="body">
              Our methods have proven to create successful open source projects for users, developers and commercial
              ecosystems. Whether your project has aspirations of spurring the next multi-billion dollar market, like
              OpenStack, or attracting 10x contributing organizations, like Kata Containers, or being a crucial component
              in buidling autonomous vehicles, like Zuul, we can get you there.
            </p>
            <div className="link-all-projects">
              <LinkComponent href="/projects">
                <span>ALL OPENINFRA PROJECTS</span><img src={arrow} alt="arrow"/>
              </LinkComponent>
            </div>
          </div>
          <div className="column is-one-third relative">
            <img src={iconsImg} alt="os-icons" className="icons-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTrackRecordSection;
