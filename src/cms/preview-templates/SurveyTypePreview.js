import React from 'react'
import PropTypes from 'prop-types'

import { SurveyTypeTemplate } from '../../templates/survey-type-template'

const SurveyTypePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <SurveyTypeTemplate
        title={entry.getIn(['data', 'title'])}
        logo={entry.getIn(['data', 'logo'])}
        button={{
          text: entry.getIn(['data', 'button', 'text']),
          link: entry.getIn(['data', 'button', 'link']),
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

SurveyTypePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default SurveyTypePreview
