import React from 'react'
import LinkComponent from './LinkComponent'
import content from '../content/top-bar.json'

const TopBar = class extends React.Component {

  render() {
    if(content.bar) {
      return (      
        <div className="bar-news">
          <div className="container">
            <div className="bar-inner">
              <div className="bar-entry">
                <div className="bar-text">
                  {content.bar.text} 
                  <LinkComponent href={content.bar.link} className="bar-link">
                    {content.bar.button} <i className="right"></i>
                  </LinkComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      )    
    } else {
      return null;
    }    
  }
}

export default TopBar
