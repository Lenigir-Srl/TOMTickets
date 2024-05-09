<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - profilo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>

	<!--NAVIGATION BAR-->
        <%@include file="../../jsp/Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->
   
	<div style="padding-top: 2%; padding-left: 2%; width: 30%">
          <h1>Il mio profilo</h1>

          <div style="padding-top: 20px">

                  <p class="h4">Nome</p>
                  <div class="card">
                    <div class="card-body">
                            ${profilo.getNome()}
                    </div>
                  </div>

                  <p class="h4">Cognome</p>
                  <div class="card">
                    <div class="card-body">
                            ${profilo.getCognome()}
                    </div>
                  </div>

                  <p class="h4">Data di Nascita</p>
                  <div class="card">
                    <div class="card-body">
                            ${profilo.getBirthDate()}
                    </div>
                  </div>

                  <p class="h4">Email</p>
                  <div class="card">
                    <div class="card-body">
                            ${profilo.getEmail()}
                    </div>
                  </div>

                  <p class="h4">Numero di telefono:</p>
                  <div class="card">
                    <div class="card-body">
                            ${profilo.getPhoneNumber()}
                    </div>
                  </div>

                  <p class="h4">Username</p>
                  <div class="card">
                    <div class="card-body">
                            ${profilo.getUsername()}
                    </div>
                  </div>

                  <p class="h4">Numero di acquisti</p>
                  <div class="card">
                    <div class="card-body">
                            ${profilo.getAcquisti()}
                    </div>
                  </div>
          

                  <!-- DELETE BUTTON -->
                  <form action="./eliminaProfilo" method="post" style="padding-top: 30px">
                    <button type="submit" class="btn btn-danger">Elimina Profilo</button>
                  </form>

          </div>


	</div>

	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="../Footer.jsp"%>
        <!--FOOTER-->

    </body>
</html>
