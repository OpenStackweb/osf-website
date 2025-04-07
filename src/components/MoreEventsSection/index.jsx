import React from 'react'
import './styles.scss';
import LinkComponent from '../LinkComponent';


const EVENTS = [
  {name: "KubeCon EU + CloudNativeCon EU", link: "https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/", date: "Apr 1-4, 2025", location: "London, GB", color: "#39ae4a"},
  {name: "OCP Summit EMEA", link: "https://www.opencompute.org/summit/regional-summit", date: "Apr 29–30, 2025", location: "Dublin, IE", color: "#28a4db"},
  {name: "OpenStack 15th Birthday Celebrations!", link: "https://www.openstack.org/blog/celebrating-15-years-of-openstack/", date: "All Year Long", location: "All Around the Globe", color: "#28a4db"},
  {name: "stackconf 2025", link: "https://dev.events/conferences/stackconf-2025-09q34n-t", date: "Apr 29-30, 2025", location: "Munich, DE", color: "#28a4db"},
  {name: "Open Source Summit Europe", link: "https://events.linuxfoundation.org/open-source-summit-europe/", date: "25-27 August 2025", location: "Amsterdam, NL", color: "#28a4db"},
  {name: "OpenInfra Summit Europe 2025", link: "https://openinfra.org/summit/", date: "October 17-19, 2025", location: "Paris-Saclay, FR", color: "#28a4db"},
  {name: "PyTorch Conference 2025", link: "https://events.linuxfoundation.org/pytorch-conference/?__hstc=132719121.0b101d54206edc20977df92c2e1046c4.1742517488370.1742517488370.1742517488370.1&__hssc=132719121.2.1742517488370&__hsfp=1219773955", date: "October 22-23, 2025", location: "San Francisco, CA", color: "#28a4db"},
  {name: "Open Telco Cloud Summit", link: "https://open.telcocloud-summit.com/event/585d8b6f-6494-4698-bb78-840206d3d3fa/summary?rt=svQDGBmL7k24CyoTCtWc2Q", date: "May 20, 2025", location: "Virtual", color: "#28a4db"},
  {name: "KubeCon EU + CloudNativeCon NA", link: "https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/", date: "November 10-13", location: "Atlanta, GA", color: "#28a4db"},
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
