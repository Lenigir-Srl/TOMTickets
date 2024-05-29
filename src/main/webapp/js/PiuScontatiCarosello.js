<script>

function getDiscounts() {

    var url = "/risto89-1.0/getsconti";
    fetch(url)
        .then(response => {
	    return response.json();
	})
        
	.then(data => {
            //TODO
	});
}

</script>
