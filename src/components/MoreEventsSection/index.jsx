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
  {name: "stackconf 2025", link: "https://dev.events/conferences/stackconf-2025-09q34n-t", date: "Apr 29-30, 2025", location: "Munich, DE"},
  {name: "Open Source Summit Europe", link: "https://events.linuxfoundation.org/open-source-summit-europe/", date: "25-27 August 2025", location: "Amsterdam, NL"},
  {name: "OpenInfra Summit Europe 2025", link: "https://openinfra.org/summit/", date: "October 17-19, 2025", location: "Paris-Saclay, FR"},
  {name: "PyTorch Conference 2025", link: "https://events.linuxfoundation.org/pytorch-conference/?__hstc=132719121.0b101d54206edc20977df92c2e1046c4.1742517488370.1742517488370.1742517488370.1&__hssc=132719121.2.1742517488370&__hsfp=1219773955", date: "October 22-23, 2025", location: "San Francisco, CA"},
  {name: "Open Telco Cloud Summit", link: "https://open.telcocloud-summit.com/event/585d8b6f-6494-4698-bb78-840206d3d3fa/summary?rt=svQDGBmL7k24CyoTCtWc2Q", date: "May 20, 2025", location: "Virtual"},
  {name: "KubeCon EU + CloudNativeCon NA", link: "https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/", date: "November 10-13", location: "Atlanta, GA"},
];

const MoreEventsSection = () => {
  return (
    <section className="more-events-section-wrapper" id="community-events">
      <div className="container">
        <h1 className="title">
          More Community-Powered Events
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
