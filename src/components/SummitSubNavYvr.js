import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function SubNavYvr(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [summitDropdown, setSummitDropdown] = useState(false);

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
        <ul className="links-list">
          <li onMouseEnter={() => setSummitDropdown(true)} onMouseLeave={() => setSummitDropdown(false)} style={{ marginBottom: -33, paddingBottom: 30 }}>
            <div id="summit" className="link" style={{ padding: 10, width: '102%', display: 'inline-flex' }}>
            Vancouver, BC 2023
              <i style={{ marginLeft: "auto" }} className={`fa fa-chevron-down`} />
            </div>
            {summitDropdown &&
              <div className='dropdown-options'>
                <LinkComponent id="summit" href="/summit/" className="link">
                  <span>Berlin, Germany 2022</span>
                </LinkComponent>
                <LinkComponent id="vancouver-2023" href="/summit/vancouver-2023" className="link">
                  <span>Vancouver, BC 2023</span>
                </LinkComponent>
              </div>
            }
          </li>
        </ul>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>

      </div>

      {isOpen &&
        <div className="subnav-dropdown location">
          <ul id="links-list-mobile" className="links-list">
            <li><LinkComponent id="summit" href="/summit" onClick={() => shouldCloseMenu("summit")} className="link">Berlin, Germany 2022</LinkComponent></li>
            <li><LinkComponent id="vancouver-2023" href="/summit/vancouver-2023" onClick={() => shouldCloseMenu("vancouver-2023")} className="link">Vancouver, BC 2023</LinkComponent></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default SubNavYvr