import React from "react"
import YouTube from '../../static/img/socials/youtube.svg'
import LinkedIn from '../../static/img/socials/linkedin.svg'
import Facebook from '../../static/img/socials/facebook.svg'
import Twitter from '../../static/img/socials/twitter.svg'



const SocialLinks = () => {
  return (
    <div className="social-div">

    <div className="upper-title">Connect With Us</div>

    <a href={"https://www.youtube.com/c/OpenStackFoundation"} target="_blank" rel="noreferrer"><img src={YouTube} alt="YouTube" className="social-icon-contact" /></a>
    <a href={"https://www.linkedin.com/company/open-infrastructure-foundation/"} target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn" className="social-icon-contact" /></a>
    <a href={"https://www.facebook.com/openinfradev/"} target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook" className="social-icon-contact" /></a>
    <a href={"https://twitter.com/openinfradev"} target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter" className="social-icon-contact" /></a>
  </div>
  )
}

export default SocialLinks;