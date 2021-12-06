
import React from 'react'
import { Helmet } from "react-helmet"

function SortButton(props) {
  
    let iconUp = "fa fa-chevron-up sort-icon";
    let iconDown = "fa fa-chevron-down sort-icon";
    let iconDefault = "fas fa-sort sort-icon";

   // Sorts table and toggles arrows

   const sortTable = (n) => {
    let table = document.getElementById("corpTable");
    let icon = document.getElementById(props.id);
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
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
          icon.className = iconUp;
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }

        } else if (dir === "desc") {
          icon.className = iconDown;
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
        if (switchcount === 0 && dir === "desc") {
          dir = "asc";
          switching = true;
        }
      }

    }
}

// Sorts table and toggles arrows

  const handleClick = (event) => {
    
    event.preventDefault();
    let icon = document.getElementById(props.id);
    let rightButton = document.getElementById("right-button");
    let leftButton = document.getElementById("left-button");
    let oppositeButton;

    // Check if button is in left or right column, change buttons

    if (props.id === "left-button") {
      sortTable(0);
      icon.style.opacity = "1";
      oppositeButton = rightButton;
      oppositeButton.style.opacity = ".4";
      oppositeButton.className = iconDefault;
    } else if (props.id === "right-button") {
      icon.style.opacity = "1";
      oppositeButton = leftButton;
      oppositeButton.style.opacity = ".4";
      oppositeButton.className = iconDefault;
      sortTable(1);
    }
  }

    return (
      <>
        <Helmet>
          <script src="https://kit.fontawesome.com/9438df25f9.js" crossorigin="anonymous"></script>
        </Helmet>
        <i id={props.id} onClick={handleClick} className={iconDefault} />
      </>
    )
}

export default SortButton