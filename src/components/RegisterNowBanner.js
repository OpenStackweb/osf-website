import React from 'react';

import leftArrow from '../img/svg/arrow-left.svg'
import LinkComponent from './LinkComponent';

const RegisterNowBanner = () => {
    return (
        <LinkComponent className='register-now-banner' href='https://openinfrasummitberlin.eventbrite.com/'>
            <img className='logo' alt='OpenInfra Logo' src='/img/summit/oif-icon.svg' />
            <div>
                <span>
                    <b>Register Now</b>
                </span>
                <span>
                    Prices increase March 18!
                </span>
            </div>
            <img className='arrow' src={leftArrow} alt="left arrow" />
        </LinkComponent>
    )
}

export default RegisterNowBanner;