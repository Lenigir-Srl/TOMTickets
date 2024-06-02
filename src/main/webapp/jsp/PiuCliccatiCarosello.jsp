<%-- Include JS file into the page --%>
<script type="text/javascript" src="js/PiuCliccatiCarosello.js"></script>

<%--Swoosh Sound--%>
<audio id="swooshSound">
    <source src="utils/swoosh-sound.mp3" type="audio/mpeg">
</audio>

<div class="card bg-dark-subtle border-0" id="mostClickedCarousel" style="padding-top: 50px;">
    <div class="card-header bg-warning text-white d-flex justify-content-center">
        <span class="h1">I NOSTRI EVENTI PIU' CLICCATI!</span>
        <button onclick="getUserMostClicked()" class="position-absolute end-0 me-3" style="width:40px;">
            <img src="utils/update-icon.png" style="width:20px;">
            <span class="text-end mb-0" id="clickedTimer">15</span>
        </button>
    </div>
    <div class="card-body bg-dark" style="border-radius: 0 0 0.25rem 0.25rem;">
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
                            <a id="1Link" class="d-block mx-auto" style="max-width:100%; max-height:400px;"><img src="utils/placeholder-image.png" id="1Image" alt="Immagine 1"></a>
                        </div>
                    </div>
                    <div class="carousel-item" style="height:400px;">
                        <div class="d-flex align-items-center text-center" style="height:400px">
                            <a id="2Link" class="d-block mx-auto" style="max-width:100%; max-height:400px;"><img src="utils/placeholder-image.png" id="2Image" alt="Immagine 2"></a>
			</div>
                    </div>
                    <div class="carousel-item" style="height:400px;">
                        <div class="d-flex align-items-center text-center" style="height:400px">
                            <a id="3Link" class="d-block mx-auto" style="max-width:100%; max-height:400px;"><img src="utils/placeholder-image.png" id="3Image" alt="Immagine 3"></a>
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
    <div class="card-footer d-flex justify-content-center">
        <span id="Subtitle"></span>
    </div>
</div>

