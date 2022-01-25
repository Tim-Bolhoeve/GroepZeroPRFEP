import {LitElement, html, css, unsafeCSS} from 'lit';
import { courses } from '../../misc/courses.js';
import { router } from '../../misc/routes.js';
import './search-bar.js';
import '../layout/custom-header.js';

class SearchScript extends LitElement {
    constructor() {
        super();
        this.location = router.location;
    }

    connectedCallback() {
        super.connectedCallback();

        let paramList = this.location.params;
        let cursusNaam = paramList.name;

        this._getCourseFromName(cursusNaam);
    }

    _getCourseFromName(name) {
        this._foundCourse = courses.find(course => course.name === name);
    }

    static get styles() {
        return css`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }

            .blankcell {
                background: none!important; 
            }
          
            thead {
                background-color:  #5bc0de !important;
                color: black;
            }
        `
    }

    render() {
        if(this._foundCourse === undefined) {
            return html`
                <div id="cursussen" class="container">
                    <link href="styles.css" rel="stylesheet">
                    <h1>Cursus niet gevonden</h1>
                    <a href="/">Terug</a>
                </div>
            `
        }

        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link href="styles.css" rel="stylesheet">

            <custom-header>Gezocht:<br> "${this._foundCourse.name}"</custom-header>

            <search-bar></search-bar>
            
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-10">
                        <a href="/">Terug</a>
                    </div>
                </div>
            </div>

            <div id="cursussen" class="container table-responsive">
                <table class="table table-bordered">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Oude naam</th>
                            <th scope="col">Oude Cursuscode</th>
                            <th scope="col">Nieuwe naam</th>
                            <th scope="col">Nieuwe Cursuscode</th>
                            <th scope="col">Meer informatie</th>
                        </tr>
                    </thead>

                    <tbody id="myTable">
                            ${this._foundCourse.replacement.length > 1 ? html`  
                                <tr>
                                    <td>${this._foundCourse.name}</td>
                                    <td>${this._foundCourse.code}</td>
                                    <td>${this._foundCourse.replacement[0].name}<br>${this._foundCourse.replacement[1].name}</td>
                                    <td>${this._foundCourse.replacement[0].code}<br>${this._foundCourse.replacement[1].code}</td>
                                    <td><a href="/cursus/${this._foundCourse.code}">Bekijk</a></td>
                                </tr>
                                `: 
                                html` 
                                    <tr>
                                        <td>${this._foundCourse.name}</td>
                                        <td>${this._foundCourse.code}</td>
                                        <td>${this._foundCourse.replacement[0].name}</td>
                                        <td>${this._foundCourse.replacement[0].code}</td>
                                        <td><a href="/cursus/${this._foundCourse.code}">Bekijk</a></td>
                                    </tr>
                                `
                            }
                    </tbody>
                </table>
            </div>
        `
    }
 }

 window.customElements.define('search-script', SearchScript);