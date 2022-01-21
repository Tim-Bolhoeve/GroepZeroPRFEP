import { Router } from '@vaadin/router';
import '../components/cursus/cursus-div.js';
import '../components/layout/test-comp.js';
import '../components/searchfilter/home-table.js';
import '../components/searchfilter/search-script.js';

const outlet = document.querySelector('#main');
const router = new Router(outlet);

// Hier worden de componenten geladen
router.setRoutes([
    {path: '/', component: 'home-table'},
    {path: '/name=:name', component: 'search-script'},
    {path: '/cursus/:code', component: 'cursus-div'},
    {path: '(.*)', component: ''}
]);

export { router };