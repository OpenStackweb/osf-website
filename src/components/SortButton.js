import React from 'react'
import { Helmet } from "react-helmet"

class SortButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.sortTable = this.sortTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: "",
      dir: ""
    };
  }

  componentDidMount() {
    console.log("this is firing");
    this.sortTable(1);
    this.sortTable(0);
  }

  sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("corpTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {

      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir === "asc") {
          this.setState({ dir: "desc" });
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }

        } else if (dir === "desc") {
          this.setState({ dir: "asc" });
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }

        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        console.log(switchcount);
        switchcount ++;
        
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
}
  
  handleClick(event) {
    
    event.preventDefault();
    const id = event.target.id;
    this.setState({ id: id });
    let icon = document.getElementById(id);
    let iconUp = "fa fa-chevron-up sort-icon";
    let iconDown = "fa fa-chevron-down sort-icon";
    let iconDefault = "fas fa-sort sort-icon";
    let rightButton = document.getElementById("right-button");
    let leftButton = document.getElementById("left-button");

    console.log('state', this.state);

    // Check if button is in left column or right column, change buttons
    if (id === "left-button") {
      this.sortTable(0);
      icon.style.opacity = "1";
      rightButton.style.opacity = ".4";
      rightButton.className = iconDefault;
      
    } else if (id === "right-button") {
      this.sortTable(1);
      icon.style.opacity = "1";
      leftButton.style.opacity = ".4";
      leftButton.className = iconDefault;
    }

  // Check if button should be up or down arrow
    
    if (this.state.dir === "asc") {
      icon.className = iconUp;
    } else if (this.state.dir === "desc") {
      icon.className = iconDown;
    }
    console.log(this.state.dir);
  }

  render() {
    
    return (
      <>
        <Helmet>
          <script src="https://kit.fontawesome.com/9438df25f9.js" crossorigin="anonymous"></script>
        </Helmet>
        <i clicks={this.props.clicks} id={this.props.id} onClick={this.handleClick} className="fas fa-sort sort-icon" />
      </>
    )
  }
}

export default SortButton