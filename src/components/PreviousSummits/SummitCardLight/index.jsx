import React from 'react'

import './styles.scss';
import RoundedButton from '../../RoundedButton';

const SummitCardLight = ({ summit }) => {
  return (
    <div className="summit-card-l-wrapper">
      <img className="image" alt={summit.name} src={summit.image?.publicURL} />
      <p className="title">{summit.name}</p>
      <p className="subtitle">{summit.date}</p>
      <RoundedButton link={summit.link} text='See Highlights' className='button' arrowColor={{ color: '#888888', hover: '#ffffff' }} />      
    </div>
  )
}

export default SummitCardLight
