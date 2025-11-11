import React from 'react'
import '../style/modules/_sub_header.scss'

const SubHeader = ({ overview, title, text, badge, footer }) => {
  return (
    <section className="subheader_wrapper">
      <div className="container">
        <div className="body">
          <div className="overview">{overview}</div>
          <div className="title" dangerouslySetInnerHTML={{ __html: title }} />          
          <div dangerouslySetInnerHTML={{ __html: text }}></div>          
          <img
            className="badge"
            src={badge.src.publicURL} 
            alt={badge.alt}
          />
        </div>
        <img
          className="footer_image"
          src={footer.src.publicURL}
          alt={footer.alt}
        />
      </div>
    </section>
  )
}

export default SubHeader