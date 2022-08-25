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
          <li><LinkComponent id="summit" href="/summit/vancouver-2023" onClick={() => shouldCloseMenu("summit")} className="link">Home</LinkComponent></li>
          <li><LinkComponent id="summit-sponsor" href="/summit/vancouver-2023/summit-sponsor/" onClick={() => shouldCloseMenu("summit-sponsor")} className="link">Sponsors</LinkComponent></li>
          <li><LinkComponent id="summit-tracks" href="/summit/vancouver-2023/summit-tracks/" onClick={() => shouldCloseMenu("summit-tracks")} className="link">Tracks</LinkComponent></li>
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
            <li><LinkComponent id="summit-onsite" href="/summit/vancouver-2023" onClick={() => shouldCloseMenu("summit")} className="link">Home</LinkComponent></li>
            <li><LinkComponent id="summit-sponsor" href="/summit/vancouver-2023/summit-sponsor/" onClick={() => shouldCloseMenu("summit-sponsor")} className="link">Sponsors</LinkComponent></li>
            <li><LinkComponent id="summit-tracks" href="/summit/vancouver-2023/summit-tracks/" onClick={() => shouldCloseMenu("summit-tracks")} className="link">Tracks</LinkComponent></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default SubNavYvr