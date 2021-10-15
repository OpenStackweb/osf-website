import React from 'react'
import PropTypes from 'prop-types'
import { OpenInfraLiveKeynotesTemplate } from '../../templates/live-keynotes'

const LiveKeynotesPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS()
    const entrySpeakers = entry.getIn(['data', 'featuredSpeakers', 'speakers'])
    const entrySponsors = entry.getIn(['data', 'supportingSponsors', 'sponsors'])
    const entryStats = entry.getIn(['data', 'statSection', 'stats'])
    const stats = entryStats ? entryStats.toJS() : []
    const sponsors = entrySponsors ? entrySponsors.toJS() : []
    const speakers = entrySpeakers ? entrySpeakers.toJS() : []

      if (data) {
        return (
          <OpenInfraLiveKeynotesTemplate
            hero={{
              title: entry.getIn(['data', 'hero', 'title']),
              tagline: entry.getIn(['data', 'hero', 'tagline']),
              description: entry.getIn(['data', 'hero', 'description']),
              subtitle: entry.getIn(['data', 'hero', 'subtitle']),
              buttonText: entry.getIn(['data', 'hero', 'buttonText']),
              buttonUrl: entry.getIn(['data', 'hero', 'buttonUrl']),
            }}
            intro={{
                text: entry.getIn(['data', 'intro', 'text']),
            }}
            whatToExpect={{
              title: entry.getIn(['data', 'whatToExpect', 'title']),
              text: entry.getIn(['data', 'whatToExpect', 'text']),
              bullets: entry.getIn(['data', 'whatToExpect', 'bullets']),
            }}
            featuredProjects={{
              title: entry.getIn(['data', 'featuredProjects', 'title']),
              text: entry.getIn(['data', 'featuredProjects', 'text']),
            }}
            statSection={{
                leftColumn: {title: entry.getIn(['data', 'statSection', 'leftColumn', 'title']), text: entry.getIn(['data', 'statSection', 'leftColumn', 'text'])},
                rightColumn: {title: entry.getIn(['data', 'statSection', 'rightColumn', 'title']), text: entry.getIn(['data', 'statSection', 'rightColumn', 'text'])},
                stats: stats,
            }}
            featuredSpeakers={{
                title: entry.getIn(['data', 'featuredSpeakers', 'title']),
                speakers: speakers,
            }}
            headlineSponsor={{
                title: entry.getIn(['data', 'headlineSponsor', 'title']),
                logo: entry.getIn(['data', 'headlineSponsor', 'logo']),
            }}
            supportingSponsors={{
                title: entry.getIn(['data', 'supportingSponsors', 'title']),
                sponsors: sponsors,
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
