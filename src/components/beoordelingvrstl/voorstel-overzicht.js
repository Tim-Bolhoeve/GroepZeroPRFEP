import {LitElement, html, css} from 'lit';

class voorstelOverzicht extends LitElement {
    static get styles() {
        return css`
            
        `;
    }

    _beoordeel() {
        window.location.href = "http://localhost:8080/voorstelbeoordelen";
    }

    render() {
        return html`
            <script src="button-event.js"></script>
            <link href="styles.css" rel="stylesheet">
            <body class="d-flex flex-column">
        <main class="flex-shrink-0">
            <!-- Navigatie-->
            <div id="nav-placeholder"></div>
            <!-- Header-->
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Voorstellen overzicht</h1>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"></div>
                    </div>
                </div>
            </header>
            <!-- Tabel of dergelijke-->

            <div class="col-xs-12" style="height:50px;"></div>

            <div class="container">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>voorstel</th>
                    <th>beoordelen</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  <tr>
                    <td>Aanpassing persoonlijke professionalisering</td>
                    <td>
                        <div class="button-box col-lg-12">
                            <button class="btn btn-primary btn-lg" id="submitButton" @click=${() => this._beoordeel()} type="submit">Beoordelen</button>
                        </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Verandering aan curriculum</td>
                    <td>
                        <div class="button-box col-lg-12">
                            <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Beoordelen</button>
                        </div>
                    </td>              
                 </tr>
                  <tr>
                    <td>Manier van doceren</td>
                    <td>
                        <div class="button-box col-lg-12">
                            <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Beoordelen</button>
                        </div>
                    </td>                 
                </tr>
                </tbody>
              </table>
            </div>
            <br><br>
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
    </body>
        `
    }

    _newEvent(event) {
        this.dispatchEvent(new CustomEvent(event));
    }
}
window.customElements.define('voorstel-overzicht', voorstelOverzicht);