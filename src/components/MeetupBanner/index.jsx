import React from 'react'

import background from '../../../static/img/summit-landing/meetup/meetup-banner.png'
import openinfraUserGroup from '../../../static/img/summit-landing/meetup/openinfra-usergroup.svg'

import './styles.scss'

const MeetupBanner = () => {
    return (
        <section className='container meetup-banner-wrapper'>
            <div className="meetup-banner" style={{ backgroundImage: `url(${background}` }}>
                <div className='meetup-banner-content'>
                    <img src={openinfraUserGroup} />
                    <div>
                        <a href="/" className="meetup-banner-button">
                            <span className="btn-arrow">find your local meetup</span>
                        </a>
                        <span>
                            Interested in hosting a Meetup? <br/>
                            Contact us at <a href='mailto:events@openinfra.dev'>events@openinfra.dev</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetupBanner