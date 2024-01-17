import React from 'react'

import calendarIcon from '../../../../static/img/summit-landing/icons/calendar-icon.svg'
import locationIcon from '../../../../static/img/summit-landing/icons/location-icon.svg'

import logo from '../../../../static/img/openinfra-days/openinfra-days-cards/openinfra-days-logo.png'

import './styles.scss';

const OpenInfraDaysCard = ({ background, name, date, location }) => {
  return (
    <div className="openinfra-days-card-wrapper">
      <div className="top" style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} />
        <span className="title">{name}</span>
      </div>
      <div className="info">
        <div className='info-wrapper'>
          <span>
            <img src={calendarIcon} /> {date}
          </span>
          <span>
            <img src={locationIcon} /> {location}
          </span>
        </div>
      </div>
    </div >
  )
}

export default OpenInfraDaysCard
