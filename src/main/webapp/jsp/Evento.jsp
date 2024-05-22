<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <%-- Include JS file into the page --%>
        <script type"text/javascript" src="js/Profile.js"></script>
	      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - evento</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>

	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->


  <!--PAGE CONTENT-->
    <section class="bg-dark-subtle text-center align-items-center justify-content-center d-flex" style="min-height: 95vh;">
        <div class="container pt-5 pb-5 d-flex align-items-center justify-content-center">
            <div class="card w-75">
 			<div class="card-header bg-primary">
              <h1 class="text-center text-white">Evento</h1>
               </div>
               <div class="card-body py-3">
               <blockquote class="blockquote">
                        <div class="row">
			   <div class="col">
			      <div class="row">
			          <p class="text-center">Titolo</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getTitolo()}</cite></footer>
			      </div>
			      <div class="row">
                      <p class="text-center">Sottotitolo</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getSottotitolo()}</cite></footer>
			      </div>
			      <div class="row">
			          <p class="text-center">Descrizione</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getDescrizione()}</cite></footer>
                  </div>
			   </div>
			   <div class="col">
			      <div class="row">
			          <p class="text-center">Tipologia</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getTipologia().toString() }</cite></footer>
			      </div>
			      <div class="row">
			          <p class="text-center">Luogo</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getLuogo().toString()}</cite></footer>
			      </div>
			      <div class="row">
                      <p class="text-center">Data</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getData()}</cite></footer>
                  </div>
			      <div class="row">
                        <p class="text-center">Ora</p>
                        <footer class="blockquote-footer text-center"><cite title="name">${evento.getOra()}</cite></footer>
			      </div>
			   </div>
			   <div class="col">
			      <div class="row">
			          <p class="text-center">Immagine</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getImage() }</cite></footer>
			      </div>
			      <div class="row">
			          <p class="text-center">Luogo</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getTipologiaBiglietti().toString()}</cite></footer>
			      </div>
			      <div class="row">
                      <p class="text-center">Prezzo</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getPrezzo()}</cite></footer>
                  </div>
			   </div>
			   <div class="col">
			      <div class="row">
			          <p class="text-center">Sconto</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getSconto() }</cite></footer>
			      </div>
			      <div class="row">
			          <p class="text-center">Numero di Click</p>
                      <footer class="blockquote-footer text-center"><cite title="name">${evento.getNumeroClick()}</cite></footer>
			      </div>
			   </div>
			   </div>
               </blockquote>
		</div>




		<!-- BUY BUTTON -->
          <div class="card-footer">
		    <div class="row">
		        <div class="col-md mt-1 mb-1">
                <form action="/risto89-1.0/acquistaevento" id="acquista" method="post">
                   <input type="hidden" id="titolo" name="titolo" value="${evento.getTitolo()}" class="text">
                   <button type="submit" id="acquistaButton" class="btn btn-success">Acquista</button>
                </form>
                </div>
			<div class="col-md mt-1 mb-1">
                <form action="/risto89-1.0/eventi" id="goBack" method="get">
                   <button type="submit" id="goBackButton" class="btn btn-warning">Altri eventi</button>
                </form>
	      </div>
	     </div>
		</div>
	    </div>
        </div>
    </section>	

	<!--PAGE CONTENT-->


  <!--FOOTER-->
        <%@include file="./Footer.jsp"%>
  <!--FOOTER-->

	<!--COOKIE-->
        <%@include file="./Cookie.jsp"%>
  <!--COOKIE-->

	<!--WARNING-->
        <%@include file="./Warning.jsp"%>
  <!--WARNING-->

    </body>
</html>
