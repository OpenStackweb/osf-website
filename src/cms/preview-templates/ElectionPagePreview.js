import React from 'react'
import PropTypes from 'prop-types'
import { ElectionPageTemplate } from '../../templates/election-page'

const ElectionPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryMenu = entry.getIn(['data', 'menu'])
  const menu = entryMenu ? entryMenu.toJS() : []

  if (data) {
    return (
      <ElectionPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        menu={menu}
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
