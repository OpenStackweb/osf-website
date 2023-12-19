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
            text: '<b>Get ready!</b> The Call for presentations will open up in Q1 of 2024.',
            button: {
                link: '#',
                text: 'Get Notified'
            }
        }
    },
    {
        key: 'europe-25',
        background: '/img/summit-landing/cards/summit-europe25.png',
        date: '2025',
        location: 'Berlin, Germany',
        notification: null
    }
];

const UpcomingSummits = ({title}) => {
    return (
        <div className="container upcoming-summits-wrapper">
            <div className='upcoming-summits-title'>{title}</div>
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
