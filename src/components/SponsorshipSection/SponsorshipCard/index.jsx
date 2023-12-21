import React from 'react'

import './styles.scss';

const Tick = ({color}) => (
  <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.4668 10L9.40013 18.5L25.7335 1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SponsorshipCard = ({title, priceMember, priceNonMember, color, items}) => {

  const getValue = (value) => {
    if (value === false) {
      return "-";
    } else if (value === true) {
      return <Tick color={color} />
    } else {
      return value
    }
  }

  return (
    <div className="sponsorship-card-wrapper">
      <div className="left-section" style={{backgroundColor: color}}>
        <h2 className="title">{title}</h2>
        <div className="prices">
          <div className="member-price">
            <p className="price-label">Member Price</p>
            <p className="price">{priceMember}</p>
          </div>
          <div className="non-member-price">
            <p className="price-label">Non-Member Price</p>
            <p className="price">{priceNonMember}</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        {items.map(it => (
          <div className={`item ${it.value === false ? 'disabled' : ''}`}>
            <h4 className="item-title">
              {it.title}{' '}
            </h4>
            {it.subtitle && <div className="item-subtitle">{it.subtitle}</div>}
            <p className="item-value">{getValue(it.value)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SponsorshipCard
