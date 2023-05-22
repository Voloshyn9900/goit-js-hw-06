const categoriesListEl = document.querySelector("#categories"); // Находим список категорий по идентификатору

const categoriesItemsEl = categoriesListEl.querySelectorAll("li.item"); // Находим все элементы li.item в списке

console.log("Number of categories:", categoriesItemsEl.length); // Выводим количество категорий

categoriesItemsEl.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent; // Находим текст заголовка категории
  const categoryElements = item.querySelectorAll("li").length; // Находим количество элементов в категории

  console.log("\nCategory:", categoryTitle);
  console.log("Elements:", categoryElements);
});

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
