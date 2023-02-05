import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SummitSponsorSliderYvr = ({ summit_sponsors }) => {

    const [sponsorTiers, setSponsorTiers] = useState([])

    useEffect(() => {
      const getSponsorTiers = () => {
        let tempTiers = []
        summit_sponsors.map(s => {
            return tempTiers.some(t => t.id === s.sponsorship.id) ? null : tempTiers.push(s.sponsorship);
        });
        setSponsorTiers(tempTiers.sort((a, b) => a.order - b.order));
    };
        getSponsorTiers();
    }, [summit_sponsors])

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
          <a role="button" data-slide="prev" className="carousel-control-prev" style={{ ...style, paddingLeft: 80, display: 'flex' }} onClick={onClick}>
            <span aria-hidden="true" className="carousel-control-prev-icon"></span>
            <img src="/img/symbols/logo-arrow-left.svg" alt="Previous" className="home-s8-container-child" />
          </a>
        );
      }
  
      function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
          <a role="button" data-slide="next" className="carousel-control-next" style={{ ...style, paddingRight: 80, display: 'flex' }} onClick={onClick}>
            <span aria-hidden="true" className="carousel-control-next-icon"></span>
            <img src="/img/symbols/logo-arrow-right.svg" alt="Next" className="home-s8-container-child" />
          </a>
        );
      }
  
      let slideSettings = {
        dots: false,
        infinite: true,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true
            }
          }
        ]
      };

    return (
        <Slider {...slideSettings} className="sponsor-logos-slider">
            {sponsorTiers.map((tier, tierIndex) => {
                return (
                    <div key={tierIndex}>
                        <h3 className="small-title-summit">{tier.label}</h3>
                        <div className="logos">
                            {summit_sponsors?.filter(sponsor => sponsor.sponsorship.id === tier.id).sort((a, b) => a.order - b.order).map((sponsor, sponsorKey) => {
                                return (
                                    <a className={`logo-${tier.name.toLowerCase()}`} href={sponsor.company.url}
                                        target="_blank" rel="noopener noreferrer" key={sponsorKey}>
                                        <img src={sponsor.company.big_logo ? sponsor.company.big_logo : sponsor.company.logo} alt={sponsor.company.name} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default SummitSponsorSliderYvr;