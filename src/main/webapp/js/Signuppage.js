//showErrorModal() function declared inside "Notify.js"

//Commonly used;
var form = document.forms["signupForm"];

function validateForm() {

  // Name validation
  var name = form["nome"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!name || /^\s*$/.test(name)) { // Check if name is null, empty, or contains only whitespace
    showErrorModal("Nome errato!", "Il nome inserito non è corretto, è malformato o è vuoto!");
    return false;
  }

  // Surname validation
  var surname = form["cognome"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!surname || /^\s*$/.test(surname)) { // Check if surname is null, empty, or contains only whitespace
    showErrorModal("Cognome errato!", "Il cognome inserito non è corretto, è malformato o è vuoto!");
    return false;
  }


  // Date of Birth validation

  var birthday = form["dataNascita"].value;
  // Check if birthday is empty or null
  if (!birthday || /^\s*$/.test(birthday)) { // Check if birthday is null, empty, or contains only whitespace
    showErrorModal("Data di nascita errata!", "La data di nascita inserita non è corretta, è malformata o è vuota.");
    return false;
  }

  // Function to calculate age
  function calculateAge(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  // Date of Birth validation
  var age = calculateAge(birthday);


  // Check if the user is still yet to be born or is a god
  if (isNaN(age)||(age<0)){
    setRainbowModal();
    setModalTitle("Le macchine del tempo esistono!");
    setModalDescription("E' con grande ritegno che la informiamo che lei ha " + age + " anni.<br>Grazie per averci fatto sapere che proviene dal futuro, agiremo di conseguenza.");
    showModal();
    return false;
  }

  // Check if the user is 18 years or older
  if (age < 18) {
    showErrorModal("Non sei maggiorenne!", "Per motivi legali noi di TOMTickets non possiamo ammettere minorenni all'interno del nostro sito.<br>Grazie per la comprensione!");
    showModal();
    return false;
  }
  
  //Check if the user is my great-great-great-grandfather
  if (age >= 100){
    setRainbowModal();
    setModalTitle("wOW.");
    setModalDescription("dEVI aVERe mANGiaTO tAnTA fRUttA nELLA TUa VIta PERchE' haI lA BELleZzA DI bEN " + age + " ANnI.<br>cOMpLImeNTOni!1!11!!!1");
    showModal();
    return false;
  }
  
  // Phone number validation
  var phone = form["telefono"].value;

  if (phone.length !== 10 || isNaN(phone)) {
    showErrorModal("Numero di telefono errato!", "Il numero di telefono deve avere 10 cifre.<br>Controlla che non sia stato inserito correttamente, sia malformato o sia vuoto!");
    return false;
  }

  // Email validation
  var email = form["email"].value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    showErrorModal("Indirizzo email errato!", "L'indirizzo email inserito non è corretto, è malformato o è vuoto!");
    return false;
  }

  // Username validation
  var username = form["username"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!username || /^\s*$/.test(username)) { // Check if username is null, empty, or contains only whitespace
    showErrorModal("Username errato!", "Lo username inserito non è corretto, è malformato o è vuoto!");
    return false;
  }

  // Password validation
  var password = form["password"].value;
  var repeatPassword = form["ripetiPassword"].value;

  if (password !== repeatPassword) {
    showErrorModal("Le password non corrispondono!", "Controlla se non hai fatto errori di battitura in entrambe le caselle della password, o se magari una delle due è vuota!");
    return false;
  }

  if (password.length === 0) {
    showErrorModal("Perfavore inserisci una password!", "Il campo password risulta essere vuoto, perfavore inserisci una password per il tuo nuovo profilo.");
    return false;

  }

  if (password.length < 9) {
    showErrorModal("La password non è lunga nove caratteri!", "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che abbia una lunghezza minima di 9 caratteri.<br>Grazie per la comprensione!");
    return false;

  }

  var numDigits = (password.match(/\d/g) || []).length;
  if (numDigits < 2) {
    showErrorModal("La password non contiene due numeri!", "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga al suo interno almeno due numeri.<br>Grazie per la comprensione!");
    return false;
  }
  
  if (!password.match(/[^\w\s]/)) {
    showErrorModal("La password non contiene un carattere speciale!", "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga almeno un carattere speciale del tipo % @ & $ £.<br>Grazie per la comprensione!");
    return false;
  }

  if (password !== "utente!06") { 
    alert("ti do un indizio ;) la password deve essere 'utente!06'.");
    return false;
  }

  return true; // Form is valid

}


function makePasswordVisible(){
    var passwordBox = document.getElementById("password");
    if (passwordBox.type === "password"){
    	passwordBox.type = "text";
    }else{
	    passwordBox.type = "password";
    }

    var passwordBox2 = document.getElementById("ripetiPassword");
    if (passwordBox2.type === "password"){
    	passwordBox2.type = "text";
    }else{
	    passwordBox2.type = "password";
    }
    return;
}

function clearFields(){
   form["nome"].value = "";
   form["cognome"].value = "";
   form["dataNascita"].value = "";
   form["email"].value = "";
   form["telefono"].value = "";
   form["username"].value = "";
   form["password"].value = "";
   form["ripetiPassword"].value = "";
   return;
}

