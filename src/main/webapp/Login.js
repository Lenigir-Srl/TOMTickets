function makePasswordVisible(){
    var passwordBox = document.getElementById("passwordInput");
    if (passwordBox.type === "password"){
    	passwordBox.type = "text";
    }else{
	passwordBox.type = "password";
    }
}
