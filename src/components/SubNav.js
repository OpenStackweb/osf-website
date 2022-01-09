import React, { useEffect } from 'react'

function SubNav(props) {

  useEffect(() => {
    let active = document.getElementById(props.active);
    active.className += " active";
});

  return (

    <nav className="subnav-bar">
      <div className="container">
        <div className="location">
          OpenInfra Summit
        </div>
        <ul id="links-list" className="links-list">
          <li><a id="summit-home" href="/summit" className="link">Home</a></li>
          <li><a id="summit-sponsor" href="/summit-sponsor" className="link">Sponsors</a></li>
          <li><a id="summit-tracks" href="/summit-tracks" className="link">Tracks</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default SubNav