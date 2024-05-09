<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
    <%-- Include JS file into the page --%>
    <script type="text/javascript" src="./js/Loginpage.js"></script>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TOMTickets - log in</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>


    <body>

        <!--HEADER-->
	<%@include file="./Header.jsp"%>
	<!--HEADER-->

        <!--PAGE CONTENT-->
<section class="vh-10 bg-dark-subtle">
  <div class="container py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://static.sky.it/images/skytg24/it/spettacolo/musica/2022/05/25/vasco-rossi-concerto-milano-foto/03-vasco-rossi-Getty.jpg.transform/gallery-vertical-tablet-2x/06962c2ae463e9e9a1c44dd111993a0524bef092/img.jpg"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black text-center">

                <form id="loginForm" action="./login" method="POST">

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">TOMTickets</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Accedi nel tuo profilo</h5>

                  <div class="form-outline mb-4">
                    <input type="text" id="email" name="email" class="form-control form-control-lg" required/>
                    <label class="form-label" for="email">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="password" name="password" class="form-control form-control-lg" required/>
                    <label class="form-label" for="password">Password</label>
                  </div>

		  <div class="d-flex justify-content-center align-items-center">
                    <div class="form-check form-switch">
                      <input class="form-check-input fs-3" type="checkbox" id="flexSwitchCheckDefault" onchange="makePasswordVisible()" autocomplete="off">
                      <label class="form-check-label fs-4" for="flexSwitchCheckDefault">Mostra la password</label>
                    </div>
                  </div>

                  <div class="pt-5 mb-4 text-center">
		    <button class="btn btn-warning btn-lg btn-block" onclick="clearFields()" type="button">Cancella</button>
                    <button class="btn btn-success btn-lg btn-block" type="submit">Accedi</button>
                  </div>
		</form>

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
	<%@include file="./Footer.jsp"%>
	<!--FOOTER-->
	
	<!--COOKIE-->
        <%@include file="./Cookie.jsp"%>
        <!--COOKIE-->

    </body>
</html>
