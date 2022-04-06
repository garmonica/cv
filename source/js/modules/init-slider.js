/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const works = document.querySelector('.works__swiper');
let swiper;

const initSwiper = (slider) => {
  swiper = new Swiper(slider, {
    slidesPerView: 1,
    // freeMode: true,
    // effect: 'fade',
    loop: true,
    navigation: {
      prevEl: '.works__swiper-button-prev',
      nextEl: '.works__swiper-button-next',
    },
    pagination: {
      el: '.works__swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
  });
};

const initSlider = () => {
  if (!works) {
    return;
  }
  document.activeElement.blur();
  initSwiper(works);
};

export {initSlider};
