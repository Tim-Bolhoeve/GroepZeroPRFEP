import {LitElement, html, css, unsafeCSS} from 'lit';
import { courses } from '../../misc/courses.js';

class CursusTableHome extends LitElement {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    static get styles() {
        return css`
        .blankcell {
            background: none!important; 
        }
      
        thead {
            background-color:  #5bc0de;
            color: black;
        }
      
        tr:hover{
            background-color:  #FFFFCC;
        }
        `
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

            <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th scope="col">Oude naam</th>
                    <th scope="col">Oude Curuscode</th>
                    <th scope="col">Nieuwe naam</th>
                    <th scope="col">Nieuwe Cursuscode</th>
                    <th scope="col">Link(s)</th>
                </tr>
            </thead>
            <tbody id="myTable">
                ${courses.map(vak => html`
                    ${vak.replacement.length > 1 ? html`  
                        <tr>
                            <td>${vak.name}</td>
                            <td>${vak.code}</td>
                            <td>${vak.replacement[0].name}<br>${vak.replacement[1].name}</td>
                            <td>${vak.replacement[0].code}<br>${vak.replacement[1].code}</td>
                            <td><a href="/cursus/${vak.code}">Bekijk</a></td>
                        </tr>
                        `: 
                        html` 
                            <tr>
                                <td>${vak.name}</td>
                                <td>${vak.code}</td>
                                <td>${vak.replacement[0].name}</td>
                                <td>${vak.replacement[0].code}</td>
                                <td><a href="/cursus/${vak.code}">Bekijk</a></td>
                            </tr>
                        `
                    }
                `)}
            </tbody>
            </table>
        `
    }
 }

 window.customElements.define('cursus-table-home', CursusTableHome);