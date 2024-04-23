
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - errore</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>

	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->
	

        <!--PAGE CONTENT-->

	<%-- Get the error message --%>
        <% String error = (String) request.getAttribute("error"); %>
        
	<div>
	    <% if (error == null){%>
	    	<%-- No errors printed if null --%>
	        <p>Nessun errore riscontrato.</p>
	    <%}else{%>
	    	<%-- Print the error message --%>
	        <p>Errore riscontrato: <%= error %></p>
	    <%}%>
	</div>

	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="./Footer.jsp"%>
	<!--FOOTER-->

    </body>
</html>
