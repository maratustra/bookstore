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

    // Default parameters
    loop: false,

    slidesPerView: 4,
    spaceBetween: 26,

    breakpoints: {
      // when window width is >= 1200px
      1201: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      // when window width is >= 637px
      637: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      321: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'column',
        spaceBetween: 5,
        // centeredSlides: true,
        // centeredSlidesBounds: true
      },
      // 321: {
      //   slidesPerView: 1,
      //   spaceBetween: 5,
      //   centeredSlides: true,
      //   centeredSlidesBounds: true
      // },
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'column',
        spaceBetween: 5,
      },

    },

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

    // Default parameters
    loop: false,

    slidesPerView: 5,
    spaceBetween: 30,

    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 637px
      637: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      515: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      320: {
        slidesPerView: 1,
      },
    },

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
    });
  });

  $('.video-button1').on('click', function onYouTubeIframeAPIReady() {

    player1 = new YT.Player('player1', {
      height: '200',
      width: '100%',
      videoId: 'ZSabBy-pwsI',
    });
  });

  $('.video-button2').on('click', function onYouTubeIframeAPIReady() {

    player2 = new YT.Player('player2', {
      height: '200',
      width: '100%',
      videoId: 'bmocjC3484A',
    });
  });

  $('.video-button3').on('click', function onYouTubeIframeAPIReady() {

    player3 = new YT.Player('player3', {
      height: '200',
      width: '100%',
      videoId: 'F4wlXIx9koI',
    });

  });

  function videoPlay(event) {
    event.target.playVideo();
  };

  function videoPlay1(event) {
    event.target.playVideo();
  };

  function videoPlay2(event) {
    event.target.playVideo();
  };

  function videoPlay3(event) {
    event.target.playVideo();
  };

  // Модальное окно

  let modalButton = $('[data-toggle="modal"]');
  let closeModalButtonByClick = $('.modal__close');
  let closeModalButtonByEsc = $('[data-toggle="modal"]');
  let closeModalOverlay = $('.modal__overlay');

  modalButton.on('click', openModal);
  closeModalButtonByClick.on('click', closeModalByMouse);
  closeModalButtonByEsc.on('keydown', closeModalByEsc);
  closeModalOverlay.on('click', closeModalByMouse);

  function openModal() {

    let targetModal = $(this).attr('data-href');

    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
    $('body').addClass('modal-open');
  }

  function closeModalByMouse(event) {

    event.preventDefault();

    let modalOverlay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');

    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    $('body').removeClass('modal-open');
  }

  function closeModalByEsc(event) {

    if (event.key === 'Escape') {
      event.preventDefault();

      let modalOverlay = $('.modal__overlay');
      let modalDialog = $('.modal__dialog');

      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
      $('body').removeClass('modal-open');
    }
  }

  // Валидация

  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 18,
          maxlength: 18
        }
      },
      messages: {
        name: {
          required: "Укажите свое имя",
          minlength: "Укажите не менее 2 знаков"
        },
        email: {
          required: "Укажите адрес эл. почты",
          email: "Укажите ваш адрес эл.почты"
        },
        phone: {
          required: "Укажите ваш номер телефона",
          minlength: "Укажите не менее 11 цифр"
        },
      }
    });
  });

  $('.newsletter__subscribe').validate({
    rules: {
      mail: {
        required: true,
        mail: true
      },
    },
    messages: {
      mail: {
        required: "Укажите адрес эл. почты",
        email: "Укажите ваш адрес эл.почты"
      },
    }
  });


  // Маска для телефона

  $('.phone').mask('+0 (000) 000-00-00');

  let maskBehavior = function (value) {
    return value.replace(/\D/g, '').length === 11 ? '+0 (000) 000-00-00' : '+0 (000) 000-00-00';
  };

  $('.phone').mask(maskBehavior);


});

