import React from 'react'

import './styles.scss';

import SummitCard from '../SummitCard';

const UPCOMING_SUMMITS = [
    {
        key: 'asia-24',
        background: '/img/summit-landing/cards/summit-asia.png',        
        date: 'September 2 & 3, 2024',
        location: 'Suwon Convention Center, Suwon, South Korea',
        notification: {
            text: 'Register for the Regional OpenInfra Summit Asia!',
            button: {
                link: 'https://openinfra.dev/summit',
                text: 'Learn More'
            }
        }
    },
    // {
    //     key: 'europe-25',
    //     background: '/img/summit-landing/cards/summit-europe25.png',
    //     date: '2025',
    //     location: 'Berlin, Germany',
    //     notification: null
    // }
];

const UpcomingSummits = ({title}) => {
    return (
        <div className="container upcoming-summits-wrapper">
          {title && <div className='upcoming-summits-title'>{title}</div>}
            {UPCOMING_SUMMITS.map((summit) =>
                <SummitCard 
                    key={summit.key}
                    background={summit.background}
                    summit={summit} />
            )}
        </div>
    )
}

export default UpcomingSummits
