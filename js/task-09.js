const bodyEl = document.querySelector("body")
const spanEl = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

console.log(bodyEl, spanEl, changeBtn);

changeBtn.addEventListener("click", changeHexColor);

function changeHexColor(e) {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color
// и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.
