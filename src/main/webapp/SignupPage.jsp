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


    <body>

        <!--HEADER-->
	<%@include file="./Header.jsp"%>
	<!--HEADER-->

        <!--PAGE CONTENT-->
        

	<div> Perfavore inserisci i seguenti dati: </div>

	<div>
            <form name="signupForm" onsubmit="return validateForm()" action="./signup" method="post" >
                <label for="nome">Nome:</label><br>
                <input type="text" id="nome" name="nome" label="Inserisci il tuo nome" required><br>  

                <label for="cognome">Cognome:</label><br>
                <input type="text" id="cognome" name="cognome" label="inserisci il tuo cognome" required><br>

                <label for="dataNascita">Data di nascita:</label><br>
                <input type="date" id="dataNascita" name="dataNascita" label="inserisci la tua data di nascita" required><br>

                <label for="email">Email:</label><br>
                <input type="text" id="email" name="email" label="inserisci la tua email" required><br>

                <label for="telefono">Numero di telefono:</label><br>
                <input type="text" id="telefono" name="telefono" label="inserisci il tuo numero di telefono" required><br>

                <label for="username">Username:</label><br>
                <input type="text" id="username" name="username" label="inserisci la tuo username" required><br>

                <label for="password">Password:</label><br>
                <input id="password" type="password" name="password" label="Inserisci la password" required><br>
                <label for="ripetiPassword">Ripeti la password:</label><br>
                <input id="ripetiPassword" type="password" name="ripetiPassword" label="Ripeti la password" required><br>
                <input type="submit" value="Fai il signup">
            </form>
	    <br>
	    <input type="checkbox" onclick="makePasswordVisible()" name="Showpassword" autocomplete="off">
        <label for"Showpassword"> Mostra la password </label><br>

        <button onclick="clearFields()">Clear</button>
        </div>
      
	<!--PAGE CONTENT-->
	
        <!--FOOTER-->
	<%@include file="./Footer.jsp"%>
	<!--FOOTER-->

    </body>
</html>
