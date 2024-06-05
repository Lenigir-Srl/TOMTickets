//Shows the Chart modal on screen, this is bootstrap's js code
function showChartModal() {
    var chartModal = document.getElementById('chartModal');
   
    if (chartModal) {
        // Create a new instance of the modal
        var bootstrapModal = new bootstrap.Modal(chartModal, {
            backdrop: 'static',
            focus: true,
            keyboard: false
        });

        // Show the modal
        bootstrapModal.show();
    }
}

//Closes the Chart modal, this is bootstrap's js code
function closeChartModal() {
    var chartModal = document.getElementById('chartModal');

    if (chartModal) {
        // Create a new instance of the modal
        var bootstrapModal = bootstrap.Modal.getInstance(chartModal);

        if (bootstrapModal) {
            // Hide the modal
            bootstrapModal.hide();
        }
    }
}

//Uses HighCharts's code to print the pie chart in the modal
function pieChart(eventi, numeroClickTotali){
    document.getElementById("chartType").style.backgroundColor = "orange";
Highcharts.chart('chartModalContent', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Numero di click degli eventi di TOMTickets (totali:' + numeroClickTotali + " clicks)",
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

function barChart(){
    document.getElementById("chartType").style.backgroundColor = "purple";
Highcharts.chart('chartModalContent', {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column',
        styledMode: true
    },

    title: {
        text: 'Average weight and BMI in some countries, women',
        align: 'left'
    },

    subtitle: {
        text: 'Source:', 
	align: 'left'
    },

    xAxis: {
        categories: ['Tokelau', 'Ireland', 'Italy', 'Timor-Leste']
    },

    yAxis: [{ // Primary axis
        className: 'highcharts-color-0',
        title: {
            text: 'Weight'
        }
    }, { // Secondary axis
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'BMI'
        }
    }],

    plotOptions: {
        column: {
            borderRadius: 5
        }
    },

    series: [{
        name: 'Weight',
        data: [92.5, 73.1, 64.8, 49.0],
        tooltip: {
            valueSuffix: ' kg'
        }
    }, {
        name: 'BMI',
        data: [33.7, 27.1, 24.9, 21.2],
        yAxis: 1
    }]

});

}

function calculatePieChart(arrayJson){
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

    pieChart(pieChartValues, totNumberOfClicks);
}

function printPieChart(){
    let url = getUrl() + '/ottieniEventi';
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON data from response
        })
        .then(function(data) {
            data.sort(function(a, b) {
                 return a.numeroClick < b.numeroClick;
            });
            calculatePieChart(data);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
            content.innerHTML = 'Error fetching data.';
        }); 
}

function printBarChart(){
    barChart();
}

//Enables the PieChart button
function enablePieChartButton(){
    var pieChartButton = document.getElementById("pieChartButton");
    pieChartButton.disabled = false; // Enable the button
    pieChartButton.classList.remove("btn-outline-success"); // Remove the btn-outline-success class
    pieChartButton.classList.add("btn-success"); // Add the btn-success class
}

//Disables the PieChart button
function disablePieChartButton(){
    var pieChartButton = document.getElementById("pieChartButton");
    pieChartButton.disabled = true; // Disable the button
    pieChartButton.classList.remove("btn-success"); // Remove the btn-warning class
    pieChartButton.classList.add("btn-outline-success"); // Add the btn-outline-warning class
}

//Enables the Bar Chart button
function enableBarChartButton(){
    var barChartButton = document.getElementById("barChartButton");
    barChartButton.disabled = false; // Enable the button
    barChartButton.classList.remove("btn-outline-warning"); // Remove the btn-outline-warning class
    barChartButton.classList.add("btn-warning"); // Add the btn-warning class
}

//Disables the Bar Chart button
function disableBarChartButton(){
    var barChartButton = document.getElementById("barChartButton");
    barChartButton.disabled = true; // Disable the button
    barChartButton.classList.remove("btn-warning"); // Remove the btn-warning class
    barChartButton.classList.add("btn-outline-warning"); // Add the btn-outline-warning class

}

function showPieChart(){
    disablePieChartButton();
    enableBarChartButton();
    printPieChart();
}

function showBarChart(){
    disableBarChartButton();
    enablePieChartButton();
    printBarChart();
}

function openChartModal(){
    showChartModal();
    showPieChart();
}
