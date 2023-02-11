const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputEl.classList.remove("valid", "invalid");
  event.currentTarget.value.length === Number(event.currentTarget.dataset.length) ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");
}
