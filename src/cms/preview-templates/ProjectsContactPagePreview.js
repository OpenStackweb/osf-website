import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsContactPageTemplate } from '../../templates/projects-contact-page'

const ProjectsContactPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ProjectsContactPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        privacyPolicyAgreement={entry.getIn(['data', 'privacyPolicyAgreement'])}
        successMessage={entry.getIn(['data', 'successMessage'])}
        content={widgetFor('body')}        
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProjectsContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ProjectsContactPagePreview 
 