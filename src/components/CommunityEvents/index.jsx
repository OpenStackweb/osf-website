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
      summit: {
        location: isSmallScreen ? 'Europe' : 'Turkiye, Germany, France, Sweden and more!',
        date: 'May and June, 2024',
      },
      background: '/img/summit-landing/community-events/europe.png',
      link: '/days',
      cardStyles: {width: isSmallScreen ? 'auto' : 900}
    },
    {
      key: 'ce-usa',
      summit: {
        location: 'North America',
        date: 'Q4 2024',
      },
      background: '/img/summit-landing/community-events/usa.png',
      cardStyles: {width: isSmallScreen ? 'auto' : 460},
      link: '/days'
    }    
  ];

  return (
    <div className="container community-events-wrapper">
      <CustomSlider title="More Community-Driven Events" sliderSettings={customSliderSettings}>
        {COMMUNITY_EVENTS.map(event =>
          <SummitCard {...event} />
        )}
      </CustomSlider>
    </div>
  )
}

export default CommunityEvents
