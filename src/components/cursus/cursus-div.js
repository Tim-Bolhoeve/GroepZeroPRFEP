import {LitElement, html, css} from 'lit';
import { router } from '../../misc/routes.js';

import './cursus-table.js';
import './archive-button.js';
import '../layout/custom-header.js';
import { courses } from '../../misc/courses.js';

// https://vaadin.github.io/router/vaadin-router/demo/#vaadin-router-getting-started-demos

class CursusDiv extends LitElement {
    constructor() {
        super();
        this.location = router.location;
    }

    static get properties() {
        return {
            location: Object
        }
    }

    connectedCallback() {
        super.connectedCallback();

        let paramList = this.location.params;
        let cursusCode = paramList.code;

        this._getCourseFromCode(cursusCode);
    }

    _archiveCourse() {
        //console.log("HELLO!");
    }

    // Pakt de eerst gevonden resultaat op
    _getCourseFromCode(code) {
        this._foundCourse = courses.find(course => course.code === code);
        this._replaceCourse = this._foundCourse.replacement[0];
    }

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
            <link href="styles.css" rel="stylesheet">
            <custom-header>Bezemvak ${this._foundCourse.code}</custom-header>
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