function editNav() {
  let x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const modalbg = document.querySelector('.bground');
const FormModalBtn = document.querySelectorAll('.form-modal-btn');
const closeFormModalBtn = document.querySelectorAll('.close');
const formData = document.querySelectorAll('.formData');
const modalConfirmation = document.querySelector('.confirmation-bground');
const closeConfirmationModalBtn = document.querySelectorAll(
  '.close-confirmation'
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

closeFormModalBtn.forEach((btn) =>
  btn.addEventListener('click', closeFormModal)
);

closeConfirmationModalBtn.forEach((btn) =>
  btn.addEventListener('click', closeConfirmationModal)
);

const first = document.querySelector('#first');
const firstError = document.querySelector('#first-error');

first.addEventListener('input', () => {
  if (/^[a-z ,.'-]+$/i.test(first.value)) {
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
  if (/^[a-z ,.'-]+$/i.test(last.value)) {
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
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email.value
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

birthdate.addEventListener('input', () => {
  if (new Date(birthdate.value) < new Date('2011-01-01')) {
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
  if (quantity.value < 50) {
    quantityError.style.display = 'none';
    quantity.classList.remove('invalid-input');
  } else {
    quantityError.style.display = 'block';
    quantity.classList.add('invalid-input');
  }
});

const allRadioBtn = document.querySelectorAll("input[type='radio']");
const errorRadio = document.querySelector('#error-radio');

allRadioBtn.forEach(item => {
  item.addEventListener('click', () => {
    const checkedRadioBtn = document.querySelectorAll("input[type='radio']:checked");

    if (checkedRadioBtn.length) {
      errorRadio.style.display = 'none';
    }
  })
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

const validate = () => {
  event.preventDefault();
  const form = document.querySelector('#form');
  const checkedRadioBtn = document.querySelectorAll("input[type='radio']:checked");

  if (
    !checkedRadioBtn.length ||
    !checkboxBtn.checked ||
    !(quantity.value < 50) ||
    !(new Date(birthdate.value) < new Date('2011-01-01')) ||
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email.value
    ) ||
    !/^[a-z ,.'-]+$/i.test(last.value) ||
    !/^[a-z ,.'-]+$/i.test(first.value)
  ) {
    checkedRadioBtn.length
      ? (errorRadio.style.display = 'none')
      : (errorRadio.style.display = 'block');

    checkboxBtn.checked
      ? (errorCheckbox.style.display = 'none')
      : (errorCheckbox.style.display = 'block');

    quantity.value < 50
      ? (quantityError.style.display = 'none')
      : (quantityError.style.display = 'block');

    new Date(birthdate.value) < new Date('2011-01-01')
      ? (birthdateError.style.display = 'none')
      : (birthdateError.style.display = 'block');

    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email.value
    )
      ? (emailError.style.display = 'none')
      : (emailError.style.display = 'block');

    /^[a-z ,.'-]+$/i.test(last.value)
      ? (lastError.style.display = 'none')
      : (lastError.style.display = 'block');

    /^[a-z ,.'-]+$/i.test(first.value)
      ? (firstError.style.display = 'none')
      : (firstError.style.display = 'block');

    return false;
  } else {
    modalbg.style.display = 'none';
    errorRadio.style.display = 'none';
    errorCheckbox.style.display = 'none';
    form.reset();

    launchConfirmationModal();
  }
};
