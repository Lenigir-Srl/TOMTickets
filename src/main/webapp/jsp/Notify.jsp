<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/Notify.js"></script>

<%-- Include CSS file into the page --%>
<link rel="stylesheet" href="css/Notify.css">

<%--Error Sound--%>
<audio id="errorSound">
    <source src="utils/error-sound.mp3" type="audio/mpeg">
</audio>

<%--Success Sound--%>
<audio id="successSound">
    <source src="utils/success-sound.mp3" type="audio/mpeg">
</audio>

<%--Laugh Sound--%>
<audio id="laughSound">
    <source src="utils/laugh-sound.mp3" type="audio/mpeg">
</audio>

<div class="modal fade" id="notifyModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header text-white" id="notifyType">
                <h5 class="modal-title" id="notifyModalTitle"></h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 d-flex align-items-center justify-content-center">
                        
                        <%--src changed dynamically by js scripts--%>
			<img id="notifyImage" src=""/>
                    </div>

                    <div class="col-9">
                        <p id="notifyModalDescription"></p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="notifyButton" onclick="closeNotifyModal()" class="btn btn-primary">Continua</button>
            </div>
        </div>
    </div>
</div>
