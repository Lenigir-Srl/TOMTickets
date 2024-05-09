<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <%-- Include JS file into the page --%>
	<script type"text/javascript" src="./js/Homepage.js"></script>
	<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TOMTickets</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
	<!--NAVIGATION BAR-->
        <%@include file="./Header.jsp"%>
	<!--NAVIGATION BAR-->


	<!--PAGE CONTENT-->
<section class="vh-10 d-flex justify-content-center align-items-center bg-dark-subtle">
  <div class="container d-flex justify-content-center align-items-center py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col">
        <div class="card" style="border-radius: 1rem; width:50rem; padding-top:1rem;">
	  <div class="row g-0">
	    <div id="carouselExampleCaptions" class="carousel slide justify-content-center container" style="width:50rem;">
	      <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
	      </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://www.w3schools.com/bootstrap5/la.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
	  <div class="row g-0">
	  <div class="container py-4 d-flex align-items-center justify-content-center">
            <h5> Titolo dell'immagine</h5>
          </div>
	  <div class="container d-flex align-items-center justify-content-center">
	    <p>Descrizione della immagine</p>
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
