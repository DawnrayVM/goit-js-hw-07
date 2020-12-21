// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

// 2 задание.Необходимо за одну операцию добавить,
// вы точно знаете ее и так же лучше использовать од н из методов перебора массива из 6го модуля.

// Рефакторинг кода //

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingridientsListRef = document.querySelector('#ingredients');
const liTitle = document.createElement('h2');
liTitle.textContent = 'Ингредиенты';
const itemsToInject = [];

const addIngr = ingredients.forEach(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  itemsToInject.push(liItem);
  return itemsToInject;
});

ingridientsListRef.append(liTitle, ...itemsToInject);

///// старый способ ///////

// const ingrList = document.querySelector('#ingredients');
// const title = document.createElement('h2');
// title.textContent = 'Ингредиенты';
// const addIngredients = array => {
//   const items = [];
//   for (let i = 0; i < array.length; i += 1) {
//     items.push(document.createElement('li'));
//     items[i].innerText = array[i];
//     ingrList.appendChild(items[i]);
//   }
//   return items;
// };
// ingrList.appendChild(title);
// const itemsToInsert = addIngredients(ingredients);
