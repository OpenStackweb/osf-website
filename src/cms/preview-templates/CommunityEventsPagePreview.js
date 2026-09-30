import React from 'react'
import PropTypes from 'prop-types'
import { CommunityEventsPageTemplate } from '../../templates/community-events-page'

const CommunityEventsPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <CommunityEventsPageTemplate
      isLoggedUser={false}
      title={data.title}
      subTitle={data.subTitle}
      footer={data.footer}
      eventsSchedule={data.eventsSchedule}
      content={widgetFor('body')}
    />
  )
}

CommunityEventsPagePreview.propTypes = {
  entry: PropTypes.shape({ getIn: PropTypes.func }).isRequired,
  widgetFor: PropTypes.func.isRequired,
}

export default CommunityEventsPagePreview
