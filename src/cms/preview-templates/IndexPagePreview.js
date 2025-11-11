import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {    
    return (      
      <IndexPageTemplate        
        header={data.header || {}}
        mainpitch={data.mainpitch || {}}
        whyExpand={data.whyExpand || {}}
        projects={data.projects || {}}
        people={data.people || {}}
        sponsor={data.sponsor || {}}
        openInfraEvents={data.openInfraEvents || {}}
        content={data.content || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
