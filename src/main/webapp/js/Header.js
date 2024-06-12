
//Returns the root of the url (e.g. "TOMTickets_war_exploded")
function getUrl(){
    // Get the current URL
    var currentURL = window.location.href;

    // Use regular expression to extract the root URL
    var match = currentURL.match(/^https?:\/\/[^\/]+\/([^\/]+)/);

    // Check if a match is found
    if (match && match.length > 1) {
        var rootURL = match[1];
        return '/' + rootURL;
    } else {
        console.error("Root URL not found in the current URL.");
    }
}

//Checks if the sound is on
function checkSound(){
    if(window.localStorage.getItem('sound') == 'true'){
        return true;
    }else{
        return false;
    }
}

//Turns the sound on
function enableSound(){
    window.localStorage.setItem('sound', true);
    document.getElementById('soundIcon').src = 'utils/sound-icon.png';
}

//Turns the sound off
function disableSound(){
    window.localStorage.setItem('sound', false);
    document.getElementById('soundIcon').src = 'utils/muted-icon.png';
}

//If the sound is on it gets turned off, and viceversa
function switchSound(){
    if(checkSound()){
        disableSound();
    }else{
        enableSound();
    }
}

function showAboutUs(){
    var aboutUs = document.getElementById("AboutUs");
    //Scrolls the user's page until the element identified by its ID is at the top of the viewport
    if (aboutUs) {
        var rect = aboutUs.getBoundingClientRect();
        //Scroll the page
        window.scrollTo({
            top: rect.top + window.pageYOffset, //Until the element is at the top
            behavior: 'smooth' //Make the scroll animated and smooth
        });
    }
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

document.addEventListener('DOMContentLoaded', function() {
    if (checkSound()) {
        enableSound();
    }else{
        disableSound();
    }
});
