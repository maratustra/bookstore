document.addEventListener('DOMContentLoaded', function () {

  // Лайки в разделе Рекомендации

  let like = document.getElementsByClassName("recommended-card__heart");
  console.log(like);


  [].forEach.call(like, function (elem) {
    console.log(elem);
    elem.addEventListener('click', function (e) {
      console.log(e);
      e.preventDefault();

      if (!this.classList.contains('active'))
        this.classList.add('active');
      else
        this.classList.remove('active');
    })
  });

  // Слайдер раздел Bookshelf

  const bookshelfSwiper = new Swiper('.bookshelf-slider', {

    loop: false,

    // Кнопки слайдера
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },

    // Эффект 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

    // Keyboard Control Parameters
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // Слайдер раздел Unpublished

  const unpublishedSwiper = new Swiper('.unpublished-slider', {

    loop: false,

    // Кнопки слайдера
    navigation: {
      nextEl: '.unpublished-slider__button--next',
      prevEl: '.unpublished-slider__button--prev',
    },

    // Эффект 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

    // Keyboard Control Parameters
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // Мобильное меню

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
