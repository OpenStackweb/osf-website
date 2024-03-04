import React from 'react'
import './styles.scss';
import LinkComponent from '../LinkComponent';


const EVENTS = [
  {name: "Socal Linux expo (SCaLE)", link: "https://www.socallinuxexpo.org/blog/scale-21x", date: "Mar 14 - 17, 2024", location: "Pasadena, CA", color: "#2CB4E2"},
  {name: "Texas Linux Fest", link: "https://2024.texaslinuxfest.org/", date: "Apr 12 - 13, 2024", location: "Austin, Texas, US", color: "#43B85C"},
  {name: "Linux Fest Northwest", link: "https://linuxfestnorthwest.org/", date: "Apr 26 - 28, 2024", location: "Bellingham, WA", color: "#F4A93A"}

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
