import React, {useRef} from 'react'
import Slider from "react-slick";

import './styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings1 = {
  className: 'custom-slider-inner',
  initialSlide: 1,
  cssEase: 'linear',
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

const CustomSlider = ({title,children}) => {
  const sliderRef = useRef(null);
  return (
    <div className="custom-slider">
      <div className="header">
        <div className="title">{title}</div>
        <div className="arrows">
          <img className="prev-arrow" src="img/slider-prev-arrow.png" alt="previous" onClick={sliderRef.current?.slickPrev} />
          <img className="next-arrow" src="img/slider-next-arrow.png" alt="next" onClick={sliderRef.current?.slickNext} />
        </div>
      </div>
      <Slider {...settings1} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  )
}

export default CustomSlider
