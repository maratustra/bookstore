$(document).ready(function () {

  let menuButton = $('.menu-button');
  let closeButton = $('.navbar-top__close');

  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
    $('.navbar-top__close').toggleClass('navbar-bottom--visible--button');
    $('.menu-button').toggleClass('navbar-top--hidden');
  });

  closeButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
    $('.navbar-top__close').toggleClass('navbar-bottom--visible--button');
    $('.menu-button').toggleClass('navbar-top--hidden');
  });

});

let like = document.querySelector('favorites');
like.addEventListener('click', () =>
  like.classList.toggle('favorites-active'));

let supLike = document.querySelector('heart-icon');
supLike.addEventListener('click', () =>
  supLike.classList.toggle('heart-icon-active'));