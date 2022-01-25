import {LitElement, html, css} from 'lit';

class CustomNav extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
        
        `
    }

    render() {
        return html`
            <link href="styles.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
            <a class="navbar-brand" href="/">Groep Zero</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/voorstellen">Nieuw vak voorstellen</a></li>
                        <li class="nav-item"><a class="nav-link" href="/keuren">Keuren</a></li>
                        <li class="nav-item"><a class="nav-link" href="/login/inloggen">Login</a></li>
                    </ul>
                </div>
            </div>
            </nav>
        `
    }
}
window.customElements.define('custom-nav', CustomNav);