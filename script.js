const container = document.querySelector(".container");
const btn = document.querySelector("button");

let resolution = 40;

createGrid(16);

btn.addEventListener("click", () => {
  resolution = prompt("Choose size of grid", 20);
  if (resolution > 100) {
    return alert("Sorry, the sizes is too big. Use less then 100");
  }
  deleteGrid();
  createGrid(resolution);
});

function createGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    let div = document.createElement("div");
    div.style.cssText = "border:1px solid #eee;";
    div.style.width = 320 / size + "px";
    div.style.height = 320 / size + "px";
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    });
  }
}

function deleteGrid() {
  const grid = document.querySelectorAll(".container div");
  grid.forEach((element) => {
    element.remove();
  });
}
