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
            speed: 500,
            arrows: false
        };
        return (
            <div className="container">
                <link rel="stylesheet" href="/styles/slider.css"></link>
                <div className="home-v2-quotes-container">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Thanks to the #openstack infra team for the help to debug a mailing list issue. It's easy to forget how much effort goes into an open source community above writing the code: ticket handling, user registration, test infrastructure, web outreach and collaboration tools.</p>
                            <p className="home-v2-quote-name">- Renee Wells</p>
                            <p className="home-v2-quote-title">Product Designer, Quotient</p>
                            <img src="/img/homeV2/microsoft-logo.png" />
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Thanks to the #openstack infra team for the help to debug a mailing list issue. It's easy to forget how much effort goes into an open source community above writing the code: ticket handling, user registration, test infrastructure, web outreach and collaboration tools.</p>
                            <p className="home-v2-quote-name">- Renee Wells</p>
                            <p className="home-v2-quote-title">Product Designer, Quotient</p>
                            <img src="/img/homeV2/microsoft-logo.png" />
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Thanks to the #openstack infra team for the help to debug a mailing list issue. It's easy to forget how much effort goes into an open source community above writing the code: ticket handling, user registration, test infrastructure, web outreach and collaboration tools.</p>
                            <p className="home-v2-quote-name">- Renee Wells</p>
                            <p className="home-v2-quote-title">Product Designer, Quotient</p>
                            <img src="/img/homeV2/microsoft-logo.png" />
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Thanks to the #openstack infra team for the help to debug a mailing list issue. It's easy to forget how much effort goes into an open source community above writing the code: ticket handling, user registration, test infrastructure, web outreach and collaboration tools.</p>
                            <p className="home-v2-quote-name">- Renee Wells</p>
                            <p className="home-v2-quote-title">Product Designer, Quotient</p>
                            <img src="/img/homeV2/microsoft-logo.png" />
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Thanks to the #openstack infra team for the help to debug a mailing list issue. It's easy to forget how much effort goes into an open source community above writing the code: ticket handling, user registration, test infrastructure, web outreach and collaboration tools.</p>
                            <p className="home-v2-quote-name">- Renee Wells</p>
                            <p className="home-v2-quote-title">Product Designer, Quotient</p>
                            <img src="/img/homeV2/microsoft-logo.png" />
                        </div>
                    </div>
                    <div className="home-v2-quote-box">
                        <div className="home-v2-quote">
                            <p className="home-v2-quote-text">Thanks to the #openstack infra team for the help to debug a mailing list issue. It's easy to forget how much effort goes into an open source community above writing the code: ticket handling, user registration, test infrastructure, web outreach and collaboration tools.</p>
                            <p className="home-v2-quote-name">- Renee Wells</p>
                            <p className="home-v2-quote-title">Product Designer, Quotient</p>
                            <img src="/img/homeV2/microsoft-logo.png" />
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