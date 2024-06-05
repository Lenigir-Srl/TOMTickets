<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <%@include file="../js/VisualizzaProfili.js"%>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="../../html/Metacontent.html"%>
    <title>TOMTickets - Visualizza Utenti</title>
</head>
<body onload="mostraLista()">

    <!--NAVIGATION BAR-->
    <%@include file="../../jsp/Header.jsp"%>
    <!--NAVIGATION BAR-->

    <!--PAGE CONTENT-->
    <section class="bg-dark-subtle" style="min-height: 95vh;">

        <!--SEARCH BAR-->
        <div class="w-75 mx-auto pt-4">
            <div class="card h-100">
                <div class="card-body">
                    <%-- A search bar to search a particular event can be added by uncommenting this, it has to be implemented though
		    <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="username, nome, cognome..." aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-primary">Cerca</button>
                    </div>
		    --%>
                </div>
                <div class="card-footer d-flex justify-content-center align-items-center text-center">
                    <input class="form-check-input fs-3 me-4" onchange="mostraLista()" type="checkbox" id="isOrdered" autocomplete="off">
                    <label class="form-check-label fs-6" for="isOrdered">Ordina per numero di acquisti</label>
                </div>
            </div>
        </div>
        <!--SEARCH BAR-->

        <!--USERS LIST-->
        <div class="container-fluid align-items-center justify-content-center flex-grow-1" id="profiliCards"></div>
        <!--USERS LIST-->

    </section>
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

