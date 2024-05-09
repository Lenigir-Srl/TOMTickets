<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
    <%-- Include JS file into the page --%>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - crea evento</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>


        <!--HEADER-->
	<%@include file="../Header.jsp"%>
	<!--HEADER-->

        <!--PAGE CONTENT-->
       
    <div style="padding-left: 2%; padding-top: 2%">
	    <p class="h2"> Perfavore, inserisci i seguenti dati: </p>
    </div>

	<div style="float: left; width: 100%; padding-left: 2%; padding-top: 2%">

        <form name="signupForm" action="./creaEvento" method="post" style="width: 30%">

        <div class="mb-3">
          <label for="titolo" class="form-label">Titolo</label>
          <input type="text" class="form-control" id="titolo" name="titolo" required>
        </div>

        <div class="mb-3">
          <label for="sottotitolo" class="form-label">Sottotitolo:</label>
          <input type="text" class="form-control" id="sottotitolo" name="sottotitolo" required>
        </div>

        <div class="mb-3">
          <label for="descrizione" class="form-label">Descrizione:</label>
          <input type="text" class="form-control" id="descrizione" name="descrizione" required>
        </div>

        <div class="mb-3"> <!-- NOTA per il frontend developer: la tipologia deve essere
             scelta da una lista e dubmittare uno dei seguenti valori:
             - Concerti
             - SpettacoliTeatrali
             - EventiSportivi
             - VisiteGuidate
             -->
          <label for="tipologia" class="form-label">Tipologia:</label>
          <input type="text" class="form-control" id="tipologia" name="tipologiaEvento" required>
        </div>

        <div class="mb-3"> <!-- scelto dalla seguente lista:
             - Trento
             - Povo
             - Rovereto
             - Riva
             - Arco
             -->
          <label for="luogo" class="form-label">Luogo:</label>
          <input type="text" class="form-control" id="luogo" name="luogo" required>
        </div>

        <div class="mb-3">
          <label for="data" class="form-label">Data:</label>
          <input type="date" class="form-control" id="data" name="data" required>
        </div>

        <div class="mb-3">
          <label for="ora" class="form-label">Ora:</label>
          <input type="time" class="form-control" id="ora" name="ora" required>
        </div>

        <div class="mb-3"> <!-- TODO in un commit successivo -->
          <label for="image" class="form-label">Immagine:</label>
          <input type="text" class="form-control" id="image" name="image" required>
        </div>

        <div class="mb-3"> <!-- la tipologia di biglietti deve essere scelta da una lista 
             che deve sumbittare uno dei seguenti valori:
             - InPiedi
             - Seduti
             -->
          <label for="tipologiaBiglietti" class="form-label">Tipologia Biglietti:</label>
          <input type="text" class="form-control" id="tipologiaBiglietti" name="tipologiaBiglietti" required>
        </div>

        <div class="mb-3">
          <label for="prezzo" class="form-label">Prezzo:</label>
          <input type="text" class="form-control" id="prezzo" name="prezzo" required>
        </div>

        <div class="mb-3">
          <label for="sconto" class="form-label">Sconto:</label>
          <input type="text" class="form-control" id="sconto" name="sconto" required>
        </div>

        <div class="mb-3">
          <label for="numeroClick" class="form-label">Numero Click:</label>
          <input type="text" class="form-control" id="numeroClick" name="numeroClick" required>
        </div>

        <button type="submit" class="btn btn-primary">Crea</button>
        </form>

        <div class="mb-3 padding-top: 2%">
            <button class="btn btn-primary" onclick="clearFields()">Clear</button>
        </div>
    </div>

	<!--PAGE CONTENT-->

    <!--FOOTER-->
	<%@include file="../Footer.jsp"%>
	<!--FOOTER-->

    </body>
</html>
