<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - contatti</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>

	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->
        
	<div id="content">
            <form>
                <div id="center">
                    <input style="width:30%" type="text" placeholder="inserisci il nome">
                    <input style="width:30%" type="text" placeholder="Inserisci il cognome">
                    <input style="width:30%" type="text" placeholder="Inserisci la email">
                </div>
                <br>
                <br>
                <div id="center">
                    <input type="button" value="Invia dati" onclick="window.location.href='Conferma.html'">
                    <input type="reset" value="reset">
                </div>
            </form>
        </div>
      
	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="./Footer.jsp"%>
	<!--FOOTER-->
    </body>
</html>
