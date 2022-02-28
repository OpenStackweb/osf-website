import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function SubNav(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [scheduleDropdown, setScheduleDropdown] = useState(false);

  useEffect(() => {
    let active = document.getElementById(props.active);
    active.className += " active";
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (

    <nav className="subnav-bar">
      <div className="container">
        <div className="location">
          <LinkComponent href="/summit" >OpenInfra Summit</LinkComponent>
        </div>

        <ul id="links-list" className="links-list">
          <li><LinkComponent id="summit" href="/summit" className="link">Home</LinkComponent></li>
          <li><LinkComponent id="summit-sponsor" href="/summit-sponsor" className="link">Sponsors</LinkComponent></li>
          <li><LinkComponent id="summit-tracks" href="/summit-tracks" className="link">Tracks</LinkComponent></li>
          <li><a id="summit-faq" href="/summit-faq" className="link">FAQs</a></li>
          <li><a id="summit-covid" href="/summit-covid" className="link">COVID-19</a></li>
          {props.isLoggedUser ?
            <li onMouseEnter={() => setScheduleDropdown(true)} onMouseLeave={() => setScheduleDropdown(false)}>
              <LinkComponent id="summit-schedule" href="/summit-schedule" className="link" style={{ padding: 10, width: '120%', display: 'inline-flex' }}>
                Schedule
                <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
              </LinkComponent>
              {scheduleDropdown &&
                <LinkComponent id="summit-my-schedule" href="/a/summit-my-schedule" className="link dropdown">
                  <span>My Schedule</span>
                </LinkComponent>
              }
            </li>
            :
            <li><LinkComponent id="summit-schedule" href="/summit-schedule" className="link">Schedule</LinkComponent></li>
          }
          <li><LinkComponent id="registration" href="/#" className="link registration">Registration</LinkComponent></li>
        </ul>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>

      </div>

      {isOpen &&
        <div className="subnav-dropdown">
          <ul id="links-list-mobile" className="links-list">
            <li><a id="summit" href="/summit" className="link">Home</a></li>
            <li><a id="summit-sponsor" href="/summit-sponsor" className="link">Sponsors</a></li>
            <li><a id="summit-tracks" href="/summit-tracks" className="link">Tracks</a></li>
            <li><a id="summit-faq" href="/summit-faq" className="link">FAQs</a></li>
            <li><a id="summit-covid" href="/summit-covid" className="link">COVID-19</a></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default SubNav