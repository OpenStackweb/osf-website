import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const QuotesSection = class extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
    next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    
    render() {
        const settings = {
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            arrows: false,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                    breakpoint: 550,
                    settings: {
                      slidesToShow: 1,
                    }
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 1,
                      centerMode: false,
                    }
                  },
              ]
        };
        return (
            <div className="container">
                <link rel="stylesheet" href="/styles/slider.css"></link>
                <div className="home-v2-quotes-container">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">As the only OpenInfra Gold Member in Thailand, it’s exciting to see more organizations in southeast Asia join us in leveraging the flexibility and cost efficiency of OpenStack. We are honored to be a part of the rapidly growing, global footprint of OpenStack powered public clouds.</p>
                            <div className="home-v2-quote-inner-container">
                                <p className="home-v2-quote-name">- Abhisak Chulya</p>
                                <p className="home-v2-quote-title">CEO, NIPA Cloud</p>
                                <img src="/img/homeV2/quotes-images/microsoft-logo.png" />
                            </div>
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Red Hat’s Platinum membership allows us to invest directly in the Foundation and influence its strategic direction at the highest level. It’s the icing on the cake, as Red Hatters are expected to be leaders at all levels, ensuring sustainability of the community and the long-term health of the code.</p>
                            <div className="home-v2-quote-inner-container">
                                <p className="home-v2-quote-name">— Eoghan Glynn</p>
                                <p className="home-v2-quote-title">Director of Engineering, Red Hat</p>
                                <img src="/img/homeV2/quotes-images/redhat.png" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Today was a great day for @ZuulCI and @OpenStack at @leboncoinEng! Testing the load capacity of our primary #OpenStack cluster. Excited to add the second one tomorrow and perform more #ZuulCI builds on them!</p>
                            <div className="home-v2-quote-inner-container">
                                <p className="home-v2-quote-name">— Mark Collier</p>
                                <p className="home-v2-quote-title">Product Designer, Quotient</p>
                                <img src="/img/homeV2/quotes-images/kata-containers.png" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Thanks to the #openstack infra team for the help to debug a mailing list issue. It's easy to forget how much effort goes into an open source community above writing the code: ticket handling, user registration, test infrastructure, web outreach and collaboration tools.</p>
                            <div className="home-v2-quote-inner-container">
                                <p className="home-v2-quote-name">- Renee Wells</p>
                                <p className="home-v2-quote-title">Product Designer, Quotient</p>
                                <img src="/img/homeV2/quotes-images/microsoft-logo.png" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">OpenInfra Foundation is one of the main reasons Kata Containers is seeing production adoption around the world from companies like Ant Group, AMD, and Baidu. They take on all of the tasks that developers don’t want to. And it works out well, because they’re so good at those things!</p>
                            <div className="home-v2-quote-inner-container">
                                <p className="home-v2-quote-name">— Travis Smith</p>
                                <p className="home-v2-quote-title">Product Designer, Quotient</p>
                                <img src="/img/homeV2/quotes-images/redhat.png" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">We are here at the OpenInfra Foundation to participate in the community and work together to build and integrate open source technologies to deliver carrier-grade Microsoft Azure for Operators infrastructure.</p>
                            <div className="home-v2-quote-inner-container">
                                <p className="home-v2-quote-name">— Ryan van Wyk</p>
                                <p className="home-v2-quote-title">Partner Software Engineering Manager for Azure for Operators at Microsoft</p>
                                <img src="/img/homeV2/quotes-images/microsoft-logo.png" />
                            </div>
                            
                        </div>
                    </div>
                    </Slider>
                </div>
                <div className="home-v2-quote-btn-container">
                    <button className="quote-button" onClick={this.previous}>
                        <img src="/img/homeV2/prev-arrow.svg" />
                    </button>
                    <button className="quote-button" onClick={this.next}>
                        <img src="/img/homeV2/next-arrow.svg" />
                    </button>
                </div>
            </div>
        );
      }
}

export default QuotesSection