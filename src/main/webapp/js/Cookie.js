//Used to reproduce an audio cue when cookies are being eaten
function playCookieSound(){
    var cookieSound = document.getElementById("cookieSound");
    if(checkSound())
    cookieSound.play();
}

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

//Function to show on screen the cookie modal, this is bootstrap's js
function showCookieConsent() {
    //Autoplay policy prevents an audio from being played if the user didnt do any action
    //https://developer.chrome.com/blog/autoplay
    //So we just check if it's the first time the user is entering the page, otherwise it meanse
    //he clicked the "Privacy" button in the header
    var checkFirstTimeVisit = window.localStorage.getItem('times_visited');
    if (checkFirstTimeVisit !== 0) {
        playCookieSound();
    }
    var cookieModal = document.getElementById('cookieModal');

    if (cookieModal) {
        // Create a new instance of the modal
        var bootstrapModal = new bootstrap.Modal(cookieModal, {
            backdrop: 'static',
            focus: true,
            keyboard: false
        });

        // Show the modal
        bootstrapModal.show();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var checkFirstTimeVisit = window.localStorage.getItem('times_visited');
    if (checkFirstTimeVisit === 0) {
        window.localStorage.setItem("cookies", true);
        showCookieConsent();
    }
    if (!window.localStorage.getItem('time')) {
        window.localStorage.setItem('time', 0);
    }
    window.setInterval(countTime, 1000);
});


function setCookieConsent(Choice){
	//Save the choice of the user inside a storage boolean variable called "cookies"
	if(Choice === "T"){
		window.localStorage.setItem("cookies", true)
	}else{
		if(Choice === "F"){
			window.localStorage.setItem("cookies", false);
		}else{
			window.localStorage.setItem("cookies", "NaN");
		}
	}
	if(window.localStorage.getItem('times_visited') === 0){
           window.localStorage.setItem('times_visited', 1);
	}
	//Reload the page;
	location.reload();
}
