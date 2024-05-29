<script>

function getMostClicked() {
    var url = "/risto89-1.0/getmostclicked";
    fetch(url)
        .then(response => {
	    return response.json()
	})
        
	.then(data => {
	    for (let i = 0; i < data.length; i++) {
                document.getElementById((i + 1) + "Image").src = "immagini/" + data[i].image;
                document.getElementById((i + 1) + "Title").innerHTML = data[i].titolo;
                document.getElementById((i + 1) + "Subtitle").innerHTML = data[i].sottotitolo;
            }

        });
}

</script>
