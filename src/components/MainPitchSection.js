import React from 'react'

const MainPitchSection = class extends React.Component {

  render() {

    const { mainpitch: { row1, row2 } } = this.props;

    return (
      <section className="home-s1-main">
        <div className="home-s1-container container">
          <div className="home-s1-col">
            <div className="home-s1-col-content-left">
              {row1.images.map((image, index) => {
                if (image.image) {
                  return (
                    <img src={!!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image}
                      width={image.width}
                      height={image.height} alt=""
                      className={index < 1 ? 'home-picture1' : 'home-picture2'} key={index} />
                  )
                }
              })}
            </div>
          </div>
          <div className="home-s1-col">
            <div className="home-s1-col-content-right">
              <div className="home-s1-text">
                <div className="fix-h3">{row1.title}</div>
                {row1.text.split("\n").map((p, index) => {
                  return (
                    <p className="fix-h5" key={index}>
                      {p}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="home-s1-container container">
          <div className="home-s1-col">
            <div className="home-s1-col-content-left">
              <div className="home-s1-text">
                <div className="fix-h3">{row2.title}</div>
                {row2.text.split("\n").map((p, index) => {
                  return (
                    <p className="fix-h5" key={index}>
                      {p}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="home-s1-col">
            <div className="home-s1-col-content-right">
              {row2.images.map((image, index) => {
                if (image.image) {
                  return (
                    <img src={!!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image}
                      width={image.width}
                      height={image.height} alt=""
                      className={index < 1 ? 'home-picture3' : 'home-picture4'} key={index} />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MainPitchSection