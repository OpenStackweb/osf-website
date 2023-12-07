import React from 'react'

import '../style/modules/_header_image.scss'

const HeaderImage = ({backgroundImage}) => {
  return (
    <main className="main">
      <section className="hero-main-v2" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container"></div>
      </section>
    </main>
  )
}

export default HeaderImage
