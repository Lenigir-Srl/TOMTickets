function showModal(){
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
}

function setModalTitle(title = ""){
    document.getElementById('notifyModalTitle').innerHTML = title;
}

function setModalDescription(description = ""){
    document.getElementById('notifyModalDescription').innerHTML = description;
}

//Print wrong credentials modal
function printWrongCredentials() {
    setModalTitle("Credenziali errate");
    setModalDescription("Lo username e la password non corrispondono a nessun profilo esistente.<br>Controlla che tu abbia inserito le credenziali corrette per accedere nel tuo profilo.");
    showModal();
}

//Print existing username modal
function existingUsername() {
    setModalTitle("Username non disponibile");
    setModalDescription("Ci dispiace ma lo username inserito è gia associato ad un altro profilo.<br>Perfavore scegli uno username diverso.");
    showModal();
}
