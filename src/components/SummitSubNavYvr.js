import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function SubNavYvr(props) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isSummitOpen, setIsSummitOpen] = useState(false);
  const [scheduleDropdown, setScheduleDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [summitDropdown, setSummitDropdown] = useState(false);

  useEffect(() => {
    let active = document.getElementById(props.active);
    active.className += " active";
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleSummitMenu() {
    setIsSummitOpen(!isSummitOpen);
  }

  const shouldCloseMenu = (option) => {
    if (window.location.pathname.includes(option)) setIsOpen(false);
  }

  const shouldCloseSummitMenu = (option) => {
    if (window.location.pathname.includes(option)) setIsSummitOpen(false);
  }

  return (

    <nav className="subnav-bar">
      <div className="container">
        <ul className="links-list summit-links-list">
          <li onMouseEnter={() => setSummitDropdown(true)} onMouseLeave={() => setSummitDropdown(false)} style={{ marginBottom: -33, paddingBottom: 30 }}>
            <div id="summit-dropdown" className="link" style={{ padding: '10px 10px 10px 0', width: '102%', display: 'inline-flex' }}>
            Vancouver, BC 2023
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </div>
            {summitDropdown &&
              <div className='dropdown-options'>
                <LinkComponent id="vancouver-2023" href="/summit/vancouver-2023" className="link">
                  <span>Vancouver, BC 2023</span>
                </LinkComponent>
                <LinkComponent id="berlin-2022" href="/summit/berlin-2022" className="link">
                  <span>Berlin, Germany 2022</span>
                </LinkComponent>
              </div>
            }
          </li>
        </ul>

        <ul id="links-list" className="links-list">
          <li><LinkComponent id="summit" href="/summit/vancouver-2023" onClick={() => shouldCloseMenu("summit")} className="link">About</LinkComponent></li>
          <li><LinkComponent id="summit-sponsor" href="/summit/vancouver-2023/summit-sponsor/" onClick={() => shouldCloseMenu("summit-sponsor")} className="link">Sponsors</LinkComponent></li>
          <li><LinkComponent id="summit-tracks" href="/summit/vancouver-2023/summit-tracks/" onClick={() => shouldCloseMenu("summit-tracks")} className="link">Tracks</LinkComponent></li>
          <li><LinkComponent id="summit-forum" href="/summit/vancouver-2023/forum/" onClick={() => shouldCloseMenu("summit-forum")} className="link">Forum</LinkComponent></li>
          <li><LinkComponent id="summit-onsite-safety" href="/summit/vancouver-2023/summit-onsite-safety/" onClick={() => shouldCloseMenu("summit-onsite-safety")} className="link">Onsite Safety</LinkComponent></li>
          <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} style={{ marginBottom: -33, paddingBottom: 30 }} className="dropdown-items-link">
            <LinkComponent id="summit-faq" href="/summit-faq" className="link" style={{ padding: 10, width: '110%', display: 'inline-flex' }}>
              Support
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </LinkComponent>
            {supportDropdown &&
              <div className="dropdown-items-container">
                <div className='dropdown-items-inner'>
                  <LinkComponent id="summit-faq" href="/summit/vancouver-2023/summit-faq" className="link dropdown">
                    FAQs
                  </LinkComponent>
                  <LinkComponent id="summit-faq-travel" href="/summit/vancouver-2023/summit-faq#travel" className="link dropdown">
                    <span>Travel Support</span>
                  </LinkComponent>
                  <LinkComponent id="summit-faq-speaker" href="/summit/vancouver-2023/summit-faq#speakers" className="link dropdown">
                    <span>Speaker Support</span>
                  </LinkComponent>
                </div>
              </div>
            }
          </li>
          <li><LinkComponent id="registration" href="https://vancouver2023.openinfra.dev/" className="link registration">Register Now</LinkComponent></li>
        </ul>

        <div className={`${isSummitOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleSummitMenu}>
          <div className="page-name">Vancouver, BC 2023</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isSummitOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>
      </div>

      {isSummitOpen &&
        <div className="subnav-dropdown location">
          <ul id="links-list-mobile" className="links-list">
            <li><LinkComponent id="summit" href="/summit/vancouver-2023" onClick={() => shouldCloseSummitMenu("vancouver-2023")} className="link">Vancouver, BC 2023</LinkComponent></li>
            <li><LinkComponent id="summit-sponsor" href="/summit/berlin-2022" onClick={() => shouldCloseSummitMenu("summit")} className="link">Berlin, Germany 2022</LinkComponent></li>
          </ul>
        </div>
      }

      {isOpen &&
        <div className="subnav-dropdown">
          <ul id="links-list-mobile" className="links-list">
            <li><LinkComponent id="summit-onsite" href="/summit/vancouver-2023" onClick={() => shouldCloseMenu("summit")} className="link">About</LinkComponent></li>
            <li><LinkComponent id="summit-sponsor" href="/summit/vancouver-2023/summit-sponsor/" onClick={() => shouldCloseMenu("summit-sponsor")} className="link">Sponsors</LinkComponent></li>
            <li><LinkComponent id="summit-tracks" href="/summit/vancouver-2023/summit-tracks/" onClick={() => shouldCloseMenu("summit-tracks")} className="link">Tracks</LinkComponent></li>
            <li><LinkComponent id="summit-forum" href="/summit/vancouver-2023/forum/" onClick={() => shouldCloseMenu("summit-forum")} className="link">Forum</LinkComponent></li>
            <li><LinkComponent id="summit-forum" href="/summit/vancouver-2023/summit-onsite-safety/" onClick={() => shouldCloseMenu("summit-onsite-safety")} className="link">Onsite Safety</LinkComponent></li>
            <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} className="link-dropdown">
              <LinkComponent id="summit-faq" href="#" className="link link-dropdown-parent" >
                Support
                <i style={{ marginLeft: 5 }} className={`fa fa-chevron-down`} />
              </LinkComponent>
              {supportDropdown &&
                <>
                  <LinkComponent id="summit-faq" href="/summit/berlin-vancouver-2023/summit-faq" onClick={() => shouldCloseMenu("summit-faq")} className="link-dropdown-option" >
                    FAQs
                  </LinkComponent>
                  <LinkComponent id="summit-faq-travel" href="/summit/vancouver-2023/summit-faq#travel" onClick={() => shouldCloseMenu("summit-faq-travel")} className="link-dropdown-option">
                    <span>Travel Support</span>
                  </LinkComponent>
                  <LinkComponent id="summit-faq-speakers" href="/summit/vancouver-2023/summit-faq#speakers" onClick={() => shouldCloseMenu("summit-faq-speakers")} className="link-dropdown-option">
                    <span>Speaker Support</span>
                  </LinkComponent>
                </>
              }
            </li>
            <li><a id="registration" href="https://vancouver2023.openinfra.dev/" className="link registration">Register Now</a></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default SubNavYvr