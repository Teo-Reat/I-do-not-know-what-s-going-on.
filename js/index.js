var mainNavMenu = document.querySelector('.hidden-block');
var mainNavToggle = document.querySelector('.main-nav_toggle');

mainNavToggle.addEventListener('click', function (event) {
    event.preventDefault();
    mainNavMenu.classList.toggle('hidden-block');
});