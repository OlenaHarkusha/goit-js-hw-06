const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені");
  }
  const formElements = {
    email: email.value,
    password: password.value,
  };

  console.log(formElements);
  event.currentTarget.reset();
}
