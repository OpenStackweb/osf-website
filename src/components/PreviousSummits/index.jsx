import React from 'react'
import SummitCardLight from "./SummitCardLight";
import CustomSlider from "../CustomSlider";

import './styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviousSummits = ({title, summits}) => {
  return (
    <div className="container previous-summits-wrapper">
      <CustomSlider title={title}>
        {summits.map(summit =>
          <SummitCardLight summit={summit} key={summit.name}/>
        )}
      </CustomSlider>
    </div>
  )
}

export default PreviousSummits
