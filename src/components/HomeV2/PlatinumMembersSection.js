import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlatinumMembersSection = class extends React.Component {
    
    render() {
        const settings1 = {
            speed: 120000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 9,
            infinite: true,
            arrows: false
        };
        const settings2 = {
            speed: 120000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 9,
            infinite: true,
            arrows: false
        };
        return (
            <div className="container">
                <h3 className="home-v2-community-subheader">Backed By</h3>
                <h2 className="home-v2-header home-v2-community-header">Our Members</h2>
                <p className="home-v2-community-paragraph">The OpenInfra Foundation is supported by a strong network of some of the largest organizations in the world. These open source leaders champion open infrastructure and understand the vital importance it plays in their business.</p>
                <div className="home-v2-platinum-container">
                    <Slider {...settings1}>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    </Slider>
                </div>
                <div className="home-v2-platinum-container home-v2-platinum-container-offset">
                    <Slider {...settings2}>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    <div className="home-v2-platinum-sponsor-container">
                        <div className="home-v2-platinum-sponsor">
                            <img src="https://openinfra.dev/static/f49f864cba2b468610ed3bd05d0e6166/9f35a/Sponsor-Logos-Gold_99Cloud.png" />
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        );
      }
}

export default PlatinumMembersSection