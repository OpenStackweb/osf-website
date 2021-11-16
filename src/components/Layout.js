import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import '../style/style.scss'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, style }) => {  
  return (
    <div className="wrapper" style={style}>
      <Helmet>
        <html lang="en" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link rel="stylesheet" type="text/css" href="/cloud-typography/fonts.css" />
      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
