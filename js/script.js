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
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    },

    //effect: 'coverflow',
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

});
