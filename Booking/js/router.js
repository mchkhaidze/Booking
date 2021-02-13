import { bla } from './home.js';
// import * as Login from import Login from "/modules/login/login.js";
// import SignUp from "signup.js";
// import Hotels from "hotels.js";
// import Hotel from "hotel.js";
// import History from "history.js";
// import SignOut from "signout.js";
// header("Access-Control-Allow-Origin: *");
alert("here");
// bla();

let routes = {
    '/': () => {
    },
    'home': () => {
        // gettemplate();
        // load();
        alert(1);
        document.getElementByClassName('container').innerHTML = 'bla';
    },
    'login': () => {
    },
    'signup': () => {
    },
    'hotels': () => {
    },
    'hotel/{id}': (id) => {
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
    }
    routes[current || '/']();
}

window.onpopstate = () => {
    handleRoute();
}

window.addEventListener('locationchange', handleRoute());
window.addEventListener('hashchange', handleRoute());
window.addEventListener('load', handleRoute());