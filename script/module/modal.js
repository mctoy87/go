const modalInputTel = document.querySelector('.modal__input_tel');
const form = document.querySelector('.modal__form');
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

const telMask = new Inputmask('+7 (999)-999-99-99');
telMask.mask(modalInputTel);

const validate = new JustValidate('.modal__form');
validate
  .addField(modalInputTel, [
    {
      rule: 'required',
      errorMessage: 'Укажите телефон',
    },
    {
      validator(value) {
        const phone = modalInputTel.inputmask.unmaskedvalue();
        return !!(Number(phone) && phone.length === 10)
      },
      errorMessage: 'Телефон не корректный',
    }
  ])
  .addField('.modal__input_name', [
    {
      rule: 'required',
      errorMessage: 'Укажите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Не короче 2 символов',
    },
  ])
  .onSuccess(event => {
    const target = event.target;
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      name: target.name.value,
      tel: target.phone.value,
    })
    .then(response => {
      target.reset();
      modalTitle.textContent= `Спасибо ваша заяка принята под номером ${response.data.id}!`;
    })
    .catch(err => {
      console.warn(err);
      target.reset();
      modalTitle.textContent= 'Что-то пошло не так, попробуйте позже!'
    })
  });
