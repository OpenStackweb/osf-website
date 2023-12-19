import React from 'react'

import LinkComponent from '../LinkComponent'

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
                        { button?.link && button?.text &&
                        <LinkComponent href={button.link} target='_blank' className="middle-banner-button">
                            <span className="btn-arrow">{button.text}</span>
                        </LinkComponent>
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
