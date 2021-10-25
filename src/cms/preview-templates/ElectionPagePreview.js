import React from 'react'
import PropTypes from 'prop-types'
import { ElectionPageTemplate } from '../../templates/election-page'

const ElectionPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  console.log('data=?', data);

  if (data) {
    return (
      <ElectionPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        menu={{
          text: entry.getIn(['data', 'menu', 'text']),
          link: entry.getIn(['data', 'menu', 'link']),
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ElectionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ElectionPagePreview
