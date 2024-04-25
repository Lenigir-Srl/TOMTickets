<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
   
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - log in</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>


    <body>

        <!--HEADER-->
	<%@include file="./Header.jsp"%>
	<!--HEADER-->

        <!--PAGE CONTENT-->
        

	<div> Perfavore inserisci username e password: </div>

	<div>
            <form action="./login" method="post">
                <input type="text" name="name" label="Inserisci lo username" required>
                <input type="password" name="password" label="Inserisci la password" required>
                <input type="submit" value="Fai il login">
            </form>
        </div>
      
	<!--PAGE CONTENT-->
	
        <!--FOOTER-->
	<%@include file="./Footer.jsp"%>
	<!--FOOTER-->

    </body>
</html>
