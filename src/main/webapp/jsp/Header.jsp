<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="./">risto89</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./descrizione">Descrizione</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <% 
	        String name = (String) session.getAttribute("name");
	        if(name == null){
	        %>
	        <li class ="nav-item">
                    <a class="nav-link active" aria-current="page" href="./login">Login</a>
	        <%
	        }else{
	        %>
                <li class ="nav-item">
                    <a class="nav-link active" aria-current="page" href="./logout">Logout</a>
	        <%
	        }
	        %>
            </ul>
        </div>
    </div>
</nav>
