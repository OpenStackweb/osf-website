import React from 'react'

import background from '../../static/img/summit-landing/sponsor-banner-bg.png';
import '../style/modules/_sponsor_banner.scss'
import RoundedButton from './RoundedButton';

const SponsorBanner = () => {
  return (
    <section className='sponsor-banner-wrapper' style={{ backgroundImage: `url(${background}` }}>
      <div className="container sponsor-banner-container">
        <span className='sponsor-banner-upper-title'>Become a Sponsor</span>
        <span className='sponsor-banner-title'>
          Want to support <br />
          the next decade of open <br />
          infraestructure?
        </span>
        <RoundedButton link="/events/sponsorship" text={'More Info'} className="sponsor-banner-button" />
      </div>
    </section>
  )
}

export default SponsorBanner
