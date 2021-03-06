import {LitElement, html, css} from 'lit';

class CustomFooter extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
            :host {
                margin-top: auto !important;
            }
        `
    }

    render() {
        return html`
            <link href="styles.css" rel="stylesheet"/>
            <footer class="bg-dark py-4 mt-auto">
                <div class="container px-5">
                    <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Groep Zero 2021/2022</div></div>
                        <div class="col-auto">
                            <a class="link-light small" href="https://github.com/Tim-Bolhoeve/GroepZeroPRFEP">Github</a>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}
window.customElements.define('custom-footer', CustomFooter);