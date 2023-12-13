import React, {useCallback, useMemo, useRef} from 'react'
import Slider from "react-slick";

import './styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultSettings = {
  className: 'custom-slider-inner',
  initialSlide: 1,
  cssEase: 'linear',
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

const CustomSlider = ({title, sliderSettings, children}) => {
  const sliderRef = useRef(null);
  const settings = {...defaultSettings, ...sliderSettings};

  const nextSlide = useCallback(() => {
    sliderRef.current?.slickNext();
  }, [sliderRef.current]);

  const prevSlide = useCallback(() => {
    sliderRef.current?.slickPrev()
  }, [sliderRef.current]);

  return (
    <div className="custom-slider">
      <div className="header">
        <div className="title">{title}</div>
        <div className="arrows">
          <img className="prev-arrow" src="img/slider-prev-arrow.png" alt="previous" onClick={prevSlide} />
          <img className="next-arrow" src="img/slider-next-arrow.png" alt="next" onClick={nextSlide} />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </div>
  )
}

export default CustomSlider
