<script>

function calcolaPrezzo() {
    var quantita = parseInt(document.getElementById("quantita").value, 10);
    var prezzo = parseFloat(document.getElementById("price").innerHTML);
    if(document.getElementById("discount").innerHTML != "No"){
        var sconto = parseFloat(document.getElementById("discount").innerHTML);
    }else{
        var sconto = 0;
    }

    // Calculate the total number of tickets including current purchase
    var bigliettiTotali = quantita + numeroAcquisti;

    // Calculate the number of free tickets obtained in the past
    var numeroBigliettiGratisTotali = Math.floor(numeroAcquisti / 5);

    // Calculate the number of free tickets counting the current tickets being purchased
    var numeroBigliettiGratisCorrenti = Math.floor(bigliettiTotali / 5);

    // Calculate current number of tickets 
    var numeroBigliettiGratis = numeroBigliettiGratisCorrenti - numeroBigliettiGratisTotali;

    // Calculate the final price with the discount and free tickets
    var finalPrice = (quantita - numeroBigliettiGratis) * prezzo * (1 - sconto / 100);


    // Display a message if free tickets are being given
    document.getElementById("finalPrice").innerHTML = finalPrice.toFixed(2) + " euro";
    if(numeroBigliettiGratis > 0){
        if(numeroBigliettiGratis == 1){
            document.getElementById("freeTickets").innerHTML = "Avendo acquistato in totale " + bigliettiTotali + " biglietti<br>avresti diritto a " + numeroBigliettiGratis + " biglietto gratis!<br>(Un'altro biglietto gratis se acquisti altri " + (5-(bigliettiTotali % 5)) + " biglietti)";
	}else{
            document.getElementById("freeTickets").innerHTML = "Avendo acquistato in totale " + bigliettiTotali + " biglietti<br>avresti diritto a " + numeroBigliettiGratis + " biglietti gratis!<br>(Un'altro biglietto gratis se acquisti altri " + (5-(bigliettiTotali % 5)) + " biglietti)";
	}
    }else{
        document.getElementById("freeTickets").innerHTML = "";
    }
}


function mostraEvento(elemento){
document.getElementById("title").innerHTML = elemento.titolo;
document.getElementById("subtitle").innerHTML = elemento.sottotitolo;
document.getElementById("place").innerHTML = elemento.luogo;
document.getElementById("date").innerHTML = elemento.data;
document.getElementById("price").innerHTML = elemento.prezzo + " euro ";
if(elemento.sconto != 0 ){
    document.getElementById("discount").innerHTML = elemento.sconto + "%";
}else{
    document.getElementById("discount").innerHTML = "No";
}
calcolaPrezzo();

}

//Called every time the "/evento" page is opened
function mostraLista(){

       //The page has to show the details of a single event, identified by the title
       //We use this variable to write a GET request and get only that event
       //titolo = "${titolo}"   <--- This line is inside "AcquistaEvento.jsp"

       //Creating the url needed to call the api
       var url = '/TOMTickets-1.0/ottieniEvento';
       if (titolo != "") {
           //Add the specific type of event request (GET)
           url += '?titolo=' + titolo;
       }

          //Let's call the api!
           fetch(url)
                .then(function(response) {
                    if (!response.ok) {
                       //Something went wrong! Inform the user...
                        throw new Error('Network response was not ok');
                    }
                   // Parse JSON data from response
                    return response.json();
                })
                .then(function(data) {
                    //Lets show the obtained JSON to the browser!
                   mostraEvento(data);
                })
                .catch(function(error) {
                   //Something went wrong! Inform the user...
                    console.error('Error fetching data:', error);
                    content.innerHTML = 'Error fetching data.';
                });

}


function validateForm(){
    var quantita = parseInt(document.getElementById("quantita").value, 10);

    //Check if value is empty or a character
    if(isNaN(quantita)){
        showErrorModal("Numero di biglietti malformato", "Hai inserito un numero di biglietti non valido, perfavore controlla e riprova l'acquisto.");
        return false;
    }

    //Check if value is negative
    if(quantita < 1){
        showErrorModal("Numero di biglietti negativo!", "Hai inserito un numero di biglietti minore o uguale a 0.<br>Perfavore inserisci un numero di biglietti positivo.");
	return false;
    }

    //Check if value is float (good try ngl)
    if(quantita % 1 != 0){
        setRainbowModal();
        setModalTitle("Ok. Ci hai provato.");
        setModalDescription("Ammettilo dai, stai cercando di trovare una vulnerabilità nel nostro sito...Non siamo cosi sciocchi in fondo!");
        showModal();
	return false;
    }

    //Check if value is too large
    if(quantita > 100){
        setRainbowModal();
        setModalTitle("Uhm....Ok?");
        setModalDescription("Vorresti comprare " + quantita + " biglietti?<br>Non dubito che tu abbia i soldi....Ma di sicuro<br>noi non abbiamo abbastanza biglietti! ");
        showModal();
        return false;
    }

    return true;
}

</script>
