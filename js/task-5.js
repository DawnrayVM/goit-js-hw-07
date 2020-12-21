// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане
// должна отображаться строка 'незнакомец'.

// Посмотрите на метод trim

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  outputRef.textContent = event.target.value.trim();
  if (event.target.value.length === 0) {
    outputRef.textContent = 'незнакомец';
  }
});
