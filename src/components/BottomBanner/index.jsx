import React from 'react'

import background from '../../../static/img/summit-landing/subscribe/subscribe-banner-bg.png'
import './styles.scss';
import RoundedButton from '../RoundedButton';

const BottomBanner = ({ title, button }) => (

    <section className='bottom-banner-wrapper' style={{ backgroundImage: `url(${background}` }}>
        <div className="container bottom-banner-container">
            <span className='bottom-banner-title' dangerouslySetInnerHTML={{ __html: title }} />
            <RoundedButton link={button.link} text={button.text} className='bottom-banner-button' />
        </div>
    </section>
)

export default BottomBanner
