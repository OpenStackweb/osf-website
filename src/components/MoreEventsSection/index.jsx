import React from 'react'
import './styles.scss';
import LinkComponent from '../LinkComponent';


const EVENTS = [
  {name: "FOSDEM", link: "https://fosdem.org/2025/", date: "Feb 1-2, 2025", location: "Brussels, BE", color: "#e61e24"},
  {name: "SCaLE 22x", link: "https://www.socallinuxexpo.org/scale/22x", date: "Mar 6-9, 2025", location: "Pasadena, CA", color: "#f4a93a"},
  {name: "KubeCon EU + CloudNativeCon EU", link: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/", date: "Apr 1-4, 2025", location: "London, GB", color: "#39ae4a"},
  {name: "OCP Summit EMEA", link: "https://www.opencompute.org/summit/regional-summit", date: "Apr 29–30, 2025", location: "Dublin, IE", color: "#28a4db"}
];

const MoreEventsSection = () => {
  return (
    <section className="more-events-section-wrapper">
      <div className="container">
        <h1 className="title">
          More Community-Powered Events
        </h1>
        <div className="more-agenda-list">
          {EVENTS.map(event => (
            <div className="agenda-row" style={{borderLeftColor: event.color}}>
              <div className="agenda-name">
                {event.link ? 
                  <>
                    <LinkComponent href={event.link}>{event.name}</LinkComponent>
                  </> 
                  :
                event.name}
              </div>
              <div className="agenda-date">
                <img src="img/openinfra-days/calendar.svg" alt="date" />
                {event.date}
              </div>
              <div className="agenda-location">
                <img src="img/openinfra-days/location.svg" alt="location" />
                {event.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MoreEventsSection
