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

  return true; // Form submission allowed
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
}
