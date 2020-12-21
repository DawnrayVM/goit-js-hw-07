// TODO

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes
const divContolsRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');

const randomRGB = () => Math.floor(Math.random() * 254);
// const divResize = (newDivRef.);
let amount;
const inputRef = document.querySelector('#controls input');

divContolsRef.addEventListener('click', event => {
  amount = event.target.value;
  console.log(event.target.value);
});

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const newDivRef = document.createElement('div');
    const r = randomRGB();
    const g = randomRGB();
    const b = randomRGB();
    let width = 30;
    let height = 30;
    newDivRef.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b}); width: ${width}px; height: ${height}px;`);
    boxesRef.appendChild(newDivRef);
  }
};

createBoxes(3);
