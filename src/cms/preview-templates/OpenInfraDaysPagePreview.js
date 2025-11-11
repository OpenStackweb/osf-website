import React from 'react'
import PropTypes from 'prop-types'
import { OpenInfraDaysPageTemplate } from '../../templates/open-infra-days-page'

const OpenInfraDaysPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  const entryUpcomingDaysEvents = entry.getIn(['data', 'upcomingDaysEvents', 'events'])
  const upcomingDaysEvents = entryUpcomingDaysEvents ? entryUpcomingDaysEvents.toJS() : []

  const entryUpcomingMeetups = entry.getIn(['data', 'upcomingMeetups'])
  const upcomingMeetups = entryUpcomingMeetups ? entryUpcomingMeetups.toJS() : []

  const entryPastMeetups = entry.getIn(['data', 'pastMeetups'])
  const pastMeetups = entryPastMeetups ? entryPastMeetups.toJS() : []

  const entryCommunityEvents = entry.getIn(['data', 'communityEvents', 'events'])
  const communityEvents = entryCommunityEvents ? entryCommunityEvents.toJS() : []

  const entryUpcomingSummits = entry.getIn(['data', 'upcomingSummits'])
  const upcomingSummits = entryUpcomingSummits ? entryUpcomingSummits.toJS() : { title: '', summits: [] }

  if (data) {
    return (
      <OpenInfraDaysPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        upcomingDaysEvents={{
          title: entry.getIn(['data', 'upcomingDaysEvents', 'title']),
          events: upcomingDaysEvents
        }}
        upcomingMeetups={upcomingMeetups}
        pastMeetups={pastMeetups}
        communityEvents={{
          title: entry.getIn(['data', 'communityEvents', 'title']),
          events: communityEvents
        }}
        upcomingSummits={upcomingSummits}
        isLoggedUser={false}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

OpenInfraDaysPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default OpenInfraDaysPagePreview