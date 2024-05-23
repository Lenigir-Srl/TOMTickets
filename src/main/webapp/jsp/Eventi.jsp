<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <script type="text/javascript" src="js/Eventi.js"></script>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="/html/Metacontent.html"%>
    <title>TOMTickets - eventi</title>
</head>

    <script>
    //Used by "Eventi.js" to only show certain type of events 
    var tipologia = "${tipologia}";
    </script>

    <body onload="mostraLista()">

	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->
	<%--Gray background --%>
	<section class="bg-dark-subtle" style="min-height: 95vh;">

	<!--EVENTI LIST-->
	<%--Used by "Eventi.js"--%>
        <div class="container-fluid align-items-center justify-content-center flex-grow-1" id="eventiCards"></div>
        <!--EVENTI LIST-->


        </section>
	<!--PAGE CONTENT-->

        <!--FOOTER-->
        <%@include file="./Footer.jsp"%>
        <!--FOOTER-->

    </body>
</html>
