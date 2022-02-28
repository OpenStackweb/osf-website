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
                Register before prices increase on Marth 16!
            </span>
            <button>
                <LinkComponent href="#">Register Now<img src={leftArrow} alt="" /></LinkComponent>
            </button>
        </div>
    )
}

export default ScheduleBanner;