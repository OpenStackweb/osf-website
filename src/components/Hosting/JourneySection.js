import React from 'react'
import OSlogo from '../../img/svg/OS-logo-bgrd.svg';
import arrows from '../../img/arrows.png';
import investment from '../../img/investment.png';
import returnImg from '../../img/return.png';
import openstack from '../../img/openstack.png';

const InvestmentTable = () => (
  <div className="info-table-wrapper">
    <table className="info-table">
      <thead>
      <tr>
        <th>Activity</th>
        <th>Organizations</th>
        <th>Total</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Upstream <br /> <i>(code)</i></td>
        <td>~450 orgs</td>
        <td>8,500 developers</td>
      </tr>
      <tr>
        <td>Community funding <br /><i>(foundation)</i></td>
        <td>~450 orgs</td>
        <td>>$120M <br /><i>(avg $12M/year)</i></td>
      </tr>
      </tbody>
    </table>
  </div>
);

const ReturnTable = () => (
  <div className="info-table-wrapper">
    <table className="info-table">
      <thead>
      <tr>
        <th>Ecosystem revenue</th>
        <th>Users</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <span>$7B</span><br />
          <i>per year</i>
        </td>
        <td>
          <p>25M cores</p>
          <p>Thousands of users </p>
          <p>9 of top 10 telecoms worldwide</p>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
);

const JourneySection = () => {
  return (
    <section className="section journey">
      <img src={OSlogo} className="bgrd-logo" alt="Openstack logo" />
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title">
              OpenStack’s journey
            </h2>
            <p className="body">
              Initially developed in 2010 by Rackspace and NASA, OpenStack’s success was not guaranteed.
              We brought together hundreds of companies to collabroate on the software through upstream contributions
              and financial investment, producing one of the most successful and important open source projects in history.
            </p>
            <div className="tables-wrapper">
              <div className="left-table">
                <div className="table-header">
                  <img src={investment} alt="investment" className="investment" />
                </div>
                <InvestmentTable />
              </div>
              <div className="separator"><img src={arrows} alt="arrows" /></div>
              <div className="right-table">
                <div className="table-header">
                  <img src={openstack} alt="openstack" className="openstack" />
                  <img src={returnImg} alt="return" className="return" />
                </div>
                <ReturnTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
