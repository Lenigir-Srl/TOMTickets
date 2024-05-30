<script>

var eventi = new Array(3);

var carouselIndex = 0;

function updateTimer(){
    let time = document.getElementById("timer").innerHTML;
    if(time == 0){
        getMostClicked();
    }else{
        time--;
	document.getElementById("timer").innerHTML = time;
    }
}

class event {

    #title;
    #subtitle;
    #place;
    #hour;


    constructor(title="DefaultTitle", subtitle="DefaultSubtitle", place="DefaultPlace", hour="DefaultHour"){
        this.#title=title;
	this.#subtitle=subtitle;
	this.#place=place;
	this.#hour=hour;
    }


    updateEventDetails(){
	document.getElementById("Subtitle").innerHTML = this.#subtitle;
    }


}

function getMostClicked() {
        var url = "/risto89-1.0/getmostclicked";
        fetch(url)
            .then(response => {
                return response.json()
            })

            .then(data => {
                document.getElementById("timer").innerHTML = 15;
                for (let i = 0; i < data.length; i++) {
                    document.getElementById((i + 1) + "Image").src = "immagini/" + data[i].image;
                    eventi[i] = new event(data[i].titolo, data[i].sottotitolo, data[i].luogo, data[i].ora, data[i].image);
                }
                eventi[carouselIndex].updateEventDetails();

            });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('welcomeCarousel').addEventListener('slide.bs.carousel', function (e) {
        carouselIndex = e.to;
        eventi[carouselIndex].updateEventDetails();
    });

    getMostClicked();
    window.setInterval(updateTimer, 1000);
});

</script>
