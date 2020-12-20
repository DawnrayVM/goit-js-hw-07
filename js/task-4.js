// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const btns = document.querySelectorAll('#counter button');

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    const direction = this.dataset.action;
    const span = this.parentElement.querySelector('#value');
    let counterValue = Number(span.textContent);
    let newValue = 0;

    if (direction === 'decrement') {
      newValue = counterValue - 1;
      span.textContent = newValue;
    } else {
      newValue = counterValue + 1;
      span.textContent = newValue;
    }
  });
});
