<script>

function printPieChart(eventi, numeroClickTotali){
// Data retrieved from https://netmarketshare.com
Highcharts.chart('pieChartModalContent', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Numero di click degli eventi di TOMTickets (totali:' + numeroClickTotali + ")",
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Percentuale di click',
        colorByPoint: true,
        data: eventi
    }]
});
}

function printData(arrayJson){
	var totNumberOfClicks = 0;

	arrayJson.forEach(function(elemento) {
            totNumberOfClicks += elemento.numeroClick; 
        }); 
	var pieChartValues = arrayJson.map(function(evento) {
            let value = evento.numeroClick/totNumberOfClicks;
	    return {
                name: evento.titolo,
                y: value
            };
        });

	printPieChart(pieChartValues, totNumberOfClicks);
}

function getDataJson(){
let url = 'http://localhost:41063/risto89-1.0/ottieniEventi';
           fetch(url)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse JSON data from response
                })
                .then(function(data) {
                    // Assuming data is an object representing EventoBean
		    data.sort(function(a, b) {
                         return a.numeroClick < b.numeroClick;
                    });
                    printData(data);
                })  
                .catch(function(error) {
                    console.error('Error fetching data:', error);
                    content.innerHTML = 'Error fetching data.';
                }); 


}

function showPieChart(){
	getDataJson();
	showPieChartModal();
}


function showPieChartModal(){
    $('#pieChartModal').modal({
        backdrop: 'static',
        focus: true,
        keyboard: false
    });
    $('#pieChartModal').modal('show');
}

function closePieChart(){
    $('#pieChartModal').modal('hide');
}
</script>
