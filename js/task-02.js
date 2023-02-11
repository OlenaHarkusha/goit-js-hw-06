const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const createList = function (items) {
  const list = items.map((item) => {
    const newEl = document.createElement("li");
    newEl.textContent = `${item}`;
    return newEl;
  });

  return document.querySelector("#ingredients").append(...list);
};

createList(ingredients);
