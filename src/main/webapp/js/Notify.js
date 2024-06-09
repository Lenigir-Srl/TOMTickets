//Used to reproduce an audio cue when something bad happens
function playErrorSound(){
    var errorSound = document.getElementById("errorSound");
    if(checkSound())
    errorSound.play();
}

//Used to reproduce an audio cue when something good happens
function playSuccessSound(){
    var successSound = document.getElementById("successSound");
    if(checkSound())
    successSound.play();
}

//Used to reproduce an audio cue when something funny happens
function playLaughSound(){
    var laughSound = document.getElementById("laughSound");
    if(checkSound())
    laughSound.play();
}

//This makes a linear gradient background, rainbow-style
function setRainbowModal(){
    //Play an audio cue
    playLaughSound();

    //Laughing emoji
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "utils/emoji-icon.jpg";
    
    //Rainbow modal background
    var notifyType = document.getElementById('notifyType');
    notifyType.style.background = "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)";
}

//Used to display error modals
function setErrorModal(){
    //Play an audio cue
    playErrorSound();

    //Image of a big red "X"
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "utils/error-icon.png";
    
    //Change the background color of the modal to "RED" for error
    var notifyType = document.getElementById('notifyType');
    notifyType.style.background = 'red';
}

//Used to display success modals
function setSuccessModal(){
    //Play an audio cue
    playSuccessSound();

    //Image of a big green "v symbol"
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "utils/success-icon.png";
    
    //Change the background color of the modal to "GREEN" for success
    var notifyType = document.getElementById('notifyType');
    notifyType.style.background = 'green';
}


//Shows notify modal on screen, this is bootstrap's js code
function showNotifyModal() {
    var notifyModal = document.getElementById('notifyModal');

    if (notifyModal) {
        // Create a new instance of the modal
        var bootstrapModal = new bootstrap.Modal(notifyModal, {
            backdrop: 'static',
            focus: true,
            keyboard: false
        });

        // Show the modal
        bootstrapModal.show();
    }
}

//Closes notify modal, this is bootstrap's js code
function closeNotifyModal() {
    var notifyModal = document.getElementById('notifyModal');

    if (notifyModal) {
        // Create a new instance of the modal
        var bootstrapModal = bootstrap.Modal.getInstance(notifyModal);

        if (bootstrapModal) {
            // Hide the modal
            bootstrapModal.hide();
        }
    }
}

//Takes the modal's title by ID and sets its content
function setModalTitle(title = "defaultTitle"){
    document.getElementById('notifyModalTitle').innerHTML = title;
}

//Takes the modal's description by ID and sets its content
function setModalDescription(description = "defaultDescription"){
    document.getElementById('notifyModalDescription').innerHTML = description;
}

// Common function to show error modal
function showErrorModal(title, description) {
    //Sets background color to red and image to big red "X"
    setErrorModal();

    //Sets the title of the modal
    setModalTitle(title);

    //Sets the modal description
    setModalDescription(description);

    //Shows the modal on screen
    showNotifyModal();
}

//Print deleted event modal
function printDeletedEvent() {
    var continueButton = document.getElementById('notifyButton');
    notifyButton.onclick = function (){
	location.reload();
    }
    setSuccessModal();
    setModalTitle("Evento eliminato con successo!");
    setModalDescription("L'evento e' stato completamente rimosso da TOMTickets.<br>");
    showNotifyModal();
}
