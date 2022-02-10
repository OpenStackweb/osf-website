import React from 'react'
import PropTypes from 'prop-types'
import { CompanyProfilePageTemplate } from '../../templates/company-profile-page'

const CompanyProfilePagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CompanyProfilePageTemplate
        name={entry.getIn(['data', 'title'])}
        description={entry.getIn(['data', 'description'])}
        logo={entry.getIn(['data', 'logo'])}
        contributions={entry.getIn(['data', 'contributions'])}
        productsServices={entry.getIn(['data', 'productsServices'])}
        moreInformation={entry.getIn(['data', 'moreInformation'])}
        // content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CompanyProfilePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default CompanyProfilePagePreview
