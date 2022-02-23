import React from 'react'
import leftArrow from '../img/svg/arrow-left.svg'
import OILiveComp from '../../static/img/oi-live-comp.png'
import DiagonalBG from '../../static/img/diagonal.svg'


class KeynotesPromoV2 extends React.Component {
  render() {
    return (
      <div className="live-keynotes-promo-v2">
        <div className="live-kp-container">
          <div className="text-area">
                  <div className="text">

                    <span className="upper-title">WATCH THE SPECIAL EVENT AGAIN!</span>
                    <h1 className="title">OpenInfra Live: Keynotes</h1>
                    <p className="promo-para">Exclusive Announcements. Live Demos. OpenStack + Kubernetes. Hybrid Cloud Economics.</p>
                    <div className="dates-row">
                      <p className="promo-dates">The biggest OpenInfra users, developers and operators from around the world!</p>
                    </div>

                    <div className="buttons-row">
                      <a href="https://youtube.com/playlist?list=PLKqaoAnDyfgqUEj-Yb36T51uAOKYD08Eb"><button className="button med-button-red">Watch Here<img className="cta-arrow" src={leftArrow} alt="left arrow" /></button></a>
                      {/* <a href="/live/keynotes"><button className="button med-button-nobg">Learn More<img className="cta-arrow" src={leftArrow} alt="" /></button></a> */}
                    </div>
                    
                </div>
            </div>

          <div className="image-area">
            <img src={OILiveComp} alt="img" />
          </div>

        </div>

        <div className="diagonal-bg-container">
            <img className="diagonal-bg" src={DiagonalBG} alt="img" />
          </div>

      </div>
    )
  }
}

export default KeynotesPromoV2;