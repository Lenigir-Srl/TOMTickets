<%-- Include JS file into the page --%>
<script><%@include file="/js/PiuScontatiCarte.js"%></script>

<%-- Include CSS file into the page --%>
<link rel="stylesheet" href="css/PiuScontatiCarte.css">

<div class="card bg-dark-subtle border-0" id="mostDiscountedCard">
    <div class="card-header bg-success text-white d-flex justify-content-center position-relative">
        <span class="h1">APPROFITTA DI QUESTI SCONTI!</span>
        <button id="reloadMostDiscountedButton" onclick="getUserDiscounts()" class="position-absolute end-0 me-3">
            <img id="reloadMostDiscountedIcon" src="utils/update-icon.png">
            <span class="text-end mb-0" id="discountsTimer">15</span>
        </button>
    </div>
    <div class="card-body bg-dark">
        <%--Populated by js script--%>
        <div class="container-fluid align-items-center justify-content-center flex-grow-1" id="piuScontatiCards"></div>
    </div>
</div>

