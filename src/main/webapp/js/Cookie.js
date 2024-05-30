//Check if the user is connecting for the first time
if(!window.sessionStorage.getItem('first_open_check')){
    window.sessionStorage.setItem('first_open_check', 1);
    if (window.localStorage.getItem('times_visited')) {
    	window.localStorage.setItem('times_visited', parseInt(window.localStorage.getItem('times_visited')) + 1);
    }else {
    	window.localStorage.setItem('times_visited', 0);
    }
}

function countTime(){
    let seconds = window.localStorage.getItem('time');
    seconds++;
    window.localStorage.setItem('time', seconds);
}



document.addEventListener('DOMContentLoaded', function() {
    var checkFirstTimeVisit = window.localStorage.getItem('times_visited');
    if(checkFirstTimeVisit == 0){
    	window.localStorage.setItem("cookies", true);
	$('#cookieModal').modal({
  		backdrop: 'static',
		focus: true,
		keyboard: false
	})
	$('#cookieModal').modal('show');
    }
    if(!window.localStorage.getItem('time')){
        window.localStorage.setItem('time', 0);
    }
    window.setInterval(countTime, 1000);
});


//Function to show on screen the cookie modal, this is bootstrap's js
function showCookieConsent(){
    $('#cookieModal').modal({
            backdrop: 'static',
            focus: true,
            keyboard: false
    })
    $('#cookieModal').modal('show');
}

function setCookieConsent(Choice){
	//Save the choice of the user inside a storage boolean variable called "cookies"
	if(Choice == "T"){
		window.localStorage.setItem("cookies", true)
	}else{
		if(Choice == "F"){
			window.localStorage.setItem("cookies", false);
		}else{
			window.localStorage.setItem("cookies", "NaN");
		}
	}
	if(window.localStorage.getItem('times_visited') == 0){
           window.localStorage.setItem('times_visited', 1);
	}
	//Reload the page;
	location.reload();
}
