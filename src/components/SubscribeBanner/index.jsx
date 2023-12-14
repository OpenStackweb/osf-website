import React from 'react'

import background from '../../../static/img/summit-landing/subscribe/subscribe-banner-bg.png'
import './styles.scss';

const SubscribeBanner = () => (

    <section className='subscribe-banner-wrapper' style={{ backgroundImage: `url(${background}` }}>
        <div className="container subscribe-banner-container">            
            <span className='subscribe-banner-title'>
            Subscribe to our newsletter <br/>
            & keep up to date with the latest <br/>
            News about the Summits.
            </span>
            <a href="#" className="subscribe-banner-button">
                <span className="btn-arrow">Sign me up</span>
            </a>
        </div>
    </section>
)

export default SubscribeBanner
