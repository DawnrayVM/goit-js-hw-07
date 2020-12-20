// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при
// перетаскивании ползунка будет меняться размер текста.
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.setAttribute('min', '1');
inputRef.setAttribute('max', '72');

inputRef.addEventListener('input', event => {
  textRef.setAttribute('style', `font-size: ${event.target.value}px;`);
  // console.log(event.target.value);
});
