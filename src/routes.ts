import Navigo from 'navigo';

import { openRoute } from './commons/utils';
import { appController } from './controllers/app';
import { homeController } from './controllers/home';
import { pageController } from './controllers/page';
import { aboutController } from './controllers/about';

const navigo = new Navigo('/', { hash: true });

const appRoute = () => openRoute(navigo, 'app.html', 'ion-app', appController);
const homeRoute = () => openRoute(navigo, 'home.html', 'ion-router-outlet', homeController);
const pageRoute = (params: any) => openRoute(navigo, 'page.html', 'ion-router-outlet', pageController, params);
const aboutRoute = () => openRoute(navigo, 'about.html', 'ion-router-outlet', aboutController);

navigo.on({
    '/ionic-alpinejs-navigo': () => { appRoute().then(() => homeRoute()); },
    '/home': () => { appRoute().then(() => homeRoute()); },
    '/page/:name': (info: any) => { appRoute().then(() => pageRoute(info.data)); },
    'about': () => { appRoute().then(() => aboutRoute()); },
}).resolve();
