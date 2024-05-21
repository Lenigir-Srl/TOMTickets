<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - eventi</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">


    <script>
    /**
     * Function that makes a POST request to the server to delete an event
     * @param {string} titolo - The title of the event to delete
     */
    function goEvento(titolo) {
        const url = '/risto89-1.0/evento?titolo=';
        var encoded = encodeURI(url + titolo);
        console.log(encoded);
        window.location.replace(encoded);
    }

    /**
     * Function that shows the list of events
     */
    function mostraLista() {

       var tipologia = "${tipologia}"; 

       var url = '/risto89-1.0/ottieniEventi';
       if (tipologia != "") {
           url += '?tipologia=' + tipologia;
       }
       
       fetch(url).then(response => { 

       // Parsing the JSON response
       return response.json();
       }).then(datiJson => {

       var lista = document.getElementById("listaEventi");

       // Clearing the table
       while (lista.firstChild) {
         lista.removeChild(lista.firstChild);
       }

       datiJson.forEach(function(elemento) {
            var tr = document.createElement("tr");

            var button = document.createElement("button");
            button.textContent = "Visualizza";
            button.classList += "btn btn-danger";
            button.onclick = function() { goEvento(elemento.titolo); };
            tr.appendChild(button);

            var titolo = document.createElement("td");
            titolo.textContent = elemento.titolo;
            tr.appendChild(titolo); 
 
            var sottotitolo = document.createElement("td");
            sottotitolo.textContent = elemento.sottotitolo;
            tr.appendChild(sottotitolo); 
 
            var descrizione = document.createElement("td");
            descrizione.textContent = elemento.descrizione;
            tr.appendChild(descrizione); 
 
            var tipologia = document.createElement("td");
            tipologia.textContent = elemento.tipologia;
            tr.appendChild(tipologia); 
 
            var luogo = document.createElement("td");
            luogo.textContent = elemento.luogo;
            tr.appendChild(luogo); 
 
            var data = document.createElement("td");
            data.textContent = elemento.data;
            tr.appendChild(data); 
 
            var ora = document.createElement("td");
            ora.textContent = elemento.ora;
            tr.appendChild(ora); 

            var immagine = document.createElement("td");
            immagine.innerHTML = "<a href='/risto89-1.0/immagini/" + elemento.image + "'>Image</a>";
            tr.appendChild(immagine);

            var tipologiaBiglietti = document.createElement("td");
            tipologiaBiglietti.textContent = elemento.tipologiaBiglietti;
            tr.appendChild(tipologiaBiglietti); 
 
            var prezzo = document.createElement("td");
            prezzo.textContent = elemento.prezzo;
            tr.appendChild(prezzo); 
 
            var sconto = document.createElement("td");
            sconto.textContent = elemento.sconto;
            tr.appendChild(sconto); 
 
            var numeroClick = document.createElement("td");
            numeroClick.textContent = elemento.numeroClick;
            tr.appendChild(numeroClick); 
 
            lista.appendChild(tr);
        });
        });
    }


    function goCreaEvento() {
        window.location.href = "/risto89-1.0/creaEvento";
    }
    </script>   


    </head>
    <body onload="mostraLista()">

	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->

    <div class="table-responsive" style="padding-top: 2%; padding-left: 2%; padding-right: 2%">

        <table class="table">
          <thead>
          <tr>
            <th></th>
            <th>Titolo</th>
            <th>Sottotiolo</th>
            <th>Descrizione</th>
            <th>Tipologia</th>
            <th>Luogo</th>
            <th>Data</th>
            <th>Ora</th>
            <th>Immagine</th>
            <th>Tipologia Biglietti</th>
            <th>Prezzo</th>
            <th>Sconto %</th>
            <th>Numero di Click</th>
          </tr>
          </thead>
          <tbody id="listaEventi"></tbody>

        </table>

	</div>



	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="./Footer.jsp"%>
        <!--FOOTER-->

    </body>
</html>
