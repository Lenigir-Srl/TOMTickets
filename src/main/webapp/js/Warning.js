function toggleContinueButtonAvailable() {
    var continueButton = document.getElementById("continueButton");
    var checkbox = document.getElementById("flexSwitchCheckDefault");

    if (checkbox.checked) {
        // If the checkbox is checked
        continueButton.disabled = false; // Enable the button
        continueButton.classList.remove("btn-outline-warning"); // Remove the btn-outline-warning class
        continueButton.classList.add("btn-warning"); // Add the btn-warning class
    } else {
        // If the checkbox is not checked
        continueButton.disabled = true; // Disable the button
        continueButton.classList.remove("btn-warning"); // Remove the btn-warning class
        continueButton.classList.add("btn-outline-warning"); // Add the btn-outline-warning class
    }
}

