<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/PiuScontatiCarte.js"></script>

<div class="card bg-dark-subtle border-0" id="mostDiscountedCard" style="padding-top: 50px;">
    <div class="card-header bg-success text-white d-flex justify-content-center position-relative">
        <span class="h1">APPROFITTA DI QUESTI SCONTI!</span>
        <button onclick="getUserDiscounts()" class="position-absolute end-0 me-3" style="width:40px;">
            <img src="utils/update-icon.png" style="width:20px;">
            <span class="text-end mb-0" id="discountsTimer">15</span>
        </button>
    </div>
    <div class="card-body bg-dark">
        <%--Populated by js script--%>
        <div class="container-fluid align-items-center justify-content-center flex-grow-1" id="piuScontatiCards"></div>
    </div>
</div>

