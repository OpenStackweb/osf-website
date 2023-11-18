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

    <nav className="subnav-bar subnav-bar-ptg">
      <div className="container">
        <div className="location">
          <LinkComponent href="/ptg" >PTG</LinkComponent>
        </div>

        <ul id="links-list" className="links-list">
          <li><LinkComponent id="ptg" href="/ptg" onClick={() => shouldCloseMenu("ptg")} className="link">About</LinkComponent></li>
          <li><LinkComponent id="ptg-faq" href="/ptg/faq" onClick={() => shouldCloseMenu("ptg-faq")} className="link">FAQ</LinkComponent></li>
          <li><LinkComponent id="registration" href="https://ptg2023.openinfra.dev/" className="link registration">Register</LinkComponent></li>
          {/* <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} style={{ marginBottom: -30, paddingBottom: 30 }}>
            <LinkComponent id="summit-faq" href="#" className="link registration" style={{ width: '110%', display: 'inline-flex' }}>
              Register
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </LinkComponent>
            {supportDropdown &&
              <div className='dropdown-options'>
                <LinkComponent id="ptg-virtual-reg" href="https://openinfra-ptg.eventbrite.com/" className="link dropdown">
                  Virtual PTG
                </LinkComponent>
                <LinkComponent id="ptg-summit-reg" href="https://vancouver2023.openinfra.dev/" className="link dropdown">
                  <span>OpenInfra Summit + PTG</span>
                </LinkComponent>
              </div>
            }
          </li> */}
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
          <li><LinkComponent id="ptg-faq-mobile" href="/ptg/faq" onClick={() => shouldCloseMenu("ptg")} className="link">FAQ</LinkComponent></li>
        {/*   <li><LinkComponent id="registration-mobile" href="https://ptg2023.openinfra.dev/" className="link registration">Register</LinkComponent></li>
          <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} className="link-dropdown registration">
              <LinkComponent id="ptg-registration-link" href="#" className="link link-dropdown-parent" >
                Registration
                <i style={{ marginLeft: 5 }} className={`fa fa-chevron-down`} />
              </LinkComponent>
              {supportDropdown &&
                <>
                  <LinkComponent id="ptg-virtual-reg" href="https://openinfra-ptg.eventbrite.com/" className="link-dropdown-option" >
                    Virtual PTG
                  </LinkComponent>
                  <LinkComponent id="ptg-summit-reg" href="https://vancouver2023.openinfra.dev/" className="link-dropdown-option">
                    <span>OpenInfra Summit + PTG</span>
                  </LinkComponent>
                </>
              }
            </li> */}
          </ul>
        </div>
      }

    </nav>
  )
}

export default PTGSubNav