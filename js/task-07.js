const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", changeFontSize);

console.dir(inputEl);

function changeFontSize(e) {
    console.log(e.currentTarget.value);
    spanEl.style.fontSize = e.currentTarget.value + "px";
}