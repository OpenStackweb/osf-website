import React from 'react'

import '../style/modules/_sponsor_banner.scss'
import RoundedButton from './RoundedButton';

const SponsorBanner = ({background, upperTitle, title, button}) => {
  return (
    <section className='sponsor-banner-wrapper' style={{ backgroundImage: `url(${background}` }}>
      <div className="container sponsor-banner-container">
        <span className='sponsor-banner-upper-title' dangerouslySetInnerHTML={{__html: upperTitle}} />
        <span className='sponsor-banner-title' dangerouslySetInnerHTML={{__html: title}} />          
        <RoundedButton link={button.link} text={button.text} className="sponsor-banner-button" />
      </div>
    </section>
  )
}

export default SponsorBanner
