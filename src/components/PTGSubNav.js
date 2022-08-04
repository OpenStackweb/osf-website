import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function PTGSubNav(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);

  useEffect(() => {
    let active = document.getElementById(props.active);
    active.className += " active";
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
    if(!isOpen) {
      setTimeout(function() {
        let activeMobile = document.getElementById(props.active + "-mobile");
        activeMobile.className += " active";
      }, 30);
    }
  }

  const shouldCloseMenu = (option) => {
    if (window.location.pathname.includes(option)) setIsOpen(false);
  }

  return (

    <nav className="subnav-bar">
      <div className="container">
        <div className="location">
          <LinkComponent href="/ptg" >PTG</LinkComponent>
        </div>

        <ul id="links-list" className="links-list">
          <li><LinkComponent id="ptg" href="/ptg" onClick={() => shouldCloseMenu("ptg")} className="link">About</LinkComponent></li>
          <li><a id="ptg-sponsor" href="https://openinfra.dev/files/PTG-Columbus2022-Prospectus-062722.pdf" onClick={() => shouldCloseMenu("ptg-sponsor")} className="link">Sponsor Info</a></li>
          <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} style={{ marginBottom: -33, paddingBottom: 30 }} className="dropdown-items-link">
            <LinkComponent id="ptg-faq" href="/ptg/faq" className="link" style={{ padding: 10, width: '110%', display: 'inline-flex' }}>
              Support
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </LinkComponent>
            {supportDropdown &&
              <div className='dropdown-items-container'>
                <div className='dropdown-items-inner'>
                  <LinkComponent id="ptg-faq" href="/ptg/faq" className="link dropdown">
                    FAQ
                  </LinkComponent>
                  <LinkComponent id="ptg-faq" href="/ptg/safety" className="link dropdown">
                    <span>Health & Safety</span>
                  </LinkComponent>
                  <LinkComponent id="ptg-visa-form" href="https://openinfrafoundation.formstack.com/forms/visa_columbus2022" className="link dropdown">
                    <span>Visa Letter Request</span>
                  </LinkComponent>
                </div>
              </div>
            }
          </li>
          <li><LinkComponent id="ptg-hotel" href="https://www.hyatt.com/en-US/group-booking/CMHRC/G-L0RT" onClick={() => shouldCloseMenu("ptg-hotel")} className="link">Book Your Hotel</LinkComponent></li>
          <li><LinkComponent id="registration" href="https://openinfra-ptg.eventbrite.com" className="link registration">Register</LinkComponent></li>
        </ul>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>

      </div>

      {isOpen &&
        <div className="subnav-dropdown">
          <ul id="links-list-mobile" className="links-list">
          <li><LinkComponent id="ptg-mobile" href="/ptg" onClick={() => shouldCloseMenu("ptg")} className="link">About</LinkComponent></li>
          <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} className="link-dropdown">
              <LinkComponent id="ptg-faq-mobile" href="#" className="link link-dropdown-parent" >
                Support
                <i style={{ marginLeft: 5 }} className={`fa fa-chevron-down`} />
              </LinkComponent>
              {supportDropdown &&
                <>
                  <LinkComponent id="ptg-faq-mobile" href="/ptg/faq" onClick={() => shouldCloseMenu("ptg")} className="link-dropdown-option" >
                    FAQs
                  </LinkComponent>
                  <LinkComponent id="ptg-safety-mobile" href="/ptg/safety" onClick={() => shouldCloseMenu("ptg")} className="link-dropdown-option">
                    <span>Health & Safety</span>
                  </LinkComponent>
                  <LinkComponent id="ptg-visa-form-mobile" href="https://openinfrafoundation.formstack.com/forms/visa_columbus2022" onClick={() => shouldCloseMenu("ptg-visa-form-mobile")} className="link-dropdown-option">
                    <span>Visa Letter Request</span>
                  </LinkComponent>
                </>
              }
            </li>
          <li><a id="ptg-sponsor=mobile" href="https://openinfra.dev/files/PTG-Columbus2022-Prospectus-062722.pdf" onClick={() => shouldCloseMenu("ptg-sponsor")} className="link">Sponsor Info</a></li>
          <li><LinkComponent id="ptg-hotel-mobile" href="https://www.hyatt.com/en-US/group-booking/CMHRC/G-L0RT" onClick={() => shouldCloseMenu("ptg-hotel")} className="link">Book Your Hotel</LinkComponent></li>
          <li><LinkComponent id="registration-mobile" href="https://openinfra-ptg.eventbrite.com" className="link registration">Register</LinkComponent></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default PTGSubNav