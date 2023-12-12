import React from 'react'
import {StaticImage} from "gatsby-plugin-image";

import {wrapper, image, title, subtitle, button} from './styles.module.scss';

const SummitCardLight = ({summit}) => {
  return (
    <div className={wrapper}>
      <StaticImage className={image} src={summit.image} alt={summit.name} />
      <p className={title}>{summit.name}</p>
      <p className={subtitle}>{summit.date}</p>
      <a href={summit.link} className={button}>See Highlights --> </a>
    </div>
  )
}

export default SummitCardLight
