<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<script src="https://code.highcharts.com/highcharts.js"></script>

<%-- Include JS file into the page --%>
<%@include file="../js/PieChart.js"%>

<div class="modal modal-xl fade" id="pieChartModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header text-white" id="pieChartType" style="background-color: orange">
                <h5 class="modal-title" id="pieChartTitle">Diagramma a torta</h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div id="pieChartModalContent" style="width:100%;"></div>
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
	    	<div>
		    <button type="button" id="showPieChartButton" onclick="showPieChart()" class="btn btn-success">Diagramma a torta</button>
		</div>
                <button type="button" id="pieChartButton" onclick="closePieChart()" class="btn btn-primary">Chiudi</button>
            </div>
        </div>
    </div>
</div>
