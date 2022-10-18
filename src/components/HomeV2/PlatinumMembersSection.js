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
            slidesToScroll: 12,
            infinite: true,
            arrows: false
        };
        const settings2 = {
            speed: 120000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            slidesToShow: 3,
            slidesToScroll: 12,
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
                                <img src="https://www.openinfra.dev/static/8746b204e4fe5deb50f626e2b16d5823/72832/Sponsor-Logos_AntGroup.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/59288bb561e571f37b221011fe83d30c/72832/Sponsor-Logos_Ericsson.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/4a3da45cc859965a526792c3f3c84722/d4aba/Sponsor-Logos_FiberHome.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/f26e50cdc57660264279bcf76ec1545e/72832/Sponsor-Logos_Huawei.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/8746b204e4fe5deb50f626e2b16d5823/72832/Sponsor-Logos_AntGroup.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/59288bb561e571f37b221011fe83d30c/72832/Sponsor-Logos_Ericsson.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/4a3da45cc859965a526792c3f3c84722/d4aba/Sponsor-Logos_FiberHome.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/f26e50cdc57660264279bcf76ec1545e/72832/Sponsor-Logos_Huawei.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/8746b204e4fe5deb50f626e2b16d5823/72832/Sponsor-Logos_AntGroup.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/59288bb561e571f37b221011fe83d30c/72832/Sponsor-Logos_Ericsson.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/4a3da45cc859965a526792c3f3c84722/d4aba/Sponsor-Logos_FiberHome.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/f26e50cdc57660264279bcf76ec1545e/72832/Sponsor-Logos_Huawei.png" />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="home-v2-platinum-container home-v2-platinum-container-offset">
                    <Slider {...settings2}>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/d2f541f65755a86ca8361e1fca0e9308/a07e6/WNDRVR.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/d103d3b7af6d0ed106d02afe52f1e0a1/d4aba/Sponsor-Logos_TencentCloud.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/ae0b828377c3e71367d890f754dbab89/72832/Sponsor-Logos_RedHat.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/e9bf5c9ff8d1cd08142befeec5354370/72832/sponsor-logos_microsoft.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/d2f541f65755a86ca8361e1fca0e9308/a07e6/WNDRVR.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/d103d3b7af6d0ed106d02afe52f1e0a1/d4aba/Sponsor-Logos_TencentCloud.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/ae0b828377c3e71367d890f754dbab89/72832/Sponsor-Logos_RedHat.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/e9bf5c9ff8d1cd08142befeec5354370/72832/sponsor-logos_microsoft.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/d2f541f65755a86ca8361e1fca0e9308/a07e6/WNDRVR.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/d103d3b7af6d0ed106d02afe52f1e0a1/d4aba/Sponsor-Logos_TencentCloud.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/ae0b828377c3e71367d890f754dbab89/72832/Sponsor-Logos_RedHat.png" />
                            </div>
                        </div>
                        <div className="home-v2-platinum-sponsor-container">
                            <div className="home-v2-platinum-sponsor">
                                <img src="https://www.openinfra.dev/static/e9bf5c9ff8d1cd08142befeec5354370/72832/sponsor-logos_microsoft.png" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
      }
}

export default PlatinumMembersSection