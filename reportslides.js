var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    965: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
    2460: {
      slidesPerView: 7,
    },
      }
});