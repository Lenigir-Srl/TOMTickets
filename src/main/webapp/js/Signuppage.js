function validateForm() {
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

  // Phone number validation
  var phone = document.forms["signupForm"]["telefono"].value;

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Il numero di telefono deve essere di 10 cifre.");
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
    document.getElementById('notifyModalDescription').innerHTML= "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che abbia una lunghezza minima di 9 caratteri, grazie per la comprensione!";
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
    document.getElementById('notifyModalDescription').innerHTML= "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga al suo interno almeno due numeri, grazie per la comprensione!";
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
    document.getElementById('notifyModalDescription').innerHTML= "Per motivi di sicurezza, noi di TOMTickets chiediamo gentilmente agli utenti di inserire una password che contenga almeno un carattere speciale del tipo % @ & $ £, grazie per la comprensione!";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }

  if (password !== "utente!06") { 
    alert("pss.. la password deve essere 'utente!06'.");
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

