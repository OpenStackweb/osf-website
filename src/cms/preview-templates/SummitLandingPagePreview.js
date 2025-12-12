import React from 'react'
import PropTypes from 'prop-types'
import { SummitLandingPageTemplate } from '../../templates/summit-landing-page'

const SummitLandingPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  const pastSummitsArray = entry.getIn(['data', 'pastSummits', 'summits'])
  const pastSummits = pastSummitsArray ? pastSummitsArray.toJS() : []

  const middleBannerArray = entry.getIn(['data', 'middleBanner'])
  const middleBanner = middleBannerArray ? middleBannerArray.toJS() : []

  const previousSummitsArray = entry.getIn(['data', 'previousSummits', 'summits'])
  const previousSummits = previousSummitsArray ? previousSummitsArray.toJS() : []

  if (data) {
    return (
      <SummitLandingPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        headerImage={{
          backgroundImage: {
            publicURL: entry.getIn(['data', 'headerImage', 'backgroundImage'])
          },
          overview: entry.getIn(['data', 'headerImage', 'overview']),
          caption: entry.getIn(['data', 'headerImage', 'caption']),
          logo: {
            src: {
              publicURL: entry.getIn(['data', 'headerImage', 'logo', 'src'])
            },
            alt: entry.getIn(['data', 'headerImage', 'logo', 'alt'])
          }
        }}
        subHeader={{
          overview: entry.getIn(['data', 'subHeader', 'overview']),
          title: entry.getIn(['data', 'subHeader', 'title']),
          text: entry.getIn(['data', 'subHeader', 'text']),
          badge: {
            src: {
              publicURL: entry.getIn(['data', 'subHeader', 'badge', 'src'])
            },
            alt: entry.getIn(['data', 'subHeader', 'badge', 'alt'])
          },
          footer: {
            src: {
              publicURL: entry.getIn(['data', 'subHeader', 'footer', 'src'])
            },
            alt: entry.getIn(['data', 'subHeader', 'footer', 'alt'])
          }
        }}
        sponsorBanner={{
          upperText: entry.getIn(['data', 'sponsorBanner', 'upperText']),
          title: entry.getIn(['data', 'sponsorBanner', 'title']),
          image: {
            publicURL: entry.getIn(['data', 'sponsorBanner', 'image'])
          },
          button: {
            text: entry.getIn(['data', 'sponsorBanner', 'button', 'text']),
            link: entry.getIn(['data', 'sponsorBanner', 'button', 'link'])
          }
        }}
        pastSummits={{
          title: entry.getIn(['data', 'pastSummits', 'title']),
          summits: pastSummits.map(summit => ({
            ...summit,
            background: {
              publicURL: summit.background
            }
          }))
        }}
        middleBanner={middleBanner.map(banner => ({
          ...banner,
          image: {
            publicURL: banner.image
          }
        }))}
        previousSummits={{
          title: entry.getIn(['data', 'previousSummits', 'title']),
          summits: previousSummits.map(summit => ({
            ...summit,
            image: {
              publicURL: summit.image
            }
          }))
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

SummitLandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SummitLandingPagePreview