import React from 'react'
import arrow from "../../img/svg/arrow-left.svg";
import graph from "../../img/graph.png";
import LinkComponent from "../LinkComponent";

const OurModelSection = () => {
  return (
    <section className="section our-model">
      <div className="container">
        <p className="overview">our model</p>
        <h2 className="title">
          3 FORCES: SUSTAINABLE Model For Open Source
        </h2>
        <div className="columns">
          <div className="column is-half">
            <p className="body">
              Successful open source communities need to bring together what we call the “3 Forces”:
              developers, users, and commercial ecosystems. Understanding how those forces best interact
              with each other and create compounding effects, is key to building successful open source
              communities and OpenInfra Foundation has built the model that has helped projects like
              OpenStack become the de-facto open source standard for providing cloud infrastructure.
              <br/><br/>
              We dedicate our resources and strategic thinking to developing, balancing and unlocking the
              impact that these 3 Forces will have on every OpenInfra project. One of the ways we do this
              is by aligning companies who wish to work together, providing them with a framework and tools
              to effectively collaborate. With this, they produce code and pool/invest their funds in the
              ways that best help the project they care about.
            </p>
          </div>
          <div className="column is-half">
            <img src={graph} alt="graph"/>
            <p className="caption">Balancing the 3 Forces creates compounding growth</p>
          </div>
        </div>
        <div className="actions">
          <LinkComponent href="/projects/funding" className="button button-red">
            <span>MORE ABOUT PROJECT FUNDING</span><img src={arrow} alt="arrow"/>
          </LinkComponent>
        </div>
      </div>
    </section>
  )
}

export default OurModelSection;
