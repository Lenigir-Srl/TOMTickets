//They store the information about the three most clicked events
var eventi = new Array(3);

//This points to the current carousel image being viewed by the user 
var carouselIndex = 0;

//Used to reproduce an audio cue when something gets switched
function playSwooshSound(){
    var swooshSound = document.getElementById("swooshSound");
    swooshSound.volume = 0.1;
    swooshSound.play();
}

//Timer that counts from 15 to 0, when it reaches 0 it calls the api to update the events and it gets reset to 15
function updateClickedTimer(){
    //Gets current time from html element
    let time = document.getElementById("clickedTimer").innerHTML;
    if(time == 0){
	//If time is 0 its time to call the api!
        getMostClicked();
    }else{
        //Decrease time by 1 second
	time--;
	//Update the timer in the browser
	document.getElementById("clickedTimer").innerHTML = time;
    }
}

class event {

    #title;
    #subtitle;
    #place;
    #hour;


    constructor(
        title="DefaultTitle",
	subtitle="DefaultSubtitle",
	place="DefaultPlace",
	hour="DefaultHour"
    ){
        this.title=title;
	this.subtitle=subtitle;
	this.place=place;
	this.hour=hour;
    }


    updateEventDetails(){
	document.getElementById("Subtitle").innerHTML = this.subtitle;
    }


}


//Calls the api "getmostclicked" to get the three most clicked events, uses the obtained json to print said events
function getMostClicked() {
        var url = "/risto89-1.0/getmostclicked";
        fetch(url)
            .then(response => {
                return response.json()
            })

            .then(data => {
	        //Reset the timer
                document.getElementById("clickedTimer").innerHTML = 15;
	        
                if(data.length > 0){
		    //Make the carousel visible
		    document.getElementById("mostClickedCarousel").style.display = "block";
                    
                    //When the user changes event in the carousel, the footer gets updated with the new information about the viewed event
                    document.getElementById('welcomeCarousel').addEventListener('slide.bs.carousel', function (e) {
                        playSwooshSound();
			carouselIndex = e.to;
                        eventi[carouselIndex].updateEventDetails();
                    });

		    //Update the carousel
                    for (let i = 0; i < data.length; i++) {
                        document.getElementById((i + 1) + "Image").src = "immagini/" + data[i].image;
                        document.getElementById((i+1) + "Link").href = "evento?titolo=" + data[i].titolo;
                        eventi[i] = new event(data[i].titolo, data[i].sottotitolo, data[i].luogo, data[i].ora, data[i].image);
                    }

                    //Add info of the event to the footer of the carousel
                    eventi[carouselIndex].updateEventDetails();
		}else{
		     //Make the carousel invisible, since we have no events to display
                    document.getElementById("mostClickedCarousel").style.display = "none";
		}

            });
}

//When document is loaded the 15 seconds timer starts and the events get printed
document.addEventListener("DOMContentLoaded", function() {
    getMostClicked();
    window.setInterval(updateClickedTimer, 1000);
});

//Used to reproduce an audio cue when something gets pressed
function playClickSound(){
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
}

//When user clicks the update button, and audio cue is produced and the events get refreshed
function getUserMostClicked(){
   playClickSound();
   getMostClicked();
}

