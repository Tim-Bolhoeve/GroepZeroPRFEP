import {LitElement, html, css, unsafeCSS} from 'lit';

class CursusTable extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            cursus: {
                type: Object
            },
            title: {
                type: String,
                attribute: true,
                reflect: false
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
        this._tests = this.cursus.tests;

        this._rowspan = (this._tests.length > 1) ? (this._tests.length + 1) : 2;
    }

    static get styles() {
        // Haalt alle style op van de dom (workaround om bootstrap css op de component te krijgen)
        // https://stackoverflow.com/questions/55400222/how-do-you-use-bootstrap-with-lit-element
        // const { cssRules } = document.styleSheets[0]
        // const globalStyle = css([Object.values(cssRules).map(rule => 
        // rule.cssText).join('\n')])
        // return [
        // globalStyle,
        // css`
        //     .table {
        //         margin-bottom: 25px;
        //     }
        // `
        // ];
        return css`
            .table {
                margin-bottom: 25px;
            }
        `
    }

    render() {
        return html`
            <link href="styles.css" rel="stylesheet">
            <h3>${this.title}</h3>
            <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Naam</th>
                    <th scope="col">EC-cursus</th>
                    <th scope="col">Toets & Toetsvorm</th>
                    <th scope="col">Weging</th>
                    <th scope="col">EC-toets</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="${this._rowspan}" scope="row">${this.cursus.code}</td>
                    <td rowspan="${this._rowspan}">${this.cursus.name}</td>
                    <td rowspan="${this._rowspan}">${this.cursus.ec_course}</td>
                </tr>
                ${this._tests.map(test => html`
                        <tr>
                            <td scope="row">${test.name}</td>
                            <td>${test.weight}</td>
                            <td>${test.ec_test}</td>
                        </tr>
                `)}
            </tbody>
            </table>
        `
    }
 }

 window.customElements.define('cursus-table', CursusTable);