function showModal(){
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
}

//Print wrong credentials modal
function printWrongCredentials() {
    document.getElementById('notifyModalTitle').innerHTML = "Credenziali errate";
    document.getElementById('notifyModalDescription').innerHTML = "Lo username e la password non corrispondono a nessun profilo esistente.<br>Controlla che tu abbia inserito le credenziali corrette per accedere nel tuo profilo.";
    showModal();
}

//Print existing username modal
function existingUsername() {
    document.getElementById('notifyModalTitle').innerHTML = "Username non disponibile";
    document.getElementById('notifyModalDescription').innerHTML = "Ci dispiace ma lo username inserito è gia associato ad un altro profilo.<br>Perfavore scegli uno username diverso.";
    showModal();
}
