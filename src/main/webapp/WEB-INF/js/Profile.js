//Sends the POST call api to delete the profile
function deleteProfile(){
   document.getElementById("deleteProfile").submit();
}

//
function checkChoice(){
   document.getElementById("continueButton").onclick = deleteProfile;
   showWarningModal("NE SEI DAVVERO SICURO??", 
   "Eliminando il profilo non sara' piu' possibile recuperarne i dati, gli acquisti e tutte le relative informazioni legate ad esso!!!");
}
