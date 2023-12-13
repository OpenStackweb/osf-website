import React from 'react'
import SummitCardLight from "./SummitCardLight";
import CustomSlider from "../CustomSlider";

import './styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PREVIOUS_SUMMITS = [
  {name: 'Vancouver, Canada', date: 'June 13-15, 2023', image: '/img/summit-landing/summits/vancouver.png', link: ''},
  {name: 'Berlin, Germany', date: 'June 7-9, 2022', image: '/img/summit-landing/summits/berlin.png', link: ''},
  {name: 'Denver, Colorado', date: 'April 29 - May 1, 2019', image: '/img/summit-landing/summits/denver.png', link: ''},
  {name: 'Shanghai, China', date: 'November 4-6, 2019', image: '/img/summit-landing/summits/shanghai.png', link: ''}
];

const PreviousSummits = () => {
  return (
    <div className="container previous-summits-wrapper">
      <CustomSlider title="Previous OpenInfra Foundation Summits">
        {PREVIOUS_SUMMITS.map(summit =>
          <SummitCardLight summit={summit} key={summit.name}/>
        )}
      </CustomSlider>
    </div>
  )
}

export default PreviousSummits
