<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <%-- Include JS file into the page --%>
        <script type"text/javascript" src="js/Profile.js"></script>
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
    <section class="bg-dark-subtle text-center align-items-center justify-content-center d-flex" style="min-height: 95vh;">
        <div class="container pt-5 pb-5 d-flex align-items-center justify-content-center">
            <div class="card w-75">
 			<div class="card-header bg-primary">
                            <h1 class="text-center text-white">Il mio profilo</h1>
                        </div>
                <div class="card-body py-3">
                    <blockquote class="blockquote">
                        <div class="row">
			   <div class="col">
			      <div class="row">
			          <p class="text-center">Nome</p>
                                  <footer class="blockquote-footer text-center"><cite title="name">${profilo.getNome()}</cite></footer>
			      </div>
			      <div class="row">
                                  <p class="text-center">Cognome</p>
                                  <footer class="blockquote-footer text-center"><cite title="name">${profilo.getCognome()}</cite></footer>
			      </div>
			      <div class="row">
			          <p class="text-center">Data di Nascita</p>
                                  <footer class="blockquote-footer text-center"><cite title="name">${profilo.getBirthDate()}</cite></footer>
                              </div>
			   </div>
			   <div class="col">
			      <div class="row">
			          <p class="text-center">Username</p>
                                  <footer class="blockquote-footer text-center"><cite title="name">${profilo.getUsername()}</cite></footer>
			      </div>
			      <div class="row">
			          <p class="text-center">Indirizzo email</p>
                                  <footer class="blockquote-footer text-center"><cite title="name">${profilo.getEmail()}</cite></footer>
			      </div>
			      <div class="row">
                                  <p class="text-center">Numero di telefono</p>
                                  <footer class="blockquote-footer text-center"><cite title="name">${profilo.getPhoneNumber()}</cite></footer>
                              </div>
			   </div>
			</div>

                        <p class="text-center">Numero di acquisti effettuati</p>
                        <footer class="blockquote-footer text-center"><cite title="name">${profilo.getAcquisti()}</cite></footer>
                    </blockquote>
		</div>
		<!-- DELETE BUTTON -->
                <div class="card-footer">
		    <div class="row">
		        <div class="col-md mt-1 mb-1">
                            <a href="./logout" type="button" class="btn btn-danger">Esci dal mio Profilo</a>
                        </div>
			<div class="col-md mt-1 mb-1">
                            <form action="./eliminaProfilo" id="deleteProfile" method="post">
                                <button type="button" onclick="return checkChoice()" id="deleteProfile" class="btn btn-warning">Elimina il mio Profilo</button>
                            </form>
			</div>
	             </div>
		</div>
	    </div>
        </div>
    </section>	

	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="../../jsp/Footer.jsp"%>
        <!--FOOTER-->

	<!--COOKIE-->
        <%@include file="../../jsp/Cookie.jsp"%>
        <!--COOKIE-->

	<!--WARNING-->
        <%@include file="../../jsp/Warning.jsp"%>
        <!--WARNING-->

    </body>
</html>
