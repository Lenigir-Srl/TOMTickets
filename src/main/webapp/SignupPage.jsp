<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
    <%-- Include JS file into the page --%>
    <script type"text/javascript" src="./ValidateForm.js"></script>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - signup</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>


        <!--HEADER-->
	<%@include file="./Header.jsp"%>
	<!--HEADER-->

        <!--PAGE CONTENT-->
       
    <div style="padding-left: 2%; padding-top: 2%">
	    <p class="h2"> Perfavore, inserisci i seguenti dati: </p>
    </div>

	<div style="float: left; width: 100%; padding-left: 2%; padding-top: 2%">

        <form name="signupForm" onsubmit="return validateForm()" action="./signup" method="post" style="width: 30%">

        <div class="mb-3">
          <label for="nome" class="form-label">Nome:</label>
          <input type="text" class="form-control" id="nome" placeholder="Mario">
        </div>

        <div class="mb-3">
          <label for="cognome" class="form-label">Cognome:</label>
          <input type="text" class="form-control" id="cognome" placeholder="Rossi">
        </div>

        <div class="mb-3">
          <label for="dataNascita" class="form-label">Data di nascita:</label>
          <input type="date" class="form-control" id="dataNascita">
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="example@example.com">
        </div>

        <div class="mb-3">
          <label for="telefono" class="form-label">Numero di telefono:</label>
          <input type="text" class="form-control" id="telefono" placeholder="1234567890">
        </div>

        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" class="form-control" id="username" placeholder="mario.rossi">
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" class="form-control" id="password">
        </div>

        <div class="mb-3">
          <label for="ripetiPassword" class="form-label">Ripeti la password:</label>
          <input type="password" class="form-control" id="ripetiPassword">
        </div>


        <button type="submit" class="btn btn-primary">Registrati</button>
        </form>

        <div class="row mb-3" style="padding-top: 20px">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" onclick="makePasswordVisible()" name="Showpassword" autocomplete="off">
                <label class="form-check-label" for="Showpassword">
                  Mostra la password
                </label>
              </div>
        </div>

        <div class="mb-3">
            <button class="btn btn-primary" onclick="clearFields()">Clear</button>
        </div>
    </div>

	<!--PAGE CONTENT-->

    <!--FOOTER-->
	<%@include file="./Footer.jsp"%>
	<!--FOOTER-->

    </body>
</html>
