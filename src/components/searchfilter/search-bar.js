import {LitElement, html, css} from 'lit';

import '../layout/custom-header.js';

// https://vaadin.github.io/router/vaadin-router/demo/#vaadin-router-getting-started-demos

class SearchBar extends LitElement {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    static get styles() {
        return css`
        `
    }

    render() {
        // form laten werken met search script ipv URL 

        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <section class="py-4" id="features">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-10">
                        <br>
                        <form action="/">
                            <div style="display: inline-block;">
                                <input type="text" class="form-control" placeholder="Zoeken op oude naam..">
                            </div>
                            <div style="display: inline-block;">
                                <button class="btn btn-outline-primary" type="submit">Zoeken</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

window.customElements.define('search-bar', SearchBar);