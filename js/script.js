$(document).ready(function () {

  let menuButton = $('.menu-button');

  menuButton.on('click', function () {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });

});