<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <script type"text/javascript" src="js/Homepage.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TOMTickets</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
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
	<div class="col-lg px-0 d-flex justify-content-center align-items-center text-center" style="height:400px"> 
        <!--CAROUSEL-->
        <%@include file="/jsp/Carousel.jsp"%>
	<!--CAROUSEL-->
	</div>

        <!--FUNFACTS-->
	<%@include file="/jsp/Funfacts.jsp"%>
	<!--FUNFACTS-->
</section>
<!--PAGE CONTENT-->


	<!--FOOTER-->
        <%@include file="/jsp/Footer.jsp"%>
        <!--FOOTER-->


</body>
</html>

