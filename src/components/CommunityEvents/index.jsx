import React from 'react'
import CustomSlider from "../CustomSlider";
import SummitCard from "../SummitCard";

import './styles.scss';

const customSliderSettings = {slidesToShow: 1, initialSlide: 0, variableWidth: true, centerMode: false, responsive: null};

const CommunityEvents = () => {
  const isSmallScreen = typeof window !== 'undefined' ? window.innerWidth <= 1024 : false;

  const COMMUNITY_EVENTS = [
    {
      key: 'ce-berlin',
      location: isSmallScreen ? 'Europe' : 'Berlin, Germany • Paris, France  • Istanbul, Turkey • Zurich, Switzerland',
      date: 'August, 2024',
      background: 'img/summit-landing/community-events/berlin.png',
      cardStyles: {width: isSmallScreen ? 'auto' : 900}
    },
    {
      key: 'ce-shanghai',
      location: 'Beijing, China',
      date: 'Dec 1, 2023',
      background: 'img/summit-landing/community-events/shanghai.png',
      cardStyles: {width: isSmallScreen ? 'auto' : 460}
    }
  ];

  return (
    <div className="container community-events-wrapper">
      <CustomSlider title="More community driven events" sliderSettings={customSliderSettings}>
        {COMMUNITY_EVENTS.map(event =>
          <SummitCard {...event} />
        )}
      </CustomSlider>
    </div>
  )
}

export default CommunityEvents
