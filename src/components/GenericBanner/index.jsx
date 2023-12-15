import React from 'react'

import './styles.scss'

const GenericBanner = ({ upperText, text, button, fullwidth = true }) => {
    return (
        <section className={`${fullwidth ? '' : 'container generic-banner-wrapper-rounded'} generic-banner-wrapper`}>
            <div className={`generic-banner`}>
                <div className='generic-banner-content'>
                    <span className='generic-banner-upper-text' dangerouslySetInnerHTML={{ __html: upperText }} />
                    <span className='generic-banner-text' dangerouslySetInnerHTML={{ __html: text }} />
                    <a href={button.link} className="generic-banner-button">
                        <span className="btn-arrow">{button.text}</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default GenericBanner
