let canvasSize = 500;
let row = 16;
let col = 16;

const container = document.querySelector(".container");

container.style.height = `${canvasSize}px`;
container.style.width = `${canvasSize}px`;

for (let i = 0; i < row * col; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.height = `${canvasSize / row}px`;
  cell.style.width = `${canvasSize / col}px`;
  container.appendChild(cell);

  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });

  const clearCanvas = document.querySelector(".clear");
  clearCanvas.addEventListener("click", () => {
    cell.style.backgroundColor = "aliceblue";
  });
}
