//Non fare caso a questa funzione, non serve a niente ;)
//Vai pure avanti e fai finta che non sia qui.
function setRainbowModal(){
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "https://pbs.twimg.com/media/Fx-BPp3WYA8GYvl.jpg";
    var notifyType = document.getElementById('notifyType');
    notifyType.style.background = "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)";
}

function setErrorModal(){
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png";
    var notifyType = document.getElementById('notifyType');
    notifyType.style.backgroundColor = 'red';
}

function setSuccessModal(){
    var notifyImage = document.getElementById('notifyImage');
    notifyImage.src = "https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/15-512.png";
    var notifyType = document.getElementById('notifyType');
    notifyType.style.backgroundColor = 'green';
}


function showModal(){
    console.log("ciao");
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
}

function closeNotifyModal(){
    $('#notifyModal').modal('hide');
}

function setModalTitle(title = ""){
    document.getElementById('notifyModalTitle').innerHTML = title;
}

function setModalDescription(description = ""){
    document.getElementById('notifyModalDescription').innerHTML = description;
}

// Common function to show error modal
function showErrorModal(title, description) {
    setErrorModal();
    setModalTitle(title);
    setModalDescription(description);
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
