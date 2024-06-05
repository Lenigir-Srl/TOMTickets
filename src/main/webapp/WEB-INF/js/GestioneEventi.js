    //WARNING:
    //The following code is VERY long, mainly because it puts together "Eventi.js" and "Evento.js" code.
    //Don't be scared though, you have to keep in mind that everything inside here ONLY MAKES THINGS LOOK BETTER TO THE USER
    //that is why it's so long: writing html with javascript is a bit tedious.
    
    //Calls the api "eliminaEvento" to delete the event
    function deleteEvent(title) {
        const url = getUrl() + '/eliminaEvento';
        
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

    //Makes a worning modal appear and modifies the button "elimina" to specifically call the api for that certain event
    function checkDeleteChoice(title = "defaultTitle"){
	showWarningModal("NE SEI DAVVERO SICURO??",
	"Eliminando l'evento non sara' piu' possibile recuperarne i dati, i dettagli e tutte le relative informazioni legate ad esso!!!");
	document.getElementById("continueButton").onclick = () => {
		//Closes the warning modal
		closeWarningModal();
		
		//Call api to delete the event
		deleteEvent(title);
        };
    }

    class eventCard{
       
        // All the attributes of the event
        title;
        subtitle;
        description;
        eventType;
        place;
        date;
        hour;
        image;
        ticket_type;
        price;
        discount;
        numberOfClicks;

        // Constructor for the class, we set everything to have a default value of the type "default<Name>"
        constructor(
            title = "defaultTitle",
            subtitle = "defaultSubTitle",
            description = "defaultDescription",
	        eventType = "defaultEventType",
	        place = "defaultPlace",
	        date = "defaultDate",
	        hour = "defaultHour",
            image = "...",
	        ticket_type = "defaultTicketType",
	        price = "defaultPrice",
	        discount = "defaultDiscount",
	        numberOfClicks = "defaultNumberOfClicks"
       ) {
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

      //Scrolls the manager's page until the element identified by its ID is at the bottom of the viewport
      tBottom(elementId) {
          //Get the element by its ID
	  var element = document.getElementById(elementId);
          if (element) {
              var rect = element.getBoundingClientRect();
              //Scroll the page
              window.scrollTo({
                   top: rect.bottom + window.pageYOffset - window.innerHeight, //Until the element is at the bottom
                   behavior: 'smooth' //Make the scroll animated and smooth
              });
          }
      }


      //Scrolls the manager's page until the element identified by its ID is at the top of the viewport
      _scrollToElementTop(elementId) {
          //Get the element by its ID
          var element = document.getElementById(elementId);
          if (element) {
              var rect = element.getBoundingClientRect();
              //Scroll the page
              window.scrollTo({
                   top: rect.top + window.pageYOffset, //Until the element is at the top
                   behavior: 'smooth' //Make the scroll animated and smooth
              });
          }
      }


    //Returns the header of the event card, this changes its color based on which kind of event it is displaying
    _getDetailsCardHeader() {

        //The header of the card, inside we have a different color and the title of the event
        var card_header = document.createElement("div");
        card_header.classList.add("card-header", "text-white", "h3", "text-center");
  
        //Set the color of the header
	// Concerti - red
        // Eventi Sportivi - orange
        // Spettacoli Teatrali - green
        // Visite Guidate - purple
        // Everything else - blue
        switch (this.eventType) {
            case "Concerti":
                this.eventType = "Concerto";
                card_header.style.backgroundColor = "red";
                break;
            case "Concerto":
                card_header.style.backgroundColor = "red";
                break;
            case "EventiSportivi":
                this.eventType = "Evento Sportivo";
                card_header.style.backgroundColor = "orange";
                break;
	    case "Evento Sportivo":
                card_header.style.backgroundColor = "orange";
                break;
            case "SpettacoliTeatrali":
                this.eventType = "Spettacolo Teatrale";
                card_header.style.backgroundColor = "green";
                break;
	    case "Spettacolo Teatrale":
                card_header.style.backgroundColor = "green";
                break;
            case "VisiteGuidate":
                this.eventType = "Visita Guidata";
                card_header.style.backgroundColor = "purple";
                break;
            case "Visita Guidata":
                card_header.style.backgroundColor = "purple";
                break;
	    default:
                card_header.style.backgroundColor = "blue";
                break;
        }

        //Add the title of the event to the header
        card_header.textContent = this.title;
        return card_header;
    }

    //Returns the body of the event card, this might seem complicated, but it's all
    //styling and html writing via javascript
    _getDetailsCardBody() {

        //The body of the card, inside we are going to place everything we need
        var card_body = document.createElement("div");
        card_body.classList.add("card-body", "text-center");

        //Our first row of the card contains the image of the event on the left, and the subtitle and description on the right
        var first_row = document.createElement("div");
        first_row.classList.add("row", "container-fluid", "mx-auto", "px-0");

        //Let's create the image!
        var picture_container = document.createElement("div");
        picture_container.classList.add("col-lg-7", "text-center", "bg-dark", "rounded");

        var picture = document.createElement("img");
        picture.style.maxWidth = "100%";
        picture.style.maxHeight = "240px";
        picture.src = "immagini/" + this.image;

        picture_container.appendChild(picture);


        //Now we create the container for the subtitle and the description
        var subtitle_description_container = document.createElement("div");
        subtitle_description_container.classList.add("col-lg-5", "text-center");

        var description_row = document.createElement("div");
        description_row.classList.add("row");

        //Let's create the description
        var description_shower = document.createElement("cite");
        description_shower.textContent = this.description;

        description_row.appendChild(description_shower);


        //Let's create the subtitle
        var subtitle_row = document.createElement("div");
        subtitle_row.classList.add("row");

        var subtitle_shower = document.createElement("p");
        subtitle_shower.textContent = this.subtitle;
        subtitle_shower.classList.add("h2");

        subtitle_row.appendChild(subtitle_shower);


        //Add subtitle and description to their container
        subtitle_description_container.appendChild(subtitle_row);
        subtitle_description_container.appendChild(description_row);


        //Add picture, subtitle and description to the first row
        first_row.appendChild(picture_container);
        first_row.appendChild(subtitle_description_container);


        //The second row shows the event's info, it's just a table but made to appear
        //decent to the manager ;)
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


        //Since we have many infos to show (they are 8 in total), let's just declare a function that does the same thing for each info
        function makeRow(title = "defaultTitle", image = "defaultImage", content = "defaultContent") {

            //Our row, made to center things up
            var row = document.createElement("div");
            row.classList.add("row", "d-flex", "justify-content-center");

            //Our actual row, contains an image, a title and the content inside it
            var row_container = document.createElement("div");
            row_container.classList.add("text-white", "row");

            //Image is just a tiny icon that resembles what the information is all about (e.g. an image of a pointer for the number of clicks)
            var image_title = document.createElement("div");
            image_title.classList.add("col-md-6", "d-flex", "align-items-center", "justify-content-center");

            var image_container = document.createElement("img");
            image_container.style.width = "47px";
            image_container.style.height = "47px";
            image_container.src = image;

            //Title is to tell the manager what info he is watching (e.g. "type of event")
            var title_container = document.createElement("h4");
            title_container.classList.add("text-truncate", "d-flex", "align-items-center", "px-3", "d-lg-block", "d-none");
            title_container.textContent = title;

            image_title.appendChild(image_container);
            image_title.appendChild(title_container);
            row_container.appendChild(image_title);

            var content_container = document.createElement("div");
            content_container.classList.add("col-md-6", "d-flex", "align-items-center", "justify-content-center");

            //Content is the actual info we are showing (e.g. "450" clicks)
            var content_shower = document.createElement("h5");
            content_shower.classList.add("text-truncate");
            content_shower.textContent = content;

            content_container.appendChild(content_shower);
            row_container.appendChild(content_container);
            row.appendChild(row_container);

            return row;
        }

        //This function just makes a hr element to make a gray thin line that acts as a separator
        function getSeparator() {
            var hr = document.createElement("hr");
            hr.classList.add("hr", "hr-blurry");

            return hr;
        }

        //Let's use our function to actually create each row for the infos!

        //Left side of table
        second_row_first_col.appendChild(makeRow("Data:", "utils/calendar-icon.png", this.date));
        second_row_first_col.appendChild(getSeparator());

        second_row_first_col.appendChild(makeRow("Ora:", "utils/clock-icon.png", this.hour));
        second_row_first_col.appendChild(getSeparator());

        second_row_first_col.appendChild(makeRow("Luogo:", "utils/location-icon.png", this.place));
        second_row_first_col.appendChild(getSeparator());

        second_row_first_col.appendChild(makeRow("Clicks:", "utils/click-icon.png", this.numberOfClicks));
        //Left side of table


        var second_row_second_col = document.createElement("div");
        second_row_second_col.classList.add("col-md-6");

        //This hr is special because it has to disappear when the screen is small enough to be a "mobile phone" or a "tablet" unlike the others
        var special_hr = document.createElement("hr");
        special_hr.classList.add("hr", "hr-blurry", "d-md-none", "d-block");

        second_row_first_col.appendChild(special_hr);


        //Right side of table
        second_row_second_col.appendChild(makeRow("Evento:", "utils/event-icon.png", this.eventType));
        second_row_second_col.appendChild(getSeparator());

        second_row_second_col.appendChild(makeRow("Biglietto:", "utils/ticket-icon.png", this.ticket_type));
        second_row_second_col.appendChild(getSeparator());

        second_row_second_col.appendChild(makeRow("Prezzo:", "utils/price-icon.png", this.price + " euro"));
        second_row_second_col.appendChild(getSeparator());

        if (this.discount !== "0") {
            second_row_second_col.appendChild(makeRow("Sconto:", "utils/discount-icon.png", "-" + this.discount + "%"));
        } else {
            second_row_second_col.appendChild(makeRow("Sconto:", "utils/discount-icon.png", "No"));
        }
        //Right side of table


        second_row_container_body_row.appendChild(second_row_first_col);
        second_row_container_body_row.appendChild(second_row_second_col);
        second_row_container_body.appendChild(second_row_container_body_row);
        second_row_container.appendChild(second_row_container_body);

        second_row.appendChild(second_row_container);

        card_body.appendChild(first_row);
        card_body.appendChild(second_row);

        return card_body;
    }

    //Returns the footer of the details card, containing two buttons
    //One closes the details card and sends the manager back to the event card
    //The other makes the manager delete the event
    _getDetailsCardFooter() {
        var card_footer = document.createElement("div");
        card_footer.classList.add("card-footer", "d-flex", "justify-content-between");

        //Blue button to close the details card
        var closeButton = document.createElement("button");
        closeButton.textContent = "Chiudi";
        closeButton.classList.add("btn", "btn-success");
        closeButton.onclick = () => {
        var content = document.getElementById(this.title);
        //Clearing the table
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        this._scrollToElementBottom(this.title);

        };
        //Blue button

        //Yellow button to delete the event
	var deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        deleteButton.classList.add("btn", "btn-warning");
        deleteButton.onclick = () => {
            checkDeleteChoice(this.title);
        }
	//Yellow button

        card_footer.appendChild(closeButton);
        card_footer.appendChild(deleteButton);
        return card_footer;
    }

    //Calls the three methods for "header", "body" and "footer" of the card and puts them together, then attaches them to the details card placeholder
    _showDetailsCard() {
        //The place where our details card has to be placed, they are immediately under their event card and are first invisible
	var content = document.getElementById(this.title);
        // Clearing the previous details card
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

	//Our card container
        var card = document.createElement("div");
        card.classList.add("card", "mt-4");

        //Call the methods
        card.appendChild(this._getDetailsCardHeader());
        card.appendChild(this._getDetailsCardBody());
        card.appendChild(this._getDetailsCardFooter());

	    content.appendChild(card);

    }

    // Returns the header block of the card, this just contains the title of the event and has a
    // different background color based on the type of event it's displaying
    _getHeader() {
        // card-header
        var header = document.createElement("div");
        header.classList.add("card-header");
        
        // Concerti - red
        // Eventi Sportivi - orange
        // Spettacoli Teatrali - green
        // Visite Guidate - purple
        // Everything else - blue
        switch (this.eventType) {
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

        // h4 for the title
        var header_label = document.createElement("h4");
        header_label.classList.add("text-center", "text-white");

        // Set the title
        header_label.textContent = this.title;

        // Add title to card-header
        header.appendChild(header_label);

        return header;
    }
    
    // Returns the body block of the card, this might seem complex and long but it's just to show the
    // event information in a decent manner to the manager (writing html in javascript is not the best!)
    _getBody() {
        // card-body
        var body = document.createElement("div");
        body.classList.add("card-body");

        // Used to contain inside two halves:
        // First half - Image
        // Second half - Event details
        var body_container = document.createElement("div");
        body_container.classList.add("row");

        // First half of the card is used to show the event image
        var first_half_image = document.createElement("div");
        first_half_image.classList.add("col-md-12", "d-flex", "justify-content-center", "pt-1");

        // Image event, a bit of styling, and then we add it to its half
        var image = document.createElement("img");
        image.classList.add("img-fluid", "rounded", "d-block"); // Bootstrap classes for responsive images and centering
        image.style.maxHeight = "200px";
        image.src = "immagini/" + this.image;
        first_half_image.appendChild(image);

        // This half will contain a table-like element that displays the event's information
        var second_half_details = document.createElement("div");
        second_half_details.classList.add("col-md-10", "offset-md-1", "card", "border-0", "pt-2");

        // Container of the table, it will contain elements of the type "row"
        var second_half_container = document.createElement("div");
        second_half_container.classList.add("card-body", "bg-dark", "rounded");

        // Since we need to display many event information, might as well make a function for it!
        function makeRow(title = "defaultTitle", image = "defaultImage", content = "defaultContent") {
            // A row that contains one information of the event
            var row = document.createElement("div");
            row.classList.add("row");

            // A container of the row, used to space text and such.
            var row_container = document.createElement("div");
            row_container.classList.add("text-white", "d-flex", "justify-content-between");

            // This is a container that has an image and some text inside it
            var image_title = document.createElement("span");
            image_title.classList.add("d-flex");

            // This image is just a symbol of the type of information we are displaying
            // e.g. an image of cash for the information "prezzo"
            var image_container = document.createElement("img");
            image_container.style.width = "30px";
            image_container.style.height = "30px";
            image_container.classList.add("pr-2");
            image_container.src = image;


            // Information shower, it contains the label of the information (e.g. Prezzo:)
            var title_container = document.createElement("p");
            title_container.textContent = title;

            // Add both image and text to their container
            image_title.appendChild(image_container);
            image_title.appendChild(title_container);

            // Add the entire information to the row container
            row_container.appendChild(image_title);

            // Actual information container, its needed because the information might be too long
            // and we use "text-truncate" to keep it inside
            var content_container = document.createElement("span");
            content_container.classList.add("text-truncate");

            // Set the content
            content_container.textContent = content;

            // Add it to the container
            row_container.appendChild(content_container);

            // Add the container to the actual row and we're done!!
            row.appendChild(row_container);

            return row;
        }

        // This function just makes an hr element to make a gray thin line that acts as a separator
        function getSeparator() {
            var hr = document.createElement("hr");
            hr.classList.add("hr", "hr-blurry", "text-white");

            return hr;
        }

	// Let's add each information to the second half, using the function we just made
        // Prezzo
        second_half_container.appendChild(makeRow("Prezzo:", "./utils/price-icon.png", this.price + " euro"));

        // Line
        second_half_container.appendChild(getSeparator());

        // Sconto
        if (this.discount != 0) {
            // If there's a discount we print its value
            second_half_container.appendChild(makeRow("Sconto:", "./utils/discount-icon.png", "-" + this.discount + "%"));
        } else {
            // If there's no discount we print "No"
            second_half_container.appendChild(makeRow("Sconto:", "./utils/discount-icon.png", "No"));
        }

        // Line
        second_half_container.appendChild(getSeparator());

        // Data
        second_half_container.appendChild(makeRow("Data:", "./utils/calendar-icon.png", this.date));

        // Line
        second_half_container.appendChild(getSeparator());

        // Luogo
        second_half_container.appendChild(makeRow("Luogo:", "./utils/location-icon.png", this.place));

        // Line
        second_half_details.appendChild(second_half_container);

        // Add everything to the card-body container!
        body_container.appendChild(first_half_image);
        body_container.appendChild(second_half_details);

        // Add the container to its actual card-body, and we're done!!!
        body.appendChild(body_container);
        return body;
    }

    // Returns the footer block of the card (contains a button to open the detail card of the event and a counter of the event clicks)
    _getFooter(){
        var footer = document.createElement("div");
        footer.classList.add("card-footer", "d-flex", "justify-content-between");
 
        //Blue button
        var moreDetails = document.createElement("button");
        moreDetails.classList.add("btn", "btn-primary");
        moreDetails.textContent = "Vedi dettagli";

        moreDetails.onclick = () => {
            this._showDetailsCard();
	    this._scrollToElementTop(this.title);
        };
	//Blue button

        //Event clicks
        var numClicks = document.createElement("div");
	numClicks.classList.add("d-flex", "flex-column", "justify-content-end", "ms-auto");;

        var numClicksShower = document.createElement("p");
        numClicksShower.textContent = this.numberOfClicks + " clicks";
        numClicksShower.classList.add("text-end", "mb-0");

        numClicks.appendChild(numClicksShower);
        //Event clicks
 
        footer.appendChild(moreDetails);
        footer.appendChild(numClicks);
	return footer;
    }

    // Returns the whole Card element, calls the other methods created previously
    getCard() {
        //Card container, inside it: card header, card body and card footer
        var card = document.createElement("div");
        card.classList.add("card", "h-100");

        card.appendChild(this._getHeader());
        card.appendChild(this._getBody());
        card.appendChild(this._getFooter());
        return card;
    }

}

// Function that shows the cards of the events
function mostraCards(datiJson) {
    // div inside the "Eventi.jsp"
    var cardList = document.getElementById("eventiCards");

    //Used to create placeholders for the eventDetails cards
    var eventDetails = document.createElement("div");
    eventDetails.classList.add("row");

    // Clearing the cards before printing
    while (cardList.firstChild) {
        cardList.removeChild(cardList.firstChild);
    }

    // Used as a counter to exactly display three cards per row
    count = 0;

    // A row, it will contain three cards at max
    row = document.createElement("div");
    row.classList.add("row");

    // Iterate for each event received by the api call
    datiJson.forEach(function (elemento) {
        // One of the three columns of the row
        col = document.createElement("div");
        col.classList.add("col-lg", "mb-4", "mt-4");

        // Create a new object of type "event" and use its methods
        var event = new eventCard(
            elemento.titolo,
            elemento.sottotitolo,
            elemento.descrizione,
            elemento.tipologia,
            elemento.luogo,
            elemento.data,
            elemento.ora,
            elemento.image,
            elemento.tipologiaBiglietti,
            elemento.prezzo,
            elemento.sconto,
            elemento.numeroClick
        );

        // Get the entire card block with the event information in it
        // insert it inside the column
        col.appendChild(event.getCard());

        // Attach the new column to the row
        row.appendChild(col);

        // We just added a column, time to add 1 to know when we added three columns!
        count++;

	let eventDetail = document.createElement("div");
        eventDetail.id = elemento.titolo;
        eventDetails.appendChild(eventDetail);

        // If this is the third event card then we need to go under and create a new row!
        if (count % 3 == 0) {
            // Append the full row to the card list
            cardList.appendChild(row);

            // Create a new row
            row = document.createElement("div");
            row.classList.add("row");

	    cardList.appendChild(eventDetails);

	    eventDetails = document.createElement("div");
            eventDetails.classList.add("row");
        }
    });
    // Append the last row/s if not already appended
    if (count % 3 !== 0) {
        cardList.appendChild(row);
        cardList.appendChild(eventDetails);
    }
}
    // Called every time the "/gestioneEventi" page is opened
    // calls the "ottieniEventi" api to get all the events and prints them on the screen using bootstrap cards
function mostraLista() {
    // Creating the url needed to call the api
    var url = getUrl() + '/ottieniEventi';

    // Let's call the api!
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                // Something went wrong! Inform the manager...
                throw new Error('Network response was not ok');
            }
            // Parse JSON data from response
            return response.json();
        })
        .then(function (data) {
            // Let's show the obtained JSON to the browser!
            mostraCards(data);
        })
        .catch(function (error) {
            // Something went wrong! Inform the manager...
            console.error('Error fetching data:', error);
            content.innerHTML = 'Error fetching data.';
        });
}
