'use strict';

const form = document.querySelector('.header-form');
const input = document.querySelector('.header-input');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (input.value === '') errorMsg.style.opacity = 1;

  input.focus();

  setTimeout(function () {
    errorMsg.style.opacity = 0;
  }, 4000);
});
