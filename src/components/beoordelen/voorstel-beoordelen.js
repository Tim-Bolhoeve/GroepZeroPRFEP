import {LitElement, html, css} from 'lit';

class voorstelBeoordelen extends LitElement {
    static get styles() {
        return css`
            
        `;
    }

    render() {
        return html`
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
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-chat-right-text-fill"></i></div>
                            <h1 class="fw-bolder">Voorstel (id: <a href="#">0001</a>) beoordelen</h1>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                <!-- form -->
                                <form id="contactForm" method="#">
                                    
                                    <div class="form-floating mb-3">
                                        <label for="beoordeelbericht"></label>
                                        <textarea class="form-control" id="beoordeelbericht" type="text" placeholder="Voer je bericht in..." style="height: 10rem" data-sb-validations="required"></textarea>
                                        <label for="message">Bericht</label>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">Een bericht is verplicht.</div>
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
                                        <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Goedkeuren</button>
                                        <button class="btn btn-dark btn-lg" id="submitButton" type="submit">Afkeuren</button>
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
window.customElements.define('voorstel-beoordelen', voorstelBeoordelen);