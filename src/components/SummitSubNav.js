import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function SubNav(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [isSummitOpen, setIsSummitOpen] = useState(false);
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
            <div id="summit" className="link summit-selector" style={{ padding: '10px 10px 10px 0', width: '102%', display: 'inline-flex' }}>
            Berlin, Germany 2022
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </div>
            {summitDropdown &&
              <div className='dropdown-options'>
                <LinkComponent id="vancouver-2023" href="/summit/vancouver-2023" className="link">
                  <span>Vancouver, BC 2023</span>
                </LinkComponent>
                <LinkComponent id="summit" href="/summit/berlin-2022" className="link">
                  <span>Berlin, Germany 2022</span>
                </LinkComponent>
              </div>
            }
          </li>
        </ul>

        <ul id="links-list" className="links-list">
          <li><LinkComponent id="summit-onsite" href="/summit/berlin-2022/summit-onsite" className="link">Onsite Info</LinkComponent></li>
          <li><LinkComponent id="summit-sponsor" href="/summit/berlin-2022/summit-sponsor" className="link">Sponsors</LinkComponent></li>

          <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} style={{ marginBottom: -33, paddingBottom: 30 }} className="dropdown-items-link">
            <LinkComponent id="summit-faq" href="/summit-faq" className="link" style={{ padding: 10, width: '110%', display: 'inline-flex' }}>
              Support
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </LinkComponent>
            {supportDropdown &&
              <div className="dropdown-items-container">
                <div className='dropdown-items-inner'>
                  <LinkComponent id="summit-faq" href="/summit/berlin-2022/summit-faq" className="link dropdown">
                    FAQs
                  </LinkComponent>
                  <LinkComponent id="summit-covid" href="/summit/berlin-2022/summit-covid" className="link dropdown">
                    <span>COVID-19</span>
                  </LinkComponent>
                  <LinkComponent id="summit-faq-travel" href="/summit/berlin-2022/summit-faq#travel" className="link dropdown">
                    <span>Travel Support</span>
                  </LinkComponent>
                  <LinkComponent id="summit-faq-speaker" href="/summit/berlin-2022/summit-faq#speakers" className="link dropdown">
                    <span>Speaker Support</span>
                  </LinkComponent>
                </div>
              </div>
            }
          </li>
          <li><LinkComponent id="registration" href="https://www.openstack.org/videos/summits/berlin-2022" className="link registration">Watch Summit Videos</LinkComponent></li>
        </ul>

        <div className={`${isSummitOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleSummitMenu}>
          <div className="page-name">Berlin, Germany 2022</div>
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
            <li><LinkComponent id="vancouver-2023" href="/summit/vancouver-2023" onClick={() => shouldCloseMenu("vancouver-2023")} className="link">Vancouver, BC 2023</LinkComponent></li>
            <li><LinkComponent id="summit" href="/summit/berlin-2022" onClick={() => shouldCloseSummitMenu("summit")} className="link">Berlin, Germany 2022</LinkComponent></li>
          </ul>
        </div>
      }

      {isOpen &&
        <div className="subnav-dropdown">
          <ul id="links-list-mobile" className="links-list">
            <li><LinkComponent id="summit-onsite" href="/summit/berlin-2022/summit-onsite" onClick={() => shouldCloseMenu("summit")} className="link">Onsite Info</LinkComponent></li>
            <li><LinkComponent id="summit-sponsor" href="/summit/berlin-2022/summit-sponsor" onClick={() => shouldCloseMenu("summit-sponsor")} className="link">Sponsors</LinkComponent></li>

            <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} className="link-dropdown">
              <LinkComponent id="summit-faq" href="#" className="link link-dropdown-parent" >
                Support
                <i style={{ marginLeft: 5 }} className={`fa fa-chevron-down`} />
              </LinkComponent>
              {supportDropdown &&
                <>
                  <LinkComponent id="summit-faq" href="/summit/berlin-2022/summit-faq" onClick={() => shouldCloseMenu("summit-faq")} className="link-dropdown-option" >
                    FAQs
                  </LinkComponent>
                  <LinkComponent id="summit-covid" href="/summit/berlin-2022/summit-covid" onClick={() => shouldCloseMenu("summit-covid")} className="link-dropdown-option">
                    <span>COVID-19</span>
                  </LinkComponent>
                  <LinkComponent id="summit-faq-travel" href="/summit/berlin-2022/summit-faq#travel" onClick={() => shouldCloseMenu("summit-faq-travel")} className="link-dropdown-option">
                    <span>Travel Support</span>
                  </LinkComponent>
                  <LinkComponent id="summit-faq-speakers" href="/summit/berlin-2022/summit-faq#speakers" onClick={() => shouldCloseMenu("summit-faq-speakers")} className="link-dropdown-option">
                    <span>Speaker Support</span>
                  </LinkComponent>
                </>
              }
            </li>
            <li><LinkComponent id="registration" href="https://www.openstack.org/videos/summits/berlin-2022" className="link registration">Watch Summit Videos</LinkComponent></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default SubNav