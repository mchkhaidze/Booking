// import { loadHotels } from './modules/home/home.js';
// import { loadHotels } from './modules/login/login.js';
// import { loadHotels } from './modules/signup/signup.js';
import { loadHotels } from './modules/hotels/hotels.js';
// import { loadHotels } from './modules/hotel/hotel.js';
// import { loadHotels } from './modules/history/history.js';
// import { loadHotels } from './modules/signout/signout.js';

let routes = {
    '/': () => {
    },
    'home': () => {
        // getHomeTemplate();
        // loadHomeData();
        // document.getElementById('container').innerHTML = 'bla';
    },
    'login': () => {
    },
    'signup': () => {
    },
    'hotels': () => {
        loadHotels();
    },
    'hotel': (id) => {
        alert(id);
    },
    'history': () => {
    },
    'signout': () => {
    }
};


let handleRoute = () => {

    let current = window.location.hash || false;
    if (current !== false) {
        current = current.substring(1);
        if (current.substring(0, current.lastIndexOf('/')) === 'hotel'){
            let id = current.substring(current.lastIndexOf('/')+1)
            if (id) {
                routes['hotel'](id);
                return;
            }
        }
    }

    routes[current || '/']();
}

window.onpopstate = () => {
    handleRoute();
}

window.addEventListener('locationchange', handleRoute());
window.addEventListener('hashchange', handleRoute());
window.addEventListener('load', handleRoute());