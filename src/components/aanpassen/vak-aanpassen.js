import {LitElement, html, css} from 'lit';

class vakAanpassen extends LitElement {
    static get styles() {
        return css`
            
        `;
    }

    _fillForm() {
        var bezemvak = JSON.parse(sessionStorage.getItem("bezemvak"));
        
        var code = JSON.stringify(bezemvak.code);
        var name = JSON.stringify(bezemvak.name);
        var ecc = JSON.stringify(bezemvak.ecc);
        var toets = JSON.stringify(bezemvak.toets);
        var weging = JSON.stringify(bezemvak.weging);
        var ect = JSON.stringify(bezemvak.ect);

        
    }

    render() {
        return html`
        <script src="../components/keuren/button-event.js"></script>
        <link href="styles.css" rel="stylesheet">
        <body class="d-flex flex-column">
        <main class="flex-shrink-0">
            <!-- Navigatie-->
            <div id="nav-placeholder"></div>
            <!-- Form-->
            <section class="py-5">
                <div class="container px-5">
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-pencil-square"></i></div>
                            <h1 class="fw-bolder">Vak aanpassen</h1>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                <!-- form -->
                                <form id="contactForm" method="#">
                                    <!-- Naam input-->
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="code" type="text" placeholder="Vul een code in..." required />
                                        <label for="code">Code invoeren</label>
                                        <div class="invalid-feedback" data-sb-feedback="code:required">Een code is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Vul een naam in..." required />
                                        <label for="name">Naam invoeren</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">Een vaknaam is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="ec-c" type="number" placeholder="Vul een EC-nummer in..." required />
                                        <label for="ec-c">EC-Cursus</label>
                                        <div class="invalid-feedback" data-sb-feedback="ec-c:required">Een EC-cursus nummer is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="toets" type="text" placeholder="Vul een Toets & toetsvorm in..." required />
                                        <label for="toets">Toets & Toetsform</label>
                                        <div class="invalid-feedback" data-sb-feedback="toets:required">Een Toets & toetvorm is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="weging" type="number" placeholder="Vul een weging in..." required />
                                        <label for="weging">Weging</label>
                                        <div class="invalid-feedback" data-sb-feedback="weging:required">Een Weging is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="ec-t" type="number" placeholder="Vul een EC-nummer in..." required />
                                        <label for="ec-t">EC-toets</label>
                                        <div class="invalid-feedback" data-sb-feedback="ec-t:required">Een EC-toets nummer is verplicht.</div>
                                    </div>
                                    <!-- gelukt bericht -->
                                    <div class="d-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3">
                                            <div class="fw-bolder">Gelukt!</div>
                                            <a href="#">linkje hier</a>
                                        </div>
                                    </div>
                                    <!-- error bericht  -->
                                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error!</div></div>
                                    <!-- Submit knop-->
                                    <div class="button-box col-lg-12">
                                        <button class="btn btn-primary btn-lg" id="aanpasButton" type="submit">Aanpassen</button>
                                        <button class="btn btn-dark btn-lg" id="annuleerButton" type="submit">Annuleren</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- Footer-->
        <div id="footer-placeholder"></div>

        <script src="//code.jquery.com/jquery.min.js"></script>

          <script>
          // navbar inladen
          $.get("./holders/navbar.html", function(data){
              $("#nav-placeholder").replaceWith(data);
          });

          // tabel inhoud inladen
          $.get("./holders/footer.html", function(data){
              $("#footer-placeholder").replaceWith(data);
          });
          </script>
        <!-- Bootstrap JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!--JS-->
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
        `
    }

    _newEvent(event) {
        this.dispatchEvent(new CustomEvent(event));
    }
}
window.customElements.define('vak-aanpassen', vakAanpassen);