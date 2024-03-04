import React from 'react'

import background from '../../../static/img/summit-landing/subscribe/subscribe-banner-bg.png'
import './styles.scss';
import RoundedButton from '../RoundedButton';

const UniverseJoinBanner = ({ title, subtitle, button }) => (

    <section className='universe-join-banner-wrapper'  style={{ backgroundImage: `url(${background}` }}>
        <div className="universe-join-banner-container">
            <p className='universe-join-banner-title' dangerouslySetInnerHTML={{ __html: title }} />
            <p className="universe-join-banner-subtitle">{ subtitle }</p>
            <RoundedButton link={button.link} text={button.text} className='universe-join-banner-button' />
        </div>
    </section>
)

export default UniverseJoinBanner
