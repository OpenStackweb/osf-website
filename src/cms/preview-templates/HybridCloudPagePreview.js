import React from 'react'
import PropTypes from 'prop-types'
import { HybridCloudPageTemplate } from '../../templates/hybrid-cloud-page'

const HybridCloudPagePreview = ({ entry }) => {

  const data = entry.getIn(['data']).toJS()

  const entryCases = entry.getIn(['data', 'useCases', 'cases'])
  const cases = entryCases ? entryCases.toJS() : []

  const entryBenefits = entry.getIn(['data', 'benefits', 'items'])
  const benefits = entryBenefits ? entryBenefits.toJS() : []

  const entryProjects = entry.getIn(['data', 'projects', 'list'])
  const projects = entryProjects ? entryProjects.toJS() : []

  const entryOrganizations = entry.getIn(['data', 'organizations', 'list'])
  const organizations = entryOrganizations ? entryOrganizations.toJS() : []

  if (data) {
    return (
      <HybridCloudPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        introduction={entry.getIn(['data', 'introduction'])}
        useCases={{
            display: entry.getIn(['data', 'useCases', 'display' ]),
            title: entry.getIn(['data', 'useCases', 'title' ]),
            cases: cases,
        }}
        benefits={{
            display: entry.getIn(['data', 'benefits', 'display' ]),
            title: entry.getIn(['data', 'benefits', 'title' ]),
            items: benefits
        }}
        projects={{
            display: entry.getIn(['data', 'projects', 'display' ]),
            title: entry.getIn(['data', 'projects', 'title' ]),
            list: projects
        }}
        organizations={{
            display: entry.getIn(['data', 'organizations', 'display' ]),
            title: entry.getIn(['data', 'organizations', 'title' ]),
            list: organizations
        }}
        footer={{
          title: entry.getIn(['data', 'footer', 'title']),
          subTitle: entry.getIn(['data', 'footer', 'subTitle']),
          button: entry.getIn(['data', 'footer', 'button']),
          buttonText: entry.getIn(['data', 'footer', 'buttonText']),
          display: entry.getIn(['data', 'footer', 'display']),
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HybridCloudPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HybridCloudPagePreview
