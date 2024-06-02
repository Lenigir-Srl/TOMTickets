<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/Cookie.js"></script>

<%-- Include CSS file into the page --%>
<link rel="stylesheet" href="css/Cookie.css">

<%--Cookie Sound--%>
<audio id="cookieSound">
    <source src="utils/cookie-sound.mp3" type="audio/mpeg">
</audio>

<div class="modal fade" id="cookieModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="cookieconsentLabel2">Cookies & Privacy</h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 d-flex align-items-center justify-content-center">
                        <img id="cookieIcon" src="utils/cookie-icon.png" />
                    </div>

                    <div class="col-9">
                        <p>Questo sito utilizza cookie tecnici per fornirti la migliore esperienza possibile.<a class="d-block" href="https://en.wikipedia.org/wiki/Cookie_Clicker">Voglio saperne di più</a></p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" onclick="setCookieConsent('F')" class="btn btn-outline-danger" data-bs-dismiss="modal">Rifiuta</button>
                <button type="button" onclick="setCookieConsent('T')" class="btn btn-success" data-bs-dismiss="modal">Accetta</button>
            </div>
        </div>
    </div>
</div>
