import React from 'react'
import PropTypes from 'prop-types'
import { OpenInfraLiveKeynotesTemplate } from '../../templates/live-keynotes'

const LiveKeynotesPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS()
    const entryStats = entry.getIn(['data', 'statSection', 'stats'])
    const stats = entryStats ? entryStats.toJS() : []

      if (data) {
        return (
          <OpenInfraLiveKeynotesTemplate
            hero={{
              title: entry.getIn(['data', 'hero', 'title']),
              description: entry.getIn(['data', 'hero', 'description']),
              subtitle: entry.getIn(['data', 'hero', 'subtitle']),
              buttonText: entry.getIn(['data', 'hero', 'buttonText']),
              buttonUrl: entry.getIn(['data', 'hero', 'buttonUrl']),
            }}
            intro={{
                text: entry.getIn(['data', 'intro', 'text']),
            }}
            statSection={{
                leftColumn: {title: entry.getIn(['data', 'statSection', 'leftColumn', 'title']), text: entry.getIn(['data', 'statSection', 'leftColumn', 'text'])},
                rightColumn: {title: entry.getIn(['data', 'statSection', 'rightColumn', 'title']), text: entry.getIn(['data', 'statSection', 'rightColumn', 'text'])},
                stats: stats,
            }}
            sponsorSection={{
                title: entry.getIn(['data', 'sponsorSection', 'title']),
                logo: entry.getIn(['data', 'sponsorSection', 'logo']),
            }}
            sponsorshipSection={{
                leftColumn: {title: entry.getIn(['data', 'sponsorshipSection', 'leftColumn', 'title']), body: entry.getIn(['data', 'sponsorshipSection', 'leftColumn', 'body']), footer: entry.getIn(['data', 'sponsorshipSection', 'leftColumn', 'footer'])},
                rightColumn: {title: entry.getIn(['data', 'sponsorshipSection', 'rightColumn', 'title']), body: entry.getIn(['data', 'sponsorshipSection', 'rightColumn', 'body']), footer: entry.getIn(['data', 'sponsorshipSection', 'rightColumn', 'footer'])},
                title: entry.getIn(['data', 'sponsorshipSection', 'title']),
            }}
            interestedSection={{
                preEmailText: entry.getIn(['data', 'interestedSection', 'preEmailText']),
                email: entry.getIn(['data', 'interestedSection', 'email']),
                preJoinText: entry.getIn(['data', 'interestedSection', 'preJoinText']),
                joinText: entry.getIn(['data', 'interestedSection', 'joinText']),
                joinUrl: entry.getIn(['data', 'interestedSection', 'joinUrl']),
            }}
          />
        )
      } else {
        return <div>Loading...</div>
      }
}

LiveKeynotesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default LiveKeynotesPagePreview
