import React, { useEffect } from 'react'

function SubNav() {

  useEffect(() => {

});

  return (

    <nav className="subnav-bar">
      <div className="container">
        <div className="location">
          OpenInfra Summit
        </div>
        <ul id="links-list" className="links-list">
          <li><a href="/summit" className="link">Home</a></li>
          <li><a href="/summit-sponsor" className="link">Sponsors</a></li>
          <li><a href="/summit-tracks" className="link">Tracks</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default SubNav