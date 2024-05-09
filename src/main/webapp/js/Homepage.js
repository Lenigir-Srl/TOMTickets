document.addEventListener('DOMContentLoaded', function(){
	printTimesVisited();
	printCookiesChoice();
});



function printCookiesChoice(){
	var choice = window.localStorage.getItem('cookies');
	var print = "";
	if(choice == "true"){
		print = print + "Hai accettato i cookies :D";
	}else{

	
		if(choice == "false"){
			print = print + "Non hai accettato i cookies sob sob :'(";
		}else{
			print = print + "Non hai ancora espresso la tua scelta sui cookie :|";
		}

	}
	document.getElementById('Cookies_accepted_shower').textContent = print;
}

function printTimesVisited(){
	var timesVisited = window.localStorage.getItem('times_visited');

	if((timesVisited == null)||(timesVisited == 0)){
		print = print + "E' la prima volta che visiti questa pagina!";
	}else{
        	var print = "Hai visitato questa pagina ";
		if(timesVisited == 1){
                	print = print + "1 volta. ";
       		}else{
                	print = print + timesVisited + " volte. ";
        	}
	}
        document.getElementById("Times_visited_shower").textContent = print;
}
