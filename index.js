import { selectClassName } from "./utils/helper.js";

const cardsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cardsContainer = document.getElementById("cards-container");
const shuffleButton = document.getElementById("shuffle");
const sortButton = document.getElementById("sort");

shuffleButton.addEventListener("click", shuffleCardsContainer);
sortButton.addEventListener("click", sortCardsContainer);

function sortCardsContainer() {
  // As I was doing this, I observed that I could do this in two ways

  /*
  First way: If we are ok with creating elements then we can 
  just clear cardsContainer and call initial setup.
  Here we assume, cardsData is initialy sorted
  */

  // cardsContainer.replaceChildren();
  // initialSetup();

  /*
  Second way: We need to sort the children of cardsContainer
  based on their textContent. I am using second way, as I am assuming initial array is not sorted
  and we do not want to create new elements and append it to the cards container.
  */

  const cardsNodes = document.querySelectorAll(".card");
  const cardsArray = Array.from(cardsNodes);

  cardsArray.sort((a, b) => +a.textContent - +b.textContent);

  cardsContainer.replaceChildren(...cardsArray);
}
function shuffleCardsContainer() {
  // function for shuffling cards
  /* 
  Here I am shuffling children of cards-container not just their content.
  So that their background color will stick to the respective number,
  as I am considering the individual child inside cards-container as a card and
  I am shuffling the cards as per the requirement.
  */
  const cardsNodes = document.querySelectorAll(".card");
  const cardsArray = Array.from(cardsNodes);

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
