import React from 'react'

import './styles.scss';
import RoundedButton from '../RoundedButton';

const UniverseJoinBanner = ({ title, subtitle, button }) => (

    <section className='universe-join-banner-wrapper'>
        <div className="universe-join-banner-container">
            <p className='universe-join-banner-title' dangerouslySetInnerHTML={{ __html: title }} />
            <p className="universe-join-banner-subtitle">{ subtitle }</p>
            <RoundedButton link={button.link} text={button.text} className='universe-join-banner-button' />
        </div>
    </section>
)

export default UniverseJoinBanner
