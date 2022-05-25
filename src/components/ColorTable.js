import React from 'react'
import '../style/modules/_color-table.scss';

const ColorTable = ({color, title, items, itemIcon}) => {
    return (
        <div className="ct-wrapper" style={{borderColor: color}}>
            <div className='ct-title' style={{backgroundColor: color}}>
                {title}
            </div>
            <div className='ct-items'>
                {items.map(it => (
                  <div className='ct-row'>
                      <div className="ct-item-icon"><img src={itemIcon} alt="check" /></div>
                      <div className="ct-item-text">{it}</div>
                  </div>
                ))}
            </div>
        </div>
    );
}

export default ColorTable
