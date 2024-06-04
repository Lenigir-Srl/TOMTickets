function calcolaPrezzo(numeroAcquisti) {
    var quantita = document.getElementById("quantita").value;
    var prezzo = document.getElementById("prezzo").innerHTML;
    var sconto = document.getElementById("sconto").innerHTML;

    console.log("quantita: " + quantita + " prezzo: " + prezzo + " sconto: " + sconto);

    document.getElementById("final-price").innerHTML = (quantita - (quantita + numeroAcquisti % 5) % 5)* prezzo * (1 - sconto / 100);
}
