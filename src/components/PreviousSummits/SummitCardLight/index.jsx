import React from 'react'

import './styles.scss';

const SummitCardLight = ({summit}) => {
  return (
    <div className="summit-card-wrapper">
      <img className="image" alt={summit.name} src={summit.image} />
      <p className="title">{summit.name}</p>
      <p className="subtitle">{summit.date}</p>
      <a href={summit.link} className="button">
        See Highlights <img src="img/right-arrow.svg" alt="right arrow" />
      </a>
    </div>
  )
}

export default SummitCardLight
