const divBoxesEl = document.querySelector(`#boxes`);
const inputEl = document.querySelector(`input`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);

console.log(inputEl, createBtn, destroyBtn);

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  amount = inputEl.value;
  console.log(amount);
  const array = [];
  console.log(array);

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("div__color");
    divEl.style.width = 30 + i * 10 + "px";
    divEl.style.height = 30 + i * 10 + "px";
    divEl.style.backgroundColor = getRandomHexColor();

    array.push(divEl);
  }

  divBoxesEl.append(...array);
}

function destroyBoxes(e){
  divBoxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
