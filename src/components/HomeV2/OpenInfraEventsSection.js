import React from 'react'
import LinkComponent from '../LinkComponent';
import RoundedButton from '../RoundedButton';

import calendarIcon from '../../../static/img/summit-landing/icons/calendar-icon.svg'
import locationIcon from '../../../static/img/summit-landing/icons/location-icon.svg'

const OpenInfraEventsSection = ({events}) => {

    const arrowIcon = (color) => {
        return (
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
                <path d="M21 19L26 14" stroke={color} stroke-width="2" stroke-linecap="round" />
                <path d="M21 9L26 14" stroke={color} stroke-width="2" stroke-linecap="round" />
                <path d="M12 14L26 14" stroke={color} stroke-width="2" stroke-linecap="round" />
            </svg>
        )
    }

    return (
        <div className='home-v2-events-section container'>
            <span className='home-v2-header-events'>
                OPENINFRA <span className='home-v2-header-events-red'>ASIA AND EUROPE: </span>
                <br />A REGIONAL HUB TO PROMOTE, PROTECT
                <br />OPEN SOURCE INFRASTRUCTURE
            </span>
            <div className='openinfra-events-section-wrapper'>
                {events.openInfraEventsData.map(event => {
                    return (
                        <LinkComponent href={event.link}>
                            <div className='openinfra-event' style={{ color: event.color, borderColor: event.color }}>
                                <img src={event.logo?.publicURL} />
                                <span>{arrowIcon(event.color)} {event.text}</span>
                            </div>
                        </LinkComponent>
                    )
                })}
            </div>
            <div className='upcoming-events-section-wrapper'>
                <span className='upcoming-events-title'>OPENINFRA <span className='red'>community events</span></span>
                <div className="events-wrapper">
                    {events.upcomingEvents.map(event => {
                        return (
                            <div className="event-container">
                                <img className="event-image" src={event.image?.publicURL} />
                                <span className='event-info'>
                                    <img src={calendarIcon} /> {event.date}
                                </span>
                                <span className='event-info'>
                                    <img src={locationIcon} /> {event.location}
                                </span>
                                <RoundedButton hasArrowIcon={false} link={event.button.link} text={event.button.text} className="upcoming-event-button" />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default OpenInfraEventsSection