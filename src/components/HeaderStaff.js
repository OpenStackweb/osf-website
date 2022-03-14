import React from 'react'
import LinkComponent from './LinkComponent';

const HeaderStaff = class extends React.Component {  
  render() {

    const { title, subTitle, button, image } = this.props.banner;

    return (
      <section className="aboutstaff-s1-main">
        <div className="aboutstaff-s1-container">
          <div className="container">
            <div className="columns">
              <div className="column aboutstaff-s1-1-container">
                <div className="fix-h3">{title}</div> 
                <div className="fix-h5">{subTitle}</div> 
                <LinkComponent href={button.url} className="button button-red">
                    {button.text}
                </LinkComponent>
              </div> 
              <div className="column aboutstaff-s1-1-container">
                <img src={!!image.childImageSharp? image.childImageSharp.fluid.src: image} id="aboutstaff-s1-id-pic1" alt="staff" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeaderStaff