import React from 'react'
import './styles.scss';


const EVENTS = [
  {name: "FOSDEM 2024", date: "Feb 03 - 04, 2024", location: "Brussels, BE", color: "#43B85C"},
  {name: "CloudStack and Ceph Day Netherlands", date: "Feb 08, 2024", location: "Amsterdam, NL", color: "#ED362F"},
  {name: "Texas Linux Fest", date: "Apr 12 - 13, 2024", location: "Austin, Texas, US", color: "#2CB4E2"},
];

const MoreEventsSection = () => {
  return (
    <section className="more-events-section-wrapper">
      <div className="container">
        <h1 className="title">
          More community driven events
        </h1>
        <div className="more-agenda-list">
          {EVENTS.map(event => (
            <div className="agenda-row" style={{borderLeftColor: event.color}}>
              <div className="agenda-name">{event.name}</div>
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
