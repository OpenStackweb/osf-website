import React from 'react';

import leftArrow from '../img/svg/arrow-left.svg'
import LinkComponent from './LinkComponent';

const RegisterNowBanner = ({ mobile = false }) => {
    return (
        <LinkComponent className={`${mobile ? 'register-now-banner-mobile' : 'register-now-banner'}`} href='https://openinfrasummitberlin.eventbrite.com/'>
            <img className='logo' alt='OpenInfra Logo' src='/img/summit/oif-icon.svg' />
            <div>
                <span>
                    <b>Register Now</b>
                </span>
                <span>
                    Before tickets sell out!
                </span>
            </div>
            <img className='arrow' src={leftArrow} alt="left arrow" />
        </LinkComponent>
    )
}

export default RegisterNowBanner;