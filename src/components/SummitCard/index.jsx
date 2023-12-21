import React from 'react'

import calendarIcon from '../../../static/img/summit-landing/icons/calendar-icon.svg'
import locationIcon from '../../../static/img/summit-landing/icons/location-icon.svg'

import './styles.scss'
import RoundedButton from '../RoundedButton'


const SummitCard = ({ background, summit, cardStyles }) => {

    if (!summit) return null

    const { date, location, notification } = summit;

    return (
        <section className='summit-card-wrapper' style={cardStyles}>
            <div className="summit-card-image" style={{ backgroundImage: `url(${background}` }}></div>
            <div className={`summit-card-info ${notification?.text ? '' : 'no-notification'}`}>
                <div className='summit-card-info-wrapper'>
                    <span>
                        <img src={calendarIcon} /> {date}
                    </span>
                    <span>
                        <img src={locationIcon} /> {location}
                    </span>
                </div>
            </div>
            {notification?.text &&
                <div className="summit-card-notification">
                    <span dangerouslySetInnerHTML={{ __html: notification.text }} />
                    {notification?.button.text &&
                        <RoundedButton link={notification.button.link} text={notification.button.text}
                        className="summit-card-button" />
                    }
                </div>
            }
        </section>
    )
}

export default SummitCard
