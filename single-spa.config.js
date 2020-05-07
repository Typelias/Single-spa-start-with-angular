import {registerApplication, start} from 'single-spa'


registerApplication(
    'navBar', 
    () => import('./src/navBar/navBar.app.js').then(mod => mod.navBar), 
    () => true);

registerApplication(
    // Name of application
    'home',
    // Loading function
    () => import('./src/home/home.app.js'),
    // Activity function
    (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home')
);

registerApplication(
    'angularJS', 
    () => import ('./src/angularJS/angularJS.app.js'), 
    pathPrefix('/angularJS')
);

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

start();