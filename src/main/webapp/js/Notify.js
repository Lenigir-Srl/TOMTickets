//This makes a linear gradient background, rainbow-style
function setRainbowModal(){
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "https://pbs.twimg.com/media/Fx-BPp3WYA8GYvl.jpg";
    var notifyType = document.getElementById('notifyType');
    notifyType.style.background = "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)";
}

//Used to display error modals
function setErrorModal(){
    //Image of a big red "X"
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png";
    
    //Change the background color of the modal to "RED" for error
    var notifyType = document.getElementById('notifyType');
    notifyType.style.backgroundColor = 'red';
}

//Used to display success modals
function setSuccessModal(){
    //Image of a big green "v symbol"
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/15-512.png";
    
    //Change the background color of the modal to "GREEN" for success
    var notifyType = document.getElementById('notifyType');
    notifyType.style.backgroundColor = 'green';
}

//Shows the modal on screen, this is bootstrap's js code
function showModal(){
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
}

//Closes the modal, this is bootstrap's js code
function closeNotifyModal(){
    $('#notifyModal').modal('hide');
}

//Takes the modal's title by ID and sets its content
function setModalTitle(title = ""){
    document.getElementById('notifyModalTitle').innerHTML = title;
}

//Takes the modal's description by ID and sets its content
function setModalDescription(description = ""){
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
    showModal();
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
    showModal();
}
