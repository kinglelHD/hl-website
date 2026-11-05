console.log('tchncs-identity-proof-007aa76549a03e6c');

let time

window.onscroll = function (e) {
    if (window.scrollY > 0) {
        time = 0
        document.getElementById('scroll-button').style.display = 'block'
    }
};

setInterval(function() {
    time++
    if (time > 5 || window.scrollY == 0) {
        document.getElementById('scroll-button').style.display = 'none'
    }
}, 500)