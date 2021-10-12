import React from 'react'
import ColorBar from '../img/color-bar.png'

class IdeasBannerV1 extends React.Component {
  render() {
    return (
        <div className="ideas-banner">
        <div>
          <h2>
            <img src="/img/icons/bulb.svg" alt="Share ideas for OpenInfra Live" />
            Have an idea for an episode of OpenInfra Live?
          </h2>
          <p>
            If you have any topics you would like to propose for an upcoming episode, please share your ideas with us! If selected, we’ll reach out to you to discuss details. We look forward to hearing your ideas!
          </p>
        </div>
        <div>
          <a href="//openinfrafoundation.formstack.com/forms/openinfralive">
            Share now
          </a>
        </div>
        <img src={ColorBar} className="multi-color-border" alt="Color Bar" />
      </div>
    )
  }
}

export default IdeasBannerV1