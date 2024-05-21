document.addEventListener('DOMContentLoaded', function(){
	printTimesVisited();
	printCookiesChoice();
});


//Get user's choice about cookies and print it.
function printCookiesChoice(){
	var choice = window.localStorage.getItem('cookies');
	var print = "";
	if(choice == "false"){
		print = print + "Non hai accettato i cookies.";
	}else{
		print = print + "Hai accettato i cookies!!";
	}
	document.getElementById('Cookies_accepted_shower').textContent = print;
}

//Get the number of visits from local storage and print it.
function printTimesVisited(){
	var timesVisited = window.localStorage.getItem('times_visited');
        var print = "";
	if((timesVisited == null)||(timesVisited == 0) || timesVisited == 1){
		print = print + "E' la prima volta che visiti questa pagina!";
	}else{
        	var print = "Hai visitato questa pagina ";
              	print = print + timesVisited + " volte. ";
	}
        document.getElementById("Times_visited_shower").textContent = print;
}
