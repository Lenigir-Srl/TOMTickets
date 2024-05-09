function validateForm() {
  var password = document.forms["loginForm"]["password"].value;
  var username = document.forms["loginForm"]["username"].value;
 
  if (typeof username !== 'string' || username === "") {
    alert("Perfavore inserisci uno username!");
    return false;
  }

  if (typeof password !== 'string' || password === "") {
    alert("Perfavore inserisci una password!");
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
}

function clearFields(){
   document.forms["loginForm"]["username"].value = "";
   document.forms["loginForm"]["password"].value = "";
   return;
}
