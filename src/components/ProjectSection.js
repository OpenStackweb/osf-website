import React from 'react'
import LinkComponent from './LinkComponent';

const ProjectSection = class extends React.Component {

  render() {

    const { projects: { title, images, text, button } } = this.props;

    return (
      <section className="section-bg-green">
        <div className="section-bg-green-child container">
          <div className="section-bg-white-center">
            <div className="fix-h3">{title}</div>
            <div className="section-bg-green-logos-container">
              {images.map((image, index) => {
                if (image.image) {
                  return (
                    <div className="section-bg-green-logo" key={index}>
                      <img src={
                        (image.image.extension === 'svg' || image.image.extension === 'gif') && !image.image.childImageSharp ?
                          image.image.publicURL
                          :
                          !!image.image.childImageSharp ? image.image.childImageSharp.fluid.src : image.image
                      } alt="" />
                    </div>
                  )
                }
              })}
            </div>
            <div className="fix-h5">
              {text}
            </div>
            <LinkComponent href={button.link} className="button button-red">
              <span>{button.text}</span>
            </LinkComponent>
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectSection