import React from 'react'
import {StaticImage} from "gatsby-plugin-image";

import {wrapper, image, title, subtitle, button} from './styles.module.scss';
import SummitCardLight from "./SummitCardLight";

const PREVIOUS_SUMMITS = [
  {name: 'Vancouver, Canada', date: 'June 13-15, 2023', image: '../img/summits/vancouver.png', link: ''},
  {name: 'Berlin, Germany', date: 'June 7-9, 2022', image: '../img/summits/berlin.png', link: ''},
  {name: 'Denver, Colorado', date: 'April 29 - May 1, 2019', image: '../img/summits/denver.png', link: ''},
  {name: 'Shanghai, China', date: 'November 4-6, 2019', image: '../img/summits/shanghai.png', link: ''},
];

const PreviousSummits = ({}) => {
  return (
    <div className={wrapper}>
      {PREVIOUS_SUMMITS.map(summit => <SummitCardLight summit={summit} />)}
      <SummitCardLight />
    </div>
  )
}

export default PreviousSummits
