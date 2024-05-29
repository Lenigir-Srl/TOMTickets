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
                console.log("eliminato");
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
      _scrollToElementBottom(elementId) {
          var element = document.getElementById(elementId);
          if (element) {
              var rect = element.getBoundingClientRect();
              // Scorrere la pagina fino a quando l'elemento è visibile al bordo inferiore
              window.scrollTo({
                   top: rect.bottom + window.pageYOffset - window.innerHeight, // Posiziona l'elemento al bordo inferiore
                   behavior: 'smooth' // Scorrimento animato
              });
          }
      }


      //Private
      _scrollToElementTop(elementId) {
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


       _getDetailsCardHeader(){
                var card_header = document.createElement("div");
                card_header.classList.add("card-header", "text-white", "h3", "text-center");


                switch (eventType){

                 case "Concerti":
                     eventType = "Concerto";
                     card_header.style.backgroundColor = "red";
                 break;

                 case "EventiSportivi":
                     eventType = "Evento Sportivo";
                     card_header.style.backgroundColor = "orange";
                 break;

                 case "SpettacoliTeatrali":
                     eventType = "Spettacolo Teatrale";
                     card_header.style.backgroundColor = "green";
                 break;

                 case "VisiteGuidate":
                     eventType = "Visita Guidata";
                     card_header.style.backgroundColor = "purple";
                 break;

                 default:
                     card_header.style.backgroundColor = "blue";
                 break;
               }
                card_header.textContent = title;
		return card_header;
       }

       _getDetailsCardFooter(){
                var card_footer = document.createElement("div");
                card_footer.classList.add("card-footer", "d-flex", "justify-content-between");

                function scrollToElementBottom(elementId) {
                     var element = document.getElementById(elementId);
                     if (element) {
                         var rect = element.getBoundingClientRect();
                         // Scorrere la pagina fino a quando l'elemento è visibile al bordo inferiore
                         window.scrollTo({
                               top: rect.bottom + window.pageYOffset - window.innerHeight, // Posiziona l'elemento al bordo inferiore
                               behavior: 'smooth' // Scorrimento animato
                         });
                     }
                }

                var closeButton = document.createElement("button");
                closeButton.textContent = "Chiudi";
                closeButton.classList.add("btn", "btn-success");
                closeButton.onclick = () => {
                     var content = document.getElementById(title);
                     // Clearing the table
                     while (content.firstChild) {
                         content.removeChild(content.firstChild);
                     }
                     scrollToElementBottom(title);

                };

                var deleteButton = document.createElement("button");
                deleteButton.textContent = "Elimina";
                deleteButton.classList.add("btn", "btn-warning");
                deleteButton.onclick = () => {
                    checkDeleteChoice(title);
                }

                card_footer.appendChild(closeButton);
                card_footer.appendChild(deleteButton);
       }

       _getDetailsCardBody(){
		
		var card_body = document.createElement("div");
		card_body.classList.add("card-body", "text-center");

		var first_row = document.createElement("div");
		first_row.classList.add("row", "container-fluid", "mx-auto", "px-0");
		
		var picture_container = document.createElement("div");
		picture_container.classList.add("col-lg-7", "text-center", "bg-dark", "rounded");

		var picture = document.createElement("img");
		picture.style.maxWidth = "100%";
		picture.style.maxHeight = "240px";
		picture.src = "http://localhost:41063/risto89-1.0/immagini/" + image;
	
		
		picture_container.appendChild(picture);

		var subtitle_description_container = document.createElement("div");
		subtitle_description_container.classList.add("col-lg-5", "text-center");


		var description_row = document.createElement("div");
		description_row.classList.add("row");

		var description_shower = document.createElement("cite");
		description_shower.textContent = description;

	        description_row.appendChild(description_shower);

		var subtitle_row = document.createElement("div");
                subtitle_row.classList.add("row");

                var subtitle_shower = document.createElement("p");
		subtitle_shower.textContent = subtitle;
                subtitle_shower.classList.add("h2");

                subtitle_row.appendChild(subtitle_shower);


		subtitle_description_container.appendChild(subtitle_row);
		subtitle_description_container.appendChild(description_row);


		first_row.appendChild(picture_container);
		first_row.appendChild(subtitle_description_container);


		var second_row = document.createElement("div");
                second_row.classList.add("row", "container-fluid", "mx-auto");

                
		var second_row_container = document.createElement("div");
		second_row_container.classList.add("card", "border-0", "pt-3");

		var second_row_container_body = document.createElement("div");
		second_row_container_body.classList.add("card-body", "bg-secondary", "rounded");

		var second_row_container_body_row = document.createElement("div");
		second_row_container_body_row.classList.add("row");
		
		var second_row_first_col = document.createElement("div");
		second_row_first_col.classList.add("col-md-6");

         function makeRow(title = "defaultTitle", image = "defaultImage", content = "defaultContent"){
                

		var row = document.createElement("div");
                row.classList.add("row", "d-flex", "justify-content-center");

                var row_container = document.createElement("div");
                row_container.classList.add("text-white", "row");

                var image_title = document.createElement("div");
                image_title.classList.add("col-md-6", "d-flex", "align-items-center", "justify-content-center");

                var image_container = document.createElement("img");
                image_container.style.width = "47px";
                image_container.style.height = "47px";
                image_container.src = image;

                var title_container = document.createElement("h4");
		title_container.classList.add("text-truncate", "d-flex", "align-items-center", "px-3", "d-lg-block", "d-none");
                title_container.textContent = title;

                image_title.appendChild(image_container);
                image_title.appendChild(title_container);
                row_container.appendChild(image_title);


		var content_container = document.createElement("div");
		content_container.classList.add("col-md-6", "d-flex", "align-items-center", "justify-content-center");

                var content_shower = document.createElement("h5");
		content_shower.classList.add("text-truncate");
                content_shower.textContent = content;

		content_container.appendChild(content_shower);

                row_container.appendChild(content_container);

                row.appendChild(row_container);

                return row;
                }

	function getSeparator(){
		var hr = document.createElement("hr");
		hr.classList.add("hr", "hr-blurry");

		return hr;

	}

		second_row_first_col.appendChild(makeRow("Data:", "../../utils/calendar-icon.png", this.date));
		second_row_first_col.appendChild(getSeparator());
		second_row_first_col.appendChild(makeRow("Ora:", "../../utils/clock-icon.png", this.hour));
		second_row_first_col.appendChild(getSeparator());
		second_row_first_col.appendChild(makeRow("Luogo:", "../../utils/location-icon.png", this.place));
		second_row_first_col.appendChild(getSeparator());
		second_row_first_col.appendChild(makeRow("Clicks:", "../../utils/click-icon.png", this.numClicks));


		var second_row_second_col = document.createElement("div");
                second_row_second_col.classList.add("col-md-6");

		var special_hr = document.createElement("hr");
                special_hr.classList.add("hr", "hr-blurry", "d-md-none", "d-block");
		
		second_row_first_col.appendChild(special_hr);

		second_row_second_col.appendChild(makeRow("Evento:", "../../utils/event-icon.png", this.eventType));
                second_row_second_col.appendChild(getSeparator());
                second_row_second_col.appendChild(makeRow("Biglietto:", "../../utils/ticket-icon.png", this.ticketType));
                second_row_second_col.appendChild(getSeparator());

		second_row_second_col.appendChild(makeRow("Prezzo:", "../../utils/price-icon.png", this.price + " euro"));
                second_row_second_col.appendChild(getSeparator());
                if(this.discount != 0){
                    second_row_second_col.appendChild(makeRow("Sconto:", "../../utils/discount-icon.png", "-" + this.discount + "%"));

                }else{
                    second_row_second_col.appendChild(makeRow("Sconto:", "../../utils/discount-icon.png", "No"));
                }

		second_row_container_body_row.appendChild(second_row_first_col);
		second_row_container_body_row.appendChild(second_row_second_col);
		second_row_container_body.appendChild(second_row_container_body_row);
		second_row_container.appendChild(second_row_container_body);

		second_row.appendChild(second_row_container);

		card_body.appendChild(first_row);
		card_body.appendChild(second_row);

		return card_body;
       }

       _getDetailsCard(){
                var card = document.createElement("div");
                card.classList.add("card", "mt-4");
                

		card.appendChild(this._getDetailsCardHeader());
                card.appendChild(this._getDetailsCardBody());
                card.appendChild(this._getDetailsCardFooter());
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

	   let url = 'http://localhost:41063/risto89-1.0/ottieniEvento?titolo=' + encodeURIComponent(this.title);
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

           var header_label = document.createElement("h4");

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
	   body_container.classList.add("row");

	   var first_half_image = document.createElement("div");
	   first_half_image.classList.add("col-md-5", "d-flex", "justify-content-center", "pt-1");
           

	   var image = document.createElement("img");
	   image.classList.add("img-fluid", "rounded", "d-block"); // Bootstrap classes for responsive images and centering
	   image.style.maxHeight = "150px";
	   image.src = "./immagini/" + this.image;
	   first_half_image.appendChild(image);


	   var second_half_details = document.createElement("div");
	   second_half_details.classList.add("col-md-7", "card", "border-0", "pt-2");

	   var second_half_container = document.createElement("div");
	   second_half_container.classList.add("card-body", "bg-dark", "rounded");

           function makeRow(title = "defaultTitle", image = "defaultImage", content = "defaultContent"){
                var row = document.createElement("div");
                row.classList.add("row");

                var row_container = document.createElement("div");
                row_container.classList.add("text-white", "d-flex", "justify-content-between");

                var image_title = document.createElement("span");
                image_title.classList.add("d-flex");

                var image_container = document.createElement("img");
                image_container.style.width = "30px";
                image_container.style.height = "30px";
                image_container.classList.add("pr-2");
                image_container.src = image;

                var title_container = document.createElement("p");
                title_container.textContent = title;

                image_title.appendChild(image_container);
                image_title.appendChild(title_container);
                row_container.appendChild(image_title);



                var content_container = document.createElement("span");
                content_container.classList.add("text-truncate");
		content_container.textContent = content;

                row_container.appendChild(content_container);

                row.appendChild(row_container);

                return row;
           }

	   function getSeparator(){
                var hr = document.createElement("hr");
                hr.classList.add("hr", "hr-blurry", "text-white");

                return hr;

           } 

	   second_half_container.appendChild(makeRow("Prezzo:", "https://cdn3.iconfinder.com/data/icons/start-up-4/44/money-512.png", this.price + " euro"));
           second_half_container.appendChild(getSeparator());
           if(this.discount != 0){
                second_half_container.appendChild(makeRow("Sconto:", "https://cdn3.iconfinder.com/data/icons/e-commerce-pt-1/96/label_price_sale_percent-128.png", "-" + this.discount + "%"));
           }else{
                second_half_container.appendChild(makeRow("Sconto:", "https://cdn3.iconfinder.com/data/icons/e-commerce-pt-1/96/label_price_sale_percent-128.png", "No"));
           }
	   second_half_container.appendChild(getSeparator());

	   second_half_container.appendChild(makeRow("Data:", "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png", this.date));
	   second_half_container.appendChild(getSeparator());
	   second_half_container.appendChild(makeRow("Luogo:", "https://cdn1.iconfinder.com/data/icons/search-engine-optimisation-seo/44/seo_icons-26-512.png", this.place));
	   second_half_details.appendChild(second_half_container);
	   
	   body_container.appendChild(first_half_image);
	   body_container.appendChild(second_half_details);
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
		  this._scrollToElementTop(this.title);
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
    function mostraCards(datiJson) {
       

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

    function mostraLista(){
	let url = 'http://localhost:41063/risto89-1.0/ottieniEventi';
           fetch(url)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse JSON data from response
                })
                .then(function(data) {
                    // Assuming data is an object representing EventoBean

                    mostraCards(data);
                })
                .catch(function(error) {
                    console.error('Error fetching data:', error);
                    content.innerHTML = 'Error fetching data.';
                });

    }


    </script>   
