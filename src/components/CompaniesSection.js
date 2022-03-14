import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinkComponent from './LinkComponent';

const CompaniesSection = class extends React.Component {

  render() {

    const { sponsor: { title, platinum, gold } } = this.props;

    let perChunk = 6 // items per chunk    
    let inputArray = gold.companyList;
    let goldCompanies = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      if (resultArray.length === 4) {
        resultArray[2] = [...resultArray[2], ...resultArray[3]]
        resultArray.pop();
      }

      return resultArray
    }, [])

    function SamplePrevArrow(props) {
      const { style, onClick } = props;
      return (
        <a role="button" data-slide="prev" className="carousel-control-prev" style={{ ...style, display: 'flex' }} onClick={onClick}>
          <span aria-hidden="true" className="carousel-control-prev-icon"></span>
          <img src="/img/symbols/logo-arrow-left.svg" alt="Previous" className="home-s8-container-child" />
        </a>
      );
    }

    function SampleNextArrow(props) {
      const { style, onClick } = props;
      return (
        <a role="button" data-slide="next" className="carousel-control-next" style={{ ...style, display: 'flex' }} onClick={onClick}>
          <span aria-hidden="true" className="carousel-control-next-icon"></span>
          <img src="/img/symbols/logo-arrow-right.svg" alt="Next" className="home-s8-container-child" />
        </a>
      );
    }

    let slideSettings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <section className="home-s8-main">
        <div className="container">
          <h2 className="fix-h3">{title}</h2>
          <h3>{platinum.title}</h3>
          <div id="platinum-carousel" data-ride="carousel" data-interval="0" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {platinum.companyList.map((company, index) => {
                  if (company.image) {
                    return (
                      <img src={
                        (company.image.extension === 'svg' || company.image.extension === 'gif') && !company.image.childImageSharp ?
                          company.image.publicURL
                          :
                          !!company.image.childImageSharp ? company.image.childImageSharp.fluid.src : company.image
                      } alt={company.alt} className="home-s8-container-child-logo" key={index} />
                    )
                  }
                })}
              </div>
            </div>
          </div>
          <h3>{gold.title}</h3>

          <Slider {...slideSettings}>
            {goldCompanies.map((list, index) => {
              return (
                <div key={index}>
                  {list.map((company, index) => {
                    if (company.image) {
                      return (
                        <img src={
                          (company.image.extension === 'svg' || company.image.extension === 'gif') && !company.image.childImageSharp ?
                            company.image.publicURL
                            :
                            !!company.image.childImageSharp ? company.image.childImageSharp.fluid.src : company.image
                        } alt={company.alt} style={{ marginRight: '1em' }} className="home-s8-container-child-logo" key={index} />
                      )
                    }
                  })}
                </div>
              )
            })}
          </Slider>

          <LinkComponent href="/members/" className="button button-red">
            <span>View all Member Companies <img src="/img/symbols/arrow-left.svg" alt="left arrow" /></span>
          </LinkComponent>
        </div>
      </section>
    )
  }
}

export default CompaniesSection