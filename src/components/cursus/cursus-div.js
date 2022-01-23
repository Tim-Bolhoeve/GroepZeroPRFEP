import {LitElement, html, css} from 'lit';
import { router } from '../../misc/routes.js';

import './cursus-table.js';
import '../archive/archive-button.js';
import '../layout/custom-header.js';

import { store } from '../archive/redux/reducer.js';
import { selectItemUsingCode } from '../archive/redux/selectors.archive.js';
import archive from '../archive/redux/actions.archive.js';

// https://vaadin.github.io/router/vaadin-router/demo/#vaadin-router-getting-started-demos

class CursusDiv extends LitElement {
    constructor() {
        super();

        this.location = router.location;
        this.disabled = false;
    }

    static get properties() {
        return {
            location: Object,
            disabled: {
                type: Boolean,
                attribute: false,
                reflect: false
            }
        }
    }

    connectedCallback() {
        super.connectedCallback();

        let paramList = this.location.params;
        this._cursusCode = paramList.code;

        let state = store.getState();
        if(selectItemUsingCode(state, this._cursusCode) !== undefined) {
            this._getCourseFromCode(this._cursusCode);  
        }
    }

    _archiveCourse() {
        store.dispatch(archive.archive(this._cursusCode));
        this._getCourseFromCode(this._cursusCode);

        this.disabled = true;
    }

    // Pakt de eerst gevonden resultaat op
    _getCourseFromCode(code) {
        let state = store.getState();

        this._foundCourse = selectItemUsingCode(state, code);
        this._replaceCourse = this._foundCourse.replacement;
        this.disabled = !this._foundCourse.active;
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
        if(this._foundCourse === undefined) {
            return html`
                <div id="cursussen" class="container">
                    <link href="styles.css" rel="stylesheet">
                    <h1>Cursus met code: ${this._cursusCode} niet gevonden</h1>
                </div>
            `
        }

        return html`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Bezemvak ${this._foundCourse.code}</custom-header>
            <div id="cursussen" class="container table-responsive">
                <h2>Periode: ${this._foundCourse.period}</h2>
                <cursus-table
                    title="Huidig"
                    .cursus=${this._foundCourse} 
                    .amount=""
                >
                </cursus-table>

                <cursus-table
                    title="Vervangend"
                    .cursus=${this._replaceCourse}
                    .amount=${this._replaceCourse.length}
                >
                </cursus-table>
                <archive-button
                    @onArchive=${this._archiveCourse}
                    ?disabled=${this.disabled}
                ></archive-button>
            </div>
        `;
    }
}

window.customElements.define('cursus-div', CursusDiv);