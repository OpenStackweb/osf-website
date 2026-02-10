import React from 'react'
import LinkComponent from "../LinkComponent";

const BuildSection = () => {
  return (
    <section className="section building" id="building">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title">
              Building Successful Open Source Projects
            </h2>
            <p className="body">
              The OpenInfra Foundation is a neutral, collaborative home for open source infrastructure projects,
              providing a clear path to success and sustainability. This path to success is driven by our{' '}
              <LinkComponent href="#our-model">sustainability model (3 Forces)</LinkComponent>,
              our <LinkComponent href="#four-opens">collaboration principles (4 Opens)</LinkComponent>, and{' '}
              <LinkComponent href="#our-network">our network</LinkComponent> of developers, companies and operators
              around open infrastructure. Read about recent work and accomplishments in our{' '}
              <LinkComponent href="#annual-reports">Annual Reports</LinkComponent>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildSection
