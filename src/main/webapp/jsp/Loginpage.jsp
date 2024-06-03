<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <script type="text/javascript" src="js/Loginpage.js"></script>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="/html/Metacontent.html"%>
    <title>TOMTickets - Log In</title>
</head>
<body>

    <!--HEADER-->
    <%@include file="/jsp/Header.jsp"%>
    <!--HEADER-->

    <!--PAGE CONTENT-->
    <section class="bg-dark-subtle text-center align-items-center justify-content-center d-flex" style="min-height: 95vh;">   
        <div class="container py-4 h-100">
            <div class="card" style="border-radius: 1rem;">
                <div class="card-body p-4 p-lg-5 text-black text-center">

                    <form id="loginForm" action="./login" method="POST">

                        <div class="d-flex align-items-center mb-3 pb-1">
                            <i class="fas fa-cubes fa-2x me-3"></i>
                            <span class="h2 fw-bold mb-0">TOMTickets</span>
                        </div>

                        <h5 class="h3 fw-normal mb-3 pb-3">Accedi nel tuo profilo</h5>

                        <div class="form-outline mb-4">
                            <input type="text" id="username" name="username" class="form-control form-control-lg border border-dark" required />
                            <label class="form-label" for="email">Username</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="password" id="password" name="password" class="form-control form-control-lg border-dark" required />
                            <label class="form-label" for="password">Password</label>
                        </div>

                        <div class="pt-2 pb-3 text-center">
                            <button class="btn btn-warning btn-lg mb-2" onclick="clearFields()" type="button">Cancella</button>
                            <button class="btn btn-success btn-lg mb-2" onclick="return validateForm()" type="submit">Accedi</button>
                        </div>

                    </form>

                    <div class="d-flex justify-content-center align-items-center">
                        <div class="form-check form-switch align-items-center">
                            <input class="form-check-input fs-3" type="checkbox" id="flexSwitchCheckDefault" onchange="makePasswordVisible()" autocomplete="off">
                            <label class="form-check-label fs-5" for="flexSwitchCheckDefault">Mostra la password</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section> 
    <!--PAGE CONTENT-->
    
    <!--FOOTER-->
    <%@include file="/jsp/Footer.jsp"%>
    <!--FOOTER-->
    
    <!--COOKIE-->
    <%@include file="/jsp/Cookie.jsp"%>
    <!--COOKIE-->

    <!--NOTIFICATION-->
    <%@include file="/jsp/Notify.jsp"%>
    <!--NOTIFICATION-->
    
    <%--Wrong credentials modal info--%>
    <% boolean wrongCredentials = false; %>
    <% if(request.getAttribute("wrongCredentials") != null){ %>
    <%   wrongCredentials = (boolean) request.getAttribute("wrongCredentials"); %>
    <% } %>
    <% if(wrongCredentials == true){ %>
    <%--Show the modal--%>
    <script>
        document.getElementById("username").value = "<%= request.getAttribute("username") %>";
        document.getElementById("password").value = "<%= request.getAttribute("password") %>";
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(showErrorModal(
                "Credenziali errate", 
                "Lo username e la password non corrispondono a nessun profilo esistente.<br>Controlla che tu abbia inserito le credenziali corrette per accedere nel tuo profilo."), 100);
        });
    </script>
    <% } %>

</body>
</html>

