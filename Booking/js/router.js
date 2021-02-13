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
    'hotel/{id}': function() {
    },
    'history': function() {
    },
    'signout': function() {
    }
};


let handleRoute = () => {
    
    let loc = window.location;
    if(loc.substr(-1) === '/') {
        loc.substr(0, loc.length - 1);
    }

    let current = loc.hash || false;
    alert(current);
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