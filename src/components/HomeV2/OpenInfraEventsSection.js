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

    return (
        <div className='home-v2-events-section container'>            
            <span className='home-v2-header-events'>
                OPENINFRA <span className='home-v2-header-events-red'>ASIA AND EUROPE: </span>
                <br />A REGIONAL HUB TO PROMOTE, PROTECT
                <br />OPEN SOURCE INFRASTRUCTURE
            </span>
            <div className='openinfra-events-section-wrapper'>
                <LinkComponent href="https://openinfraasia.org">
                    <div className='openinfra-event asia'>
                        <img src='/img/homeV2/events-images/logo-asia.svg' />
                        <span>{arrowIcon('#FFB325')} openinfraasia.org</span>
                    </div>
                </LinkComponent>
                <LinkComponent href="https://openinfraeurope.org">
                    <div className='openinfra-event europe'>
                        <img src='/img/homeV2/events-images/logo-europe.svg' />
                        <span>{arrowIcon('#2CB4E2')} openinfraeurope.org</span>
                    </div>
                </LinkComponent>                
            </div>
            <div className='upcoming-events-section-wrapper'>
                <span className='upcoming-events-title'>upcoming <span className='red'>events</span></span>
                <div className="events-wrapper">
                    <div className="event-container">
                        <img className="event-image" src='/img/homeV2/events-images/openinfra-asia-img.png' />
                        <span className='event-info'>
                            <img src={calendarIcon} /> September 2-3, 2024
                        </span>
                        <span className='event-info'>
                            <img src={locationIcon} /> Suwon, South Korea
                        </span>
                        <RoundedButton hasArrowIcon={false} link={'/'} text={'openinfra.dev/summit'} className="upcoming-event-button"/>
                    </div>
                    <div className="event-container">
                        <img className="event-image" src='/img/homeV2/events-images/openinfra-europe-img.png' />
                        <span className='event-info'>
                            <img src={calendarIcon} /> August, 2024
                        </span>
                        <span className='event-info'>
                            <img src={locationIcon} /> Berlin, Germany • Paris, France  • Istanbul, Turkey • Zurich, Switzerland
                        </span>
                        <RoundedButton hasArrowIcon={false} link={'/'} text={'openinfra.dev/DAYS'} className="upcoming-event-button"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OpenInfraEventsSection