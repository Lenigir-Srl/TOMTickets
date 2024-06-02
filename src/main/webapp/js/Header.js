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
