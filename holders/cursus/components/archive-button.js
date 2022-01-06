import {LitElement, html, css} from 'lit';

class ArchiveButton extends LitElement {
    static get styles() {
        // // Haalt alle style op van de dom (workaround om bootstrap css op de component te krijgen)
        // // https://stackoverflow.com/questions/55400222/how-do-you-use-bootstrap-with-lit-element
        // const { cssRules } = document.styleSheets[0]
        // const globalStyle = css([Object.values(cssRules).map(rule => 
        // rule.cssText).join('\n')])
        // return [
        // globalStyle,
        // css`
            
        // `
        // ];
        return css`
        
        `;
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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