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

    function deleteEvent(title) {
        const url = '/risto89-1.0/eliminaEvento';
        
        // Data to be sent in the POST request
        var data = new URLSearchParams();
        data.append('titolo', title);

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

      //Private
      _scrollToElement(elementId) {
          var element = document.getElementById(elementId);
          if (element) {
              var rect = element.getBoundingClientRect();
              // Scorrere la pagina fino a quando l'elemento è visibile
              window.scrollTo({
                   top: rect.top + window.pageYOffset, // Aggiungi lo spostamento della finestra
                   behavior: 'smooth' // Scorrimento animato
              });
          }
      }



       //Prepare your eyes for this one
       _getDetailsCard(title = "defaultTitle", subtitle = "defaultSubTitle", description = "defaultDescription", eventType = "defaultEventType", place = "defaultPlace", date = "defaultDate", hour = "defaultHour", image = "...", ticket_type = "defaultTicketType", price = "defaultPrice", discount = "defaultDiscount", numberOfClicks = "defaultNumberOfClicks"){
	

		var card = document.createElement("div");
		card.classList.add("card");
		
		var card_header = document.createElement("div");
		card_header.classList.add("card-header", "text-white", "h3");


		switch (eventType){

                 case "Concerti":
                     card_header.style.backgroundColor = "red";
                 break;

                 case "EventiSportivi":
                     card_header.style.backgroundColor = "orange";
                 break;

                 case "SpettacoliTeatrali":
                     card_header.style.backgroundColor = "green";
                 break;

                 case "VisiteGuidate":
                     card_header.style.backgroundColor = "purple";
                 break;

                 default:
                     card_header.style.backgroundColor = "blue";
                 break;
               }

	        card_header.textContent = title;

		var card_body = document.createElement("div");

	        var card_footer = document.createElement("div");
		card_footer.classList.add("card-footer", "d-flex", "justify-content-between");

		var closeButton = document.createElement("button");
		closeButton.textContent = "Chiudi";
		closeButton.classList.add("btn", "btn-success");
		closeButton.onclick = () => {
                     var content = document.getElementById(title);
                     // Clearing the table
                     while (content.firstChild) {
                         content.removeChild(content.firstChild);
                     }
		};

		var deleteButton = document.createElement("button");
		deleteButton.textContent = "Elimina";
		deleteButton.classList.add("btn", "btn-warning");
		deleteButton.onclick = () => {
		    checkDeleteChoice(title);
	        }

		card_footer.appendChild(closeButton);
		card_footer.appendChild(deleteButton);



		card.appendChild(card_header);
		card.appendChild(card_body);
		card.appendChild(card_footer);
		return card;



       }

       //Private
       _showMoreDetails(){
           var content = document.getElementById(this.title);
	   var detailsCard = this._getDetailsCard;
	   // Clearing the table
           while (content.firstChild) {
                content.removeChild(content.firstChild);
           }

	   let url = 'http://localhost:41063/risto89-1.0/ottieniEvento?title=' + encodeURIComponent(this.title);
	   fetch(url )
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse JSON data from response
                })
                .then(function(data) {
                    // Assuming data is an object representing EventoBean
		    
		    content.appendChild(detailsCard(data.titolo, data.sottotitolo, data.descrizione, data.tipologia, data.luogo, data.data, data.ora, data.image, data.tipologiaBiglietti, data.prezzo, data.sconto, data.numeroClick));
                })
                .catch(function(error) {
                    console.error('Error fetching data:', error);
                    content.innerHTML = 'Error fetching data.';
                });

       }


       //Private method
       _getHeader(){
           var header = document.createElement("div");
           header.classList.add("card-header");

           switch (this.eventType){

                 case "Concerti":
		     header.style.backgroundColor = "red";
		 break;

		 case "EventiSportivi":
                     header.style.backgroundColor = "orange";
                 break;

		 case "SpettacoliTeatrali":
                     header.style.backgroundColor = "green";
                 break;

		 case "VisiteGuidate":
		     header.style.backgroundColor = "purple";
		 break;

                 default:
		     header.style.backgroundColor = "blue";
		 break;
	   }

           var header_label = document.createElement("h3");

           header_label.classList.add("text-center", "text-white");
           header_label.textContent = this.title;

           header.appendChild(header_label);

           return header;

       }


       //Private method
       _getBody(){
           var body = document.createElement("div");
	   body.classList.add("card-body");
	   
	   var body_container = document.createElement("div");


	   var first_half = document.createElement("div");
	   first_half.classList.add("row");


	   var first_half_image = document.createElement("div");
	   first_half_image.classList.add("col-md-6", "d-flex", "justify-content-center");
           

	   var image = document.createElement("img");
	   image.classList.add("img-fluid", "rounded", "d-block"); // Bootstrap classes for responsive images and centering
	   image.style.maxHeight = "200px";
	   image.src = "./immagini/" + this.image;
	   first_half_image.appendChild(image);

	   



           var second_half_description = document.createElement("div");
           second_half_description.classList.add("col-md-6", "text-center");

	   var subtitle_row = document.createElement("div");
	   subtitle_row.classList.add("row", "text-center");

	   var subtitle = document.createElement("p");
	   subtitle.classList.add("h5");
	   subtitle.textContent = this.subtitle;

           subtitle_row.appendChild(subtitle);

	   second_half_description.appendChild(subtitle_row);

  

	   first_half.appendChild(first_half_image);
	   first_half.appendChild(second_half_description);

           
	   var second_half = document.createElement("div");
	   second_half.classList.add("row", "d-flex", "justify-content-center");


	   var price = document.createElement("div");
	   price.classList.add("row", "text-center");
	   var price_shower = document.createElement("p");
	   price_shower.classList.add("h3", "rounded", "mb-2");
	   price_shower.style.backgroundColor = "lightgreen";
	   price_shower.textContent = this.price;
	   price.appendChild(price_shower);
	   second_half.appendChild(price);
	   
	   if(this.discount != 0){
               var discount = document.createElement("div");
               discount.classList.add("row", "text-center");
               var discount_shower = document.createElement("p");
	       discount_shower.classList.add("h3", "rounded");
	       discount_shower.style.backgroundColor = "red";
               discount_shower.textContent = this.discount;
               discount.appendChild(discount_shower);
               second_half.appendChild(discount);
	   }

	   body_container.appendChild(first_half);
	   body_container.appendChild(second_half);
	   body.appendChild(body_container);
	   return body;
       }

       //Private method
       _getFooter(){
           var footer = document.createElement("div");
           footer.classList.add("card-footer", "d-flex", "justify-content-between");

           var moreDetails = document.createElement("button");
           moreDetails.classList.add("btn", "btn-primary");
           moreDetails.textContent = "Vedi dettagli";

           moreDetails.onclick = () => {
                  this._showMoreDetails();
		  this._scrollToElement(this.title);
           };


           var numClicks = document.createElement("div");
	   numClicks.classList.add("d-flex", "flex-column", "justify-content-end", "ms-auto");;

           var numClicksShower = document.createElement("p");
           numClicksShower.textContent = this.numberOfClicks + " clicks";
           numClicksShower.classList.add("text-end", "mb-0");

           numClicks.appendChild(numClicksShower);

           footer.appendChild(moreDetails);
           footer.appendChild(numClicks);
	   return footer;
       }

       getCard(){

           var card = document.createElement("div");
           card.classList.add("card", "h-100");

           var card_header = document.createElement("div");
           card_header.classList.add("card-header");

           card.appendChild(this._getHeader());
           card.appendChild(this._getBody());
           card.appendChild(this._getFooter());
           return card;
       }


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
       var eventDetails = document.createElement("div");
       eventDetails.classList.add("row");

       // Clearing the table
       while (cardList.firstChild) {
         cardList.removeChild(cardList.firstChild);
       }

       count = 0;


       row = document.createElement("div");
       row.classList.add("row");


       datiJson.forEach(function(elemento) {
           col = document.createElement("div");
           col.classList.add("col-lg", "mb-4", "mt-4");

           var event = new eventCard(elemento.titolo, elemento.sottotitolo, elemento.descrizione, elemento.tipologia, elemento.luogo, elemento.data, elemento.ora, elemento.image, elemento.tipologiaBiglietti, elemento.prezzo, elemento.sconto, elemento.numeroClick);
  
           col.appendChild(event.getCard());

           row.appendChild(col);

           count = count + 1;

           let eventDetail = document.createElement("div");
           eventDetail.id = elemento.titolo;
           eventDetails.appendChild(eventDetail);

	   if(count%3 == 0){
                cardList.appendChild(row);
		cardList.appendChild(eventDetails);
		eventDetails = document.createElement("div");
		eventDetails.classList.add("row");
                row = document.createElement("div");
                row.classList.add("row");
            }


        // Append the last row if its not already appended
            if(count % 3 !== 0){
                cardList.appendChild(row);
		cardList.appendChild(eventDetails);
            }
	    
	});
    }


    </script>   
