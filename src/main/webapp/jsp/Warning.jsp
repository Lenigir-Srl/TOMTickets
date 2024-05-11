<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>


<%-- Include JS file into the page --%>
<%-- <script type"text/javascript" src="js/Notify.js"></script> --%>

<!-- Modal -->
<div class="modal fade" id="warningModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <h5 class="modal-title" id="warningModalTitle"></h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 d-flex align-items-center justify-content-center">
                        <img style="width:5rem;" src="https://t3.ftcdn.net/jpg/04/96/42/26/360_F_496422630_kxcfGbFBcUPHzB1v0mhpg5XQI9phxNx2.jpg" />
                    </div>

                    <div class="col-9">
                        <p id="warningModalDescription"></p>
                        <form>
			    <input class="form-check-input fs-3" type="checkbox" id="flexSwitchCheckDefault" autocomplete="off">
                            <label class="form-check-label fs-6" for="flexSwitchCheckDefault">Capisco e decidero procedere</label>
			</form>
		    </div>

		    
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" onclick="$('#warningModal').modal('hide')" class="btn btn-success">Torna indietro</button>
                <button type="button" onclick="$('#warningModal').modal('hide')" class="btn btn-outline-warning">Continua</button>
	    </div>
        </div>
    </div>
</div>
