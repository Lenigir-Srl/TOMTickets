function validateForm() {
  // Username validation
  var username = document.forms["loginForm"]["username"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!username || /^\s*$/.test(username)) { // Check if username is null, empty, or contains only whitespace
    document.getElementById('notifyModalTitle').innerHTML = "Non hai inserito uno username!";
    document.getElementById('notifyModalDescription').innerHTML = "Il campo username risulta essere vuoto.<br>Perfavore inserisci lo username del tuo profilo.";
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
    return false;
  }

  // Password validation
  var password = document.forms["loginForm"]["password"].value.trim(); // Trim to remove leading and trailing whitespace
  if (!password || /^\s*$/.test(password)) { // Check if password is null, empty, or contains only whitespace
    document.getElementById('notifyModalTitle').innerHTML = "Non hai inserito la password!";
    document.getElementById('notifyModalDescription').innerHTML = "Il campo password risulta essere vuoto.<br>Perfavore inserisci la password del tuo profilo.";
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
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


//Print wrong credentials modal
function printWrongCredentials() {
    document.getElementById('notifyModalTitle').innerHTML = "Credenziali errate";
    document.getElementById('notifyModalDescription').innerHTML = "Lo username e la password non corrispondono a nessun profilo esistente.<br>Controlla che tu abbia inserito le credenziali corrette per accedere nel tuo profilo.";
    $('#notifyModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#notifyModal').modal('show');
}
