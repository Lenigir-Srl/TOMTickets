<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<nav class="navbar navbar-expand-lg navbar-light bg-light-subtle">
  <div class="container-fluid">
    <a class="navbar-brand" href="./">TOMTickets</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <%
            String name = (String) session.getAttribute("username");
            if(name == null){
        %>
	 <!--Show something to the not-logged user -->
        <%
            }else{
        %>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Visualizza Utenti</a>
            </li>
	    <li class="nav-item">
              <a class="nav-link disabled" href="#">Visualizza Dipendenti</a>
            </li>
        <%
            }
        %>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Eventi
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Concerti</a></li>
            <li><a class="dropdown-item" href="#">Spettacoli teatrali</a></li>
            <li><a class="dropdown-item" href="#">Eventi sportivi</a></li>
            <li><a class="dropdown-item" href="#">Visite guidate</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Visualizza tutti</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex align-items-center">
        <%
            if(name == null){
        %>
	    <a class="me-3 btn btn-primary navbar-btn" href="./signup">Registrati</a>
            <a class="me-3 btn btn-success navbar-btn" href="./login">Accedi</a> 
        <%
            }else{
        %>
	    <a class="btn btn-primary navbar-btn" href="./profile">Il Mio Profilo</a>
            <a class="btn btn-danger navbar-btn" href="./logout">Esci</a>
        <%
            }
        %>
      </div>
    </div>
  </div>
</nav>
