import React from 'react'
import arrow from "../../img/svg/arrow-left-gray.svg";
import arrowRed from "../../img/svg/arrow-left.svg";
import networkImg from "../../img/network.png";
import LinkComponent from "../LinkComponent";
import Slideshow from "../Slideshow";

const OurNetworkSection = ({sponsors}) => {
    return (
        <section className="section our-network" id="our-network">
            <div className="container">
                <p className="overview">our network</p>
                <div className="columns">
                    <div className="column is-two-thirds">
                        <h2 className="title">
                            Worldwide OpenInfra Community
                        </h2>
                        <p className="body">
                            The OpenInfra community is vast, comprising more than 110,000 people from over 182 countries
                            and 710
                            organizations. Our community is passionate about open source and actively engaged in advancing open infrastructure through a diverse set of activities ranging from code contribution to operations and deployment. Community members connect and collaborate through events like the <LinkComponent href="/summit">OpenInfra
                            Summit</LinkComponent> and{' '}
                            <LinkComponent href="/live">OpenInfra Live</LinkComponent>, publications like{' '}
                            <LinkComponent href="https://superuser.openstack.org">Superuser Magazine</LinkComponent>,
                            and regular engagement through project mailing lists and the <LinkComponent href="/newsletter">OpenInfra
                            Newsletter</LinkComponent>.
                            This engaged community actively participates in shaping the future of open infrastructure, sharing knowledge, and driving innovation through collaborative efforts.
                        </p>
                    </div>
                    <div className="column is-one-third">
                        <img src={networkImg} alt="network" className="network-image"/>
                    </div>
                </div>
                <div className="second-section">
                    <h2 className="title">
                        VAST NETWORK OF Organizations Driving Open Source Infrastructure
                    </h2>
                    <p className="body">
                        The OpenInfra Foundation is supported by a vast network of members and organizations who are committed to advancing open source infrastructure. These members have a vested interest in not only supporting the set of open source projects they currently rely on to power their businesses, but are actively looking for the next solution to take their efforts to the next level. Through their support, OpenInfra Foundation projects have an inside track to proof of concept (POC) and production use at some of the most impactful companies in the world.
                    </p>
                </div>
                {sponsors && sponsors.length > 0 &&
                <div className="sponsors-wrapper">
                    <p className="sponsors-label">OpenInfra Platinum and Gold Members</p>
                    <Slideshow>
                        {sponsors.map(s => <img key={`sponsor-${s.id}`} src={s.logo || s.big_logo} alt={s.name}/>)}
                    </Slideshow>
                </div>
                }
                <div className="membership-actions">
                    <LinkComponent href="/join/members" className="button button-red">
                        <span>EXPLORE MEMBERSHIP</span><img src={arrowRed} alt="arrow"/>
                    </LinkComponent>
                    <div className="link-all-sponsors">
                        <LinkComponent href="/members">
                            <span>See all members</span>
                        </LinkComponent>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurNetworkSection;
