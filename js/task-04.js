let counterValue = 0;

const refs = {
  counterEl: document.querySelector("#value"),
  decrementBtn: document.querySelector(`[data-action="decrement"]`),
  incrementBtn: document.querySelector(`[data-action="increment"]`),
};

console.log(refs.counterEl, refs.decrementBtn, refs.incrementBtn);

function makeDecrement() {
  counterValue -= 1; 
  refs.counterEl.textContent = counterValue; 
}

function makeIncrement() {
  counterValue +=1; 
  refs.counterEl.textContent = counterValue; 
}

refs.decrementBtn.addEventListener("click", makeDecrement);
refs.incrementBtn.addEventListener("click", makeIncrement);








// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
