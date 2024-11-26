const container = document.querySelector(".container");

let resolution = 40;

function createGrid(size) {
  for (let i = 1; i <= resolution * resolution; i++) {
    let div = document.createElement("div");
    div.style.cssText = "border:1px solid #eee;";
    div.style.width = 320 / resolution + "px";
    div.style.height = 320 / resolution + "px";
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

createGrid(resolution);
//deleteGrid();
