function validateForm() {
  
  // Name validation
  var name = document.forms["signupForm"]["nome"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!name || /^\s*$/.test(name)) { // Check if name is null, empty, or contains only whitespace
    document.getElementById('notifyModalTitle').innerHTML = "Nome errato!";
    document.getElementById('notifyModalDescription').innerHTML = "Il nome inserito non è corretto, è malformato o è vuoto!";
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
    return false;
  }

  // Surname validation
  var surname = document.forms["signupForm"]["cognome"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!surname || /^\s*$/.test(surname)) { // Check if surname is null, empty, or contains only whitespace
    document.getElementById('notifyModalTitle').innerHTML = "Cognome errato!";
    document.getElementById('notifyModalDescription').innerHTML = "Il cognome inserito non è corretto, è malformato o è vuoto!";
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
    return false;
  }


  // Date of Birth validation

  var birthday = document.forms["signupForm"]["dataNascita"].value;
  // Check if birthday is empty or null
  if (!birthday || /^\s*$/.test(birthday)) { // Check if birthday is null, empty, or contains only whitespace
    document.getElementById('notifyModalTitle').innerHTML = "Data di nascita errata!";
    document.getElementById('notifyModalDescription').innerHTML = "La data di nascita inserita non è corretta, è malformata o è vuota.";
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
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
    document.getElementById('notifyModalTitle').innerHTML = "Le macchine del tempo esistono!"
    document.getElementById('notifyModalDescription').innerHTML= "E' con grande ritegno che la informiamo che lei ha " + age + " anni.<br>Grazie per averci fatto sapere che proviene dal futuro, agiremo di conseguenza.";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }

  // Check if the user is 18 years or older
  if (age < 18) {
    document.getElementById('notifyModalTitle').innerHTML = "Non sei maggiorenne!"
    document.getElementById('notifyModalDescription').innerHTML= "Per motivi legali noi di TOMTickets non possiamo ammettere minorenni all'interno del nostro sito.<br>Grazie per la comprensione!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }
  
  //Check if the user is my great-great-great-grandfather
  if (age >= 100){
    document.getElementById('notifyModalTitle').innerHTML = "wOW."
    document.getElementById('notifyModalDescription').innerHTML= "dEVI aVERe mANGiaTO tAnTA fRUttA nELLA TUa VIta PERchE' haI lA BELleZzA DI bEN " + age + " ANnI.<br>cOMpLImeNTOni!1!11!!!1" ;
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }
  
  // Phone number validation
  var phone = document.forms["signupForm"]["telefono"].value;

  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById('notifyModalTitle').innerHTML = "Numero di telefono errato!"
    document.getElementById('notifyModalDescription').innerHTML= "Il numero di telefono deve avere 10 cifre.<br>Controlla che non sia stato inserito correttamente, sia malformato o sia vuoto!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }

  // Email validation
  var email = document.forms["signupForm"]["email"].value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    document.getElementById('notifyModalTitle').innerHTML = "Indirizzo email errato!"
    document.getElementById('notifyModalDescription').innerHTML= "L'indirizzo email inserito non è corretto, è malformato o è vuoto!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }

  // Username validation
  var username = document.forms["signupForm"]["username"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!username || /^\s*$/.test(username)) { // Check if username is null, empty, or contains only whitespace
    document.getElementById('notifyModalTitle').innerHTML = "Username errato!";
    document.getElementById('notifyModalDescription').innerHTML = "Lo username inserito non è corretto, è malformato o è vuoto!";
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
    return false;
  }

  // Password validation
  var password = document.forms["signupForm"]["password"].value;
  var repeatPassword = document.forms["signupForm"]["ripetiPassword"].value;

  if (password !== repeatPassword) {
    document.getElementById('notifyModalTitle').innerHTML = "Le password non corrispondono!"
    document.getElementById('notifyModalDescription').innerHTML= "Controlla se non hai fatto errori di battitura in entrambe le caselle della password, o se magari una delle due è vuota!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }

  if (password.length === 0) {
    document.getElementById('notifyModalTitle').innerHTML = "Perfavore inserisci una password!"
    document.getElementById('notifyModalDescription').innerHTML= "Il campo password risulta essere vuoto, perfavore inserisci una password per il tuo nuovo profilo.";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;

  }

  if (password.length < 9) {
    document.getElementById('notifyModalTitle').innerHTML = "La password non è lunga nove caratteri!"
    document.getElementById('notifyModalDescription').innerHTML= "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che abbia una lunghezza minima di 9 caratteri.<br>Grazie per la comprensione!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;

  }

  var numDigits = (password.match(/\d/g) || []).length;
  if (numDigits < 2) {
    document.getElementById('notifyModalTitle').innerHTML = "La password non contiene due numeri!"
    document.getElementById('notifyModalDescription').innerHTML= "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga al suo interno almeno due numeri.<br>Grazie per la comprensione!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }
  
  if (!password.match(/[^\w\s]/)) {
    document.getElementById('notifyModalTitle').innerHTML = "La password non contiene un carattere speciale!"
    document.getElementById('notifyModalDescription').innerHTML= "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga almeno un carattere speciale del tipo % @ & $ £.<br>Grazie per la comprensione!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
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

