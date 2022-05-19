const x = document.getElementById('myTopnav');
function editNav() {
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
const nav = document.getElementById('nav');
nav.addEventListener('click', () => {
  editNav();
});

// Open close form modal

const modalbg = document.querySelector('.bground');
const FormModalBtn = document.querySelectorAll('.form-modal-btn');
const closeFormModalBtn = document.querySelectorAll('.close');
const modalConfirmation = document.querySelector('.confirmation-bground');
const closeConfirmationModalBtn = document.querySelectorAll(
  '.close-confirmation',
);

const launchFormModal = () => {
  modalbg.style.display = 'block';
};

const closeFormModal = () => {
  modalbg.style.display = 'none';
};

const closeConfirmationModal = () => {
  modalConfirmation.style.display = 'none';
};

const launchConfirmationModal = () => {
  modalConfirmation.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

FormModalBtn.forEach((btn) => btn.addEventListener('click', launchFormModal));

closeFormModalBtn.forEach((btn) => btn.addEventListener('click', closeFormModal));

closeConfirmationModalBtn.forEach((btn) => btn.addEventListener('click', closeConfirmationModal));

// Form validation with input

const first = document.querySelector('#first');
const firstError = document.querySelector('#first-error');

first.addEventListener('input', () => {
  const firstValueTrim = first.value.trim();

  if (/^[a-z ,.'-]+$/i.test(firstValueTrim) && firstValueTrim.length >= 2) {
    firstError.style.display = 'none';
    first.classList.remove('invalid-input');
  } else {
    firstError.style.display = 'block';
    first.classList.add('invalid-input');
  }
});

const last = document.querySelector('#last');
const lastError = document.querySelector('#last-error');

last.addEventListener('input', () => {
  const lastValueTrim = last.value.trim();

  if (/^[a-z ,.'-]+$/i.test(lastValueTrim) && lastValueTrim.length >= 2) {
    lastError.style.display = 'none';
    last.classList.remove('invalid-input');
  } else {
    lastError.style.display = 'block';
    last.classList.add('invalid-input');
  }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

email.addEventListener('input', () => {
  if (
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
      email.value,
    )
  ) {
    emailError.style.display = 'none';
    email.classList.remove('invalid-input');
  } else {
    emailError.style.display = 'block';
    email.classList.add('invalid-input');
  }
});

const birthdate = document.querySelector('#birthdate');
const birthdateError = document.querySelector('#birthdate-error');
const dateNow = new Date();
const dateNowParse = new Date(dateNow.setFullYear(dateNow.getFullYear() - 10));

birthdate.addEventListener('input', () => {
  if (new Date(birthdate.value) < dateNowParse && new Date(birthdate.value) > new Date('1930/01/01')) {
    birthdateError.style.display = 'none';
    birthdate.classList.remove('invalid-input');
  } else {
    birthdateError.style.display = 'block';
    birthdate.classList.add('invalid-input');
  }
});

const quantity = document.querySelector('#quantity');
const quantityError = document.querySelector('#quantity-error');

quantity.addEventListener('input', () => {
  if (quantity.value < 50 && quantity.value >= 0 && Number(quantity.value) > 0) {
    quantityError.style.display = 'none';
    quantity.classList.remove('invalid-input');
  } else {
    quantityError.style.display = 'block';
    quantity.classList.add('invalid-input');
  }
});

const allRadioBtn = document.querySelectorAll("input[type='radio']");
const errorRadio = document.querySelector('#error-radio');

allRadioBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const checkedRadioBtn = document.querySelectorAll("input[type='radio']:checked");

    if (checkedRadioBtn.length) {
      errorRadio.style.display = 'none';
    }
  });
});

const checkboxBtn = document.querySelector('#checkbox1');
const errorCheckbox = document.querySelector('#error-checkbox');

checkboxBtn.addEventListener('click', () => {
  if (checkboxBtn.checked) {
    errorCheckbox.style.display = 'none';
    checkboxBtn.classList.remove('invalid-input');
  } else {
    errorCheckbox.style.display = 'block';
    checkboxBtn.classList.add('invalid-input');
  }
});

// Form Validation when click on submit

const validate = (event) => {
  event.preventDefault();
  const form = document.querySelector('#form');
  const checkedRadioBtn = document.querySelectorAll("input[type='radio']:checked");
  const radioBtn = document.querySelectorAll("input[type='radio']");
  const firstValueTrim = first.value.trim();
  const lastValueTrim = last.value.trim();

  if (checkedRadioBtn.length) {
    errorRadio.style.display = 'none';
    radioBtn[0].classList.remove('invalid-input');
    radioBtn[0].classList.remove('error');
  } else {
    errorRadio.style.display = 'block';
    radioBtn[0].classList.add('error');
    radioBtn[0].classList.add('invalid-input');
  }

  if (checkboxBtn.checked) {
    errorCheckbox.style.display = 'none';
    checkboxBtn.classList.remove('invalid-input');
    checkboxBtn.classList.remove('error');
  } else {
    errorCheckbox.style.display = 'block';
    checkboxBtn.classList.add('error');
    checkboxBtn.classList.add('invalid-input');
  }

  if (quantity.value < 50 && quantity.value >= 0 && typeof quantity.value === 'number') {
    quantityError.style.display = 'none';
    quantity.classList.remove('invalid-input');
    quantity.classList.remove('error');
  } else {
    quantityError.style.display = 'block';
    quantity.classList.add('error');
    quantity.classList.add('invalid-input');
  }

  if (new Date(birthdate.value) < dateNowParse && new Date(birthdate.value) > new Date('1930/01/01')) {
    birthdateError.style.display = 'none';
    birthdate.classList.remove('invalid-input');
    birthdate.classList.remove('error');
  } else {
    birthdateError.style.display = 'block';
    birthdate.classList.add('error');
    birthdate.classList.add('invalid-input');
  }

  if (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(email.value)) {
    emailError.style.display = 'none';
    email.classList.remove('invalid-input');
    email.classList.remove('error');
  } else {
    emailError.style.display = 'block';
    email.classList.add('error');
    email.classList.add('invalid-input');
  }

  if (/^[a-z ,.'-]+$/i.test(lastValueTrim) && lastValueTrim.length >= 2) {
    lastError.style.display = 'none';
    last.classList.remove('error');
    last.classList.remove('invalid-input');
  } else {
    lastError.style.display = 'block';
    last.classList.add('error');
    last.classList.add('invalid-input');
  }

  if (/^[a-z ,.'-]+$/i.test(firstValueTrim) && firstValueTrim.length >= 2) {
    firstError.style.display = 'none';
    first.classList.remove('error');
    first.classList.remove('invalid-input');
  } else {
    firstError.style.display = 'block';
    first.classList.add('error');
    first.classList.add('invalid-input');
  }

  const errors = document.querySelectorAll('.error');

  if (errors.length === 0) {
    modalbg.style.display = 'none';
    errorRadio.style.display = 'none';
    errorCheckbox.style.display = 'none';
    form.reset();
    launchConfirmationModal();
  }
};

const submitBtn = document.querySelector('#submit-button');

submitBtn.addEventListener('click', (e) => {
  validate(e);
});
