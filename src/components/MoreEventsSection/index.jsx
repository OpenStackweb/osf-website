import React from 'react'
import './styles.scss';
import LinkComponent from '../LinkComponent';


const EVENTS = [
  {name: "Linux Fest Northwest", link: "https://linuxfestnorthwest.org/", date: "Apr 26 - 28, 2024", location: "Bellingham, WA", color: "#F4A93A"},
  {name: "FOSSY", link: "https://sfconservancy.org/fossy/", date: "Aug 1 - 4, 2024", location: "Portland, OR", color: "#2CB4E2"},
  {name: "COSCUP", link: "https://coscup.org/2024/en/", date: "Aug 3 - 4, 2024", location: "Taipei", color: "#ED362F"},
  {name: "All Things Open", link: "https://2024.allthingsopen.org/", date: "Oct 27 - 29, 2024", location: "Raleigh, NC", color: "#43B85C"}

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
