import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function SubNav(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [scheduleDropdown, setScheduleDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);

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
          <LinkComponent href="/summit" >OpenInfra Summit</LinkComponent>
        </div>

        <ul id="links-list" className="links-list">
          <li><LinkComponent id="summit" href="/summit" className="link">Home</LinkComponent></li>
          <li><LinkComponent id="summit-sponsor" href="/summit-sponsor" className="link">Sponsors</LinkComponent></li>

          <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} style={{ marginBottom: -30, paddingBottom: 30 }}>
            <LinkComponent id="summit-faq" href="/summit-faq" className="link" style={{ padding: 10, width: '110%', display: 'inline-flex' }}>
              Support
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </LinkComponent>
            {supportDropdown &&
              <div className='dropdown-options'>
                <LinkComponent id="summit-faq" href="/summit-faq" className="link dropdown">
                  FAQs
                </LinkComponent>
                <LinkComponent id="summit-faq-travel" href="/summit-faq#travel" className="link dropdown">
                  <span>Travel Support</span>
                </LinkComponent>
                <LinkComponent id="summit-faq-speaker" href="/summit-faq#speakers" className="link dropdown">
                  <span>Speaker Support</span>
                </LinkComponent>
              </div>
            }
          </li>
          <li><LinkComponent id="summit-covid" href="/summit-covid" className="link">COVID-19</LinkComponent></li>
          {props.isLoggedUser ?
            <li onMouseEnter={() => setScheduleDropdown(true)} onMouseLeave={() => setScheduleDropdown(false)} style={{ marginBottom: -30, paddingBottom: 30 }}>
              <LinkComponent id="summit-schedule" href="/summit-schedule" className="link" style={{ padding: 10, width: '110%', display: 'inline-flex' }}>
                Schedule
                <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
              </LinkComponent>
              {scheduleDropdown &&
                <div className='dropdown-options'>
                  <LinkComponent id="summit-schedule" href="/summit-schedule" className="link dropdown">
                    Full Schedule
                  </LinkComponent>
                  <LinkComponent id="summit-my-schedule" href="/a/summit-my-schedule" className="link dropdown">
                    <span>My Schedule</span>
                  </LinkComponent>
                </div>
              }
            </li>
            :
            <li><LinkComponent id="summit-schedule" href="/summit-schedule" className="link">Schedule</LinkComponent></li>
          }
          <li><LinkComponent id="registration" href="/summit-onsite" className="link registration">OnSite Info</LinkComponent></li>
        </ul>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>

      </div>

      {isOpen &&
        <div className="subnav-dropdown">
          <ul id="links-list-mobile" className="links-list">
            <li><LinkComponent id="summit" href="/summit" onClick={() => shouldCloseMenu("summit")} className="link">Home</LinkComponent></li>
            <li><LinkComponent id="summit-sponsor" href="/summit-sponsor" onClick={() => shouldCloseMenu("summit-sponsor")} className="link">Sponsors</LinkComponent></li>

            <li onMouseEnter={() => setSupportDropdown(true)} onMouseLeave={() => setSupportDropdown(false)} className="link-dropdown">
              <LinkComponent id="summit-faq" href="#" className="link link-dropdown-parent" >
                Support
                <i style={{ marginLeft: 5 }} className={`fa fa-chevron-down`} />
              </LinkComponent>
              {supportDropdown &&
                <>
                  <LinkComponent id="summit-faq" href="/summit-faq" onClick={() => shouldCloseMenu("summit-faq")} className="link-dropdown-option" >
                    FAQs
                  </LinkComponent>
                  <LinkComponent id="summit-faq-travel" href="/summit-faq#travel" onClick={() => shouldCloseMenu("summit-faq-travel")} className="link-dropdown-option">
                    <span>Travel Support</span>
                  </LinkComponent>
                  <LinkComponent id="summit-faq-speakers" href="/summit-faq#speakers" onClick={() => shouldCloseMenu("summit-faq-speakers")} className="link-dropdown-option">
                    <span>Speaker Support</span>
                  </LinkComponent>
                </>
              }
            </li>
            <li><LinkComponent id="summit-covid" href="/summit-covid" onClick={() => shouldCloseMenu("summit-covid")} className="link">COVID-19</LinkComponent></li>
            {props.isLoggedUser ?
              <li onMouseEnter={() => setScheduleDropdown(true)} onMouseLeave={() => setScheduleDropdown(false)} className="link-dropdown">
                <LinkComponent id="summit-schedule" href="#" className="link link-dropdown-parent" >
                  Schedule
                  <i style={{ marginLeft: 5 }} className={`fa fa-chevron-down`} />
                </LinkComponent>
                {scheduleDropdown &&
                  <>
                    <LinkComponent id="summit-schedule" href="/summit-schedule" onClick={() => shouldCloseMenu("summit-schedule")} className="link-dropdown-option" >
                      Full Schedule
                    </LinkComponent>
                    <LinkComponent id="summit-my-schedule" href="/a/summit-my-schedule" onClick={() => shouldCloseMenu("summit-my-schedule")} className="link-dropdown-option">
                      <span>My Schedule</span>
                    </LinkComponent>
                  </>
                }
              </li>
              :
              <li><LinkComponent id="summit-schedule" href="/summit-schedule" onClick={() => shouldCloseMenu("summit-schedule")} className="link">Schedule</LinkComponent></li>
            }
            <li><LinkComponent id="registration" href="/summit-onsite" className="link registration">Onsite Info</LinkComponent></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default SubNav