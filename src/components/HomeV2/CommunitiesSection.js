import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sponsoredProjects from "../../content/sponsored-projects.json";
import { getSubProjectById } from '../../utils/sponsoredProjects';
import { getEnvVariable, MEMBERS_SUBPROJECT_ID } from '../../utils/envVariables';

const CommunitiesSection = class extends React.Component {
    
    render() {
        const subProject = getSubProjectById(sponsoredProjects, parseInt(getEnvVariable(MEMBERS_SUBPROJECT_ID)));
        const settings1 = {
            speed: 90000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 6,
            slidesToScroll: 18,
            infinite: true,
            arrows: false,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    speed: 120000,
                    slidesToShow: 4,
                    slidesToScroll: 18,
                    infinite: true
                  }
                },
                {
                    breakpoint: 767,
                    settings: {
                      speed: 120000,
                      slidesToShow: 3,
                      slidesToScroll: 18,
                      infinite: true
                    }
                  },
                  {
                    breakpoint: 475,
                    settings: {
                      speed: 120000,
                      slidesToShow: 2,
                      slidesToScroll: 18,
                      infinite: true
                    }
                  },
              ]
        };
        const settings2 = {
            speed: 100000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 6,
            slidesToScroll: 20,
            infinite: true,
            arrows: false,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    speed: 120000,
                    slidesToShow: 4,
                    slidesToScroll: 20,
                    infinite: true
                  }
                },
                {
                    breakpoint: 767,
                    settings: {
                      speed: 120000,
                      slidesToShow: 3,
                      slidesToScroll: 20,
                      infinite: true
                    }
                  },
                  {
                    breakpoint: 475,
                    settings: {
                      speed: 120000,
                      slidesToShow: 2,
                      slidesToScroll: 20,
                      infinite: true
                    }
                  },
              ]
        };
        return (
            <div className="container">
                <h3 className="home-v2-community-subheader home-v2-community-subheader-margin">Our Gold Members</h3>
                <div className="home-v2-gold-container">
                        { subProject.sponsorship_types.sort((a, b) => a.order - b.order).map((t, tierIndex) => {
                        if (t.name == "Gold Members") {
                            return (
                                    <span key={`company-tier-${tierIndex}`}>
                                        <Slider {...settings1}>
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index < 9) {
                                                return (
                                                    <div className="home-v2-gold-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-gold-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index < 9) {
                                                return (
                                                    <div className="home-v2-gold-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-gold-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        </Slider>
                                    </span>
                            )
                        }
                    }) }
                </div>
                <div className="home-v2-gold-container home-v2-gold-container-offset">
                { subProject.sponsorship_types.sort((a, b) => a.order - b.order).map((t, tierIndex) => {
                        if (t.name == "Gold Members") {
                            return (
                                    <span key={`company-tier-${tierIndex}`}>
                                        <Slider {...settings2}>
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index >= 9) {
                                                return (
                                                    <div className="home-v2-gold-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-gold-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        {t.supporting_companies.sort((a, b) => a.order - b.order).map(({company}, index) => {
                                            if (index >= 9) {
                                                return (
                                                    <div className="home-v2-gold-sponsor-container" key={`company-tier-${tierIndex}-${index}`}>
                                                        <div className="home-v2-gold-sponsor">
                                                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name} />
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })}
                                        </Slider>
                                    </span>
                            )
                        }
                    }) }
                </div>
            <div className="home-v2-community-btn-container">
                <a href="/join/">
                    <div className="home-v2-community-btn home-v2-community-btn-primary">
                        Become a Member
                    </div>
                </a>
                <a href="/members/">
                    <div className="home-v2-community-btn">
                        <span className="secondary-btn-arrow">See All Members</span>
                    </div>
                </a>
            </div>
          </div>
        );
      }
}

export default CommunitiesSection