import React from 'react'
import LinkComponent from '../components/LinkComponent'
import leftArrow from '../img/svg/arrow-left.svg'
import Logo from '../img/svg/OIF-Icon.svg'

function LogoBanner(props) {
  return (
    <div className="logo-banner">
      <img className="logo" src={Logo} />
      <span className="title">{props.title}</span>
      <LinkComponent className="cta" href={props.href}>
        {props.cta} 
        <img src={leftArrow} alt="" />
      </LinkComponent>
    </div> 
  )
}

export default LogoBanner