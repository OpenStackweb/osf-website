import React from 'react'

import content from '../content/become-sponsor.json'
import LinkComponent from './LinkComponent'

const BecomeSponsor = class extends React.Component {
  render() {
    return (
      <section className="companies-s2-main">
        <h4 className="itemtitle">{content.title}</h4>
        <div className="container">
          <div className="fix-h5">
            {content.subTitle}
          </div>
          <LinkComponent href={content.link} className="button button-white">
            <span>{content.linkText}</span>
          </LinkComponent>          
        </div>
      </section>
    )
  }
}

export default BecomeSponsor