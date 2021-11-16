import React from 'react'
import PropTypes from 'prop-types'
import { UserSurveyPageTemplate } from '../../templates/user-survey-page'

const UserSurveyPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <UserSurveyPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        about={{
          display: entry.getIn(['data', 'about', 'display']),
          title: entry.getIn(['data', 'about', 'title']),
          description: entry.getIn(['data', 'about', 'description']),
          image: entry.getIn(['data', 'about', 'image']),          
        }}        
        surveyTypes={[]}        
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

UserSurveyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default UserSurveyPagePreview
