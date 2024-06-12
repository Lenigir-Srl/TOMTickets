<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<!-- Cookie encorder -->
<%@include file="/js/EncodeToken.js"%>

<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/Header.js"></script>

<%-- Include CSS file into the page --%>
<link rel="stylesheet" href="css/Header.css">

<nav class="navbar navbar-expand-lg navbar-light bg-light-subtle">
    <div class="container-fluid">
        <a class="navbar-brand" href="./"><img src="utils/TOMTickets.png" id="navbarLogo">  TOMTickets</a>
        <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
	    <ul class="nav navbar-nav">
                <li class="navbar-item d-flex">
		    <button class="me-3 mb-1 mt-1 ms-auto btn navbar-btn border border-dark" onclick="switchSound()" id="soundButton" >
                        <img alt="  " id="soundIcon">    
		    </button>
		</li>
		<li class="navbar-item d-flex">
		    <a class="me-3 mb-1 mt-1 ms-auto btn navbar-btn text-white" onclick="showAboutUs()" id="aboutUsButton">About Us</a>
		</li>
		<li class="navbar-item d-flex">
		    <a class="me-3 mb-1 mt-1 ms-auto btn navbar-btn text-white" onclick="showCookieConsent()" id="cookieButton">Privacy</a>
		</li>
		<li class="nav-item mb-1 mt-1 dropdown d-flex">
                    <a class="me-3 ms-auto dropdown-toggle btn btn-warning text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Eventi</a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style="position: absolute; !important;">
                        <li><a class="dropdown-item" href="./eventi?tipologia=Concerti">Concerti</a></li>
                        <li><a class="dropdown-item" href="./eventi?tipologia=SpettacoliTeatrali">Spettacoli teatrali</a></li>
                        <li><a class="dropdown-item" href="./eventi?tipologia=EventiSportivi">Eventi sportivi</a></li>
                        <li><a class="dropdown-item" href="./eventi?tipologia=VisiteGuidate">Visite guidate</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="./eventi">Visualizza tutti</a></li>
                    </ul>
                </li>
		<% String name = (String) session.getAttribute("username"); %>
                <% if(name == null){ %>
                    <li class="navbar-item d-flex">
		        <a class="me-3 mb-1 mt-1 ms-auto btn btn-primary navbar-btn" href="./signup">Registrati</a>
		    </li>
                    <li class="navbar-item d-flex">
		        <a class="me-3 mb-1 mt-1 ms-auto btn btn-success navbar-btn" href="./login">Accedi</a>
		    </li>
                <% }else{ %>
		    <% boolean isAdmin = (boolean) session.getAttribute("isAdmin"); %>
		    <% if(isAdmin){ %>
                        <li class="nav-item d-flex">
			    <a class="me-3 mb-1 mt-1 ms-auto btn bg-success text-white" href="./visualizzaProfili">Visualizza Utenti</a>
			</li>
                        <li class="nav-item d-flex">
			    <a class="me-3 mb-1 mt-1 ms-auto btn text-white" id="gestioneEventiButton" href="./gestioneEventi">Gestione Eventi</a>
			</li>
		    <% } %>
                    <li class="navbar-item d-flex">
		        <a class="me-3 mb-1 mt-1 ms-auto btn btn-primary navbar-btn" href="./profile">Profilo</a>
		    </li>
                    <li class="navbar-item d-flex">
		        <a class="me-3 mb-1 mt-1 ms-auto btn btn-danger navbar-btn" href="./logout">Esci</a>
		    </li>
                <% } %>
	    </ul>
        </div>
    </div>
</nav>

