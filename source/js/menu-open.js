var menuButton = document.querySelector('.page-header__menu-button');
var nav = document.querySelector('.main-navigation');

menuButton.classList.remove('menu-button--nojs');
nav.classList.remove('main-navigation--nojs')

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button--close');
  nav.classList.toggle('main-navigation--open');
})
