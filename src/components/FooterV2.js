import React from 'react'
import logo from '../img/svg/OpenInfrastructureFoundation-logo-RGB-horiz2-w.svg'
import content from '../content/footer-nav.json'
import LinkComponent from './LinkComponent'

const FooterV2 = class extends React.Component {  
  render() {

    const {sections, footerBar} = content;
    
    return (
    <React.Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Jura:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Jura:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <footer className="footer is-dark footer-v2">
        <div className="footer-container-v2">
            <div className="footer-sections-v2">
            <div className="footer-section">
                <h6>Four Opens</h6>
                <ul>
                    <li><a href="/four-opens/">Our Philosophy</a></li>
                    <li><a href="four-opens/open-source/">Open Source</a></li>
                    <li><a href="/four-opens/open-development/">Open Development</a></li>
                    <li><a href="/four-opens/open-community/">Open Community</a></li>
                    <li><a href="/four-opens/open-design/">Open Design</a></li>
                </ul>
            </div>  
            <div className="footer-section">
                <h6>Projects</h6>
                <ul>
                    <li><a href="/projects/">Projects</a></li>
                    <li><a href="/proejcts/services/">Services</a></li>
                    <li><a href="/projects/hosting/">Host at the Foundation</a></li>
                    <li><a href="/hybrid-cloud/">Hybrid Cloud</a></li>
                    <li><a href="/user-survey/">User Survey</a></li>
                    <li><a href="/cla/">CLA</a></li>
                </ul>
            </div>  
            <div className="footer-section">
                <h6>Events</h6>
                <ul>
                    <li><a href="/live/">OpenInfra Live</a></li>
                    <li><a href="/live/keynotes/">OpenInfra Live: Keynotes</a></li>
                    <li><a href="/summit/">OpenInfra Summit</a></li>
                    <li><a href="https://www.openstack.org/events/community-events#openstack_days" target="_blank">OpenInfra Days</a></li>
                    <li><a href="https://www.meetup.com/pro/openinfradev/" target="_blank">Community Meetups</a></li>
                </ul>
            </div>  
            <div className="footer-section">
                <h6>About</h6>
                <ul>
                    <li><a href="/about/board/">Board of Directors</a></li>
                    <li><a href="/about/staff/">Foundation Staff</a></li>
                    <li><a href="/careers/">Open Infrastructure 101</a></li>
                    <li><a href="/about/openinfra-partnerships/">Partnerships</a></li>
                    <li><a href="/legal/">Legal Documents</a></li>
                    <li><a href="/contact/">Contact</a></li>
                </ul>
            </div>  
            <div className="footer-section footer-section-last">
                <div className="footer-section-last-divider">
                    <h6>Membership</h6>
                    <ul>
                        <li><a href="/members/">Supporting Organizations</a></li>
                        <li><a href="/join/">Join OpenInfra Foundation</a></li>
                    </ul>
                </div>
                <div className="footer-section-last-divider">
                    <h6>News</h6>
                    <ul>
                        <li><a href="/blog/">OpenInfra Blog</a></li>
                        <li><a href="/press/">Press & Media</a></li>
                        <li><a href="/newsletter/">Newsletter</a></li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="footer-v2-lower">
            <div className="nav-brand">
                <LinkComponent href="/" className="router-link-active">
                    <div className="logo-containter">
                    <div className="logo-containter-child logo-containter-child-img">
                        <img src={logo} alt="Open Infrastructure Foundation" />
                        </div>
                    </div>
                </LinkComponent>
            </div>
            <div className="footer-v2-social">
                <ul>
                    <li><a href="https://twitter.com/openinfradev"><img src="/img/footer/footer-twitter.svg" /></a></li>
                    <li><a href="https://www.linkedin.com/company/open-infrastructure-foundation"><img src="/img/footer/footer-linkedin.svg" /></a></li>
                    <li><a href="https://www.facebook.com/OPENINFRA.USA/"><img src="/img/footer/footer-facebook.svg" /></a></li>
                </ul>
            </div>
            </div>
            <div className="footer-bug-container">
                <p className="footer-bug">
                Find an issue with anything on this site? <a href="mailto:info@openinfra.dev" className="footer-list">Report a bug</a>
                </p>
            </div>  
        </div>
        <div className="footer-v2-bottom-bar">
            <div className="footer-v2-bar-1 footer-v2-bar"></div>
            <div className="footer-v2-bar-2 footer-v2-bar"></div>
            <div className="footer-v2-bar-3 footer-v2-bar"></div>
            <div className="footer-v2-bar-4 footer-v2-bar"></div>
        </div>
      </footer>
      { footerBar &&
      <div className="bar-footer is-dark-gray">
        <div className="container">
          <div className="bar-footer-inner">
            <div className="bar-footer-entry">
              <LinkComponent href={footerBar.privacy.url}>{footerBar.privacy.text}</LinkComponent> | <LinkComponent href={footerBar.legal.url}>{footerBar.legal.text}</LinkComponent>
            </div> 
              <div className="bar-footer-entry bar-footer-entry-right">
                {footerBar.text}
            </div>
          </div>
        </div>
      </div>
      } 
    </React.Fragment>
    )
  }
}

export default FooterV2