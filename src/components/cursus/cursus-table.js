import {LitElement, html, css} from 'lit';

class CursusTable extends LitElement {
    constructor() {
        super();
        this.amount = 0;
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
            },
            amount: {
                type: Number,
                attribute: false,
                reflect: false
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();

        // Niet super handig dit maar het is wel een oplossing om ervoor te zorgen dat de tabel goed wordt neergezet
        // met een enkel object of met een array van meerderen
        if(this.amount > 1) {
            let longest = 0;
            this.cursus.forEach(item => {
                if(item.tests.length > longest) {
                    longest = item.tests.length;
                }
            });
            this._rowspan = longest + 1;
        }
        else {
            this._cursus = (Array.isArray(this.cursus)) ? this.cursus[0] : this.cursus;
            this._tests = (Array.isArray(this.cursus)) ? this.cursus[0].tests : this.cursus.tests;
            this._rowspan = (this._tests.length > 1) ? (this._tests.length + 1) : 2;
        }
    }

    static get styles() {
        return css`
            .table {
                margin-bottom: 25px;
            }
        `
    }

    render() {
        let tableRows;
        if(this.amount > 1) {
            tableRows = html`
                ${this.cursus.map(cursus => html`
                    <tr>
                        <td rowspan="${this._rowspan}" scope="row">${cursus.code}</td>
                        <td rowspan="${this._rowspan}">${cursus.name}</td>
                        <td rowspan="${this._rowspan}">${cursus.ec_course}</td>
                    </tr>
                    ${cursus.tests.map(test => html`
                        <tr>
                            <td scope="row">${test.name}</td>
                            <td>${test.weight}</td>
                            <td>${test.ec_test}</td>
                        </tr>
                    `)}
                `)}
            `
        }
        else {
            tableRows = html`
             <tr>
                    <td rowspan="${this._rowspan}" scope="row">${this._cursus.code}</td>
                    <td rowspan="${this._rowspan}">${this._cursus.name}</td>
                    <td rowspan="${this._rowspan}">${this._cursus.ec_course}</td>
                </tr>
                ${this._tests.map(test => html`
                        <tr>
                            <td scope="row">${test.name}</td>
                            <td>${test.weight}</td>
                            <td>${test.ec_test}</td>
                        </tr>
                `)} 
            `
        }

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
                ${tableRows}
            </tbody>
            </table>
        `
    }
 }

 window.customElements.define('cursus-table', CursusTable);