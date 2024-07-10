import React from 'react'
import OpenInfraDaysCard from "./OpeninfraDaysCard";

import './styles.scss';

const OpenInfraDays = ({ title }) => {

  const openinfraEvents = [    
    { background: '/img/openinfra-days/openinfra-days-cards/indiana.png', name: 'North America', date: 'October 15-16, 2024', location: 'Indiana University', link: 'https://ittraining.iu.edu/explore-topics/titles/oid-iu/index.html'},
    { background: '/img/openinfra-days/openinfra-days-cards/vietnam.png', name: 'Vietnam', date: 'August 24, 2024', location: 'Hanoi, Vietnam', link: 'https://2024.vietopeninfra.org/'},
    { background: '/img/openinfra-days/openinfra-days-cards/tokyo.png', name: 'Tokyo', date: 'September 6, 2024', location: 'Tokyo, Japan', link: 'https://cloudopsdays.com/'}
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
