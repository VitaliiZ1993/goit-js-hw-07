function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");

const input = controlsEl.children[0];
const createBtn = controlsEl.children[1];
const destroyBtn = controlsEl.children[2];

const boxesContainer =
  controlsEl.parentElement.nextElementSibling.firstElementChild;

const createBoxes = (amount) => {
  if (input.value >= 1 && input.value <= 100) {
    
    let boxesMarkup = "";
    let boxDimensions = 30;
    
    for (let i = amount; i > 0; i--) {
      boxesMarkup += `<div 
  style='width: ${boxDimensions}px; height: ${boxDimensions}px; background-color: ${getRandomHexColor()}'>
</div>
`;

      

      boxDimensions += 10;
    }

    boxesContainer.innerHTML = boxesMarkup;

    input.value = "";
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

createBtn.addEventListener("click", (event) => {
  createBoxes(Math.round(input.value));
});

destroyBtn.addEventListener("click", (event) => {
  destroyBoxes();
});