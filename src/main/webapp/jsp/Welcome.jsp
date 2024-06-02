<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<%-- Include CSS file into the page --%>
<link rel="stylesheet" href="css/welcome.css">


<div id="welcome-container" style="display:none;">
    <img src="utils/trento-image.jpg" id="trento-image" alt="Trento Image">
    <div class="jumbotron bg-white" id="welcome-card">
        <h1 class="display-4">BENVENUTO!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
</div>
