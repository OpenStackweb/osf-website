import React from 'react'

class SortButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.state = {
      direction: true,
      id: "id"
    };
  }

  changeIcon() {
    if (this.id.className === "fa fa-chevron-up sort-icon") {
      alert("it is true");
    } 
    
    else if (this.className !== "fa fa-chevron-up sort-icon") {
      alert("it is false");
    }
  }
  
  handleClick(event) {
    event.preventDefault();
    const id = event.target.id;
    this.setState(prevState => ({ direction: !prevState.direction }));
    this.setState({id: id});

    if (document.getElementById(id).className === "fa fa-chevron-down sort-icon") {
      (document.getElementById(id).className = "fa fa-chevron-up sort-icon")
    } else if (document.getElementById(id).className === "fa fa-chevron-up sort-icon") {
      (document.getElementById(id).className = "fa fa-chevron-down sort-icon")
    }

  }

  render() {
    
    return (
      <i id={this.props.id} onClick={this.handleClick} className="fa fa-chevron-up sort-icon" />
    )
  }
}

export default SortButton