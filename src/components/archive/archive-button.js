import {LitElement, html, css} from 'lit';

class ArchiveButton extends LitElement {
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                attribute: true,
                reflect: true
            }
        }
    }

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
             @click=${() => {
                 if(this.disabled !== true) {
                     return this._newEvent('onArchive');
                 }
             }} 
             type="button" 
             ?disabled=${this.disabled}
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