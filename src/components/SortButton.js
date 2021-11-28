import React from 'react'
import { Helmet } from "react-helmet"

class SortButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.sortTable = this.sortTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.iconUp = "fa fa-chevron-up sort-icon";
    this.iconDown = "fa fa-chevron-down sort-icon";
    this.iconDefault = "fas fa-sort sort-icon";
  }

// Sets default sort to ascending by company name and adds default icons

  componentDidMount() {
    this.sortTable(0);
    document.getElementById("right-button").className = this.iconDefault;
    document.getElementById("left-button").className = this.iconDefault;
  }

   // Sorts table and toggles arrows

  sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    let icon = document.getElementById(this.props.id);

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
          icon.className = this.iconUp;
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }

        } else if (dir === "desc") {
          icon.className = this.iconDown;
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

// Sorts table and toggles arrows

  handleClick(event) {
    
    event.preventDefault();
    let icon = document.getElementById(this.props.id);
    let rightButton = document.getElementById("right-button");
    let leftButton = document.getElementById("left-button");
    let oppositeButton;

    // Check if button is in left or right column, change buttons

    if (this.props.id === "left-button") {
      this.sortTable(0);
      icon.style.opacity = "1";
      oppositeButton = rightButton;
      oppositeButton.style.opacity = ".4";
      oppositeButton.className = this.iconDefault;
    } else if (this.props.id === "right-button") {
      this.sortTable(1);
      icon.style.opacity = "1";
      oppositeButton = leftButton;
      oppositeButton.style.opacity = ".4";
      oppositeButton.className = this.iconDefault;
    }
  }

  render() {
    
    return (
      <>
        <Helmet>
          <script src="https://kit.fontawesome.com/9438df25f9.js" crossorigin="anonymous"></script>
        </Helmet>
        <i id={this.props.id} onClick={this.handleClick} className="" />
      </>
    )
  }
}

export default SortButton