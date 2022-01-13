import React from 'react'
import PropTypes from 'prop-types'
import { ContributorsPageTemplate } from '../../templates/contributors-page'

const ContributorsPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryCompanies = entry.getIn(['data', 'companyDetails', 'companies'])
  const companies = entryCompanies ? entryCompanies.toJS() : []

  if (data) {
    return (
      <ContributorsPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        content={widgetFor('body')}
        companyDetails={{
            leftColHeading: entry.getIn(['data', 'companyDetails', 'leftColHeading' ]),
            rightColHeading: entry.getIn(['data', 'companyDetails', 'rightColHeading' ]),
            companies: companies,
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContributorsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ContributorsPagePreview 
 