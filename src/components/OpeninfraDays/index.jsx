import React from 'react'
import OpenInfraDaysCard from "./OpeninfraDaysCard";

import './styles.scss';

const OpenInfraDays = ({ title }) => {

  const openinfraEvents = [
    { background: '/img/openinfra-days/openinfra-days-cards/openinfra-days-beijing.png', name: 'China', date: 'Dec 1, 2023', location: 'Beijing, China' },
    { background: '/img/openinfra-days/openinfra-days-cards/openinfra-days-austin.png', name: 'Austin', date: 'Apr 5, 2024', location: 'Austin TX, USA' },
    { background: '/img/openinfra-days/openinfra-days-cards/openinfra-days-saopaolo.png', name: 'Sao Paulo', date: 'Mar 4, 2024', location: 'Sao Paulo, Brasil' },
    { background: '/img/openinfra-days/openinfra-days-cards/openinfra-days-toronto.png', name: 'Toronto', date: 'May 11, 2024', location: 'Toronto, Canada' }
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
