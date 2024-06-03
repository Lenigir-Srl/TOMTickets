<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <script type="text/javascript" src="js/Evento.js"></script>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="/html/Metacontent.html"%>
    <title>TOMTickets - evento</title>
</head>

<script>
//Used by "Evento.js" to fetch the backend 
var titolo = "${titolo}";
</script>

<body onload="mostraLista()">

<!--NAVIGATION BAR-->
<%@include file="./Header.jsp"%>
<!--NAVIGATION BAR-->

<!--COOKIE-->
<%@include file="/jsp/Cookie.jsp"%>
<!--COOKIE-->

<!--PAGE CONTENT-->
<%--Gray background --%>
<section class="bg-dark-subtle" style="min-height: 95vh;">

    <!--EVENTO-->
    <%--Used by "Eventi.js"--%>
    <div class="container-fluid align-items-center justify-content-center flex-grow-1" id="eventoCard"></div>
    <!--EVENTO-->

</section>
<!--PAGE CONTENT-->

<!--FOOTER-->
<%@include file="./Footer.jsp"%>
<!--FOOTER-->

</body>
</html>
