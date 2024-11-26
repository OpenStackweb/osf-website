import React from 'react'
import OpenInfraDaysCard from "./OpeninfraDaysCard";

import './styles.scss';

const OpenInfraDays = ({ title }) => {

  const openinfraEvents = [    
    { background: '/img/openinfra-days/openinfra-days-cards/oid-pasadena.png', name: 'North America', date: 'March 6 & 7, 2025', location: 'Pasadena, California', link: 'https://www.socallinuxexpo.org/scale/22x/events/open-infra-days'},
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
