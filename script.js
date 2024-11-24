const container = document.querySelector(".container");

for (let i = 1; i <= 16 * 16; i++) {
  let div = document.createElement("div");
  div.style.cssText = "width:20px;height:20px;border:1px solid #eee;";
  container.appendChild(div);
}
