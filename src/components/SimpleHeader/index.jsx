import React from 'react'

import './styles.scss';
import LinkComponent from '../LinkComponent';

const SimpleHeader = ({title, subtitle, backgroundImage, button}) => {
  console.log('button...', button);
  return (
    <main className="main">
      <section className="hero-main-v2 simple-header" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container">
          <h1 className="title">{title}</h1>
          <p className="subtitle" dangerouslySetInnerHTML={{__html: subtitle}}/>
          {button.text &&
            <LinkComponent href={button.link} className="banner-button">
              <span className="btn-arrow">{button.text}</span>
            </LinkComponent>
          }
        </div>
      </section>
    </main>
  )
}

export default SimpleHeader
