
function toggleMenu() {
    var menuWrap = document.querySelector('.menu-wrap');
    var hamburger = document.querySelector('.c-hamburger');
    hamburger.classList.toggle('is-active');
    menuWrap.classList.toggle('show-menu');
};
