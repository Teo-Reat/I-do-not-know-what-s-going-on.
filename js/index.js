var mainNavMenu = document.querySelector('.hidden-block');
var mainNavToggle = document.querySelector('.main-nav_toggle');
var mainNavClose = document.querySelector('.menu-close');

mainNavToggle.addEventListener('click', function (event) {
    event.preventDefault();
    mainNavMenu.classList.toggle('hidden-block');
});

mainNavClose.addEventListener('click', function () {
    mainNavMenu.classList.add('hidden-block');
    console.log('Blya');
});