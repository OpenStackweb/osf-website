import React from 'react'

import background from '../../../static/img/sponsorship/interested_bg.png'
import './styles.scss';
import RoundedButton from '../RoundedButton';

const SponsoringBanner = ({ title, subTitle, button }) => (

    <section className='sponsoring-banner-wrapper'>
        <div className="container sponsoring-banner-container" style={{ backgroundImage: `url(${background}` }}>
            <div className='sponsoring-banner-text'>
                <span className='sponsoring-banner-title' dangerouslySetInnerHTML={{ __html: title }} />
                <span className='sponsoring-banner-subtitle' dangerouslySetInnerHTML={{ __html: subTitle }} />
            </div>
            <RoundedButton link={button.link} text={button.text} className='sponsoring-banner-button' />
        </div>
    </section>
)

export default SponsoringBanner
