import React from 'react'
import ColorBar from '../img/color-bar.png'
import leftArrow from '../img/svg/arrow-left.svg'

class KeynotesPromo extends React.Component {
  render() {
    return (
      <div className="ideas-banner keynotes-promo">
      <div>
        <h2>
          Join us for OpenInfra Live: Keynotes!
        </h2>
        <p>
          Exclusive Announcements. Live Demos. OpenStack + Kubernetes. Hybrid Cloud Economics.
        </p>
        <p className="dates">
          November 17 and 18 at 9am CT/1500 UTC
          <a className="learn-link" href="/live/keynotes">
            Learn More
          </a>
        </p>
      </div>
      <div>
        <a href="https://openinfralivekeynotes.eventbrite.com/">
          Register Now <img src={leftArrow} alt="" />
        </a>
      </div>
      <img src={ColorBar} className="multi-color-border" alt="Color Bar" />
    </div>
    )
  }
}

export default KeynotesPromo;