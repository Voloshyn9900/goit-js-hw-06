const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const doneItemEl = ingredients.map((ingredientName) => {
  const ItemEl = document.createElement("li");
  ItemEl.textContent = ingredientName;
  ItemEl.classList.add("item");
  return ItemEl;
});


console.log(listEl);

listEl.append(...doneItemEl);

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.