import {LitElement, html, css} from 'lit';

class ArchiveButton extends LitElement {
    static get styles() {
        return css`
            button {
                width: 15%;
            }
        `;
    }

    render() {
        return html`
            <link href="styles.css" rel="stylesheet">
            <button
             @click=${() => this._newEvent('onArchive')} 
             type="button" 
             class="btn btn-warning">
                Archive
            </button>
        `
    }

    _newEvent(event) {
        this.dispatchEvent(new CustomEvent(event));
    }
}
window.customElements.define('archive-button', ArchiveButton);