<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/Funfacts.js"></script>

<%-- Include CSS file into the page --%>
<link rel="stylesheet" href="css/FunFacts.css">

<div class="card" style="margin-left: auto;">
    <div id="rainbow-box" class="container-fluid align-items-center justify-content-center d-flex">
        <div class="card-header bg-transparent border-0 text-white">
	    <h3>Cose divertenti da sapere</h3>
	</div>
    </div>
    <ul class="list-group list-group-flush d-flex justify-content-center align-items-center">
        <li class="list-group-item text-center" id="Times_visited_shower"></li>
        <li class="list-group-item text-center" id="Time_shower"></li>
        <li class="list-group-item text-center" id="Cookies_accepted_shower"></li>
    </ul>
</div>
