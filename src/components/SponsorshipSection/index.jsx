import React from 'react'

import './styles.scss';

const SponsorshipSection = ({overview, title, subtitle, sponsorships}) => {
  return (
    <section className="sponsorship-section-wrapper">
      <div className="container">
        <div className="top">
          <p className="overview">{overview}</p>
          <h1 className="title">{title}</h1>
        </div>
        <div className="body">
          {sponsorships.map(s =>
            <div className="subsection">
              <div className="subsection-title">
                {s.title.map(sub => <p>{sub}</p>)}
              </div>
              <div className="subsection-plans">
                {s.plans.map(plan => <div>{plan}</div>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SponsorshipSection
