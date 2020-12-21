// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// 4 задание. Нет необходимости работать с массивом вообще, решение на много проще
// const btn = document.querySelectorAll('#counter button');
// const counter = document.querySelector('#value');

///////////////////////////////////////////////
// btn.addEventListener('click', event => {
//   console.log(event, event.target);
// let counterValue = Number(counter.textContent);
// let newValue = 0;
// if (direction === 'decrement') {
//   newValue = counterValue - 1;
//   span.textContent = newValue;
// } else {
//   newValue = counterValue + 1;
//   span.textContent = newValue;
// }
// });
////////////////////////////////////////////////

const counterDiv = document.querySelector('#counter');
const span = document.querySelector('#value');

counterDiv.addEventListener('click', event => {
  const direction = event.target.dataset.action;

  let spanValue = Number(span.textContent);
  let newValue = 0;

  if (direction === 'decrement') {
    newValue = spanValue - 1;
    span.textContent = newValue;
  } else {
    newValue = spanValue + 1;
    span.textContent = newValue;
  }
});
