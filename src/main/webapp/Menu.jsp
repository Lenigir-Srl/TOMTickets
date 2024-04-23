<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - menu</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>

	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->

        <div id="content">
            <p> Il menu' che vi offriamo e' stato studiato e pensato in ogni singolo minimo dettaglio dai nostri migliori chef.</p>
            <table class="table">
                <tr>
                    <td>
                        <img style="width: 30%; height: 30%;" src="./immagini/bevande.jpeg">
                    </td>
                    <td>
                        <a id="link" href="./Menu/Bevande.html">Bevande</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img style="width: 30%; height: 30%;" src="./immagini/antipasto.jpeg">
                    </td>
                    <td>
                        <a id="link" href="./Menu/Antipasti.html">Antipasti</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img style="width: 30%; height: 30%;" src="./immagini/primopiatto.jpeg">
                    </td>
                    <td>
                        <a id="link" href="./Menu/Primipiatti.html">Primi Piatti</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img style="width: 30%; height: 30%;" src="./immagini/secondopiatto.jpeg">
                    </td>
                    <td id="td">
                        <a id="link" href="./Menu/Secondipiatti.html">Secondi Piatti</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img style="width: 30%; height: 30%;" src="./immagini/dessert.jpeg">
                    </td>
                    <td>
                        <a id="link" href="./Menu/Dessert.html">Dessert</a>
                    </td>
                </tr>
            </table>
        </div> 
      
	<!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="./Footer.jsp"%>
	<!--FOOTER-->
        
    </body>
</html>
