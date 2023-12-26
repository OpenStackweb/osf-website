import React from 'react'
import SummitCardLight from "./SummitCardLight";
import CustomSlider from "../CustomSlider";

import './styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PREVIOUS_SUMMITS = [
  {name: 'Vancouver, Canada', date: 'June 13-15, 2023', image: '/img/summit-landing/summits/vancouver.png', link: '/summit/vancouver-2023'},
  {name: 'Berlin, Germany', date: 'June 7-9, 2022', image: '/img/summit-landing/summits/berlin.png', link: '/summit/berlin-2022'},
  {name: 'Denver, Colorado', date: 'April 29 - May 1, 2019', image: '/img/summit-landing/summits/denver.png', link:  'https://www.openstack.org/summit/denver-2019'},
  {name: 'Shanghai, China', date: 'November 4-6, 2019', image: '/img/summit-landing/summits/shanghai.png', link:  'https://www.openstack.org/summit/shanghai-2019'}
];

const PreviousSummits = () => {
  return (
    <div className="container previous-summits-wrapper">
      <CustomSlider title="Previous OpenInfra Summits">
        {PREVIOUS_SUMMITS.map(summit =>
          <SummitCardLight summit={summit} key={summit.name}/>
        )}
      </CustomSlider>
    </div>
  )
}

export default PreviousSummits
