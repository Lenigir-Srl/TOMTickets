//Check if the user is connecting for the first time
if(!window.sessionStorage.getItem('first_open_check')){
    window.sessionStorage.setItem('first_open_check', 1);
    if (window.localStorage.getItem('times_visited')) {
    	window.localStorage.setItem('times_visited', parseInt(window.localStorage.getItem('times_visited')) + 1);
    }else {
    	window.localStorage.setItem('times_visited', 0);
    }
}

//window.onload = showCookieModal();


document.addEventListener('DOMContentLoaded', function() {
    var checkFirstTimeVisit = window.localStorage.getItem('times_visited');
    if(checkFirstTimeVisit == 0){
    	$('#cookieModal').modal({
  		backdrop: 'static',
		focus: true,
		keyboard: false
	})
	$('#cookieModal').modal('show');
    }
});

/*
$( document ).on('turbolinks:load', function(){
    var checkFirstTimeVisit = window.localStorage.getItem('times_visited');
    if(checkFirstTimeVisit == 0){
        $('#cookieModal').modal({
                backdrop: 'static',
                focus: true,
                keyboard: false
        })
        $('#cookieModal').modal('show');
    }
    window.localStorage.setItem('times_visited', 0);
});
*/

function setCookieConsent(Choice){
	if(Choice == "T"){
		window.localStorage.setItem('times_visited', 1);
		window.localStorage.setItem("cookies", true)
	}else{
		if(Choice == "F"){
			window.localStorage.setItem('times_visited', 1);
			window.localStorage.setItem("cookies", false);
		}else{
			window.localStorage.setItem("cookies", "NaN");
		}
	}
	location.reload();
}
