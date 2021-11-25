import React from 'react'
import { Helmet } from "react-helmet"

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
    let iconDefault = "fas fa-sort sort-icon";
    let rightButton = document.getElementById("right-button");
    let leftButton = document.getElementById("left-button");

    this.setState(prevState => ({ direction: !prevState.direction }));
    this.setState(prevState => ({ selected: !prevState.selected }));
    console.log(this.state.selected);

    if (id === "left-button") {

      icon.style.opacity = "1";
      rightButton.style.opacity = ".4";
      rightButton.className = iconDefault;
      
    } else if (id === "right-button") {

      icon.style.opacity = "1";
      leftButton.style.opacity = ".4";
      leftButton.className = iconDefault;
    }

    if (this.state.direction === true) {
      icon.className = iconDown;
    } else if (this.state.direction === false) {
      icon.className = iconUp;
    }
  }

  render() {
    
    return (
      <>
        <Helmet>
          <script src="https://kit.fontawesome.com/9438df25f9.js" crossorigin="anonymous"></script>
        </Helmet>
        <i id={this.props.id} onClick={this.handleClick} className="fas fa-sort sort-icon" />
      </>
    )
  }
}

export default SortButton