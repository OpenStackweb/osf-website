import React from 'react'
import PropTypes from 'prop-types'
import { EventLandingPageTemplate } from '../../templates/event-landing-page'

/**
 * In the CMS an image field is a plain string path, while on the built site it
 * is a File node ({ publicURL }). The components accept either, but sponsor
 * tiers are rebuilt here so nested lists survive the Immutable -> JS hop.
 */
const EventLandingPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data'])

  if (!data) return <div>Loading...</div>

  const toJS = (key, fallback) => {
    const value = entry.getIn(['data', ...key])
    return value && value.toJS ? value.toJS() : fallback
  }

  const header = toJS(['header'], {})
  const about = toJS(['about'], {})
  const tracks = toJS(['tracks'], {})
  const schedule = toJS(['schedule'], {})
  const venue = toJS(['venue'], {})
  const registration = toJS(['registration'], {})
  const sponsors = toJS(['sponsors'], {})
  const footer = toJS(['footer'], {})

  return (
    <EventLandingPageTemplate
      header={{
        ...header,
        banner: header.banner ? { publicURL: header.banner } : null,
        buttons: header.buttons || [],
      }}
      about={about}
      tracks={{ ...tracks, items: tracks.items || [] }}
      schedule={schedule}
      venue={venue}
      registration={{ ...registration, passes: registration.passes || [] }}
      sponsors={{
        ...sponsors,
        tiers: (sponsors.tiers || []).map(tier => ({
          ...tier,
          sponsors: (tier.sponsors || []).map(sponsor => ({
            ...sponsor,
            logo: sponsor.logo ? { publicURL: sponsor.logo } : null,
          })),
        })),
      }}
      footer={footer}
      content={widgetFor('body')}
    />
  )
}

EventLandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default EventLandingPagePreview
