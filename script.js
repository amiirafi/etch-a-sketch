let canvasSize = 500;
let row = 16;
let col = 16;
let res;
let input;

const container = document.querySelector(".container");

container.style.height = `${canvasSize}px`;
container.style.width = `${canvasSize}px`;

// function to remove all cells from canvas
function removeAllChild() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// function to generate random color
function genRandomColor() {
  let maxValue = 0xffffff;
  let randomNumber = Math.random() * maxValue;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randomColor = randomNumber.padStart(6, 0);
  return `#${randomColor.toUpperCase()}`;
}

const cellSize = document.querySelector(".size");
cellSize.addEventListener("click", () => {
  input = parseInt(prompt("Choose size (Beetween 1-100): "));
  if (input < 1 || input > 100) {
    alert("Invalid size, please try again.");
  } else {
    res = input;
  }
  removeAllChild();
  row = res;
  col = res;
  draw();
});

function draw() {
  for (let i = 0; i < row * col; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.height = `${canvasSize / row}px`;
    cell.style.width = `${canvasSize / col}px`;
    container.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = genRandomColor();
    });

    const clearCanvas = document.querySelector(".clear");
    clearCanvas.addEventListener("click", () => {
      cell.style.backgroundColor = "aliceblue";
    });
  }
}

draw();
