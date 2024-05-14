<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>


<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/Notify.js"></script>

<div class="modal fade" id="notifyModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header text-white" id="notifyType" style="background-color: red">
                <h5 class="modal-title" id="notifyModalTitle"></h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 d-flex align-items-center justify-content-center">
                        <img style="width:5rem;" id="notifyImage" />
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
