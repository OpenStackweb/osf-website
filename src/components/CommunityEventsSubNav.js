import React, { useEffect, useState } from 'react'
import LinkComponent from './LinkComponent';

function CommunityEventsSubNav(props) {

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }


  return (

    <nav className="subnav-bar subnav-bar-ptg">
      <div className="container">
        <div className="location">
          OpenInfra Foundation Events
        </div>

        <ul id="links-list" className="links-list">
          <li><LinkComponent id="summit" href="/summit" className="link">OpenInfra Summit</LinkComponent></li>
          <li><LinkComponent id="live" href="/live" className="link">OpenInfra Live</LinkComponent></li>
          <li><LinkComponent id="ptg" href="/ptg" className="link">PTG</LinkComponent></li>
          <li><LinkComponent id="days" href="https://www.openstack.org/events/community-events#openinfra_days" className="link">OpenInfra Days</LinkComponent></li>
          <li><LinkComponent id="meetups" href="https://www.meetup.com/pro/openinfradev" className="link">OpenInfra Meetups</LinkComponent></li>
        </ul>

        <div className={`${isOpen ? 'mobile-subnav-menu active-page' : 'mobile-subnav-menu'}`} onClick={toggleMenu}>
          <div className="page-name">{props.pageName}</div>
          <i style={{ marginLeft: "5px" }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>
      </div>

      {isOpen &&
        <div className="subnav-dropdown">
          <ul id="links-list-mobile" className="links-list">
          <li><LinkComponent id="summit-mobile" href="/summit" className="link">OpenInfra Summit</LinkComponent></li>
          <li><LinkComponent id="live-mobile" href="/live" className="link">OpenInfra Live</LinkComponent></li>
          <li><LinkComponent id="ptg-mobile" href="/ptg/" className="link">PTG</LinkComponent></li>
          <li><LinkComponent id="days-mobile" href="https://www.openstack.org/events/community-events#openinfra_days" className="link">OpenInfra Days</LinkComponent></li>
          <li><LinkComponent id="meetups-mobile" href="https://www.meetup.com/pro/openinfradev" className="link">OpenInfra Meetups</LinkComponent></li>
          </ul>
        </div>
      }

    </nav>
  )
}

export default CommunityEventsSubNav