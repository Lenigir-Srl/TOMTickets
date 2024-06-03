<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/PiuCliccatiCarosello.js"></script>

<%-- Include CSS file into the page --%>
<link rel="stylesheet" href="css/PiuCliccatiCarosello.css">

<%--Swoosh Sound--%>
<audio id="swooshSound">
    <source src="utils/swoosh-sound.mp3" type="audio/mpeg">
</audio>

<div class="card bg-dark-subtle border-0" id="mostClickedCarousel">
    <div class="card-header bg-primary text-white d-flex justify-content-center">
        <span class="h1">I NOSTRI EVENTI PIU' CLICCATI!</span>
        <button id="reloadMostClickedButton" onclick="getUserMostClicked()" class="position-absolute end-0 me-3">
            <img id="reloadMostClickedIcon" src="utils/update-icon.png">
            <span class="text-end mb-0" id="clickedTimer">15</span>
        </button>
    </div>
    <div class="card-body bg-dark" id="cardBody">
        <div class="col-lg px-0 d-flex justify-content-center align-items-center text-center" style="height:400px">
            <div id="welcomeCarousel" class="h-100 carousel slide justify-content-center container-fluid flex-grow-1 px-0 bg-dark" data-bs-interval="8000" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="d-flex align-items-center text-center" style="height:400px">
                            <a id="Link1" class="d-block mx-auto">
			        <img src="utils/placeholder-image.png" id="Image1" alt="Immagine 1">
			    </a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex align-items-center text-center" style="height:400px">
                            <a id="Link2" class="d-block mx-auto">
			        <img src="utils/placeholder-image.png" id="Image2" alt="Immagine 2">
			    </a>
			</div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex align-items-center text-center" style="height:400px">
                            <a id="Link3" class="d-block mx-auto">
			        <img src="utils/placeholder-image.png" id="Image3" alt="Immagine 3">
			    </a>
			</div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Successivo</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Precedente</span>
                </button>
            </div>
        </div>
    </div>
    <div class="card-footer d-flex justify-content-center bg-primary text-white">
        <span id="Subtitle"></span>
    </div>
</div>


