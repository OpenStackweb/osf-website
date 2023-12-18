import React from 'react'
import {StaticImage} from "gatsby-plugin-image";
import './styles.scss';


const DAYS = [
  {title: "OpenInfra Day Sweden", date: "May 7, 2024", location: "Volvohallen. Gothenburg, Sweden"},
  {
    title: "OpenInfra Days Germany x Soverign Cloud Stack Summit",
    date: "May 14 & 15, 2024",
    location: "Pending Venue. Berlin, Germany"
  },
  {
    title: "OpenInfra Days Turkiye",
    date: "May 20, 2024",
    location: "Garanti Cultural Center, Boğaziçi University Istanbul, Turkiye"
  },
  {title: "OpenInfra Days France"},
  {
    title: "OpenInfra Days Turkiye",
    date: "May 20, 2024",
    location: "Garanti Cultural Center, Boğaziçi University Istanbul, Turkiye"
  },
  {title: "OpenInfra Meetups: The UK"},
];

const SpecialEditionSection = () => {
  return (
    <section className="special-edition-section-wrapper">
      <div className="container">
        <h1 className="title">
          Openinfra Days <br />
          <span className="red">Special Edition</span>
        </h1>
        <p>
          <b>
            OpenInfra Days Europe is a series of OpenInfra Days throughout Europe.
          </b>
        </p>
        <p>
          The event will take place throughout <b>May 2024 in Sweden, Germany, Turkiye and France</b>. In addition,
          other
          regions including the UK, Greece, The Netherlands and Switzerland will be participating with meetups!
        </p>
        <p>
          The CFPs for these events will be going live in Q1 of 2024. In the meantime take a look at how your
          organization can support these events by being a sponsor.
        </p>
        <div className="agenda-wrapper">
          <div className="agenda-header">
            <StaticImage src="../../../static/img/openinfra-days/special-edition-banner.png"
                         alt="special-edition-days"/>
          </div>
          <div className="agenda-body">
            {DAYS.map(day => (
              <div className="agenda-item">
                <h4 className="agenda-title">{day.title}</h4>
                {!day.date && !day.location &&
                  <p className="agenda-info">
                    <img src="img/openinfra-days/soon.svg" alt="soon" />
                    More info coming soon
                  </p>
                }
                {day.date &&
                  <p className="agenda-info">
                    <img src="img/openinfra-days/calendar.svg" alt="date" />
                    {day.date}
                  </p>
                }
                {day.location &&
                  <p className="agenda-info">
                    <img src="img/openinfra-days/location.svg" alt="location" />
                    {day.location}
                  </p>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialEditionSection
