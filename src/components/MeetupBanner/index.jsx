import React from 'react'

import RoundedButton from '../RoundedButton'

import './styles.scss'

const MeetupBanner = ({ background, logo, button, text }) => {
    return (
        <section className='container meetup-banner-wrapper'>
            <div className="meetup-banner" style={{ backgroundImage: `url(${background}` }}>
                <div className='meetup-banner-content'>
                    <img src={logo} />
                    <div>
                        <RoundedButton link={button.link} text={button.text} className="meetup-banner-button" />
                        <span dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetupBanner
