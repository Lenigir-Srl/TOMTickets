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
    <script>
   
function setupPage() {
        getMostClicked();
        getDiscounts();
        window.setInterval(getMostClicked, 15000);
        window.setInterval(getDiscounts, 15000);
}
    </script>
</head>
<body onload="setupPage();">
<!--NAVIGATION BAR-->
<%@include file="/jsp/Header.jsp"%>
<!--NAVIGATION BAR-->

<!--COOKIE-->
<%@include file="/jsp/Cookie.jsp"%>
<!--COOKIE-->

<!--PAGE CONTENT-->
<section class="bg-dark-subtle text-center align-items-center justify-content-center" style="min-height: 95vh;">
	<div class="col-lg-8 offset-lg-2">
	    <div class="card bg-dark-subtle border-0" style="padding-top: 50px;"> 
                <div class="card-header bg-success text-white">
	            <div class="h1">BENVENUTO!</div>
	        </div>
	        <span class="card-body bg-dark" style="border-radius: 0 0 0.25rem 0.25rem;">
	        <!--CAROUSEL-->
                <%@include file="/jsp/Carousel.jsp"%>
	        <!--CAROUSEL-->
	        </span>
	     </div>
	</div>
	<div class="col-lg-6 offset-lg-3">
             <!--FUNFACTS-->
	     <%@include file="/jsp/Funfacts.jsp"%>
             <!--FUNFACTS-->

	</div>

    <div>
    <!-- MOST CLICKED EVENTS -->
    <%@include file="/jsp/MostClicked.jsp"%>
    <!-- MOST CLICKED EVENTS -->

    <!-- DISCOUNTS -->
    <%@include file="/jsp/Discounts.jsp"%>
    <!-- DISCOUNTS -->
    </div>

</section>
<!--PAGE CONTENT-->


	<!--FOOTER-->
        <%@include file="/jsp/Footer.jsp"%>
        <!--FOOTER-->


</body>
</html>

