import React from 'react'
import './styles.scss';
import LinkComponent from '../LinkComponent';

const COLORS = [
  "#e61e24",
  "#f4a93a",
  "#39ae4a",
  "#28a4db"
];

const EVENTS = [
  {name: "OpenStack 15th Birthday Celebrations!", link: "https://www.openstack.org/blog/celebrating-15-years-of-openstack/", date: "All Year Long", location: "All Around the Globe"},
  {name: "KubeCon + CloudNativeCon China", link: "https://events.linuxfoundation.org/kubecon-cloudnativecon-china/", date: "June 10-11, 2025", location: "Hong Kong"},
  {name: "Open Telco Cloud Summit", link: "https://open.telcocloud-summit.com/event/585d8b6f-6494-4698-bb78-840206d3d3fa/summary?rt=svQDGBmL7k24CyoTCtWc2Q", date: "June 12, 2025", location: "Virtual"},
  {name: "KubeCon + CloudNativeCon Japan", link: "https://events.linuxfoundation.org/kubecon-cloudnativecon-japan/", date: "June 16-17, 2025", location: "Tokyo, JP"},
  {name: "Open Source Summit NA", link: "https://events.linuxfoundation.org/open-source-summit-north-america/ ", date: "June 23-25, 2025", location: "Denver, CO"},
  {name: "OpenInfra Day Vietnam", link: "https://www.vietopeninfra.org/void2025  ", date: "June 28, 2025", location: "Ho Chi Minh, VN "},
  {name: "OpenInfra Day Korea", link: "https://2025.openinfradays.kr/", date: "August 26, 2025", location: "Seoul, KR"},
  {name: "Cloud Operator Days Tokyo", link: "https://cloudopsdays.com/", date: "July 3 - September 5, 2025", location: "Tokyo, JP"},
  {name: "OpenInfra Days Indonesia", link: "https://www.linkedin.com/posts/openinfraid_openinfra-oid2025-openinfraid-ugcPost-7319909725951643648-UeNl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACkFmC4BAjY_ZaQQLbuPSV1vjFRU6hVE5Pk", date: "July 19, 2025", location: "Yogyakarta, ID"},
  {name: "OpenInfra User Group Colombia at KCD", link: "https://www.meetup.com/colombia-openinfra-user-group/events/307096751/", date: "August 29, 2025", location: "Bogotá, CO"},
  {name: "OpenInfra Summit Europe 2025", link: "https://summit2025.openinfra.org/", date: "October 17-19, 2025", location: "Paris-Saclay, FR"},
  {name: "PyTorch Conference 2025", link: "https://events.linuxfoundation.org/pytorch-conference/?__hstc=132719121.0b101d54206edc20977df92c2e1046c4.1742517488370.1742517488370.1742517488370.1&__hssc=132719121.2.1742517488370&__hsfp=1219773955", date: "October 22-23, 2025", location: "San Francisco, CA"},
  {name: "KubeCon EU + CloudNativeCon NA", link: "https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/", date: "November 10-13", location: "Atlanta, GA"},
];

const MoreEventsSection = () => {
  return (
    <section className="more-events-section-wrapper" id="community-events">
      <div className="container">
        <h1 className="title">
          More Open Source Community Events
        </h1>
        <div className="more-agenda-list">
          {EVENTS.map((event, idx) => (
            <div className="agenda-row" style={{borderLeftColor: COLORS[idx % 4]}}>
              <div className="agenda-name">
                {event.link ?
                  <>
                    <LinkComponent href={event.link}>{event.name}</LinkComponent>
                  </>
                  :
                event.name}
              </div>
              <div className="agenda-date">
                <img src="/img/openinfra-days/calendar.svg" alt="date" />
                {event.date}
              </div>
              <div className="agenda-location">
                <img src="/img/openinfra-days/location.svg" alt="location" />
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
