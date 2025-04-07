import React from 'react'
import OpenInfraDaysCard from "./OpeninfraDaysCard";

import './styles.scss';

const OpenInfraDays = ({ title, events }) => {
  return (
    <section className="openinfra-days-wrapper">
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="openinfra-days-cards">
          {events.map(s =>
            <OpenInfraDaysCard {...s} />
          )}
        </div>
      </div>
    </section>
  )
}

export default OpenInfraDays
