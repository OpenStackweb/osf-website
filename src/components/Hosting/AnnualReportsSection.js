import React from 'react'
import LinkComponent from "../LinkComponent";

const AnnualReportsSection = () => {
  // Annual reports data - newest first (2025 to 2014)
  const annualReports = [
    { year: 2025, url: 'https://openinfra.org/annual-report/2025' },
    { year: 2024, url: 'https://openinfra.dev/annual-report/2024' },
    { year: 2023, url: 'https://openinfra.dev/annual-report/2023' },
    { year: 2022, url: 'https://openinfra.dev/annual-report/2022' },
    { year: 2021, url: '/annual-report/2021' },
    { year: 2020, url: 'https://www.openstack.org/annual-reports/2020-openstack-foundation-annual-report' },
    { year: 2019, url: 'https://www.openstack.org/annual-reports/2019-openstack-foundation-annual-report' },
    { year: 2018, url: 'https://www.openstack.org/annual-reports/2018-openstack-foundation-annual-report' },
    { year: 2017, url: 'https://www.openstack.org/assets/reports/OpenStack-AnnualReport2017.pdf' },
    { year: 2016, url: 'https://www.openstack.org/assets/reports/OpenStack-2016-Annual-Report-final-draft.pdf' },
    { year: 2015, url: 'https://www.openstack.org/assets/reports/osf-annual-report-2015-FINAL.pdf' },
    { year: 2014, url: 'https://www.openstack.org/assets/reports/osf-annual-report-2014.pdf' },
  ];

  return (
    <section className="section our-services" id="annual-reports">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="overview">Annual Reports</p>
            <h2 className="title">
              OpenInfra Foundation activities and progress
            </h2>
            <p className="body">
              Our annual reports provide comprehensive insights into the OpenInfra Foundation's activities, achievements, and progress throughout each year. These reports document the growth and impact of our hosted projects, community milestones, member contributions, and strategic initiatives that advance open infrastructure globally. They serve as a transparent record of how we support open source communities, facilitate collaboration, and drive innovation in infrastructure software. For detailed information about our work, community impact, and organizational progress, explore our annual reports.
            </p>
          </div>
          <div className="column is-one-third">
            <div className="checklist-box">
              <div className="checklist-box-title">
                ANNUAL REPORTS
              </div>
              <div className="checklist-box-body">
                {annualReports.map((report) => (
                  <div key={report.year} className="annual-report-item">
                    <LinkComponent href={report.url} className="annual-report-link">
                      {report.year} Annual Report
                    </LinkComponent>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnualReportsSection;
