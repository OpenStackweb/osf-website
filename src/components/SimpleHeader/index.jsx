import React from 'react'

import RoundedButton from '../RoundedButton';
import './styles.scss';

const SimpleHeader = ({title, subtitle, backgroundImage, button}) => {
  return (
    <main className="main">
      <section className="hero-main-v2 simple-header" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container">
          <h1 className="title">{title}</h1>
          <p className="subtitle" dangerouslySetInnerHTML={{__html: subtitle}}/>
          {button.text &&
            <RoundedButton link={button.link} text={button.text} className="banner-button" />
          }
        </div>
      </section>
    </main>
  )
}

export default SimpleHeader
