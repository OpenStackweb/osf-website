import React from 'react'
import SponsorshipCard from "./SponsorshipCard";

import './styles.scss';

const SponsorshipSection = ({overview, title, sponsorships}) => {
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
              <div className="subsection-header">
                <div className="subsection-title">
                  {s.title.map(sub => <p key={sub}>{sub}</p>)}
                </div>
                {s.subtitle &&
                  <div className="subsection-subtitle">{s.subtitle}</div>
                }
              </div>
              <div className="subsection-plans">
                {s.plans.map(plan => <SponsorshipCard {...plan} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SponsorshipSection
