import React from 'react'

import '../style/modules/_header_image.scss'

const HeaderImage = ({backgroundImage, overview, logo, caption}) => {
  return (
    <main className="main">
      <section className="hero-main-v2 header-image" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container">
          <p className="overview">{overview}</p>
          <img src={logo.src} alt={logo.alt} />
          <p className="caption">{caption}</p>
        </div>
      </section>
    </main>
  )
}

export default HeaderImage
