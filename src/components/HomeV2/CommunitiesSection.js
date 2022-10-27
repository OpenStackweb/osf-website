import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommunitiesSection = class extends React.Component {
    
    render() {
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
        return (
            <div className="container">
                <h3 className="home-v2-community-subheader home-v2-community-subheader-margin">Our Gold Members</h3>
                <div className="home-v2-gold-container">
                    <Slider {...settings1}>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/0ef8c16431900b5f6ff88ee66408d610/9f35a/Sponsor-Logos-Gold_99Cloud%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/6cdd6341e3cd061609b49897cdafdbd7/9f35a/Sponsor-Logos-Gold_ChinaMobile%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/0c7007e87e42ebac702de7d40586cab9/9f35a/Sponsor-Logos-Gold_ChinaTelecom%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/371133cc3329319e0bb3283c7adc08fe/9f35a/Sponsor-Logos-Gold_ChinaUnicom%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/f12d2343993ed452d2c7914c9688299f/9f35a/Sponsor-Logos-Gold_Cisco%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/d6de3bda0da5fa2cc4bc36f4bcb3882e/4bc7c/cleura-lg.jpg" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/1cacd44c21b39bc25c4a8c1e73e453c5/9f35a/Sponsor-Logos-Gold_EasyStack%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/8fb5098793eadeba4bdd08aca74aeb38/347a3/h3c-lg.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/baee2b0c869814187e7ae413e80ab654/4bc7c/inspurdata-lg.jpg" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/0ef8c16431900b5f6ff88ee66408d610/9f35a/Sponsor-Logos-Gold_99Cloud%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/6cdd6341e3cd061609b49897cdafdbd7/9f35a/Sponsor-Logos-Gold_ChinaMobile%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/0c7007e87e42ebac702de7d40586cab9/9f35a/Sponsor-Logos-Gold_ChinaTelecom%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/371133cc3329319e0bb3283c7adc08fe/9f35a/Sponsor-Logos-Gold_ChinaUnicom%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/f12d2343993ed452d2c7914c9688299f/9f35a/Sponsor-Logos-Gold_Cisco%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/d6de3bda0da5fa2cc4bc36f4bcb3882e/4bc7c/cleura-lg.jpg" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/1cacd44c21b39bc25c4a8c1e73e453c5/9f35a/Sponsor-Logos-Gold_EasyStack%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/8fb5098793eadeba4bdd08aca74aeb38/347a3/h3c-lg.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/baee2b0c869814187e7ae413e80ab654/4bc7c/inspurdata-lg.jpg" />
                        </div>
                    </Slider>
                </div>
                <div className="home-v2-gold-container home-v2-gold-container-offset">
                    <Slider {...settings2}>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/80cd5195c526099351df48ec824871f8/9f35a/Sponsor-Logos-Gold_Intel%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/d17362815a909564b6069b39e60681a5/9f35a/Sponsor-Logos-Gold_Mirantis%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/d3c78009c0c181de31c44f98884959a7/9f35a/Sponsor-Logos-Gold_NEC%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/eb496ac5f0c7282bcbb586c94c066d58/4c4e7/nipa-gold.jpg" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/2d4b58896edc80b08ac296fff1302e53/9f35a/Sponsor-Logos-Gold_T-Systems%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/89a4e13b6cb5ddaace856693f1fad641/9f35a/Sponsor-Logos-Gold_Troila%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/499418d0ed99716f9b46c14285693457/9f35a/Sponsor-Logos-Gold_Ubuntu%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/e199c6e7e77e915d31ffd26f40b09814/b6845/Sponsor-Logos-Gold_ZTE%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/9d89ca70a332007034ac5a2985d581b9/60dc1/vexxhost-sm-copy.jpg" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/80cd5195c526099351df48ec824871f8/9f35a/Sponsor-Logos-Gold_Intel%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/d17362815a909564b6069b39e60681a5/9f35a/Sponsor-Logos-Gold_Mirantis%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/d3c78009c0c181de31c44f98884959a7/9f35a/Sponsor-Logos-Gold_NEC%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/eb496ac5f0c7282bcbb586c94c066d58/4c4e7/nipa-gold.jpg" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/2d4b58896edc80b08ac296fff1302e53/9f35a/Sponsor-Logos-Gold_T-Systems%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/89a4e13b6cb5ddaace856693f1fad641/9f35a/Sponsor-Logos-Gold_Troila%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/499418d0ed99716f9b46c14285693457/9f35a/Sponsor-Logos-Gold_Ubuntu%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/e199c6e7e77e915d31ffd26f40b09814/b6845/Sponsor-Logos-Gold_ZTE%201.png" />
                        </div>
                        <div className="home-v2-gold-sponsor">
                            <img src="https://www.openinfra.dev/static/9d89ca70a332007034ac5a2985d581b9/60dc1/vexxhost-sm-copy.jpg" />
                        </div>
                    </Slider>
                </div>
            <div className="home-v2-community-btn-container">
                <a href="">
                    <div className="home-v2-community-btn home-v2-community-btn-primary">
                        Become a Member
                    </div>
                </a>
                <a href="">
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