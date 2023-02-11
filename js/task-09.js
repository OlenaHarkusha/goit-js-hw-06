function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = document.body.style.backgroundColor;
}
