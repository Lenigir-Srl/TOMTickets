<script>

function getMostClicked() {
    var url = "/risto89-1.0/getmostclicked";
    fetch(url)
        .then(response => {
	    return response.json()
	})
        
	.then(data => {
            console.log(data);
        });
}

</script>
