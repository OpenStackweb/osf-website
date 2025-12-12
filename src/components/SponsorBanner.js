import React from 'react'

import '../style/modules/_sponsor_banner.scss'
import RoundedButton from './RoundedButton';

const SponsorBanner = ({ upperText, title, image, button }) => {
  return (
    <section className='sponsor-banner-wrapper' style={{ backgroundImage: `url(${image.publicURL || image})` }}>
      <div className="container sponsor-banner-container">
        <span className='sponsor-banner-upper-title'>{upperText}</span>
        <span className='sponsor-banner-title' dangerouslySetInnerHTML={{ __html: title }} />
        <RoundedButton link={button.link} text={button.text} className="sponsor-banner-button" />
      </div>
    </section>
  )
}

export default SponsorBanner
