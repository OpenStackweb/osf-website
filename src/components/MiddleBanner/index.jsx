import React from 'react'

import RoundedButton from '../RoundedButton'

import './styles.scss'

const MiddleBanner = ({ title, text, button, image, imageFirst = false }) => {

    return (
        <section className='container middle-banner-wrapper'>
            <div className="middle-banner">
                <div className={`middle-banner-content ${imageFirst ? 'reverse' : ''}`}>
                    <div className='middle-banner-text-container'>
                        <span className='middle-banner-text'>
                            <span className='title'>{title}</span>
                            <span dangerouslySetInnerHTML={{ __html: text }} />
                        </span>
                        {button?.link && button?.text &&
                            <RoundedButton link={button.link} text={button.text} className="middle-banner-button" arrowColor={{ color: '#888888', hover: '#ffffff' }} />
                        }
                    </div>
                    <div className='middle-banner-image-container'>
                        <img src={image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiddleBanner
