// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// 6 задание. Слушателю необходимо передать имя функции, а не полностью ее выполнение.

const inputRef = document.querySelector('#validation-input');

const validation = () => {
  if (inputRef.value.length <= inputRef.dataset.length && inputRef.value.length != 0) {
    inputRef.classList.add('valid');
    inputRef.classList.replace('invalid', 'valid');
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid', 'valid');
  } else inputRef.classList.replace('valid', 'invalid');
};

inputRef.addEventListener('change', event => validation());

// inputRef.addEventListener('change', event => {
//   let length = inputRef.dataset.length;
//   if (event.target.value.length <= length && event.target.value.length != 0) {
//     inputRef.classList.add('valid');
//     inputRef.classList.replace('invalid', 'valid');
//   } else if (event.target.value.length === 0) {
//     inputRef.classList.remove('invalid', 'valid');
//   } else inputRef.classList.replace('valid', 'invalid');
// });

// console.log(inputRef.value.length);
