import { Router } from '@vaadin/router';
import '../components/cursus/cursus-div.js';
import '../components/layout/test-comp.js';
import '../components/keuren/keuren.js';
import '../components/aanmaken/voorstellen.js'
import '../components/searchfilter/home-table.js';
import '../components/searchfilter/search-script.js';
import '../components/login/login-page.js';

const outlet = document.querySelector('#main');
const router = new Router(outlet);

// Hier worden de componenten geladen
router.setRoutes([
    {path: '/', component: 'home-table'},
    {path: '/:name', component: 'search-script'},
    {path: '/cursus/:code', component: 'cursus-div'},
    {path: '/home/keuren', component: 'keuren-element'},
    {path: '/home/voorstellen', component: 'voorstellen-element'},
    {path: '/login/inloggen', component: 'login-page'},
    {path: '(.*)', component: ''}
]);

export { router };
