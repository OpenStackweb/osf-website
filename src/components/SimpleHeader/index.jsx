import React from 'react'

import './styles.scss';

const SimpleHeader = ({title, subtitle, backgroundImage}) => {
  return (
    <main className="main">
      <section className="hero-main-v2 simple-header" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </section>
    </main>
  )
}

export default SimpleHeader
