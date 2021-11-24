import React, { useState } from 'react'

class SortButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick(event) {
    const id = event.target.id;
    document.getElementById(id).style = "transform: rotate(180deg)";
  
  }

  render() {
    
    return (
      <i id={this.props.id} onClick={this.handleClick} className="fa fa-chevron-up sort-icon" />
    )
  }
}

export default SortButton