import React from 'react'

import content from '../content/contact-info.json'
import LinkComponent from './LinkComponent'

const ContactInformation = class extends React.Component {
  render() {
    return (
      <div className="aboutstaff-s3-main">
        <div className="container">
          <div className="columns">
            <div className="column">
              {content.images.map((img, index) => {
                return (
                  <img src={img.image} width={img.width} height={img.height} id={index < 1 ? 'aboutstaff-s3-id-pic2': 'aboutstaff-s3-id-pic3'} alt="about" key={index} />
                )
              })}
            </div> 
            <div className="column">
              <div className="columns">
                <div id="aboutstaff-s3-col-1" className="column aboutstaff-s3-col">
                  <div className="fix-h3">CONTACT INFORMATION</div> 
                  <LinkComponent href="mailto:community@openinfra.dev" id="btncontactus" className="button button-red">
                    <span>Contact us</span>
                  </LinkComponent>                  
                </div> 
                <div id="aboutstaff-s3-col-2" className="column  aboutstaff-s3-col">
                  <div className="fix-h3">MORE ABOUT THE FOUNDATION</div> 
                  <p><LinkComponent href="/about/board/" className="aboutstaff-s3-link">Governing Board</LinkComponent></p> 
                  <p><LinkComponent href="https://governance.openstack.org/tc/" className="aboutstaff-s3-link">Technical Committee</LinkComponent></p> 
                  <p><LinkComponent href="https://www.openstack.org/community/members/" className="aboutstaff-s3-link">Member Directory</LinkComponent></p> 
                  <p><LinkComponent href="/members/" className="aboutstaff-s3-link">Supporting Organizations</LinkComponent></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactInformation