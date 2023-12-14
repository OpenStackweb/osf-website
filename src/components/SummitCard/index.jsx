import React from 'react'

import calendarIcon from '../../../static/img/summit-landing/icons/calendar-icon.svg'
import locationIcon from '../../../static/img/summit-landing/icons/location-icon.svg'

import './styles.scss'

const SummitCard = ({ background, date, location, notification = false, cardStyles }) => {
    return (
        <section className='summit-card-wrapper' style={cardStyles}>
            <div className="summit-card-image" style={{ backgroundImage: `url(${background}` }}></div>
            <div className={`summit-card-info ${notification ? '' : 'no-notification'}`}>
                <div className='summit-card-info-wrapper'>
                    <span>
                        <img src={calendarIcon} /> {date}
                    </span>
                    <span>
                        <img src={locationIcon} /> {location}
                    </span>
                </div>
            </div>
            {notification &&
                <div className="summit-card-notification">
                    <span>
                        <b>Get ready!</b> The Call for presentations will open up in Q1 of 2024.
                    </span>
                    <a href="/" className="summit-card-button">
                        <span className="btn-arrow">Get Notified</span>
                    </a>
                </div>
            }
        </section>
    )
}

export default SummitCard
