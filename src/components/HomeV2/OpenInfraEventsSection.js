import React from 'react'
import LinkComponent from '../LinkComponent';
import RoundedButton from '../RoundedButton';

import calendarIcon from '../../../static/img/summit-landing/icons/calendar-icon.svg'
import locationIcon from '../../../static/img/summit-landing/icons/location-icon.svg'

const OpenInfraEventsSection = () => {

    const arrowIcon = (color) => {
        return (
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
                <path d="M21 19L26 14" stroke={color} stroke-width="2" stroke-linecap="round" />
                <path d="M21 9L26 14" stroke={color} stroke-width="2" stroke-linecap="round" />
                <path d="M12 14L26 14" stroke={color} stroke-width="2" stroke-linecap="round" />
            </svg>
        )
    }

    const OpenInfraEventsData = [
        {
            link: 'https://openinfraasia.org',
            logo: '/img/homeV2/events-images/logo-asia.svg',
            text: 'openinfraasia.org',
            color: '#FFB325',
        },
        {
            link: 'https://openinfraeurope.org',
            logo: '/img/homeV2/events-images/logo-europe.svg',
            text: 'openinfraeurope.org',
            color: '#2CB4E2',
        }
    ];

    const UpcomingEventsData = [
        {
            image: '/img/homeV2/events-images/openinfra-europe-img-2025.png',
            date: 'October 17-19, 2025',
            location: 'École Polytechnique, Paris-Saclay, France',
            button: {
                link: 'https://openinfra.dev/summit',
                text: 'OPENINFRA.DEV/SUMMIT'
            }
        },
        {
            image: '/img/homeV2/events-images/openinfra-asia-img-2025.png',
            date: 'July - September 2025',
            location: 'Hanoi ● Ho Chi Minh City ● Yogyakarta ● Seoul ● Taipei ● Shanghai ● Tokyo',
            button: {
                link: 'https://openinfra.dev/days',
                text: 'OPENINFRA.DEV/DAYS'
            }
        }
    ]

    return (
        <div className='home-v2-events-section container'>
            <span className='home-v2-header-events'>
                OPENINFRA <span className='home-v2-header-events-red'>ASIA AND EUROPE: </span>
                <br />A REGIONAL HUB TO PROMOTE, PROTECT
                <br />OPEN SOURCE INFRASTRUCTURE
            </span>
            <div className='openinfra-events-section-wrapper'>
                {OpenInfraEventsData.map(event => {
                    return (
                        <LinkComponent href={event.link}>
                            <div className='openinfra-event' style={{ color: event.color, borderColor: event.color }}>
                                <img src={event.logo} />
                                <span>{arrowIcon(event.color)} {event.text}</span>
                            </div>
                        </LinkComponent>
                    )
                })}
            </div>
            <div className='upcoming-events-section-wrapper'>
                <span className='upcoming-events-title'>OPENINFRA <span className='red'>community events</span></span>
                <div className="events-wrapper">
                    {UpcomingEventsData.map(event => {
                        return (
                            <div className="event-container">
                                <img className="event-image" src={event.image} />
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
