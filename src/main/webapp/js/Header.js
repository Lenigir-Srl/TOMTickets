function checkSound(){
    if(window.localStorage.getItem('sound') == 'true'){
        return true;
    }else{
        return false;
    }
}

function enableSound(){
    window.localStorage.setItem('sound', true);
    document.getElementById('soundIcon').src = 'utils/sound-icon.png';
}

function disableSound(){
    window.localStorage.setItem('sound', false);
    document.getElementById('soundIcon').src = 'utils/muted-icon.png';
}

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
