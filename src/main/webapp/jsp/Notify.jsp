<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>


<%-- Include JS file into the page --%>
<script type"text/javascript" src="js/Notify.js"></script>

<!-- Modal -->
<div class="modal fade" id="notifyModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title" id="notifyModalTitle"></h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 d-flex align-items-center justify-content-center">
                        <img style="width:5rem;" src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png" />
                    </div>

                    <div class="col-9">
                        <p id="notifyModalDescription"></p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" onclick="$('#notifyModal').modal('hide')" class="btn btn-primary">Continua</button>
            </div>
        </div>
    </div>
</div>
