import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import './styles.scss';
import RoundedButton from '../RoundedButton';

const OpeninfraDaysAgenda = ({ title = "", items, learnMoreLink }) => {
  return (
    <section id="upcoming-events" className="special-edition-section-wrapper">
      <div className="container">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="agenda-wrapper">
          <div className="agenda-header">
            <StaticImage src="../../../static/img/openinfra-days/days-asia.png"
              alt="asia-days" />
          </div>
          <div className="agenda-body">
            {items.map(day => (
              <div className="agenda-item">
                <h4 className="agenda-title" dangerouslySetInnerHTML={{ __html: day.title }} />
                {day.date &&
                  <p className="agenda-info">
                    <img src="/img/openinfra-days/calendar.svg" alt="date" />
                    {day.date}
                  </p>
                }
                {day.location &&
                  <p className="agenda-info">
                    <img src="/img/openinfra-days/location.svg" alt="location" />
                    <span dangerouslySetInnerHTML={{ __html: day.location }} />
                  </p>
                }
                {day.registration &&
                  <p className="agenda-info">
                    <img src="/img/openinfra-days/arrow_forward.svg" alt="registration" width="24" height="24" />
                    <span dangerouslySetInnerHTML={{ __html: day.registration }} />
                  </p>
                }
                {day.sponsor &&
                  <p className="agenda-info">
                    <img src="/img/openinfra-days/arrow_forward.svg" alt="sponsor" width="24" height="24" />
                    <span dangerouslySetInnerHTML={{ __html: day.sponsor }} />
                  </p>
                }
                {day.coming_soon &&
                  <p className="agenda-info">
                    <img src="/img/openinfra-days/soon.svg" alt="soon" />
                    More info coming soon
                  </p>
                }
              </div>
            ))}
          </div>
        </div>
        {learnMoreLink &&
          <RoundedButton link={learnMoreLink} text="learn more" className="button" />
        }
      </div>
    </section>
  )
}

export default OpeninfraDaysAgenda