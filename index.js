import { selectClassName } from "./utils/helper.js";

const cardsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cardsContainer = document.getElementById("cards-container");
const shuffleButton = document.getElementById("shuffle");

shuffleButton.addEventListener("click", shuffleCardsContainer);

function shuffleCardsContainer() {
  // function for shuffling cards
  const cardNodes = document.querySelectorAll(".card");
  const cardsArray = Array.from(cardNodes);

  for (let idx = 0; idx < cardsArray.length; idx++) {
    const randomIdx = Math.floor(Math.random() * cardsArray.length);

    const tempCard = cardsArray[idx];
    cardsArray[idx] = cardsArray[randomIdx];
    cardsArray[randomIdx] = tempCard;
  }
  cardsContainer.replaceChildren(...cardsArray);
}

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
initialSetup(); // initial call
