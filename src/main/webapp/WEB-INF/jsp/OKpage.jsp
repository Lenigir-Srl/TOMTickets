<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>risto89 - OK</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>

        <!--NAVIGATION BAR-->
        <%@include file="../../jsp/Header.jsp"%>
        <!--NAVIGATION BAR-->


        <!--PAGE CONTENT-->
        <section class="vh-10 justify-content-center align-items-center bg-dark-subtle">
        <div class="container pt-5 pb-5 d-flex align-items-center justify-content-center" style="height:80vh;">
            <div class="card w-75">
                <div class="card-header bg-success">
                    <h1 class="text-center text-white">OK!</h1>
                </div>
                <div class="card-body py-3">
                    <blockquote class="blockquote">
                        <%-- Get the OK message --%>
                        <% String ok = (String) request.getAttribute("OK"); %>
                        <% if (ok == null){%>
                            <%-- No message printed if null --%>
                            <p class="text-center">Nessun messagio ricevuto.</p>
                        <%}else{%>
                            <%-- Print the OK message --%>
                            <% String description = (String) request.getAttribute("description"); %>
			    <p class="text-center"><%= ok %></p>
                            <footer class="blockquote-footer text-center"><cite title="Source Title"><%= description %></cite></footer>
                        <%}%>
                    </blockquote>
                </div>
            </div>
        </div>
        </section>
        <!--PAGE CONTENT-->


        <!--FOOTER-->
        <%@include file="../../jsp/Footer.jsp"%>
        <!--FOOTER-->

        <!--COOKIE-->
        <%@include file="../../jsp/Cookie.jsp"%>
        <!--COOKIE-->

    </body>
</html>
