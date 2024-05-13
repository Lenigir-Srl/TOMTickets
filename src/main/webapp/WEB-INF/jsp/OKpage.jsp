<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="../../html/Metacontent.html"%>
    <title>risto89 - OK</title>
</head>
<body>

<!--NAVIGATION BAR-->
<%@include file="../../jsp/Header.jsp"%>
<!--NAVIGATION BAR-->

<!--PAGE CONTENT-->
<section class="bg-dark-subtle text-center align-items-center justify-content-center d-flex" style="min-height: 95vh;">
    <div class="container pt-5 pb-5 d-flex align-items-center justify-content-center">
        <div class="card w-75">
            <div class="card-header bg-success">
                <%-- Get the title --%>
                <% String title = (String) request.getAttribute("title"); %>
                <% if (title == null){ %>
                    <%-- OK if null --%>
                    <h1 class="text-center text-white">OK!</h1>
                <% } else { %>
                    <%-- Print the OK title --%>
                    <h1 class="text-center text-white"><%= title %></h1>
                <% } %>
            </div>
            <div class="card-body py-3">
                <blockquote class="blockquote">
                    <%-- Get the OK message --%>
                    <% String ok = (String) request.getAttribute("OK"); %>
                    <% if (ok == null){ %>
                        <%-- No message printed if null --%>
                        <p class="text-center">Nessun messagio ricevuto.</p>
                    <% } else { %>
                        <%-- Print the OK message --%>
                        <% String description = (String) request.getAttribute("description"); %>
                        <p class="text-center"><%= ok %></p>
                        <footer class="blockquote-footer text-center"><cite title="Source Title"><%= description %></cite></footer>
                    <% } %>
                </blockquote>
            </div>
            <div class="card-footer align-items-center text-center justify-content-center">
                <% if (title == "Login"){ %>
                    <%-- logout if login was done --%>
                    <a class="mb-1 mt-1 btn btn-danger" href="./logout">Esci dal profilo</a>
		    <a class="mb-1 mt-1 btn btn-primary" href="./profile">Visualizza il profilo</a>
                <% } %>

		<% if (title == "Registrazione") { %>
                    <%-- login if registration --%>
                    <a class="mb-1 mt-1 btn btn-success" href="./login">Accedi al profilo creato</a>
		<% } %>
		<a class="mb-1 mt-1 btn btn-dark" href="./">Vai alla homepage</a>
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

