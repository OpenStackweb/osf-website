import React from 'react'
import LinkComponent from './LinkComponent';

const CareerSidebar = class extends React.Component {
  render() {
    let { location, roleType, department } = this.props;

    return (
      <aside class="sidebar">
        <p class="menu-title">
          <a href="/careers/" className="menu-back">All OpenInfra Roles</a>
        </p>
        <ul class="menu-list">
          <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="career-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {roleType}
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="career-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {location}
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" class="career-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {department}
          </li>
          <li>
            <a href="mailto:careers@openinfra.dev?subject=OpenInfra Job Application" className="btn">Apply</a>
          </li>
        </ul>
      </aside>
    )
  }
}

export default CareerSidebar
