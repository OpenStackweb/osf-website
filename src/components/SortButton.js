import React from 'react'

class SortButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      id: "",
      direction: true,
      selected: true
    };
  }
  
  handleClick(event) {
    
    event.preventDefault();
    const id = event.target.id;
    this.setState({ id: id });
    console.log(this.state.id);
    let icon = document.getElementById(id);
    let iconUp = "fa fa-chevron-up sort-icon";
    let iconDown = "fa fa-chevron-down sort-icon";
    let iconDefault = "&#xf0dc;";
    let rightButton = document.getElementById("right-button");
    let leftButton = document.getElementById("left-button");

    this.setState(prevState => ({ direction: !prevState.direction }));
    this.setState(prevState => ({ selected: !prevState.selected }));
    console.log(this.state.selected);

    if (id === "left-button") {
      document.getElementById(id).innerHTML = ""; 
      icon.style.opacity = "1";
      rightButton.style.opacity = ".4";
      rightButton.innerHTML = iconDefault; 
      rightButton.className = "sort-icon";
      
    } else if (id === "" || "right-button") {
      document.getElementById(id).innerHTML = ""; 
      icon.style.opacity = "1";
      leftButton.style.opacity = ".4";
      leftButton.innerHTML = iconDefault; 
      leftButton.className = "sort-icon";
    }

    if (this.state.direction === true) {
      icon.className = iconDown;
    } else if (this.state.direction === false) {
      icon.className = iconUp;
    }
  }

  render() {
    
    return (
      <i id={this.props.id} onClick={this.handleClick} className="sort-icon">&#xf0dc;</i>
    )
  }
}

export default SortButton