import React from 'react'
import PropTypes from 'prop-types'
import { CompaniesPageTemplate } from '../../templates/companies-page'

const CompaniesPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entrySponsors = entry.getIn(['data', 'sponsorsLevel'])
  const sponsors = entrySponsors ? entrySponsors.toJS() : []

  if (data) {
    return (
      <CompaniesPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
          link: {
            text: entry.getIn(['data', 'header', 'link', 'text']),
            url: entry.getIn(['data', 'header', 'link', 'url']),
          }
        }}
        sponsorsLevel={sponsors}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CompaniesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default CompaniesPagePreview
