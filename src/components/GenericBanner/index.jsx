import React from 'react'

import RoundedButton from '../RoundedButton'
import './styles.scss'

const GenericBanner = ({ upperText, text, button, fullwidth = true }) => {
    return (
        <section className={`${fullwidth ? '' : 'container generic-banner-wrapper-rounded'} generic-banner-wrapper`}>
            <div className={`generic-banner`}>
                <div className='generic-banner-content'>
                    <span className='generic-banner-upper-text' dangerouslySetInnerHTML={{ __html: upperText }} />
                    <span className='generic-banner-text' dangerouslySetInnerHTML={{ __html: text }} />
                    <RoundedButton link={button.link} text={button.text} className='generic-banner-button' />                    
                </div>
            </div>
        </section>
    )
}

export default GenericBanner
