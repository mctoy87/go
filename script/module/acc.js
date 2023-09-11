const items = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__button');
const textWrapper = document.querySelectorAll('.faq__item_text-wrap');
const navBtn = document.querySelector('.navigation__link-order');
const modal = document.querySelector('.modal');


let heightWrapper = 0;
textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
})

buttons.forEach((btn, index) => {
  btn.addEventListener('click', ()=> {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        textWrapper[i].style.height =
          items[i].classList.contains('faq__item_active') ?
          '' : `${heightWrapper}px`;

        items[i].classList.toggle('faq__item_active');
        btn.matches('.faq__button_purple') ?
          btn.classList.add('faq__button_purple-active') :
          btn.classList.add('faq__button_white-active');
      } else {
        items[i].classList.remove('faq__item_active');
        textWrapper[i].style.height = '';
      }
    }
  });
});

navBtn.addEventListener('click', () => {
  modal.classList.add('modal_open');
});

modal.addEventListener('click', (e) => {
  if (e.target===modal || e.target.closest('.modal__close')) {
    modal.classList.remove('modal_open');
  }
});

