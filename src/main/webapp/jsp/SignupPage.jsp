<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <script type"text/javascript" src="js/Signuppage.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TOMTickets - signup</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <!--NAVIGATION BAR-->
    <%@include file="/jsp/Header.jsp"%>
    <!--NAVIGATION BAR-->

    <!--PAGE CONTENT-->
    <section class="bg-dark-subtle text-center align-items-center justify-content-center d-flex" style="min-height: 95vh;">
        <div class="container py-4 h-100">
            <div class="card" style="border-radius: 1rem;">
                <div class="card-body p-4 p-lg-5 text-black text-center">
                    <form id="signupForm" action="./signup" method="POST">
                        <div class="d-flex align-items-center mb-3 pb-1">
                            <span class="h2 fw-bold mb-0">TOMTickets</span>
                        </div>
                        <h5 class="h3 fw-normal mb-3" style="letter-spacing: 1px;">Registra un nuovo profilo</h5>
                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                    <input type="text" id="nome" name="nome" class="form-control border border-dark" required />
                                    <label class="form-label" for="nome">Nome</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                    <input type="text" id="cognome" name="cognome" class="form-control border border-dark" required />
                                    <label class="form-label" for="cognome">Cognome</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                    <input type="date" id="dataNascita" name="dataNascita" class="form-control text-center border border-dark" required />
                                    <label class="form-label" for="dataNascita">Data di nascita</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                    <input type="tel" id="telefono" name="telefono" class="form-control border border-dark" required />
                                    <label class="form-label" for="telefono">Numero di telefono</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-outline mb-2">
                            <input type="email" id="email" name="email" class="form-control border border-dark" required />
                            <label class="form-label" for="email">Indirizzo Email</label>
                        </div>
                        <div class="row">
                            <div class="form-outline mb-2">
                                <input type="text" id="username" name="username" class="form-control border border-dark" required />
                                <label class="form-label" for="username">Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                    <input type="password" id="password" name="password" class="form-control border border-dark" required />
                                    <label class="form-label" for="password">Password</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                    <input type="password" id="ripetiPassword" name="ripetiPassword" class="form-control border border-dark" required />
                                    <label class="form-label" for="ripetiPassword">Ripeti la password</label>
                                </div>
                            </div>
                        </div>
                        <div class="pt-2 pb-3 text-center container justify-content-center align-items-center">
                            <button type="button" onclick="clearFields()" class="btn btn-warning btn-lg mb-2">Cancella</button>
                            <button type="submit" onclick="return validateForm()" class="btn btn-primary btn-lg mb-2">Registrati</button>
                        </div>
                    </form>
                    <div class="d-flex justify-content-center align-items-center text-center">
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

    <%--Existing username modal info--%>
    <% boolean existingUsername = false; %>
    <% if(request.getAttribute("existingUsername") != null){ %>
    <%   existingUsername = (boolean) request.getAttribute("existingUsername"); %>
    <% } %>
    <% if(existingUsername == true){ %>
    <%--Show the modal--%>
         <script>
	 document.getElementById("nome").value = "<%= request.getAttribute("name") %>";
	 document.getElementById("cognome").value = "<%= request.getAttribute("surname") %>";
	 document.getElementById("dataNascita").value = "<%= request.getAttribute("dateOfBirth") %>";
	 document.getElementById("email").value = "<%= request.getAttribute("email") %>";
	 document.getElementById("telefono").value = "<%= request.getAttribute("phoneNumber") %>";
	 document.getElementById("username").value = "<%= request.getAttribute("username") %>";
	 document.getElementById("password").value = "<%= request.getAttribute("password") %>";
	 document.getElementById("ripetiPassword").value = "<%= request.getAttribute("password") %>";
	 setTimeout(existingUsername, 100);
	 </script>
    <% } %>

</body>
</html>

