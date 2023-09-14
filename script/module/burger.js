
const btn = document.querySelector('.navigation__menu-btn');
const popup = document.querySelector('.popup');
const burger = document.querySelector('.navigation__list').cloneNode(true);
const call = document.querySelector('.navigation__order-wrapper');

const duration = 700;
let distance = document.documentElement.scrollWidth;


const renderPopup = () => {
  if(document.documentElement.scrollWidth < 480) {
    call.classList.remove('display_none');
    burger.append(call);
  }
  popup.appendChild(burger);
};

renderPopup();

const openBurger =(duration, callback) => {
  let startAnimation = NaN;
  requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;
    const progress = (timestamp - startAnimation) / duration;
    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  });
};


const closeBurger =(duration, callback) => {
  let startAnimation = NaN;

  requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const progress = (timestamp - startAnimation) / duration;

    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  });
}

// При клике на иконку burger вызываем ф-ию openBurger
btn.addEventListener("click", (e) => {
  if(btn.classList.contains('navigation__menu-btn_active')){
    console.log('УРАА');
    btn.classList.remove('navigation__menu-btn_active')
    closeBurger(duration, (progress) => {
      const left = distance - progress * distance;
      popup.style.transform = `translateX(${left}px)`;
    });
  } else {
    btn.classList.add('navigation__menu-btn_active');
    openBurger(duration, (progress) => {
      const left = progress * distance;
      popup.style.transform = `translateX(${left}px)`;
    });
  }
});
// При клике на ссылки в бургер меню вызываем ф-ию closeBurger
burger.addEventListener('click', (e) => {
  if (e.target.matches('.navigation__link')) {
    closeBurger(duration, (progress) => {
    const left = distance - progress * distance;
    popup.style.transform = `translateX(${left}px)`;
  });
  }
});