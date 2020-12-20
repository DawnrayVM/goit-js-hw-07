// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', event => {
  let length = inputRef.dataset.length;
  if (event.target.value.length <= length && event.target.value.length != 0) {
    inputRef.classList.add('valid');
    inputRef.classList.replace('invalid', 'valid');
  } else if (event.target.value.length === 0) {
    inputRef.classList.remove('invalid', 'valid');
  } else inputRef.classList.replace('valid', 'invalid');
});
