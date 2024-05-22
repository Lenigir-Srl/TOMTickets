function enableContinueButton(){
    var continueButton = document.getElementById("continueButton");
    // If the checkbox is checked
    continueButton.disabled = false; // Enable the button
    continueButton.classList.remove("btn-outline-warning"); // Remove the btn-outline-warning class
    continueButton.classList.add("btn-warning"); // Add the btn-warning class
}

function disableContinueButton(){
    var continueButton = document.getElementById("continueButton");
    // If the checkbox is not checked
    continueButton.disabled = true; // Disable the button
    continueButton.classList.remove("btn-warning"); // Remove the btn-warning class
    continueButton.classList.add("btn-outline-warning"); // Add the btn-outline-warning class

}

function toggleContinueButtonAvailable() {
    var checkbox = document.getElementById("imsureSwitch");

    if (checkbox.checked) {
        enableContinueButton();
    } else {
        disableContinueButton();
    }
}

function turnOffSwitch(){
    var imsureSwitch = document.getElementById("imsureSwitch");
    imsureSwitch.checked = false;
}

function continueButton(){
    turnOffSwitch();
    disableContinueButton();
    $('#warningModal').modal('hide');
}

