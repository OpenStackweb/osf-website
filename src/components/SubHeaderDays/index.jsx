import React from 'react'
import './styles.scss';

const SubHeaderDays = ({button}) => {
  return (
    <section className="subheader-days-wrapper">
      <div className="container">
        <div className="body">
          <div className="title">
            a special event close to your city
          </div>
          <p>
            <b>OpenInfra Days</b> are organized and hosted annually by local User Groups and companies in the ecosystem
            and are often one or two-day events with keynotes, breakout sessions and even workshops.
          </p>
          <p>
            It's a great opportunity to hear directly from prominent open infrastructure leaders, learn from user stories,
            network, and get plugged into your local community.
          </p>
          {button?.text &&
            <a href={button.link} className="button">
              <span className="btn-arrow">{button.text}</span>
            </a>
          }
        </div>
      </div>
    </section>
  )
}

export default SubHeaderDays
