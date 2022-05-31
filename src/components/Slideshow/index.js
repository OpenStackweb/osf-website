import React from 'react'
import './styles.scss';

const Slideshow = ({children}) => {
    const ImageWidth = 200;

    const getContainerWidth = (images) => {
        return `${images.length * ImageWidth}px`;
    }

    return (
        <div className="slideshow">
            <div className="overlay"/>
            <div className="images" style={{width: getContainerWidth(children)}}>
                {children}
            </div>
        </div>
    )
}

export default Slideshow
