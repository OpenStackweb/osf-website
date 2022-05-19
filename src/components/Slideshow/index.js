import React from 'react'
import './styles.scss';

const Slideshow = ({children}) => {
    return (
      <div className="slideshow">
        <div className="overlay" />
        <div className="images">
          {children}
        </div>
      </div>
    )
}

export default Slideshow