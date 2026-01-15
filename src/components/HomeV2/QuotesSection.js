import React from "react";
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
            infinite: true,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    };
    return (
      <div>
        <link rel="stylesheet" href="/styles/slider.css"></link>
        <div className="home-v2-quotes-container">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="home-v2-quote-box">
              <div className="home-v2-quote">
                <p className="home-v2-quote-text">
                  As the only OpenInfra Gold Member in Thailand, it’s exciting
                  to see more organizations in southeast Asia join us in
                  leveraging the flexibility and cost efficiency of OpenStack.
                  We are honored to be a part of the rapidly growing, global
                  footprint of OpenStack powered public clouds.
                </p>
                <div className="home-v2-quote-inner-container">
                  <p className="home-v2-quote-name">- Abhisak Chulya</p>
                  <p className="home-v2-quote-title">CEO, NIPA Cloud</p>
                  <img
                    className="home-v2-quote-logo-resize"
                    src="/img/homeV2/quotes-images/nipa-small-logo.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="home-v2-quote-box">
              <div className="home-v2-quote">
                <p className="home-v2-quote-text">
                  Red Hat’s Platinum membership allows us to invest directly in
                  the Foundation and influence its strategic direction at the
                  highest level. It’s the icing on the cake, as Red Hatters are
                  expected to be leaders at all levels, ensuring sustainability
                  of the community and the long-term health of the code.
                </p>
                <div className="home-v2-quote-inner-container">
                  <p className="home-v2-quote-name">— Eoghan Glynn</p>
                  <p className="home-v2-quote-title">
                    Director of Engineering, Red Hat
                  </p>
                  <img
                    className="home-v2-quote-logo-resize"
                    src="/img/homeV2/quotes-images/redhat-svg.svg"
                  />
                </div>
              </div>
            </div>
            <div className="home-v2-quote-box">
              <div className="home-v2-quote">
                <p className="home-v2-quote-text">
                  We're really excited being an active member in the open
                  infrastructure foundation with what we really view as a place
                  for crowdsourced innovation. The ability for multiple
                  companies and individual developers to come together and
                  contribute in a way that can solve these problems at scale.
                </p>
                <div className="home-v2-quote-inner-container">
                  <p className="home-v2-quote-name">— Paul Miller</p>
                  <p className="home-v2-quote-title">CTO, Wind River</p>
                  <img
                    className="home-v2-quote-logo-resize"
                    src="/img/homeV2/quotes-images/wind-river-logo.svg"
                  />
                </div>
              </div>
            </div>
            <div className="home-v2-quote-box">
              <div className="home-v2-quote">
                <p className="home-v2-quote-text">
                  This is how collaboration at the #OpenInfraSummit looks like
                  Different affiliations, different cultures, different
                  countries all working together to make OpenStack as great as
                  it can be!
                </p>
                <div className="home-v2-quote-inner-container">
                  <p className="home-v2-quote-name">
                    - Victoria Martinez de la Cruz
                  </p>
                  <p className="home-v2-quote-title">
                    Senior Software Engineer, Red Hat
                  </p>
                  <img
                    className="home-v2-quote-logo-resize"
                    src="/img/homeV2/quotes-images/redhat-svg.svg"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="container">
          <div className="home-v2-quote-btn-container">
            <button className="quote-button" onClick={this.previous}>
              <img src="/img/homeV2/prev-arrow.svg" />
            </button>
            <button className="quote-button" onClick={this.next}>
              <img src="/img/homeV2/next-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default QuotesSection;
