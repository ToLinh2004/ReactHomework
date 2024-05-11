// Dom constants
const button = document.getElementById("countButton");
button.addEventListener("click", handleCLick);
const label = document.getElementById("countLabel");
const warning = document.getElementById("countWarning");

// Variables
let count = 0;

// Utility functions
function setVisible(element, isVisible) {
  element.style.display = isVisible ? "block" : "none";
}

function handleCLick() {
  //  TASK 1 :
  count++;

  //  TASK 2 :
  label.textContent = count;

  //  TASK 3 :TODO  Display the warning ""10 Already" is the count is greater  than 10
  if(count>=10){
    setVisible(warning,true);
  }
  
}

// Hide the warning "10 Already" at startup
setVisible(warning, false);
