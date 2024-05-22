<script>

function getMostClicked() {

    console.log("Fetching most clicked events");
    var url = "/risto89-1.0/getmostclicked";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var tableBody = document.getElementById("mostClickedTableBody");
            tableBody.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                var row = tableBody.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = data[i].titolo;
                cell2.innerHTML = data[i].numeroClick;
            }
        });
}

</script>

<table>
    <thead>
        <tr>
            <th>Titolo</th>
            <th>Clicks</th>
        </tr>
    </thead>
    <tbody id="mostClickedTableBody">
</tbody>

