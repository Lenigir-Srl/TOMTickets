<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <%@include file="../js/AcquistaEvento.js"%>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="../../html/Metacontent.html"%>
    <title>risto89 - acquista evento</title>
</head>

<script>
//Used by "AcquistaEvento.js" to fetch the backend 
var titolo = "${titolo}";
var numeroAcquisti = ${numeroAcquisti};
</script>

<body onload="mostraLista()">

<!--NAVIGATION BAR-->
<%@include file="../../jsp/Header.jsp"%>
<!--NAVIGATION BAR-->


<!--PAGE CONTENT-->
<section class="bg-dark-subtle text-center align-items-center justify-content-center d-flex" style="min-height: 95vh;">
    <div class="container pt-5 pb-5 d-flex align-items-center justify-content-center">
        <div class="card w-85">
            <div class="card-header bg-primary">
                <h1 class="text-center text-white">Stai acquistando:</h1>
            </div>
            <div class="card-body py-3">
                <blockquote class="blockquote">
		    <div class="row">
                        <div class="col-md">
                            <div class="row">
                                <p class="text-center">Titolo</p>
                                <footer class="blockquote-footer text-center" id="title"></footer>
                            </div>
                            <div class="row">
                                <p class="text-center">Sottotitolo</p>
                                <footer class="blockquote-footer text-center" id="subtitle"></footer>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="row">
                                <p class="text-center">Luogo</p>
                                <footer class="blockquote-footer text-center" id="place"></footer>
                            </div>
                            <div class="row">
                                <p class="text-center">Data</p>
                                <footer class="blockquote-footer text-center" id="date"></footer>
                            </div>
                        </div>
		    </div>
		    <div class="row">
			<div class="col-md">
                                <p class="text-center">Prezzo</p>
                                <footer class="blockquote-footer text-center" id="price"></footer>
                        </div>
			<div class="col-md">
				<p class="text-center">Sconto</p>
                                <footer class="blockquote-footer text-center" id="discount"></footer>
			</div>
                    </div>
                </blockquote>
            </div>

            <!-- BUY BUTTON -->
            <div class="card-footer">
                    <form action="/risto89-1.0/terminaacquisto" id="acquista" method="POST">
                        <div class="row">
			    <label class="text-center">Numero di biglietti: </p>
                            <input type="number" id="quantita" name="quantita" class="form-control text-center"  onchange="calcolaPrezzo()" min="1" max="100" value="1" required> 
			</div>
			<div class="row">
                            <p class="text-center">Prezzo totale: </p>
                            <p id="finalPrice"></p>
			</div>
			<div class="row">
			    <p id="freeTickets" style="color:red;"class=></p>
			</div>
			<div class="justify-content-between d-flex">
			    <button class="btn btn-primary" onClick="window.history.back()">Indietro</button>
			    <button onClick="return validateForm()" type="submit" class="btn btn-success">Acquista</button>
                        </div>
		     </form>
            </div>
        </div>
    </div>
</section>

<!--PAGE CONTENT-->


<!--FOOTER-->
<%@include file="../../jsp/Footer.jsp"%>
<!--FOOTER-->

<!--COOKIE-->
<%@include file="../../jsp/Cookie.jsp"%>
<!--COOKIE-->

<!--NOTIFY-->
<%@include file="../../jsp/Notify.jsp"%>
<!--NOTIFY-->

</body>
</html>
