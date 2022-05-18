import React from 'react'
import {Link} from 'gatsby';
import arrow from "../../img/svg/arrow-left-gray.svg";
import networkImg from "../../img/network.png";
import LinkComponent from "../LinkComponent";
import Slideshow from "../Slideshow";

const OurNetworkSection = ({sponsors}) => {
  return (
    <section className="section our-network">
      <div className="container">
        <p className="overview">our network</p>
        <div className="columns">
          <div className="column is-two-thirds">
            <h2 className="title">
              Worldwide OpenInfra Community
            </h2>
            <p className="body">
              The OpenInfra community is vast, comprising more than 110,000 people from over 182 countries and 710
              organizations. Our community is passionate about open source and engaged in OpenInfra activities ranging
              from code contributions to operations. OpenInfra projects have access to the community in a variety of ways,
              including events like the <LinkComponent href="/summit">OpenInfra Summit</LinkComponent> and{' '}
              <LinkComponent href="/live">OpenInfra Live</LinkComponent>, publications like{' '}
              <LinkComponent href="https://superuser.openstack.org">Superuser Magazine</LinkComponent>,
              and regular outreach like project mailing lists and the <LinkComponent href="/newsletter">OpenInfra Newsletter</LinkComponent>.
              Projects that are hosted by the OpenInfra Foundation enjoy an immediate audience to help accelerate use and growth.
            </p>
          </div>
          <div className="column is-one-third">
            <img src={networkImg} alt="network" className="network-image" />
          </div>
        </div>
        <div className="second-section">
          <h2 className="title">
            VAST NETWORK OF Organizations Driving Open Source Infrastructure
          </h2>
          <p className="body">
            When you host your project with the OpenInfra Foundation, you’re tapping into a vast network of open
            infrastructure operators. This broad ecosystem have a vested interest in not only supporting the set of open
            source projects they currently rely on to power their businesses, but are looking for the next solution to
            take their efforts to the next level. OpenInfra projects have an inside track to proof of concept (POC) and
            production use at some of the most impactful companies in the world.
          </p>
        </div>
        {sponsors && sponsors.length > 0 &&
          <div className="sponsors-wrapper">
            <Slideshow>
              {sponsors.map(s => <img key={`sponsor-${s.id}`} src={s.big_logo} alt={s.name}/>)}
            </Slideshow>
          </div>
        }
        <div className="link-all-sponsors">
          <LinkComponent href="/a/community/members">
            <span>ALL OPENINFRA FOUNDATION MEMBERS</span><img src={arrow} alt="arrow"/>
          </LinkComponent>
        </div>

      </div>
    </section>
  )
}

export default OurNetworkSection;
