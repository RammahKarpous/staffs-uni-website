// Slider functionality
let headerSwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: { delay: 3000 },
  fadeEffect: { crossFade: true },

  // If we need pagination
  pagination: { el: '.swiper-pagination', },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});