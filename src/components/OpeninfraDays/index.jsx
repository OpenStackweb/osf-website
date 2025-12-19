import React from 'react'
import OpenInfraDaysCard from "./OpeninfraDaysCard";

import './styles.scss';

const OpenInfraDays = ({ title, events, banner }) => {
  return (
    <section id="upcoming-events" className="openinfra-days-wrapper">
      <div className="container">
        <h1 className="title">{title}</h1>
        {banner &&
          <section className="openinfra-days-banner">
            <div className="container">
              <div className="body">
                <div className="title" dangerouslySetInnerHTML={{ __html: banner.title }} />
                <p dangerouslySetInnerHTML={{ __html: banner.content }} />
                {banner.button?.text &&
                <a href={banner.button.url} className="button">
                  <span className="btn-arrow">{banner.button.text}</span>
                </a>
              }
              </div>
            </div>
          </section>
        }
        <div className="openinfra-days-cards">
          {events?.map(s =>
            <OpenInfraDaysCard {...s} />
          )}
        </div>
      </div>
    </section>
  )
}

export default OpenInfraDays
