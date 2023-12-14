import React from 'react'

import './styles.scss';

import SummitCard from '../SummitCard';

const UPCOMING_SUMMITS = [
    {
        key: 'asia-24',
        background: '/img/summit-landing/cards/summit-asia.png',        
        date: 'September 2 & 3, 2024',
        location: 'Suwon Convention Center, Suwon, South Korea',
        notification: true
    },
    {
        key: 'europe-25',
        background: '/img/summit-landing/cards/summit-europe25.png',
        date: '2025',
        location: 'Berlin, Germany'
    }
];

const UpcomingSummits = () => {
    return (
        <div className="container upcoming-summits-wrapper">
            <div className='upcoming-summits-title'>Upcoming Summits</div>
            {UPCOMING_SUMMITS.map((summit) =>
                <SummitCard 
                    key={summit.key}
                    background={summit.background}
                    date={summit.date}
                    location={summit.location}
                    notification={summit.notification} />
            )}
        </div>
    )
}

export default UpcomingSummits
