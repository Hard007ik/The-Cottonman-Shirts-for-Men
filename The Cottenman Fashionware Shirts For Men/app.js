
// when scroll down the change
window.onscroll = function () {
    const nav = document.querySelector('.div-nav');
    const cottonman = document.querySelector('#Cottonman');
    if (window.pageYOffset > 30) {
        nav.classList.add('scrolled');
        cottonman.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        cottonman.classList.remove('scrolled');
    }
};

