import {LitElement, html, css} from 'lit';

import './cursus-table-home.js';
import '../layout/custom-header.js';

// https://vaadin.github.io/router/vaadin-router/demo/#vaadin-router-getting-started-demos

class HomeTable extends LitElement {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
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
            <custom-header>Zoeken / Filteren</custom-header>
            <div id="cursussen" class="container table-responsive">
                <cursus-table-home>
                </cursus-table-home>
            </div>
        `
    }
}

window.customElements.define('home-table', HomeTable);