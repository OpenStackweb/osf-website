import React, { useEffect, useState } from 'react'

function SubNav(props) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let active = document.getElementById(props.active);
    active.className += " active";
  });

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (

    <nav className="subnav-bar">
      <div className="container">
        <div className="location">
          <a href="/summit" >OpenInfra Summit</a>
        </div>

        <ul id="links-list" className="links-list">
          <li><a id="summit" href="/summit" className="link">Home</a></li>
          <li><a id="summit-sponsor" href="/summit-sponsor" className="link">Sponsors</a></li>
          <li><a id="summit-tracks" href="/summit-tracks" className="link">Tracks</a></li>
          <li><a id="summit-covid" href="/summit-covid" className="link">COVID-19</a></li>
        </ul>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{marginLeft: "5px"}} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}/>
        </div>

      </div>

      {isOpen &&
      <div className="subnav-dropdown">
      <ul id="links-list-mobile" className="links-list">
          <li><a id="summit" href="/summit" className="link">Home</a></li>
          <li><a id="summit-sponsor" href="/summit-sponsor" className="link">Sponsors</a></li>
          <li><a id="summit-tracks" href="/summit-tracks" className="link">Tracks</a></li>
          <li><a id="summit-covid" href="/summit-covid" className="link">COVID-19</a></li>
        </ul>
      </div>
      }

    </nav>
  )
}

export default SubNav