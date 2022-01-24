import { Router } from '@vaadin/router';
import '../components/cursus/cursus-div.js';
import '../components/layout/test-comp.js';
import '../components/searchfilter/home-table.js';
import '../components/aanpassen/vak-aanpassen';
import '../components/beoordelen/voorstel-beoordelen';
// import '../components/overzicht/vak-overzicht';
// import '../components/overzicht/voorstel-overzicht';
import '../components/keuren/keuren.js';
import '../components/aanmaken/voorstellen.js'

const outlet = document.querySelector('#main');
const router = new Router(outlet);

// Hier worden de componenten geladen
router.setRoutes([
    {path: '/', component: 'home-table'},
    {path: '/cursus/:code', component: 'cursus-div'},
    {path: '/vakAanpassen', component: 'vak-aanpassen'},
    {path: '/voorstelBeoordelen', component: 'voorstel-beoordelen'},
    // {path: '/voorstelOverzicht', component: 'voorstel-overzicht'},
    // {path: '/vakOverzicht', component: 'vak-overzicht'},
    {path: '/keuren', component: 'keuren-element'},
    {path: '/voorstellen', component: 'voorstellen-element'},
    {path: '(.*)', component: ''}
]);

export { router };