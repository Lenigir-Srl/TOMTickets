<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - profilo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>

	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->
   
   	<%-- "name" variable defined in "Header.jsp" --%>
	<div>
	    <% if (name == null){%>
	        <p>Non hai ancora fatto il login!</p>
	<%}else{%>
		<p>Ciao <%= name %>! Benvenuto nel tuo profilo.</p>
	<%}%>
	</div>

	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="./Footer.jsp"%>
        <!--FOOTER-->

    </body>
</html>
