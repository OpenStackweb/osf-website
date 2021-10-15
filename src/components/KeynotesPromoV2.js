import React from 'react'
import leftArrow from '../img/svg/arrow-left.svg'
import OILiveComp from '../../static/img/oi-live-comp.png'
import CalIcon from '../../static/img/calendar-alt1.svg'
import DiagonalBG from '../../static/img/diagonal.svg'


class KeynotesPromoV2 extends React.Component {
  render() {
    return (
      <div className="live-keynotes-promo-v2">
        <div className="live-kp-container">
          <div className="text-area">                
                  <div className="text">

                    <span className="upper-title">JOIN US FOR</span>
                    <h1 className="title">OpenInfra Live: Keynotes</h1>
                    <p className="promo-para">Exclusive Announcements. Live Demos. OpenStack + Kubernetes. Hybrid Cloud Economics.</p>
                    <div className="dates-row">
                      <img className="cal-icon" src={CalIcon} alt="Calendar Icon" /> 
                      <p className="promo-dates"> November 17 and 18 at 9am CT/1500 UTC</p>
                    </div>

                    <div className="buttons-row">
                      <a href="https://www.eventbrite.com/e/openinfra-live-keynotes-tickets-169507530587"><button className="button med-button-red">Register Now<img className="cta-arrow" src={leftArrow} alt="" /></button></a>
                      <a href="/live/keynotes"><button className="button med-button-nobg">Learn More<img className="cta-arrow" src={leftArrow} alt="" /></button></a>
                    </div>
                    
                </div>
            </div>

          <div className="image-area">
            <img src={OILiveComp} />
          </div>

        </div>

        <div className="diagonal-bg-container">
            <img className="diagonal-bg" src={DiagonalBG} />
          </div>

      </div>
    )
  }
}

export default KeynotesPromoV2;