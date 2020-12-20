// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ingrList = document.querySelector('#ingredients');
const title = document.createElement('h2');
title.innerText = 'Ингредиенты';

const addIngredients = array => {
  const items = [];
  for (let i = 0; i < array.length; i += 1) {
    items.push(document.createElement('li'));
    items[i].innerText = array[i];
    ingrList.appendChild(items[i]);
  }
  return items;
};

//const insertNodes = array => array.forEach(item => ingrList.appendChild(item));
ingrList.appendChild(title);
const itemsToInsert = addIngredients(ingredients);

//insertNodes(itemsToInsert);
