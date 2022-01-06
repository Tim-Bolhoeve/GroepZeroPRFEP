import {LitElement, html, css} from 'lit';
import './cursus-table.js';
import './archive-button.js';
import { courses } from './courses.js';

class CursusDiv extends LitElement {
    constructor() {
        super();
        // this.code = location.pathname.split('/')[1];
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        

        // this._getCourseFromCode(this.code);
        this._getCourseFromCode(urlParams.get('code'));
    }

    _archiveCourse() {
        //console.log("HELLO!");
    }

    // Pakt de eerst gevonden resultaat op
    _getCourseFromCode(code) {
        this._foundCourse = courses.find(course => course.code === code);
        this._replaceCourse = this._foundCourse.replacement[0];
    }

    // static get properties() {

    // }

    static get styles() {
        return css`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }
        `
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

            <div id="cursussen" class="container table-responsive">
                <cursus-table
                    title="Huidig"
                    .cursus=${this._foundCourse} 
                >
                </cursus-table>

                <cursus-table
                    title="Vervangend"
                    .cursus=${this._replaceCourse}
                >
                </cursus-table>
                <archive-button
                    @onArchive=${this._archiveCourse}
                ></archive-button>
            </div>
        `
    }
}

window.customElements.define('cursus-div', CursusDiv);