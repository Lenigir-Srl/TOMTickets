<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<%-- <script type"text/javascript" src="js/Funfacts.js"></script> --%>

<style>
#rainbow-box {
    background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
}
</style>

<div class="card" style="margin-top:100px; margin-left: auto;">
    <div id="rainbow-box" class="container-fluid align-items-center justify-content-center d-flex" style="border-radius: 0.25rem 0.25rem 0 0;">
        <div class="card-header bg-transparent border-0 text-white">
	    <h3>Cose divertenti da sapere</h3>
	</div>
    </div>
    <ul class="list-group list-group-flush d-flex justify-content-center align-items-center">
        <li class="list-group-item text-center" id="Times_visited_shower"></li>
        <li class="list-group-item text-center" id="Cookies_accepted_shower"></li>
        <li class="list-group-item text-center">Intellij best IDE ever designed</li>
	<li class="list-group-item text-center">Il colore dello sfondo del titolo di questa carta e' la cosa più brutta che io abbia mai fatto. Ma ci stava - Valerio</li>
    </ul>
</div>
