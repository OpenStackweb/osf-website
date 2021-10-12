import React from 'react'
import leftArrow from '../img/svg/arrow-left.svg'
import OILiveComp from '../../static/img/oi-live-comp.png'
import CalIcon from '../../static/img/calendar-alt1.svg'

class KeynotesPromoV2 extends React.Component {
  render() {
    return (
      <div className="live-keynotes-promo-v2">
        <div className="live-kp-container">
          <div className="text-area">                
                  <div className="text">
                    <span className="upper-title">JOIN US FOR</span>
                    <h1 className="title">OpenInfra Live: Keynotes</h1>
                    <p className="promo-para">This is our only big event for the year!</p>
                    <div className="dates-row">
                      <img className="cal-icon" src={CalIcon} /> 
                      <p className="promo-dates"> November 17 and 18 at 9am CT/1500 UTC</p>
                    </div>
                    <div className="buttons-row">
                      <button className="button med-button-red">Register Now<img className="cta-arrow" src={leftArrow} alt="" /></button>
                      <button className="button med-button-nobg">Register Now<img className="cta-arrow" src={leftArrow} alt="" /></button>
                    </div>
                    
                </div>
            </div>
          <div className="image-area"><img src={OILiveComp} /></div>
        </div>
      </div>
    )
  }
}

export default KeynotesPromoV2;