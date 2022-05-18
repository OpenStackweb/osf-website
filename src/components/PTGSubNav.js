import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function PTGSubNav(props) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let active = document.getElementById(props.active);
    active.className += " active";
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
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
          <li><LinkComponent id="ptg-faq" href="/ptg/faq" onClick={() => shouldCloseMenu("ptg-faq")} className="link">FAQ</LinkComponent></li>
          <li><LinkComponent id="registration" href="https://openinfrafoundation.formstack.com/forms/oct2022_ptg_team_signup" className="link registration">Sign Up Your Team</LinkComponent></li>
        </ul>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>

      </div>

      {isOpen &&
        <div className="subnav-dropdown">
          <ul id="links-list-mobile" className="links-list">
            <li><LinkComponent id="ptg" href="/ptg" onClick={() => shouldCloseMenu("ptg")} className="link">About</LinkComponent></li>
            <li><LinkComponent id="ptg-faq" href="/ptg/faq" onClick={() => shouldCloseMenu("ptg-faq")} className="link">FAQ</LinkComponent></li>
            <li><LinkComponent id="registration" href="https://openinfrafoundation.formstack.com/forms/oct2022_ptg_team_signup" className="link registration">Sign Up Your Team</LinkComponent></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default PTGSubNav