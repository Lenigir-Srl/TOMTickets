function validateForm() {
  // Phone number validation
  var phone = document.forms["signupForm"]["telefono"].value;
  var password = document.forms["signupForm"]["password"].value;
  var repeatPassword = document.forms["signupForm"]["ripetiPassword"].value;

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Il numero di telefono deve essere di 10 cifre.");
    return false;
  }

  // Password validation
  if (password !== repeatPassword) {
    alert("Le password non corrispondono.");
    return false;
  }

  if (password.length !== 9) {
    alert("La password deve essere di 9 caratteri.");
    return false;

  }

  if (password.match(/\d/g).length !== 2) {
    alert("La password deve contenere almeno due cifre.");
    return false;
  }
  
  if (password.match(/[^\w\s]/g).length !== 1) {
    alert("La password deve contenere almeno un carattere speciale.");
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
