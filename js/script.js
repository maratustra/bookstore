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
      disabledClass: 'swiper-button-disabled',
    },

    // Эффект 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

    // Параметры кнопок слайдера
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
      disabledClass: 'unpublished-slider-disabled',
    },

    // Эффект 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

    // Параметры кнопок слайдера
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

  // Видео с Youtube

  let player;
  let player1;
  let player2;
  let player3;

  $('.video-button').on('click', function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
      height: '380',
      width: '100%',
      videoId: 'tm5_NxjUPe4',
      events: {
        'onReady': videoPlay,
      }
    });

    player1 = new YT.Player('player1', {
      height: '200',
      width: '100%',
      videoId: 'ZSabBy-pwsI',
      events: {
        'onReady': videoPlay1,
      }
    });

    player2 = new YT.Player('player2', {
      height: '200',
      width: '100%',
      videoId: 'bmocjC3484A',
      events: {
        'onReady': videoPlay2,
      }
    });

    player3 = new YT.Player('player3', {
      height: '200',
      width: '100%',
      videoId: 'F4wlXIx9koI',
      events: {
        'onReady': videoPlay3,
      }
    });

  });

  function videoPlay(event) {
    event.target.playVideo();
  }

  function videoPlay1(event) {
    event.target.playVideo();
  }

  function videoPlay2(event) {
    event.target.playVideo();
  }

  function videoPlay3(event) {
    event.target.playVideo();
  }

});

