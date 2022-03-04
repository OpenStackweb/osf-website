import React from 'react';

import leftArrow from '../img/svg/arrow-left.svg'
import LinkComponent from './LinkComponent';

const ScheduleBanner = () => {
    return (
        <div className='schedule-banner'>
            <img src='/img/summit/oif-icon.svg' />
            <span>
                <b>The Summit Schedule has been released!</b>
            </span>
            <span>
                Register before prices increase on March 18!
            </span>
            <button>
                <LinkComponent href="/summit">Register Now<img src={leftArrow} alt="left arrow" /></LinkComponent>
            </button>
        </div>
    )
}

export default ScheduleBanner;