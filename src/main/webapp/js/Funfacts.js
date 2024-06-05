document.addEventListener('DOMContentLoaded', function(){
        printTimesVisited();
	printTimePassed();
	window.setInterval(printTimePassed, 1000);
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

// Get the time that the user has passed in the website from local storage and print it.
//This is done every second and has quite the number of ifs, but computers are so powerfull today that we can almost say
//"Who cares :D"
function printTimePassed() {
    var timePassed = parseInt(window.localStorage.getItem('time'));

    var hours = Math.floor(timePassed / 3600);
    var minutes = Math.floor((timePassed % 3600) / 60);
    var seconds = timePassed % 60;

    var print = "Hai trascorso ";

    if (hours > 0) {
        print += hours;
        if (hours > 1) {
            print += " ore";
        } else {
            print += " ora";
        }

        if (minutes > 0 && seconds > 0) {
            print += ", ";
        } else if (minutes > 0 || seconds > 0) {
            print += " e ";
        }
    }

    if (minutes > 0) {
        print += minutes;
        if (minutes > 1) {
            print += " minuti";
        } else {
            print += " minuto";
        }

        if (seconds > 0) {
            print += " e ";
        }
    }

    if (seconds > 0) {
        print += seconds;
        if (seconds > 1) {
            print += " secondi su TOMTickets.";
        } else {
            print += " secondo su TOMTickets.";
        }
    }

    document.getElementById("Time_shower").textContent = print;
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
