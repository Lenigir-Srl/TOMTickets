<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - visualizza utenti</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


    <script>

    // Parsing JSON data and displaying it in a table
    function mostraLista() {
       var datiJson = JSON.parse( '${profiliJson}' ); 

       var check = document.getElementById("isOrdered");
       if (check.checked) {
           datiJson.sort(function(a, b) {
               return a.numeroAcquisti < b.numeroAcquisti;
           });
       }

       var lista = document.getElementById("listaProfili");

       // Clearing the table
       while (lista.firstChild) {
         lista.removeChild(lista.firstChild);
       }

       datiJson.forEach(function(elemento) {
            var tr = document.createElement("tr");

            var nome = document.createElement("td");
            nome.textContent = elemento.nome;
            tr.appendChild(nome); 

            var cognome = document.createElement("td");
            cognome.textContent = elemento.cognome;
            tr.appendChild(cognome);

            var birthDate = document.createElement("td");
            birthDate.textContent = elemento.birthDate;
            tr.appendChild(birthDate);

            var email = document.createElement("td");
            email.textContent = elemento.email;
            tr.appendChild(email);

            var phoneNumber = document.createElement("td");
            phoneNumber.textContent = elemento.phoneNumber;
            tr.appendChild(phoneNumber);

            var username = document.createElement("td");
            username.textContent = elemento.username;
            tr.appendChild(username);

            var password = document.createElement("td");
            password.textContent = elemento.password;
            tr.appendChild(password);

            var numeroAcquisti = document.createElement("td");
            numeroAcquisti.textContent = elemento.numeroAcquisti;
            tr.appendChild(numeroAcquisti);

            var isAdmin = document.createElement("td");
            isAdmin.textContent = elemento.isAdmin;
            tr.appendChild(isAdmin);
 
            lista.appendChild(tr);
        });
    }
    </script>   


    </head>
    <body onload="mostraLista()">

	<!--NAVIGATION BAR-->
        <%@include file="../../Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->

    <div class="table-responsive" style="padding-top: 2%; padding-left: 2%; padding-right: 2%">

        <table class="table">
          <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Data di Nascita</th>
            <th>Email</th>
            <th>Numero di Telefono</th>
            <th>Username</th>
            <th>Password</th>
            <th>Numero di Acquisti</th>
            <th>Admin</th>
          </tr>
          </thead>
          <tbody id="listaProfili"></tbody>

        </table>

        <label class="form-check-label" for="isOrdered">Ordina per numero di acquisti</label>
        <input type="checkbox" id="isOrdered" onclick="mostraLista()" autocomplete="off">

	</div>



	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="../../Footer.jsp"%>
        <!--FOOTER-->

    </body>
</html>
