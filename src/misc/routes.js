import { Router } from '@vaadin/router';
import '../components/cursus/cursus-div.js';
import '../components/layout/test-comp.js';
import '../components/searchfilter/home-table.js'

const outlet = document.querySelector('#main');
const router = new Router(outlet);

// Hier worden de componenten geladen
router.setRoutes([
    {path: '/', component: 'test-comp'},
    {path: '/cursus/:code', component: 'cursus-div'},
    {path: '/home', component: 'home-table'},
    {path: '(.*)', component: ''}
]);

export { router };