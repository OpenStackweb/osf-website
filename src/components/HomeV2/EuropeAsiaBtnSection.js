import React from "react";
import AsiaBtnImg from "../../../static/img/homeV2/eurasia-btn-images/logo asia.png";
import EurBtnImg from "../../../static/img/homeV2/eurasia-btn-images/logo europe.png";

const EuropeAsiaBtnSection = class extends React.Component {
  render() {
    return (
      <div className="home-v2-outer-container-dark ">
        <div className="eurasia-flex">
          <h2 className="home-v2-eurasia-text-container home-v2-header home-v2-header-white home-v2-eurasia-btn-section">
            OPENINFRA{" "}
            <span className="home-v2-header-red">ASIA AND EUROPE:</span> <br />A
            REGIONAL HUB TO PROMOTE, PROTECT <br />
            OPEN SOURCE INFRASTRUCTURE
          </h2>
        </div>
        <div className="eurasia-btn-flex">
          <div className="eurasia-btn asia">
            {" "}
            <img src={AsiaBtnImg} alt={"OpenInfra Asia"} />
            <a
              className="eurasia-btn-link"
              href="https://openinfraasia.org/"
              target="_blank"
            >
              &rarr; openinfraasia.org
            </a>
          </div>
          <div className="eurasia-btn eur">
            {" "}
            <img src={EurBtnImg} alt={"OpenInfra Europe"} />
            <a
              className="eurasia-btn-link"
              href="https://openinfraeurope.org/"
              target="_blank"
            >
              &rarr; openinfraeurope.org
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default EuropeAsiaBtnSection;
