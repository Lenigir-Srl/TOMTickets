function validateForm() {
  var password = document.forms["loginForm"]["password"].value;
  var username = document.forms["loginForm"]["username"].value;
 
  if (typeof username !== 'string' || username === "") {
    document.getElementById('notifyModalTitle').innerHTML = "Non hai inserito lo username!"
    document.getElementById('notifyModalDescription').innerHTML= "Il campo username risulta essere vuoto, perfavore inserisci lo username del tuo profilo.";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
    return false;
  }

  if (typeof password !== 'string' || password === "") {
    document.getElementById('notifyModalTitle').innerHTML = "Non hai inserito la password!"
    document.getElementById('notifyModalDescription').innerHTML= "Il campo password risulta essere vuoto, perfavore inserisci la password del tuo profilo.";
    $('#notifyModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
    })
    $('#notifyModal').modal('show');
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
