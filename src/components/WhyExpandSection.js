import React from 'react'

const WhyExpandSection = class extends React.Component {

  render() {

    const { whyExpand: { title, text, icons } } = this.props;

    let perChunk = 2 // items per chunk    
    let inputArray = icons;
    let iconsArray = inputArray.reduce((resultArray, item, index) => {
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

    return (
      <section className="section-bg-white">
        <div className="section-bg-white-child container">
          <div className="section-bg-white-center">
            <div className="fix-h3">{title}</div>
            {text.split("\n").map((p, index) => {
              return (
                <div className="fix-h5" key={index}>
                  {p}
                </div>
              )
            })}
            <br />
            <br />
            <br />
            <br />
            <div className="section-bg-white-icons-container">
              {iconsArray.map((iconRow, rowIndex) => {
                return (
                  <div key={rowIndex} className={
                    `${rowIndex < 1 ? 'section-bg-white-icons1' : 'section-bg-white-icons2'} ${rowIndex + 1 === iconsArray.length ? '' : 'icons'}`}>
                    {iconRow.map((icon, index) => {
                      return (
                        <div key={index} className={
                          `${rowIndex < 1 ? 'section-bg-white-icons-child1' : 'section-bg-white-icons-child2'} ${rowIndex === 0 && index === 0 ? '' : 'icons'}`}>
                          {icon.image &&
                            <img style={{ height: "70px" }} src={
                              (icon.image.extension === 'svg' || icon.image.extension === 'gif') && !icon.image.childImageSharp ?
                                icon.image.publicURL
                                :
                                !!icon.image.childImageSharp ? icon.image.childImageSharp.fluid.src : icon.image
                            } />
                          }
                          <p>{icon.text}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WhyExpandSection