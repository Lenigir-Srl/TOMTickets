<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - visualizza utenti</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">




    <script>

//HELLO FELLOW TRAVELLER!!!!!!
//
//Be carefull down there, its very scary.
//Also dont check the "_getBody" method of the "userCard" class please. Its for your mental care.

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

       //constructor(name = " ", surname = " ", dateOfBirth = " ", phoneNumber = " ", email = " ", username = " ", password = " ", numberOfPurchases = 0, isAdmin = false) {
       constructor(name, surname, dateOfBirth, phoneNumber, email, username, password, numberOfPurchases, isAdmin) {
            this.name = name;
	    this.surname = surname;
	    this.dateOfBirth = dateOfBirth;
	    this.phoneNumber = phoneNumber;
	    this.email = email;
	    this.username = username;
	    this.password = password;
	    this.numberOfPurchases = numberOfPurchases;
	    this.isAdmin = isAdmin;
       }

       //Private method
       _getVariableShower(label = "", variable = ""){

            var shower = document.createElement("span");

                   var shower_label = document.createElement("p");
                   shower_label.classList.add("text-center");
                   shower_label.textContent = label;
		   shower_label.style.fontSize = "15px";
            
                   var shower_footer = document.createElement("footer");
                   shower_footer.classList.add("blockquote-footer");
                   shower_footer.classList.add("text-center");

                          var shower_footer_cite = document.createElement("cite");
                          shower_footer_cite.textContent = variable;
			  shower_footer_cite.style.fontSize = "18px";

                   shower_footer.appendChild(shower_footer_cite);

            shower.appendChild(shower_label);
            shower.appendChild(shower_footer);

            return shower;
       }

       //Private method
       _getHeader(){
            var header = document.createElement("div");
	    header.classList.add("card-header");

	    if(this.isAdmin){
                 header.classList.add("bg-danger");
	    }else{
                 header.classList.add("bg-primary");
	    }

            var header_label = document.createElement("h3");

            header_label.classList.add("text-center");
	    header_label.classList.add("text-white");
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
	          var blockquote_subrow = document.createElement("div");
	          blockquote_subrow.classList.add("row");
 
                       var nameContainer = this._getVariableShower("Nome", this.name);

	          blockquote_subrow.appendChild(nameContainer);
	          blockquote_col.appendChild(blockquote_subrow);
	          //First subrow;


	          //Second subrow;
                  blockquote_subrow = document.createElement("div");
                  blockquote_subrow.classList.add("row");

                        var surnameContainer = this._getVariableShower("Cognome", this.surname);

                  blockquote_subrow.appendChild(surnameContainer);
	          blockquote_col.appendChild(blockquote_subrow);
                  //Second subrow;


	          //Third subrow;
                  blockquote_subrow = document.createElement("div");
                  blockquote_subrow.classList.add("row");

                         var dateOfBirthContainer = this._getVariableShower("Data di Nascita", this.dateOfBirth);

                  blockquote_subrow.appendChild(dateOfBirthContainer);
                  blockquote_col.appendChild(blockquote_subrow);
                  //Third subrow;
		  
                  //Fourth subrow;
                  blockquote_subrow = document.createElement("div");
                  blockquote_subrow.classList.add("row");

                         var phoneNumberContainer = this._getVariableShower("Numero di Telefono", this.phoneNumber);

                  blockquote_subrow.appendChild(phoneNumberContainer);
	          blockquote_col.appendChild(blockquote_subrow);
                  //Fourth subrow;               


	   blockquote_row.appendChild(blockquote_col);
	   blockquote.appendChild(blockquote_row);
	   //First blockquote column;
	   
	   //Second blockquote column;
           
           blockquote_col = document.createElement("div");
           blockquote_col.classList.add("col");

                  //First subrow;
                  blockquote_subrow = document.createElement("div");
                  blockquote_subrow.classList.add("row");

                          var usernameContainer = this._getVariableShower("Username", this.username);

                  blockquote_subrow.appendChild(usernameContainer);
                  blockquote_col.appendChild(blockquote_subrow);
                  //First subrow;


                  //Second subrow;
                  blockquote_subrow = document.createElement("div");
                  blockquote_subrow.classList.add("row");

                          var emailContainer = this._getVariableShower("Email", this.email);

                  blockquote_subrow.appendChild(emailContainer);
                  blockquote_col.appendChild(blockquote_subrow);
                  //Second subrow;


                  //Third subrow;
                  blockquote_subrow = document.createElement("div");
                  blockquote_subrow.classList.add("row");

                          var passwordContainer = this._getVariableShower("Password", this.password);

                  blockquote_subrow.appendChild(passwordContainer);
                  blockquote_col.appendChild(blockquote_subrow);
                  //Third subrow;
                  
                  //Fourth subrow;
                  blockquote_subrow = document.createElement("div");
                  blockquote_subrow.classList.add("row");

                          var isAdminContainer = this._getVariableShower("Admin", this.isAdmin);

                  blockquote_subrow.appendChild(isAdminContainer);
                  blockquote_col.appendChild(blockquote_subrow);
                  //Fourth subrow;               


           blockquote_row.appendChild(blockquote_col);
           blockquote.appendChild(blockquote_row);
	   //Second blockquote column; 
	   
           //Number of purchases;
	   
	   var numberOfPurchasesContainer = this._getVariableShower("Numero di acquisti", this.numberOfPurchases);

	   blockquote.appendChild(numberOfPurchasesContainer);
           //Number of purchases;



	   body.appendChild(blockquote);
	   return body;

       }

       getCard(){

	    var card = document.createElement("div");
	    card.classList.add("card");
	    card.classList.add("h-100");
            
            var card_header = document.createElement("div");
	    card_header.classList.add("card-header");

	    card.appendChild(this._getHeader());
            card.appendChild(this._getBody());

            return card;
       }


    }



    // Parsing JSON data and displaying it in a table
    function mostraLista() {
       var datiJson = JSON.parse( '${profiliJson}' ); 

       var check = document.getElementById("isOrdered");
       if (check.checked) {
           datiJson.sort(function(a, b) {
               return a.numeroAcquisti < b.numeroAcquisti;
           });
       }

       cardList = document.getElementById("profiliCards");
       
       while(cardList.firstChild){
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
    </script>   


    </head>
    <body onload="mostraLista()">

	<!--NAVIGATION BAR-->
        <%@include file="../../jsp/Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->
    
    <section class="bg-dark-subtle" style="min-height: 95vh;">
    <div class="container-fluid align-items-center justify-content-center flex-grow-1" id="profiliCards"></div>
    </section>


    <div class="table-responsive" style="padding-top: 2%; padding-left: 2%; padding-right: 2%">

        <table class="table">
          <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Data di Nascita</th>
            <th>Email</th>
            <th>Numero di Telefono</th>
            <th>Username</th>
            <th>Password</th>
            <th>Numero di Acquisti</th>
            <th>Admin</th>
          </tr>
          </thead>
          <tbody id="listaProfili"></tbody>

        </table>

        <label class="form-check-label" for="isOrdered">Ordina per numero di acquisti</label>
        <input type="checkbox" id="isOrdered" onclick="mostraLista()" autocomplete="off">

	</div>



	<!--PAGE CONTENT-->


  <!--FOOTER-->
        <%@include file="../../jsp/Footer.jsp"%>
  <!--FOOTER-->
 
  <!--COOKIE-->
        <%@include file="../../jsp/Cookie.jsp"%>
  <!--COOKIE-->

  <!--WARNING-->
        <%@include file="../../jsp/Warning.jsp"%>
  <!--WARNING-->

    </body>
</html>
