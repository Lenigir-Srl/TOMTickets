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
