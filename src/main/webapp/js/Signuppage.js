//showModal() function declared inside "Notify.js"
//setModalTitle() function declared inside "Notify.js"
//setModalDescription() function declared inside "Notify.js"

function validateForm() {

  // Name validation
  var name = document.forms["signupForm"]["nome"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!name || /^\s*$/.test(name)) { // Check if name is null, empty, or contains only whitespace
    setModalTitle("Nome errato!");
    setModalDescription("Il nome inserito non è corretto, è malformato o è vuoto!");
    showModal();
    return false;
  }

  // Surname validation
  var surname = document.forms["signupForm"]["cognome"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!surname || /^\s*$/.test(surname)) { // Check if surname is null, empty, or contains only whitespace
    setModalTitle("Cognome errato!");
    setModalDescription("Il cognome inserito non è corretto, è malformato o è vuoto!");
    showModal();
    return false;
  }


  // Date of Birth validation

  var birthday = document.forms["signupForm"]["dataNascita"].value;
  // Check if birthday is empty or null
  if (!birthday || /^\s*$/.test(birthday)) { // Check if birthday is null, empty, or contains only whitespace
    setModalTitle("Data di nascita errata!");
    setModalDescription("La data di nascita inserita non è corretta, è malformata o è vuota.");
    showModal();
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
    setModalTitle("Le macchine del tempo esistono!");
    setModalDescription("E' con grande ritegno che la informiamo che lei ha " + age + " anni.<br>Grazie per averci fatto sapere che proviene dal futuro, agiremo di conseguenza.");
    showModal();
    return false;
  }

  // Check if the user is 18 years or older
  if (age < 18) {
    setModalTitle("Non sei maggiorenne!");
    setModalDescription("Per motivi legali noi di TOMTickets non possiamo ammettere minorenni all'interno del nostro sito.<br>Grazie per la comprensione!");
    showModal();
    return false;
  }
  
  //Check if the user is my great-great-great-grandfather
  if (age >= 100){
    setModalTitle("wOW.");
    setModalDescription("dEVI aVERe mANGiaTO tAnTA fRUttA nELLA TUa VIta PERchE' haI lA BELleZzA DI bEN " + age + " ANnI.<br>cOMpLImeNTOni!1!11!!!1");
    showModal();
    return false;
  }
  
  // Phone number validation
  var phone = document.forms["signupForm"]["telefono"].value;

  if (phone.length !== 10 || isNaN(phone)) {
    setModalTitle("Numero di telefono errato!");
    setModalDescription("Il numero di telefono deve avere 10 cifre.<br>Controlla che non sia stato inserito correttamente, sia malformato o sia vuoto!");
    showModal();
    return false;
  }

  // Email validation
  var email = document.forms["signupForm"]["email"].value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    setModalTitle("Indirizzo email errato!");
    setModalDescription("L'indirizzo email inserito non è corretto, è malformato o è vuoto!");
    showModal();
    return false;
  }

  // Username validation
  var username = document.forms["signupForm"]["username"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!username || /^\s*$/.test(username)) { // Check if username is null, empty, or contains only whitespace
    setModalTitle("Username errato!");
    setModalDescription("Lo username inserito non è corretto, è malformato o è vuoto!");
    showModal();
    return false;
  }

  // Password validation
  var password = document.forms["signupForm"]["password"].value;
  var repeatPassword = document.forms["signupForm"]["ripetiPassword"].value;

  if (password !== repeatPassword) {
    setModalTitle("Le password non corrispondono!");
    setModalDescription("Controlla se non hai fatto errori di battitura in entrambe le caselle della password, o se magari una delle due è vuota!");
    showModal();
    return false;
  }

  if (password.length === 0) {
    setModalTitle("Perfavore inserisci una password!");
    setModalDescription("Il campo password risulta essere vuoto, perfavore inserisci una password per il tuo nuovo profilo.");
    showModal();
    return false;

  }

  if (password.length < 9) {
    setModalTitle("La password non è lunga nove caratteri!");
    setModalDescription("Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che abbia una lunghezza minima di 9 caratteri.<br>Grazie per la comprensione!");
    showModal();
    return false;

  }

  var numDigits = (password.match(/\d/g) || []).length;
  if (numDigits < 2) {
    setModalTitle("La password non contiene due numeri!");
    setModalDescription("Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga al suo interno almeno due numeri.<br>Grazie per la comprensione!");
    showModal();
    return false;
  }
  
  if (!password.match(/[^\w\s]/)) {
    setModalTitle("La password non contiene un carattere speciale!");
    setModalDescription("Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga almeno un carattere speciale del tipo % @ & $ £.<br>Grazie per la comprensione!");
    showModal();
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
   document.forms["signupForm"]["nome"].value = "";
   document.forms["signupForm"]["cognome"].value = "";
   document.forms["signupForm"]["dataNascita"].value = "";
   document.forms["signupForm"]["email"].value = "";
   document.forms["signupForm"]["telefono"].value = "";
   document.forms["signupForm"]["username"].value = "";
   document.forms["signupForm"]["password"].value = "";
   document.forms["signupForm"]["ripetiPassword"].value = "";
   return;
}

