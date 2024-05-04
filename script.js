//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Find the element with the ID 'level'
    var targetElement = document.getElementById("level");

    // Initialize the counter for the DOM level
    var domLevel = 0;

    // Loop through the parent elements until no more parents
    while (targetElement) {
        // Move to the parent element
        targetElement = targetElement.parentElement;
        
        // Increment the DOM level
        domLevel++;
    }

    // Display the DOM level using alert
    alert("The level of the element is: " + domLevel);
});
