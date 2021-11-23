import React from 'react'
import PropTypes from 'prop-types'
import { ContributorsPageTemplate } from '../../templates/contributors-page'

const ContributorsPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryCases = entry.getIn(['data', 'companyDetails', 'companies'])
  const companies = entryCases ? entryCases.toJS() : []

  if (data) {
    return (
      <ContributorsPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        content={widgetFor('body')}
        companyDetails={{
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
