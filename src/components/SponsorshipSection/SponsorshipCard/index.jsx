import React from 'react'

import './styles.scss';

const Tick = ({color}) => (
  <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.4668 10L9.40013 18.5L25.7335 1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SponsorshipCard = ({overview, title, dark, soldOut, priceMember, priceNonMember, price, color, items}) => {

  const getValue = (value, colored) => {
    if (value === false) {
      return "-";
    } else if (value === true) {
      return <Tick color={color} />
    } else if (Array.isArray(value)) {
      return (
        <div className="value-list-wrapper">
          {value.map((valItem) => (
            <div className="value-item" key={valItem}>
              <i className="fa fa-caret-right" /> {valItem}
            </div>
          ))}
        </div>
      );
    } else {
      return colored ? <span className="colored-value" style={{color}}>{value}</span> : value;
    }
  }

  return (
    <div className="sponsorship-card-wrapper">
      <div className={`left-section ${dark ? 'dark' : ''}`} style={{backgroundColor: color}}>
        {overview && <p className="overview">{overview}</p>}
        <h2 className="title">{title}</h2>
        <div className="prices">
          {(priceMember || priceNonMember || price) &&
          <div className="price-title" style={{color: dark ? color : "inherit"}}>
            Price
          </div>
          }
          {priceMember &&
            <div className="member-price">
              <span className="price">{priceMember}</span>
              <i className="fa fa-caret-right" />
              <span className="price-label">Member Price </span>
            </div>
          }
          {priceNonMember &&
            <div className="non-member-price">
              <span className="price">{priceNonMember}</span>
              <i className="fa fa-caret-right" />
              <span className="price-label">Non-Member Price</span>
          </div>
          }
          {price &&
            <div className="single-price">
              <span className="price">{price}</span>
            </div>
          }
        </div>
      </div>
      <div className="right-section">
        <div className="items-section">
          {items.map(it => (
            <div className={`item ${it.value === false ? 'disabled' : ''}`}>
              <h4 className="item-title">
                {it.title}{' '}
              </h4>
              {it.subtitle && <div className="item-subtitle">{it.subtitle}</div>}
              <p className="item-value">{getValue(it.value, it.colored)}</p>
            </div>
          ))}
        </div>
      </div>
      {soldOut &&
        <div className="soldOut">SOLD OUT</div>
      }
    </div>
  )
}

export default SponsorshipCard
