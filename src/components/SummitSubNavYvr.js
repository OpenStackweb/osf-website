import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function SubNavYvr(props) {
  const [summitDropdown, setSummitDropdown] = useState(false);

  useEffect(() => {
    let active = document.getElementById(props.active);
    active.className += " active";
  }, []);

  return (

    <nav className="subnav-bar">
      <div className="container">
        <ul className="links-list location">
          <li onMouseEnter={() => setSummitDropdown(true)} onMouseLeave={() => setSummitDropdown(false)} style={{ marginBottom: -33, paddingBottom: 30 }}>
            <div id="summit" className="link" style={{ padding: 10, width: '102%', display: 'inline-flex' }}>
            OpenInfra Summit Vancouver
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

      </div>

    </nav>
  )
}

export default SubNavYvr