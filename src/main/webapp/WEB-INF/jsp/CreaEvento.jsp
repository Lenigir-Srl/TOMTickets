<%-- Make special characters (ù è à) and java coding available --%>
<%@page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>

<html lang="en">
<head>
    <%-- Include JS file into the page --%>
    <script><%@include file="../js/CreaEvento.js"%></script>
    <%-- Include meta info of the page (favicon and such) --%>
    <%@include file="/html/Metacontent.html"%>
    <title>TOMTickets - Crea Nuovo Evento</title>
</head>
<body>
<!--NAVIGATION BAR-->
<%@include file="/jsp/Header.jsp"%>
<!--NAVIGATION BAR-->

<!--PAGE CONTENT-->
<section class="bg-dark-subtle text-center align-items-center justify-content-center d-flex" style="min-height: 95vh;">
    <div class="container py-4 h-100">
        <div class="card" style="border-radius: 1rem;">
            <div class="card-body p-4 p-lg-5 text-black text-center">
                <form name="createEventForm" action="./creaEvento" method="POST" enctype="multipart/form-data">
                    <div class="d-flex align-items-center mb-3 pb-1">
                        <span class="h2 fw-bold mb-0">TOMTickets</span>
                    </div>
                    <h5 class="h3 fw-normal mb-3">Crea un nuovo evento</h5>
                    <div class="row justify-content-center">
                        <div class="col-md-6 mb-2">
                            <div class="form-outline">
                                <input type="text" id="title" name="titolo" class="form-control border border-dark" required />
                                <label class="form-label" for="title">Titolo</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="form-outline">
                            <input type="text" id="subtitle" name="sottotitolo" class="form-control border border-dark" required />
                            <label class="form-label" for="subtitle">Sottotitolo</label>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="form-outline">
                            <textarea id="description" name="descrizione" class="form-control border border-dark" rows="5" required></textarea>
                            <label class="form-label" for="description">Descrizione</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-2">
                            <div class="form-outline">
                                <input type="date" id="date" name="data" class="form-control text-center border border-dark" required />
                                <label class="form-label" for="date">Data</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="form-outline">
                                <input type="time" id="time" name="ora" class="form-control text-center border border-dark" required />
                                <label class="form-label" for="time">Orario</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-2">
                            <div class="form-outline">
                                <select id="ticketType" name="tipologiaBiglietti" class="form-select text-center border border-dark" required>
                                    <option value="" disabled selected>Scegli la tipologia dei biglietti</option>
                                    <option value="InPiedi">Biglietti in piedi</option>
                                    <option value="Seduti">Biglietti in poltrona</option>
                                </select>
                                <label class="form-label" for="ticketType">Tipologia dei biglietti</label>
                            </div>
                        </div>
                        <div class="col-md-3 mb-2">
                            <div class="form-outline">
                                <input type="number" id="price" name="prezzo" class="form-control border border-dark" required />
                                <label class="form-label" for="price">Prezzo</label>
                            </div>
                        </div>
                        <div class="col-md-3 mb-2">
                            <div class="form-outline">
                                <input type="number" id="discount" name="sconto" class="form-control border border-dark" required />
                                <label class="form-label" for="discount">Sconto</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-2">
                            <div class="form-outline">
                                <select id="eventType" name="tipologiaEvento" class="form-select text-center border border-dark" required>
                                    <option value="" disabled selected>Scegli la tipologia dell'evento</option>
                                    <option value="Concerti">Concerto</option>
                                    <option value="EventiSportivi">Evento Sportivo</option>
                                    <option value="SpettacoliTeatrali">Spettacolo Teatrale</option>
                                    <option value="VisiteGuidate">Visita Guidata</option>
                                </select>
                                <label class="form-label" for="eventType">Tipologia</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="form-outline">
                                <select id="place" name="luogo" class="form-select text-center border border-dark" required>
                                    <option value="" disabled selected>Scegli il luogo dell'evento</option>
                                    <option value="Arco">Arco</option>
                                    <option value="Povo">Povo</option>
                                    <option value="Riva">Riva</option>
                                    <option value="Rovereto">Rovereto</option>
                                    <option value="Trento">Trento</option>
                                </select>
                                <label class="form-label" for="place">Luogo</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-outline">
                            <input type="file" class="form-control border border-dark" id="image" name="image" accept="image/*" required>
                            <label for="image" class="form-label">Immagine</label>
                        </div>
                    </div>
                    <div class="pt-2 pb-3 text-center container justify-content-center align-items-center">
                        <button type="button" onclick="clearFields()" class="btn btn-warning btn-lg mb-2">Cancella</button>
                        <button type="submit" onclick="return validateForm()" class="btn btn-primary btn-lg mb-2">Crea evento</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<!--PAGE CONTENT-->

<!--FOOTER-->
<%@include file="/jsp/Footer.jsp"%>
<!--FOOTER-->

<!--COOKIE-->
<%@include file="/jsp/Cookie.jsp"%>
<!--COOKIE-->

<!--NOTIFICATION-->
<%@include file="/jsp/Notify.jsp"%>
<!--NOTIFICATION-->

</body>
</html>
