class eventCard {
    // All the attributes of the event
    title;
    place;
    date;
    eventType;
    image;
    price;
    discount;

    // Constructor for the class, we set everything to have a default value of the type "default<Name>"
    constructor(
        title = "defaultTitle",
        place = "defaultPlace",
        eventType = "defaultType",
        date = "defaultDate",
        image = "...",
        price = "defaultPrice",
        discount = "defaultDiscount",
    ) {
        this.title = title;
        this.place = place;
        this.eventType = eventType;
        this.date = date;
        this.image = image;
        this.price = price;
        this.discount = discount;
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

    // Returns the body block of the card, this might seem complex and long but its just to show the
    // event information in a decent manner to the user (writing html in javascript is not the best!)
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

            // Add the container to the actual row, and we're done!!
            row.appendChild(row_container);

            return row;
        }


        // This function just makes a hr element to make a gray thin line that acts as a separator
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
        if (this.discount !== 0) {
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
    // Returns the footer block of the card (contains just a button to open event page)
    _getFooter() {
        // card-footer
        var footer = document.createElement("div");
        footer.classList.add("card-footer", "d-flex", "justify-content-center");

        // Blue button
        var moreDetails = document.createElement("a");
        moreDetails.classList.add("btn", "btn-primary");
        moreDetails.textContent = "Vedi dettagli";

        const url = getUrl() + '/evento?titolo=';
        moreDetails.href = encodeURI(url + this.title);
        // Blue button

        footer.appendChild(moreDetails);
        return footer;
    }

    // Returns the whole Card element, calls the other methods created previously
    getCard() {
        //Card contatiner, inside it: card header, card body and card footer
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
            elemento.luogo,
            elemento.tipologia,
            elemento.data,
            elemento.image,
            elemento.prezzo,
            elemento.sconto
        );


        // Get the entire card block with the event information in it
        // insert it inside the column
        col.appendChild(event.getCard());

        // Attach the new column to the row
        row.appendChild(col);

        // We just added a column, time to add 1 to know when we added three columns!
        count = count + 1;

        // If this is the third event card then we need to go under and create a new row!
        if (count % 3 == 0) {
            // Append the full row to the card list
            cardList.appendChild(row);

            // Create a new row
            row = document.createElement("div");
            row.classList.add("row");
        }

        // Append the last row/s if not already appended
        if (count % 3 !== 0) {
            cardList.appendChild(row);
            cardList.appendChild(eventDetails);
        }
    });
}

// Called every time the "/eventi" page is opened
function mostraLista() {
    // User might want to view all the events of a specific type
    // We use this variable to write a GET request and get only those events
    // tipologia = "${tipologia}"   <--- This line is inside "Eventi.jsp"

    // Creating the url needed to call the api
    var url = getUrl() + '/ottieniEventi';
    if (tipologia !== "") {
        // Add the specific type of event request (GET)
        url += '?tipologia=' + tipologia;
    }

    // Let's call the api!
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                // Something went wrong! Inform the user...
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
            // Something went wrong! Inform the user...
            console.error('Error fetching data:', error);
            content.innerHTML = 'Error fetching data.';
        });
}

