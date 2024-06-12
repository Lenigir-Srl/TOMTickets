    class userCard{

       #name;
       #surname;
       #dateOfBirth;
       #phoneNumber;
       #email;
       #username;
       #password;
       #numberOfPurchases;
       #isAdmin;

       constructor(name = "defaultName", surname = "defaultSurname", dateOfBirth = "defaultDateOfBirth", phoneNumber = "defaultPhoneNumber", email = "defaultEmail", username = "defaultUserName", password = "defaultPassword", numberOfPurchases = 0, isAdmin = false) {
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = dateOfBirth;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.username = username;
            this.password = password;
            this.numberOfPurchases = numberOfPurchases;
            if(isAdmin){
                this.isAdmin = "Si";
            }else{
                this.isAdmin = "No";
            }
       }

       //Private method
       _getVariablePrinter(label = "", variable = ""){

            var shower = document.createElement("span");

                   var shower_label = document.createElement("p");
                   shower_label.classList.add("text-center");
                   shower_label.textContent = label;
		   shower_label.style.fontSize = "13px";
            
                   var shower_footer = document.createElement("footer");
                   shower_footer.classList.add("blockquote-footer", "text-center");

                          var shower_footer_cite = document.createElement("cite");
                          shower_footer_cite.textContent = variable;
			 shower_footer_cite.style.fontSize = "15px";

                   shower_footer.appendChild(shower_footer_cite);

            shower.appendChild(shower_label);
            shower.appendChild(shower_footer);

            return shower;
       }

       //Private method
       _createSubRow(label = "", variable = ""){
            var subrow = document.createElement("div");
            subrow.classList.add("row");
            var variablePrinter = this._getVariablePrinter(label, variable);
            subrow.appendChild(variablePrinter);
            return subrow;
       }

       //Private method
       _getHeader(){
            var header = document.createElement("div");
	   header.classList.add("card-header");

	   if(this.isAdmin === "Si"){
                 header.style.backgroundColor = "red";
	   }else{
                 header.style.backgroundColor = "blue";
	   }

           var header_label = document.createElement("h3");

           header_label.classList.add("text-center", "text-white");
	   header_label.textContent = this.username;

	   header.appendChild(header_label);

            return header;

       }

       //Private method
       _getBody(){
           var body = document.createElement("div");
	   body.classList.add("card-body");
         

           var blockquote = document.createElement("div");
	   blockquote.classList.add("blockquote");

           var blockquote_row = document.createElement("div");
           blockquote_row.classList.add("row");

           //First blockquote column;
	  
           var blockquote_col = document.createElement("div");
           blockquote_col.classList.add("col");
               
               //First subrow;
               var name_subrow = this._createSubRow("Nome", this.name);
	       blockquote_col.appendChild(name_subrow);
	       //First subrow;


	       //Second subrow;
               var surname_subrow = this._createSubRow("Cognome", this.surname);
               blockquote_col.appendChild(surname_subrow);
               //Second subrow;


	       //Third subrow;
               var dateOfBirth_subrow = this._createSubRow("Data di Nascita", this.dateOfBirth);
               blockquote_col.appendChild(dateOfBirth_subrow);
               //Third subrow;
	 
               //Fourth subrow;
	       var phoneNumber_subrow = this._createSubRow("Numero di Telefono", this.phoneNumber);
	       blockquote_col.appendChild(phoneNumber_subrow);
               //Fourth subrow;               


	  blockquote_row.appendChild(blockquote_col);
	  blockquote.appendChild(blockquote_row);
	  //First blockquote column;
	  
	  //Second blockquote column;
           
           blockquote_col = document.createElement("div");
           blockquote_col.classList.add("col");

                //First subrow;
		var username_subrow = this._createSubRow("Username", this.username);
                blockquote_col.appendChild(username_subrow);
                //First subrow;


                //Second subrow;
                var email_subrow = this._createSubRow("Indirizzo email", this.email);
                blockquote_col.appendChild(email_subrow);
                //Second subrow;


                //Third subrow;
                var password_subrow = this._createSubRow("Password", this.password);
		blockquote_col.appendChild(password_subrow);
                //Third subrow;
                  
                //Fourth subrow;
                var isAdmin_subrow = this._createSubRow("Admin", this.isAdmin);
                blockquote_col.appendChild(isAdmin_subrow);
                //Fourth subrow;               


           blockquote_row.appendChild(blockquote_col);
           blockquote.appendChild(blockquote_row);
	  //Second blockquote column; 
	  
           //Number of purchases;
	  
	  var numberOfPurchasesContainer = this._getVariablePrinter("Numero di acquisti", this.numberOfPurchases);

	  blockquote.appendChild(numberOfPurchasesContainer);
           //Number of purchases;



	  body.appendChild(blockquote);
	  return body;

       }

       getCard(){

	   var card = document.createElement("div");
	   card.classList.add("card", "h-100");
            
           var card_header = document.createElement("div");
	   card_header.classList.add("card-header");

	   card.appendChild(this._getHeader());
           card.appendChild(this._getBody());

           return card;
       }


    }



    // Parsing JSON data and displaying it in a table
    function mostraProfili(datiJson) {

       var check = document.getElementById("isOrdered");
       if (check.checked) {
           datiJson.sort(function(a, b) {
               return a.numeroAcquisti < b.numeroAcquisti;
           });
       }

       cardList = document.getElementById("profiliCards");
       
       //clean the list before printing it
       while(cardList.firstChild){
           cardList.removeChild(cardList.firstChild);
       }

       count = 0;
       

       row = document.createElement("div");
       row.classList.add("row");


       datiJson.forEach(function(elemento) {
           col = document.createElement("div");
	   col.classList.add("col-lg", "mb-4", "mt-4");

	   var user = new userCard(elemento.nome, elemento.cognome, elemento.birthDate, elemento.phoneNumber, elemento.email, elemento.username, elemento.password, elemento.numeroAcquisti, elemento.isAdmin);

	   col.appendChild(user.getCard());

           row.appendChild(col);
	  
           count = count + 1;

	   if(count%3 == 0){
                cardList.appendChild(row);
		row = document.createElement("div");
		row.classList.add("row");
	   }
        });

	// Append the last row if its not already appended
            if(count % 3 !== 0){
                cardList.appendChild(row);
            }
    }

    function mostraLista(){

        var jsessionid = '<%= request.getSession().getId() %>';  // Get session ID from the server
        let url = getUrl() + '/ottieniProfili';
        url += '?jsessionid=' + jsessionid;
           fetch(url)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse JSON data from response
                })
                .then(function(data) {
                    // Assuming data is an object representing EventoBean

                    mostraProfili(data);
                })
                .catch(function(error) {
                    console.error('Error fetching data:', error);
                    content.innerHTML = 'Error fetching data.';
                });

    }

