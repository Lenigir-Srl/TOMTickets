<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>

<%-- Include HighCharts into the page --%>
<script src="https://code.highcharts.com/highcharts.js"></script>


<%-- Include JS file into the page --%>
<script><%@include file="../js/Charts.js"%></script>

<%-- Include CSS file into the page --%>
<style><%@include file="../css/Charts.css"%></style>

<div class="modal modal-xl fade" id="chartModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header text-white" id="pieChartType">
                <h5 class="modal-title" id="chartTitle">Diagrammi e Grafici</h5>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div id="chartModalContent"></div>
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
	    	<div>
		    <button type="button" id="pieChartButton" onclick="showPieChart()" class="btn btn-success">Diagramma a torta</button>
		    <button type="button" id="barChartButton" onclick="showBarChart()" class="btn btn-outline-warning">Grafico a Barre</button>
		</div>
                <button type="button" id="chartButton" onclick="closeChartModal()" class="btn btn-primary">Chiudi</button>
            </div>
        </div>
    </div>
</div>
