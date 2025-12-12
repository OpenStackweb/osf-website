import React from 'react'
import PropTypes from 'prop-types'
import { OpenInfraDaysPageTemplate } from '../../templates/open-infra-days-page'

const OpenInfraDaysPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  const upcomingDaysEventsArray = entry.getIn(['data', 'upcomingDaysEvents', 'events'])
  const upcomingDaysEvents = upcomingDaysEventsArray ? upcomingDaysEventsArray.toJS() : []

  const upcomingMeetupsArray = entry.getIn(['data', 'upcomingMeetups', 'meetups'])
  const upcomingMeetups = upcomingMeetupsArray ? upcomingMeetupsArray.toJS() : []

  const pastMeetupsArray = entry.getIn(['data', 'pastMeetups', 'meetups'])
  const pastMeetups = pastMeetupsArray ? pastMeetupsArray.toJS() : []

  const communityEventsArray = entry.getIn(['data', 'communityEvents', 'events'])
  const communityEvents = communityEventsArray ? communityEventsArray.toJS() : []

  if (data) {
    return (
      <OpenInfraDaysPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        headerImageUrl={entry.getIn(['data', 'headerImageUrl'])}
        upcomingDaysEvents={{
          isVisible: entry.getIn(['data', 'upcomingDaysEvents', 'isVisible']),
          title: entry.getIn(['data', 'upcomingDaysEvents', 'title']),
          headerImage: {
            img: {
              publicURL: entry.getIn(['data', 'upcomingDaysEvents', 'headerImage', 'img'])
            },
            alt: entry.getIn(['data', 'upcomingDaysEvents', 'headerImage', 'alt'])
          },
          events: upcomingDaysEvents
        }}
        upcomingMeetups={{
          title: entry.getIn(['data', 'upcomingMeetups', 'title']),
          banner: {
            title: entry.getIn(['data', 'upcomingMeetups', 'banner', 'title']),
            content: entry.getIn(['data', 'upcomingMeetups', 'banner', 'content']),
            button: {
              text: entry.getIn(['data', 'upcomingMeetups', 'banner', 'button', 'text']),
              url: entry.getIn(['data', 'upcomingMeetups', 'banner', 'button', 'url'])
            }
          },
          meetups: upcomingMeetups.map(meetup => ({
            ...meetup,
            background: {
              publicURL: meetup.background
            }
          }))
        }}
        pastMeetups={{
          title: entry.getIn(['data', 'pastMeetups', 'title']),
          meetups: pastMeetups.map(meetup => ({
            ...meetup,
            background: {
              publicURL: meetup.background
            }
          }))
        }}
        communityEvents={{
          title: entry.getIn(['data', 'communityEvents', 'title']),
          events: communityEvents
        }}
        bottomBanner={{
          background: {
            publicURL: entry.getIn(['data', 'bottomBanner', 'background'])
          },
          title: entry.getIn(['data', 'bottomBanner', 'title']),
          button: {
            link: entry.getIn(['data', 'bottomBanner', 'button', 'link']),
            text: entry.getIn(['data', 'bottomBanner', 'button', 'text'])
          }
        }}
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
}

export default OpenInfraDaysPagePreview