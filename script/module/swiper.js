const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      centeredSlidesBounds: true,
      // slidesPerView: 2,
      // spaceBetween: 20
    },
    480: {
      // slidesPerView: 3,
      // spaceBetween: 30
    },
    1380: {
      // centeredSlidesBounds: true,
      // slidesPerView: 4,
      // spaceBetween: 40
    }
  }
});


swiper.slides.forEach(element => {
  element.style.display = 'flex';
});

// const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// if(viewportWidth < 480) {
//   const slider = document.querySelectorAll('.reviews__item');
//   console.log(slider);
// }
// console.log(window.innerWidth);
// console.log(document.documentElement.clientWidth);