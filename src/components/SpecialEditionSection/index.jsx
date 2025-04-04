import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import './styles.scss';
import RoundedButton from '../RoundedButton';
import LinkComponent from '../LinkComponent';


const DAYS = [
  { title: "OpenInfra Day Sweden", 
    date: "May 7, 2024", 
    location: '<a href="https://www.google.com/maps/place/Gunnar+Engellaus+v%C3%A4g+2,+418+78+G%C3%B6teborg,+Sweden/@57.7242383,11.8490387,17z/data=!4m16!1m9!3m8!1s0x464f8c78c6219f2b:0x1a73507f9863eb79!2sGunnar+Engellaus+v%C3%A4g+2,+418+78+G%C3%B6teborg,+Sweden!3b1!8m2!3d57.7242775!4d11.8483159!10e5!16s%2Fg%2F11cnd7r_rq!3m5!1s0x464f8c78c6219f2b:0x1a73507f9863eb79!8m2!3d57.7242775!4d11.8483159!16s%2Fg%2F11cnd7r_rq?entry=ttu" target="_blank" rel="noopener noreferrer">Volvohallen</a>, Gothenburg, Sweden',
    registration: '<a href="https://www.youtube.com/playlist?list=PLKqaoAnDyfgqmcrpKb4z6Tn0TiRVF5LQ4" target="_blank" rel="noopener noreferrer">Watch the Videos</a>'
  },
  {
    title: "OpenInfra Day Germany co-located with Sovereign Cloud Stack Summit",
    date: 'May 15 (SCS Summit, held May 14, requires a separate registration)',
    location: '<a href="https://www.google.com/maps/place/Villa+Elisabeth/@52.5331269,13.3972411,15z/data=!4m6!3m5!1s0x47a851f492be67f9:0x70038e11de799c16!8m2!3d52.5331269!4d13.3972411!16s%2Fg%2F11jfcbz7dv?entry=ttu" target="_blank" rel="noopener noreferrer">Villa Elisabeth</a>, Berlin, Germany',
    registration: '<a href="https://oideurope2024.openinfra.dev/germany/" target="_blank" rel="noopener noreferrer">Learn More</a>'
  },
  {
    title: "OpenInfra Day Turkiye",
    date: "May 20, 2024",
    location: '<a href="https://maps.app.goo.gl/rPTB4oZabiJtfYdE9" target="_blank" rel="noopener noreferrer">Albert Long Hall Cultural Center</a>, Boğaziçi University, Istanbul, Turkiye',
    registration: '<a href="https://openinfraturkiye.org.tr" target="_blank" rel="noopener noreferrer">Learn More</a>'
  },
  { title: "OpenInfra Day France",
    date: "May 22, 2024",
   location: '<a href="https://maps.app.goo.gl/sxxPmcTnYe4Dh3f18" target="_blank" rel="noopener noreferrer">EDF Lab Paris-Saclay</a>, Paris-Saclay, France',
   registration: '<a href="https://www.youtube.com/playlist?list=PLKqaoAnDyfgqewSYynvIc45FyWv4QT06C" target="_blank">Watch the Videos</a>'
  },
  { title: "OpenInfra Day Hungary",
    date: "June 3, 2024",
   location: '<a href="https://maps.app.goo.gl/gF5tefAANj1q3zrh8" target="_blank" rel="noopener noreferrer">Telekom Headquarters, Puskás conference room</a>, Budapest, Hungary',
   registration: '<a href="https://www.youtube.com/watch?v=2pNo8F3AMrw" target="_blank">Watch the Videos</a>'
  },
  {
    title: "OpenInfra Meetup: Switzerland",
    date: "June 6, 2024",
    location: '<a href="https://www.google.com/maps/place/CERN/@46.2337442,6.056322,15.89z/data=!4m6!3m5!1s0x478c62fcec737b11:0x81bef3ae7a885e31!8m2!3d46.2330492!4d6.0556771!16zL20vMDk5cm4?entry=ttu" target="_blank" rel="noopener noreferrer">CERN</a>, Geneva, Switzerland',
    registration: '<a href="https://indico.cern.ch/e/openinfra-cern-2024" target="_blank" rel="noopener noreferrer">EVENT SOLD OUT</a>',
  },
];

const SpecialEditionSection = () => {
  return (
    <section id="special-edition" className="special-edition-section-wrapper">
      <div className="container">
        <h1 className="title">
          OpenInfra Days <br />
          <span className="red">Special Edition</span>
        </h1>
        <p>
          <b>
            OpenInfra Days Europe is a series of community-powered OpenInfra Days and meetups throughout Europe.
          </b>
        </p>
        <p>
          The event will take place throughout <b>May and June 2024 in Sweden, Germany, Turkiye and France</b>. In addition,
          other
          regions including Switzerland will be participating with meetups!
        </p>
        <div className="agenda-wrapper">
          <div className="agenda-header">
            <StaticImage src="../../../static/img/openinfra-days/special-edition-banner.png"
              alt="special-edition-days" />
          </div>
          <div className="agenda-body">
            {DAYS.map(day => (
              <div className="agenda-item">
                <h4 className="agenda-title">{day.title}</h4>
                {day.date &&
                  <p className="agenda-info">
                    <img src="img/openinfra-days/calendar.svg" alt="date" />
                    {day.date}
                  </p>
                }
                {day.location &&
                  <p className="agenda-info">
                    <img src="img/openinfra-days/location.svg" alt="location" />
                    <span dangerouslySetInnerHTML={{ __html: day.location }} />
                  </p>
                }
                {day.registration &&
                  <p className="agenda-info">
                    <img src="img/openinfra-days/arrow_forward.svg" alt="registration" width="24" height="24" />
                    <span dangerouslySetInnerHTML={{ __html: day.registration }} />
                  </p>
                }
                {(!day.date || !day.location) &&
                  <p className="agenda-info">
                    <img src="img/openinfra-days/soon.svg" alt="soon" />
                    More info coming soon
                  </p>
                }
              </div>
            ))}
          </div>
        </div>
        <RoundedButton link={'https://oideurope2024.openinfra.dev'} text={'learn more'} className='button' />
      </div>
    </section>
  )
}

export default SpecialEditionSection
