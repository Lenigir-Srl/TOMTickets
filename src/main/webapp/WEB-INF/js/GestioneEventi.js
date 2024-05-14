<script>
    
    function showWarningModal(){
    document.getElementById('warningModalTitle').innerHTML = "NE SEI DAVVERO SICURO??";
    document.getElementById('warningModalDescription').innerHTML = "Eliminando l'evento non sara' piu' possibile recuperarne i dati, i dettagli e tutte le relative informazioni legate ad esso!!!";
    $('#warningModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
        $('#warningModal').modal('show');
    }

    function deleteEvent(titolo) {
        const url = '/risto89-1.0/eliminaEvento';
        
        // Data to be sent in the POST request
        var data = new URLSearchParams();
        data.append('titolo', titolo);

        // Options for the fetch request
        const options = {
            method: 'POST',
            body: data 
        };

        // Make the POST request
        fetch(url, options).then(response => {
            if (response.ok) {
                setTimeout(printDeletedEvent, 100);
            } else {
                console.error('Request failed:', response.statusText);
            }
        });
    }

    function checkDeleteChoice(title = "defaultTitle"){
        showWarningModal();
	document.getElementById("continueButton").onclick = () => {
		turnOffSwitch();
		disableContinueButton();
		$('#warningModal').modal('hide');
		deleteEvent(title);
        };
    }

    class eventCard{

       #title;
       #subtitle;
       #description;
       #event_type;
       #place;
       #date;
       #hour;
       #image;
       #ticket_type;
       #price;
       #discount;
       #numberOfClicks;


       constructor(title = "defaultTitle", subtitle = "defaultSubTitle", description = "defaultDescription", eventType = "defaultEventType", place = "defaultPlace", date = "defaultDate", hour = "defaultHour", image = "...", ticket_type = "defaultTicketType", price = "defaultPrice", discount = "defaultDiscount", numberOfClicks = "defaultNumberOfClicks") {
	   this.title = title;
           this.subtitle = subtitle;
           this.description = description;
           this.eventType = eventType;
           this.place = place;
           this.date = date;
           this.hour = hour;
           this.image = image;
           this.ticket_type = ticket_type;
	   this.price = price;
	   this.discount = discount;
	   this.numberOfClicks = numberOfClicks;
       }


       //Private method
       _getHeader(){
           var header = document.createElement("div");
           header.classList.add("card-header");

           switch (this.eventType){

                 case "Concerti":
		     header.classList.add("bg-danger");
		 break;

		 case "EventiSportivi":
                     header.classList.add("bg-warning");
                 break;

		 case "SpettacoliTeatrali":
                     header.classList.add("bg-success");
                 break;


                 default:
		     header.classList.add("bg-primary");
		 break;
	   }

           var header_label = document.createElement("h3");

           header_label.classList.add("text-center");
           header_label.classList.add("text-white");
           header_label.textContent = this.title;

           header.appendChild(header_label);

           return header;

       }


       //Private method
       _getBody(){
           var body = document.createElement("div");
           body.classList.add("card-body");
	   
	   return body;
       }

       //Private method
       _getFooter(){
           var footer = document.createElement("div");
           footer.classList.add("card-footer");
	   footer.classList.add("d-flex");
	   footer.classList.add("justify-content-between");

           var deleteEvent = document.createElement("button");
           deleteEvent.classList.add("btn");
           deleteEvent.classList.add("btn-primary");
           deleteEvent.textContent = "Vedi dettagli";

           deleteEvent.onclick = () => {
                  checkDeleteChoice(this.title);
           };


           var numClicks = document.createElement("div");
	   numClicks.classList.add("d-flex", "flex-column", "justify-content-end", "ms-auto");;

           var numClicksShower = document.createElement("p");
           numClicksShower.textContent = this.numberOfClicks + " clicks";
           numClicksShower.classList.add("text-end");
	   numClicksShower.classList.add("mb-0");

           numClicks.appendChild(numClicksShower);

           footer.appendChild(deleteEvent);
           footer.appendChild(numClicks);
	   return footer;
       }

       getCard(){

           var card = document.createElement("div");
           card.classList.add("card");
           card.classList.add("h-100");

           var card_header = document.createElement("div");
           card_header.classList.add("card-header");

           card.appendChild(this._getHeader());
           card.appendChild(this._getBody());
           card.appendChild(this._getFooter());
           return card;
       }


    }


    /**
     * Function that makes a POST request to the server to delete an event
     * @param {string} titolo - The title of the event to delete
     */
    function callDeleteEvent(titolo) {
        const url = '/risto89-1.0/eliminaEvento';
        
        // Data to be sent in the POST request
        var data = new URLSearchParams();
        data.append('titolo', titolo);

        // Options for the fetch request
        const options = {
            method: 'POST',
            body: data 
        };

        // Make the POST request
        fetch(url, options).then(response => {
            if (response.ok) {
                console.log('Success!');
                location.reload();
            } else {
                console.error('Request failed:', response.statusText);
            }
        });
    }

    /**
     * Function that shows the list of events
     */
    function mostraLista() {
       var datiJson = JSON.parse( '${eventiJson}' ); 

       var check = document.getElementById("isOrdered");
       if (check.checked) {
           datiJson.sort(function(a, b) {
               return a.numeroClick < b.numeroClick;
           });
       }

       var cardList = document.getElementById("eventiCards");

       // Clearing the table
       while (cardList.firstChild) {
         cardList.removeChild(cardList.firstChild);
       }

       count = 0;


       row = document.createElement("div");
       row.classList.add("row");


       datiJson.forEach(function(elemento) {
            col = document.createElement("div");
           col.classList.add("col-lg");
            col.classList.add("mb-4");
           col.classList.add("mt-4");

           var event = new eventCard(elemento.titolo, elemento.sottotitolo, elemento.descrizione, elemento.tipologia, elemento.luogo, elemento.data, elemento.ora, elemento.image, elemento.tipologiaBiglietti, elemento.prezzo, elemento.sconto, elemento.numeroClick);
  
           col.appendChild(event.getCard());

            row.appendChild(col);

            count = count + 1;

           if(count%3 == 0){
                cardList.appendChild(row);
                row = document.createElement("div");
                row.classList.add("row");
           }

        // Append the last row if its not already appended
            if(count % 3 !== 0){
                cardList.appendChild(row);
            }
	    
	});
    }


    </script>   
