import React from 'react'
import {StaticImage} from "gatsby-plugin-image"
import '../style/modules/_sub_header.scss'

const SubHeader = () => {
  return (
    <section className="subheader_wrapper">
      <div className="container">
        <div className="body">
          <div className="overview">A new summit format</div>
          <div className="title">
            WHAT IS A <span className="red">“COMMUNITY POWERED SUMMIT”</span>?
          </div>
          <p>
            The <b>OpenInfra community</b>, a global collaboration of <b>110,000 people across 187 countries</b>, builds and operates
            infrastructure powered by open source software. These contributors have been hosting successful events, both
            large-scale and small, around the world to provide an opportunity for local community members to connect,
            collaborate and build the future of open infrastructure.
          </p>
          <p>
            For the past decade, the <b>OpenInfra Summit</b>, formerly known as the OpenStack Summit, has provided a
            centralized opportunity for the global community to collaborate. <b>To build the next decade of open
            infrastructure, OpenInfra Summits will be developed by the community</b> for the community. Community volunteers
            will provide an opportunity to collaborate directly with the people building and running open source
            infrastructure using Linux, OpenStack, Kubernetes and 30+ other technologies. Attendees typically represent
            60 countries and hundreds of organizations and participate in keynote presentations from industry leaders,
            breakout presentations, Forum discussions with operators and developers, and a busy hallway track of open
            source enthusiasts.
          </p>
          <StaticImage
            className="badge"
            src="../../static/img/summit-landing/powered_community.png" alt="powered community badge"
          />
        </div>
        <StaticImage
          className="footer_image"
          src="../../static/img/summit-landing/community.png"
          alt="community"
        />
      </div>
    </section>
  )
}

export default SubHeader
