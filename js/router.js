import { loadLogin } from './modules/login/login.js';
// import { loadSignup } from './modules/signup/signup.js';
import { loadHome } from './modules/home/home.js';
import { loadHotels } from './modules/hotels/hotels.js';
// import { loadHotel } from './modules/hotel/hotel.js';
// import { loadHistory } from './modules/history/history.js';
// import { loadBook } from './modules/book/book.js';
import { loadMatches } from './modules/match/match.js';

let routes = {
    '/': () => {
        loadLogin();
    },
    'home': () => {
        loadHome();
    },
    'login': () => {
        loadLogin();
    },
    'signup': () => {
        // loadSignup();
    },
    'hotels': () => {
        loadHotels();
    },
    'hotel': (id) => {
        // loadHotel();
    },
    'history': () => {
        // loadHistory();
    },
    'book': () => {
        // loadBook();
    },
    'search': () => {
        loadMatches();
    },
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

let handleClick = (e) => {
    if (e.target.id === 'ckbox'){
        let x = document.getElementById("pass");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }      
    }
} 

window.addEventListener('locationchange', handleRoute());
window.addEventListener('hashchange', handleRoute());
window.addEventListener('load', handleRoute());
document.addEventListener('click', handleClick);