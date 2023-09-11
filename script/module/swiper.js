const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


swiper.slides.forEach(element => {
  element.style.display = 'flex';
});