const swiper = new Swiper('.sample-slider', {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
