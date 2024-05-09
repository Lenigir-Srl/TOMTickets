<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
    <%-- Include JS file into the page --%>
    <script type"text/javascript" src="js/Signuppage.js"></script>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TOMTickets - signup</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<!--NAVIGATION BAR-->
<%@include file="/jsp/Header.jsp"%>
<!--NAVIGATION BAR-->

<!--PAGE CONTENT-->

<section class="vh-10 bg-dark-subtle">
  <div class="container py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block justify-content-center align-items-center">
    <img src="https://static.sky.it/images/skytg24/it/spettacolo/musica/2022/05/25/vasco-rossi-concerto-milano-foto/10-vasco-Getty.jpg.transform/gallery-vertical-tablet-2x/b45366526b4bdf13c81496ee26370f1c03101b7b/img.jpg"
        alt="login form" class="img-fluid vertical-centered-image" style="border-radius: 1rem 0 0 1rem; max-height: 80vh; width:auto;" />
</div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body text-black text-center">

                <form id="signupForm" action="./signup" method="POST" onsubmit="return validateForm()">
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h2 fw-bold mb-0">TOMTickets</span>
                  </div>

                  <h5 class="fw-normal mb-3" style="letter-spacing: 1px;">Registra un nuovo profilo</h5>
                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <div data-mdb-input-init class="form-outline">
                        <input type="text" id="nome" name="nome" class="form-control" required />
                        <label class="form-label" for="nome">Nome</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div data-mdb-input-init class="form-outline">
                        <input type="text" id="cognome" name="cognome" class="form-control" required />
                        <label class="form-label" for="cognome">Cognome</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <div data-mdb-input-init class="form-outline">
                        <input type="date" id="dataNascita" name="dataNascita" class="form-control" required />
                        <label class="form-label" for="dataNascita">Data di nascita</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div data-mdb-input-init class="form-outline">
                        <input type="tel" id="telefono" name="telefono" class="form-control" required />
                        <label class="form-label" for="telefono">Numero di telefono</label>
                      </div>
                    </div>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-2">
                    <input type="email" id="email" name="email" class="form-control" required />
                    <label class="form-label" for="email">Indirizzo Email</label>
                  </div>

                  <div class="row">
                    <div data-mdb-input-init class="form-outline mb-2">
                      <input type="text" id="username" name="username" class="form-control" required />
                      <label class="form-label" for="username">Username</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-2">
                      <div data-mdb-input-init class="form-outline">
                        <input type="password" id="password" name="password" class="form-control" required />
                        <label class="form-label" for="password">Password</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-2">
                      <div data-mdb-input-init class="form-outline">
                        <input type="password" id="ripetiPassword" name="ripetiPassword" class="form-control" required />
                        <label class="form-label" for="ripetiPassword">Ripeti la password</label>
                      </div>
                    </div>
                  </div>
                  
		  <div class="pt-2 pb-3 text-center">
                    <button type="button" onclick="clearFields()" class="btn btn-warning btn-lg">Cancella</button>
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg ms-2">Registrati</button>
                  </div>
                </form>
            	<div class="d-flex justify-content-center align-items-center">
                  <div class="form-check form-switch">
                    <input class="form-check-input fs-3" type="checkbox" id="flexSwitchCheckDefault" onchange="makePasswordVisible()" autocomplete="off">
                    <label class="form-check-label fs-4" for="flexSwitchCheckDefault">Mostra la password</label>
                  </div>
                </div>
	      </div>
            </div>
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

    </body>
</html>
