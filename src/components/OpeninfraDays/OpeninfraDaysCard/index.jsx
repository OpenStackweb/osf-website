import React from 'react'

import calendarIcon from '../../../../static/img/summit-landing/icons/calendar-icon.svg'
import locationIcon from '../../../../static/img/summit-landing/icons/location-icon.svg'

import logo from '../../../../static/img/openinfra-days/openinfra-days-cards/openinfra-days-logo.png'

import './styles.scss';
import LinkComponent from '../../LinkComponent';

const OpenInfraDaysCard = ({background, name, date, location, coming_soon, link = '#'}) => {
  return (
    <LinkComponent href={link}>
      <div className="openinfra-days-card-wrapper">
        <div className="top" style={{backgroundImage: `url(${background.publicURL})`}}>
          {name &&
            <>
              <img src={logo}/>
              <span className="title">{name}</span>
            </>
          }
        </div>
        <div className="info">
          <div className='info-wrapper'>
            {date &&
              <span>
                <img src={calendarIcon}/> {date}
              </span>
            }
            {location &&
              <span>
                <img src={locationIcon}/> {location}
              </span>
            }
            {coming_soon &&
              <span>
                <img src="/img/openinfra-days/soon.svg" alt="soon"/>
                More info coming soon!
              </span>
            }
          </div>
        </div>
      </div>
    </LinkComponent>
  )
}

export default OpenInfraDaysCard
