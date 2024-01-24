import React from 'react'

import '../style/modules/_image-only-header.scss'

const ImageOnlyHeader = ({backgroundImage}) => {
  return (
    <main className="main">
      <section className="hero-main-v2" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container"></div>
      </section>
    </main>
  )
}

export default ImageOnlyHeader