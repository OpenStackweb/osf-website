import React from 'react'
import arrow from "../../img/svg/arrow-left.svg";
import graph from "../../img/graph.png";
import LinkComponent from "../LinkComponent";

const OurModelSection = () => {
  return (
    <section className="section our-model" id="our-model">
      <div className="container">
        <p className="overview">our model</p>
        <h2 className="title">
          3 FORCES:<br/>
          SUSTAINABILITY Model For Open Source
        </h2>
        <div className="columns">
          <div className="column is-half">
            <p className="body">
              Successful open source communities need to bring together what we call the “3 Forces:”
              developers, users, and commercial ecosystems. Understanding how those forces best interact
              with each other and create compounding effects, is key to building successful open source
              communities. The OpenInfra Foundation has built the model that has helped OpenStack become the de-facto open source standard for providing cloud infrastructure.
              <br/><br/>
              We dedicate our resources, strategic thinking, and experience to developing, balancing and unlocking the
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
      </div>
    </section>
  )
}

export default OurModelSection;
