<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <script type="text/javascript" src="js/Homepage.js"></script>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="/html/Metacontent.html"%>
    <title>TOMTickets</title>
</head>

<body>
<!--NAVIGATION BAR-->
<%@include file="/jsp/Header.jsp"%>
<!--NAVIGATION BAR-->

<!--COOKIE-->
<%@include file="/jsp/Cookie.jsp"%>
<!--COOKIE-->

<!--PAGE CONTENT-->
<section class="bg-dark-subtle text-center align-items-center justify-content-center" style="min-height: 95vh;">
	<div class="col-lg-8 offset-lg-2">
	<!--MOST CLICKED CAROUSEL-->
        <%@include file="/jsp/PiuCliccatiCarosello.jsp"%>
	<!--MOST CLICKED CAROUSEL-->
	</div>
	<div class="col-lg-10 offset-lg-1">
        <!--MOST DISCOUNTED THREE CARDSL-->
        <%@include file="/jsp/PiuScontatiCarte.jsp"%>
        <!--MOST DISCOUNTED THREE CARDS-->
        </div>
	<div class="col-lg-6 offset-lg-3">
        <!--FUNFACTS-->
        <%@include file="/jsp/Funfacts.jsp"%>
        <!--FUNFACTS-->
	</div>
    </div>

</section>
<!--PAGE CONTENT-->

<!--FOOTER-->
<%@include file="/jsp/Footer.jsp"%>
<!--FOOTER-->


</body>
</html>

