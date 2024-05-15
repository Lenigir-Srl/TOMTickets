<script>


function validateForm(){
  
  //Commonly used;
  var form = document.forms["createEventForm"];

  // Title validation
  var title = form["titolo"].value.trim();
  if (!title || /^\s*$/.test(title)) {
    showErrorModal("Titolo errato!", "Il titolo inserito e' malformato o e' vuoto!");
    return false;
  }

  // Subtitle validation
  var subtitle = form["sottotitolo"].value.trim();
  if (!subtitle || /^\s*$/.test(subtitle)) {
    showErrorModal("Sottotitolo errato!", "Il sottotitolo e' malformato o e' vuoto!");
    return false;
  }

  // Description validation
  var descrizione = form["descrizione"].value.trim();
  if (!description || /^\s*$/.test(description)) {
    showErrorModal("Descrizione errata!", "La descrizione e' malformata o e' vuota!");
    return false;
  }

  // Date validation
  var date = form["data"].value;
  if (!date) {
    showErrorModal("Data errata!", "La data inserita non e' valida!");
    return false;
  }

  // Time validation
  var time = form["ora"].value;
  if (!time) {
    showErrorModal("Orario errato!", "L'orario inserito non e' valido!");
    return false;
  }

  // Type of ticket validation
  var ticketType = form["tipologiaBiglietti"].value.trim();
  var validTicketTypes = ["InPiedi", "Seduti"];
  if (!validTicketTypes.includes(ticketType)) {
    showErrorModal("Tipo di biglietto errato!", "Il tipo di biglietto inserito non e' valido!");
    return false;
  }

  // Price validation
  var price = parseFloat(form["prezzo"].value);
  if (isNaN(price) || price < 0) {
    showErrorModal("Prezzo errato!", "Il prezzo inserito non e' valido!");
    return false;
  }

  // Discount validation
  var discount = parseFloat(form["sconto"].value);
  if (isNaN(discount) || discount < 0) {
    showErrorModal("Sconto errato!", "Lo sconto inserito non e' valido!");
    return false;
  }

  // Type of event validation
  var eventType = form["tipologiaEvento"].value.trim();
  var validEventTypes = ["Concerti", "EventiSportivi", "SpettacoliTeatrali", "VisiteGuidate"];
  if (!validEventTypes.includes(eventType)) {
    showErrorModal("Tipo di evento errato!", "Il tipo di evento inserito non e' valido!");
    return false;
  }

  // Place validation
  var place = form["luogo"].value.trim();
  var validPlaces = ["Arco", "Povo", "Riva", "Rovereto", "Trento"];
  if (!validPlaces.includes(place)) {
    showErrorModal("Luogo errato!", "Il luogo inserito non e' valido!");
    return false;
  }

  return true;
}

function clearFields(){
   //Commonly used;
   var form = document.forms["createEventForm"];
   form["titolo"].value = "";
   form["sottotitolo"].value = "";
   form["descrizione"].value = "";
   form["data"].value = "";
   form["ora"].value = "";
   form["tipologiaBiglietti"].value = "";
   form["prezzo"].value = "";
   form["sconto"].value = "";
   form["tipologiaEvento"].value = "";
   form["luogo"].value = "";
   form["image"].value = "";
   return;
}
</script>

