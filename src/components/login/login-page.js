import {LitElement, html, css} from 'lit';

import '../layout/custom-header.js';

// https://vaadin.github.io/router/vaadin-router/demo/#vaadin-router-getting-started-demos

class LoginPage extends LitElement {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Login pagina (geen prioriteit)</custom-header>
        `
    }
}

window.customElements.define('login-page', LoginPage);