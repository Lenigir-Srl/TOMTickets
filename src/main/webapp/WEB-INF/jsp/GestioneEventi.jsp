<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <%-- Include JS file into the page --%>
        <%@include file="../js/GestioneEventi.js"%>
        <%-- Include meta info of the page (favicon and such) --%>
        <%@include file="../../html/Metacontent.html"%>
        <title>TOMTickets - Gestione Eventi</title>
    </head>

    <body onload="mostraLista()">

	<!--NAVIGATION BAR-->
        <%@include file="../../jsp/Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->


        <!--PAGE CONTENT-->
        <section class="bg-dark-subtle" style="min-height: 95vh;">


        <!--SEARCH BAR-->
        <div class="w-75 mx-auto pt-4">

        <div class="card h-100 ">
             <div class="card-body">
                  <div class="input-group container justify-content-center">
                       <div class="row container-fluid">
		            
			    <%-- A search bar to search a particular event can be added by uncommenting this, it has to be implemented though
			    <div class="col-lg-9 d-flex pt-2 container text-center">
		                 <input type="search" class="form-control rounded" placeholder="titolo, sottotitolo, tipo evento..." aria-label="Search" aria-describedby="search-addon" />
                                 <button type="button" class="btn btn-outline-primary">Cerca</button>
	                     </div
			     >--%>
		             <div class="col-lg-3 pt-2 container text-center">
		                 <a class="btn btn-success" href="./creaEvento">Crea Evento</a>
                             </div>
		       </div>
		  </div>
             </div>
	     <div class="card-footer d-flex flex-column flex-md-row justify-content-center align-items-center text-center">
                  <div class="text-center mb-2 mb-md-0">
                       <input class="form-check-input fs-3 me-2" onchange="mostraLista()" type="checkbox" id="isOrdered" autocomplete="off">
                       <label class="form-check-label fs-6" for="isOrdered">Ordina per numero di visualizzazioni</label>
                  </div>
                  <div class="text-start ms-md-auto">
                       <button type="button" onclick="openChartModal()" id="Charts" class="btn btn-primary">Diagrammi</button>
                  </div>
             </div>
        </div>
        </div>


        <!--SEARCH BAR-->

        <!--EVENTI LIST-->
        <div class="container-fluid align-items-center justify-content-center flex-grow-1" id="eventiCards"></div>
        <!--EVENTI LIST-->


        </section>



    <!--FOOTER-->
    <%@include file="../../jsp/Footer.jsp"%>
    <!--FOOTER-->

    <!--COOKIE-->
    <%@include file="../../jsp/Cookie.jsp"%>
    <!--COOKIE-->

    <!--WARNING-->
    <%@include file="../../jsp/Warning.jsp"%>
    <!--WARNING-->

    <!--NOTIFY-->
    <%@include file="../../jsp/Notify.jsp"%>
    <!--NOTIFY-->

    <!--DIAGRAMs-->
    <%@include file="./Charts.jsp"%>
    <!--DIAGRAMS-->

    </body>
</html>
