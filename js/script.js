// Лайки в разделе Рекомендации
const likes = document.querySelectorAll('.recommended-card__heart');

likes.forEach(like => {
  like.addEventListener('click', () => {

    if (!like.classList.contains('active')) like.classList.add('active');
    else like.classList.remove('active');
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
    },
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
const menuBlock = document.querySelector('.navbar-bottom');
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.navbar-top__close');

const menuSwitcher = () => {
  menuBlock.classList.toggle('navbar-bottom--visible');
  closeButton.classList.toggle('navbar-bottom--visible--button');
  menuButton.classList.toggle('navbar-top--hidden');
};

menuButton.addEventListener('click', () => {
  menuSwitcher();
});

closeButton.addEventListener('click', () => {
  menuSwitcher();
});


// Видео с Youtube
const players = document.querySelectorAll('.players');
const videoPlayBtns = document.querySelectorAll('.video-button');

const onYouTubeIframeAPIReady = (player, height, width = '100%', videoID) => {
  player = new YT.Player(player, {
    height: height,
    width: width,
    videoId: videoID,
  });
};

videoPlayBtns.forEach(videoPlay => {
  videoPlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('video-button0')) onYouTubeIframeAPIReady('player', '380', '100%', 'tm5_NxjUPe4');
    else if (e.target.classList.contains('video-button1')) onYouTubeIframeAPIReady('player1', '200', '100%', 'ZSabBy-pwsI');
    else if (e.target.classList.contains('video-button2')) onYouTubeIframeAPIReady('player2', '200', '100%', 'bmocjC3484A');
    else if (e.target.classList.contains('video-button3')) onYouTubeIframeAPIReady('player3', '200', '100%', 'F4wlXIx9koI');
  });
});


// Модальное окно
const callModalButtons = document.querySelectorAll('[data-toggle="modal"]');
const closeModalBtn = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');
const modalDialog = document.querySelector('.modal__dialog');


const switchModal = () => {
  modalOverlay.classList.toggle('modal__overlay--visible');
  modalDialog.classList.toggle('modal__dialog--visible');
  document.querySelector('body').classList.toggle('modal-open');
};


callModalButtons.forEach(button => {
  button.addEventListener('click', switchModal);

  button.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      switchModal();
    }
  });
});

closeModalBtn.addEventListener('click', switchModal);
modalOverlay.addEventListener('click', switchModal);


// Валидация
const forms = document.querySelectorAll('form');
const userInput = document.querySelector('input[type="text"]');
const emailInputs = document.querySelectorAll('input[type="email"]');
const phoneInput = document.querySelector('input[type="tel"]');
const messageInput = document.querySelector('.modal__message');
const statusBlock = document.createElement('div');

const userValidation = (input) => {
  if (/[^а-яА-Я\s-]+$/g.test(input.value)) {
    input.value = input.value.replace(/[^а-яА-Я\s-]+$/g, '');
  } else if (/([\s-])\1/g.test(input.value)) {
    input.value = input.value.replace(/([\s-])\1/g, '');
  } else if (/-[а-яё]/g.test(input.value)) {
    input.value = input.value.replace(/-[а-яё]/g, $0 => $0.toUpperCase());
  } else if (input.value.length > 0) {
    input.value =
      input.value
        .split(' ')
        .map(item => item.length > 0 ? item[0].toUpperCase() + item.substring(1) : '')
        .join(' ');
  }
};

const emailValidation = (input) => {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi.test(input.value)) {
    input.value = input.value.trim().replace(/\s+/g, " ");
  } else {
    input.value = input.value.replace(/[^a-z0-9\+\.\-@]+/g, "");
  }
};

const phoneValidation = (input) => {
  if (/[^\d+]/g.test(input.value)) {
    input.value = input.value.replace(/[^\d+]/g, "");
  } else if (input.value.length >= 11) {
    input.value = input.value.trim().replace(/\s+/g, " ");
  }
};

const messageValidation = (input) => {
  if (/[^а-яА-Я\s._^%$#!?~@,:;()"-]$/gu.test(input.value)) {
    input.value = input.value.replace(/[^а-яА-Я\s._^%$#!?~@,:;()"-]$/gu, "");
  } else {
    input.value = input.value.trim().replace(/\s+/g, " ");
  }
};

const submitForm = form => {
  statusBlock.textContent = 'Спасибо! Мы свяжемся с вами';
  statusBlock.style.color = 'white';
  form.append(statusBlock);
};


forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      submitForm(e.target);
      setTimeout(() => {
        form.reset();
        statusBlock.textContent = '';
      }, 2500);
    } else {
      statusBlock.textContent = "Введите данные в правильном формате";
      statusBlock.style.color = 'red';
      form.append(statusBlock);
    }
  });

  userInput.addEventListener('input', (event) => {
    userValidation(event.target);
  });

  emailInputs.forEach((eachEmailInput) => {
    eachEmailInput.addEventListener('input', (event) => {
      emailValidation(event.target);
    });
  });

  phoneInput.addEventListener('input', (event) => {
    phoneValidation(event.target);
  });

  messageInput.addEventListener('input', (event) => {
    messageValidation(event.target);
  });
});
