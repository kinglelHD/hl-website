console.log('Danke für den Aufwand (:');
console.log('tchncs-identity-proof-e64e95fd5554e454');

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