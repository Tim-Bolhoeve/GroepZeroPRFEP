import {LitElement, html, css} from 'lit';

class CustomHeader extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            title: {
                type: String,
                attribute: true,
                reflect: false
            }
        };
    }

    render() {
        return html`
            <link href="styles.css" rel="stylesheet">
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2"><slot></slot></h1>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"></div>
                    </div>
                </div>
            </header>
        `
    }
}
window.customElements.define('custom-header', CustomHeader);