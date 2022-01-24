import {LitElement, html, css} from 'lit';
import { nieuwvak } from '../aanmaken/nieuwvak.js';

class keuren extends LitElement {

    constructor(){
        super();
    }

    connectedCallback(){
        super.connectedCallback();
    }

    static get styles() {
        return css`
            // #doos{
            //     background-color: green;
            // }
        `;
    }


    render() {
        
        return html`
        <script src="button-event.js"></script>
        <link href="styles.css" rel="stylesheet">
        <main class="flex-shrink-0">
            <!-- Navigatie-->
            <div id="nav-placeholder"></div>
            <!-- Header-->
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Vakken Keuren</h1>
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
                    <th>code</th>
                    <th>Naam vak</th>
                    <th>EC-cursus</th>
                    <th>Toets & Toetsform</th>
                    <th>weging</th>
                    <th>EC-toets</th>
                    <th>Keuren</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                    ${nieuwvak.map(vak => html`
                            <tr>
                                <td id="doos">${vak.code}</td>
                                <td>${vak.name}</td>
                                <td>${vak.ec_course}</td>
                                <td>${vak.test}</td>
                                <td>${vak.weight}</td>
                                <td>${vak.ec_test}</td>
                                <td>
                                    <div class="button-box col-lg-12">
                                        <button class="btn btn-primary btn-lg" onclick="goedkeuren()" type="submit">Goedkeuren</button>
                                        <button class="btn btn-dark btn-lg" id="afkeuren" type="submit">Afkeuren</button>
                                    </div>
                                </td>              
                            </tr>`)}
                </tbody>
              </table>
            </div>
            <br><br>
        </main>
        <!-- Footer-->
        <div id="footer-placeholder"></div>
        `

        
    }

    _newEvent(event) {
        this.dispatchEvent(new CustomEvent(event));
        
    }
}
        

window.customElements.define('keuren-element', keuren);