function showWarningModal(){
    document.getElementById('warningModalTitle').innerHTML = "NE SEI DAVVERO SICURO??";
    document.getElementById('warningModalDescription').innerHTML = "Eliminando il profilo non sara' piu' possibile recuperarne i dati, gli acquisti e tutte le relative informazioni legate ad esso!!!";
    $('#warningModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#warningModal').modal('show');
}

function deleteProfile(){
   document.getElementById("deleteProfile").submit();
}

function checkChoice(){
   showWarningModal();
   document.getElementById("continueButton").onclick = deleteProfile;
}
