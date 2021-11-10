import React from 'react'
import PropTypes from 'prop-types'
import { HybridCloudPageTemplate } from '../../templates/hybrid-cloud-page'

const HybridCloudPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <HybridCloudPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        introduction={entry.getIn(['data', 'introduction'])}
        footer={{
          title: entry.getIn(['data', 'footer', 'title']),
          subTitle: entry.getIn(['data', 'footer', 'subTitle']),
          button: entry.getIn(['data', 'footer', 'button']),
          buttonText: entry.getIn(['data', 'footer', 'buttonText']),
          display: entry.getIn(['data', 'footer', 'display']),
        }}
        content={widgetFor('body')}
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
  widgetFor: PropTypes.func,
}

export default HybridCloudPagePreview
