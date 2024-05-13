<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>


<%-- Include JS file into the page --%>
<script type"text/javascript" src="js/Cookie.js"></script>

<!-- Modal -->
<div class="modal fade" id="cookieModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="cookieconsentLabel2">Cookies & Privacy</h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 d-flex align-items-center justify-content-center">
                        <img style="width:5rem;" src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" />
                    </div>

                    <div class="col-9">
                        <p>Questo sito utilizza cookie tecnici per fornirti la migliore esperienza possibile.<a class="d-block" href="https://en.wikipedia.org/wiki/Cookie_Clicker">Voglio saperne di più</a></p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" onclick="setCookieConsent('F')" class="btn btn-outline-danger" data-bs-dismiss="modal">Rifiuta tutti</button>
                <button type="button" onclick="setCookieConsent('T')" class="btn btn-primary" data-bs-dismiss="modal">Accetta i cookie</button>
            </div>
        </div>
    </div>
</div>
