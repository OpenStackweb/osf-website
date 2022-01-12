import React from 'react'
import PropTypes from 'prop-types'
import { AnnualReportPageTemplate } from '../../templates/annual-report-page'

const AnnualReportPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AnnualReportPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AnnualReportPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default AnnualReportPagePreview
