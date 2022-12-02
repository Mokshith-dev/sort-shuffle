import { selectClassName } from "./utils/helper.js";

const cardsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardsContainer = document.getElementById("cards-container");

function initialSetup() {
  const fragment = document.createDocumentFragment();
  for (let idx = 0; idx < cardsData.length; idx++) {
    const card = document.createElement("div");
    card.textContent = cardsData[idx];
    const backgroundColorClassName = selectClassName(cardsData[idx]);
    card.classList.add("card", backgroundColorClassName);
    fragment.appendChild(card);
  }
  cardsContainer.appendChild(fragment);
}
initialSetup();
