import React from 'react'

import background from '../../../static/img/summit-landing/subscribe/subscribe-banner-bg.png'
import './styles.scss';
import LinkComponent from '../LinkComponent';

const BottomBanner = ({ title, button }) => (

    <section className='subscribe-banner-wrapper' style={{ backgroundImage: `url(${background}` }}>
        <div className="container subscribe-banner-container">
            <span className='subscribe-banner-title' dangerouslySetInnerHTML={{ __html: title }} />
            <LinkComponent href={button.href} className="subscribe-banner-button">
                <span className="btn-arrow">{button.text}</span>
            </LinkComponent>
        </div>
    </section>
)

export default BottomBanner
