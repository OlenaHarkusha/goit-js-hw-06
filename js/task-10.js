function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateClick);
destroyBtn.addEventListener("click", onDestroyClick);

function onCreateClick() {
  const numberOfBoxes = Number(input.value);
  let boxes = [];

  for (let i = 0; i < numberOfBoxes; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }
  console.log(boxes);

  boxesEl.append(...boxes);
}

function onDestroyClick() {
  boxesEl.innerHTML = "";
}
