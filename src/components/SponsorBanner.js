import React from 'react'

import background from '../../static/img/summit-landing/sponsor-banner-bg.png';
import leftArrow from '../img/svg/arrow-left.svg'
import '../style/modules/_sponsor_banner.scss'

const SponsorBanner = () => {
  return (    
    <section className='sponsor-banner-wrapper' style={{backgroundImage: `url(${background}`}}>
        <div className="container sponsor-banner-container">
            <span className='sponsor-banner-upper-title'>Become a Sponsor</span>
            <span className='sponsor-banner-title'>              
                Want to support <br/>
                the next decade of open <br/>
                infraestructure?
            </span>
            <a href="/" className="sponsor-banner-button">
              <span className="btn-arrow">More Info</span>
            </a>
        </div>
    </section>
  )
}

export default SponsorBanner
