import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinkComponent from './LinkComponent';

import sponsoredProjects from "../content/sponsored-projects.json";

import { getSubProjectById } from '../utils/sponsoredProjects';

const CompaniesSection = class extends React.Component {

  render() {

    const { subProjectId } = this.props;

    const subProject = getSubProjectById(sponsoredProjects, subProjectId);

    const platinum = subProject.sponsorship_types.sort((a, b) => a.order - b.order)[0];

    const otherTiers = subProject.sponsorship_types.sort((a, b) => a.order - b.order).filter((e, index) => index !== 0);

    const formatSlider = (sponsors) => {
      let perChunk = 6 // items per chunk          
      let formattedArray = sponsors.reduce((resultArray, item, index) => {
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
      return formattedArray;
    }



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
          <h2 className="fix-h3" dangerouslySetInnerHTML={{ __html: subProject.description }} />
          <h3>{platinum.name}</h3>
          <div id="platinum-carousel" data-ride="carousel" data-interval="0" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {platinum.supporting_companies.sort((a, b) => a.order - b.order).map(({ company }, index) => {
                  return (
                    <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name}
                      style={{ width: 188, height: 101 }}
                      className="home-s8-container-child-logo" key={index} />
                  )
                }
                )}
              </div>
            </div>
          </div>
          {otherTiers.map(({ name, supporting_companies }, index) => {
            return (
              <>
                <h3>{name}</h3>

                <Slider {...slideSettings}>
                  {formatSlider(supporting_companies).sort((a, b) => a.order - b.order).map((list, index) => {
                    return (
                      <div key={index}>
                        {list.map(({ company }, index) => {
                          return (
                            <img src={company.big_logo ? company.big_logo : company.logo} alt={company.name}
                              style={{ marginRight: '1em', width: 140, height: 76 }}
                              className="home-s8-container-child-logo home-s8-gold-max-width" key={index} />
                          )
                        })}
                      </div>
                    )
                  })}
                </Slider>
              </>
            )
          })}


          <LinkComponent href="/members/" className="button button-red">
            <span>View all Member Companies <img src="/img/symbols/arrow-left.svg" alt="left arrow" /></span>
          </LinkComponent>
        </div>
      </section>
    )
  }
}

export default CompaniesSection