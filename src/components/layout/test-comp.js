import {LitElement, html, css} from 'lit';

class TestComp extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
        
        `
    }

    render() {
        return html`
            <h1>Hello</h1>
        `
    }
}
window.customElements.define('test-comp', TestComp);