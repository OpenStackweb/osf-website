import React from 'react'
import OpenInfraDaysCard from "./OpeninfraDaysCard";

import './styles.scss';

const OpenInfraDays = ({ title }) => {

  const openinfraEvents = [    
    { background: '/img/openinfra-days/openinfra-days-cards/openinfra-days-austin.png', name: 'USA', date: 'Q4 2024', location: 'More info coming soon!', link: 'https://openinfrafoundation.formstack.com/forms/2024_openinfra_events_updates'}
  ]

  return (
    <section className="openinfra-days-wrapper">
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="openinfra-days-cards">
          {openinfraEvents.map(s =>
            <OpenInfraDaysCard {...s} />
          )}
        </div>
      </div>
    </section>
  )
}

export default OpenInfraDays
