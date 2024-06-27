import React from 'react'
import OpenInfraDaysCard from "./OpeninfraDaysCard";

import './styles.scss';

const OpenInfraDays = ({ title }) => {

  const openinfraEvents = [    
    { background: '/img/openinfra-days/openinfra-days-cards/openinfra-days-austin.png', name: 'North America', date: 'Q4 2024', location: 'Indiana University', link: 'https://ittraining.iu.edu/explore-topics/titles/oid-iu/index.html'}
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
