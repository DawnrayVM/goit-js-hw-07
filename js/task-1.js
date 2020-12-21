///Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// 1 задание.Обращение лучше через первого и последнего ребенка и сократить код.Можно обойтись без h2.

// const liItems = [...document.querySelectorAll('li.item')];
// console.log(`В списке ${liItems.length} категории`);

// const allMappedItems = liItems.map(liItem => {
//   const title = liItem.querySelector('h2');
//   const list = liItem.querySelectorAll('li');
//   return { title, list };
// });

// console.log(`Категория: ${allMappedItems[0].title.textContent}\nКоличество элементов: ${allMappedItems[0].list.length}`);
// console.log(`Категория: ${allMappedItems[1].title.textContent}\nКоличество элементов: ${allMappedItems[1].list.length}`);
// console.log(`Категория: ${allMappedItems[2].title.textContent}\nКоличество элементов: ${allMappedItems[2].list.length}`);

const list = [...document.querySelectorAll('.item')];

const mappedList = list.map(li => {
  const numberOfElements = li.lastElementChild.children.length;
  const liTitle = li.firstElementChild.textContent;
  return console.log(`Категория: ${liTitle}\nКоличество элементов: ${numberOfElements}`);
});
