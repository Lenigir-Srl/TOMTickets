//Used to reproduce an audio cue when something dangerous is going to happen
function playWarningSound(){
    var warningSound = document.getElementById("warningSound");
    if(checkSound())
    warningSound.play();
}

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

//When the switch is enabled it has to make the "imsure" button available to be clicked
function toggleContinueButtonAvailable() {
    var checkbox = document.getElementById("imsureSwitch");

    if (checkbox.checked) {
        enableContinueButton();
    } else {
        disableContinueButton();
    }
}

//Takes the modal's title by ID and sets its content
function setWarningModalTitle(title = "defaultTitle"){
    document.getElementById('warningModalTitle').innerHTML = title;
}

//Takes the modal's description by ID and sets its content
function setWarningModalDescription(description = "defaultDescription"){
    document.getElementById('warningModalDescription').innerHTML = description;
}

//Shows the warning modal on screen, this is bootstrap's js code
function showWarningModal(title = "defaultTitle", description = "defaultDescription") {
    playWarningSound();

    setWarningModalTitle(title);
    setWarningModalDescription(description);


    var warningModal = document.getElementById('warningModal');
    if (warningModal) {
        // Create a new instance of the modal
        var bootstrapModal = new bootstrap.Modal(warningModal, {
            backdrop: 'static',
            focus: true,
            keyboard: false
        });

        // Show the modal
        bootstrapModal.show();
    }
}

//Closes the warning modal, this is bootstrap's js code
function closeWarningModal() {
    var warningModal = document.getElementById('warningModal');

    if (warningModal) {
        // Create a new instance of the modal
        var bootstrapModal = bootstrap.Modal.getInstance(warningModal);

        if (bootstrapModal) {
            // Hide the modal
            bootstrapModal.hide();
        }
    }
}

//Turns the switch off
function turnOffSwitch(){
    var imsureSwitch = document.getElementById("imsureSwitch");
    imsureSwitch.checked = false;
}

//When the continue button is pressed we turn off the switch, disable the "imsure" button and close the modal
function continueButton(){
    turnOffSwitch();
    disableContinueButton();
    closeWarningModal();
}

